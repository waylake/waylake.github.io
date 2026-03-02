---
layout: post
title:  "GitHub 협업 문제 정의 및 해결 전략 (gh CLI 버전)"
date:   2026-02-26 00:00:00 +0900
categories: psychology
author: waylake
tags: [github, collaboration, gh-cli, workflow, psychology]
lang: ko
---

## 문제 정의
현재 팀에서 발생하는 GitHub 협업 문제:
1. 각 개발자가 `dev` 브랜치에서 개별 브랜치를 파서 작업
2. 작업 완료 후 `dev` 브랜치로 직접 푸시
3. 다른 개발자의 변경 사항이 덮어쓰여지는 문제 발생
4. 코드 손실 및 충돌 발생 가능성

## 원인 분석
- 강제 푸시(`git push --force`) 사용 => 가능성은 낮지만 위험 요소
- 병합 전 최신 변경 사항 확인 부족
- 브랜치 보호 규칙 미적용
- Pull Request 프로세스 미사용

## 해결 전략

### 1. 즉시 적용 가능한 해결책

#### A. 현재 상황 복구
```bash
# 잃어버린 커밋 찾기
git reflog

# 특정 커밋으로 복구
git reset --hard <커밋해시>
```

#### B. 안전하게 최신 변경 사항 병합 (gh 버전)
```bash
# 최신 변경 사항 가져오기 및 병합
gh repo sync

# 또는 더 안전하게:
gh pr checkout <PR번호>  # 다른 사람의 PR 확인 시
```

### 2. 장기적인 시스템 개선

#### A. 브랜치 보호 규칙 설정 (gh CLI)
```bash
# 브랜치 보호 규칙 적용
gh api repos/{owner}/{repo}/branches/dev/protection \
  -f '{
    "required_pull_request_reviews": {
      "required_approving_review_count": 1
    },
    "enforce_admins": true,
    "allow_force_pushes": false
  }'
```

#### B. 작업 프로세스 표준화 (gh 버전)
```bash
# 1. 새로운 기능 브랜치 생성
gh repo clone owner/repo
cd repo
gh checkout -b feature/my-feature

# 2. 작업 완료 후 PR 생성
gh pr create --base dev --head feature/my-feature \
  --title "새로운 기능 추가" \
  --body "상세 설명" \
  --reviewer team-member1,team-member2

# 3. 리뷰 후 병합
gh pr merge <PR번호> --merge

# 4. 로컬 브랜치 정리
gh checkout dev
git branch -d feature/my-feature
```

#### C. 팀 규칙 문서화
- `CONTRIBUTING.md` 파일 생성
- 커밋 메시지 규칙 정의
- 브랜치 명명 규칙: `feature/`, `fix/`, `docs/`
- 코드 리뷰 프로세스 정의

## 예방 조치 (gh 버전)

1. **일일 동기화 습관**: 
   ```bash
   gh repo sync  # fetch + merge 자동화
   ```
2. **작은 단위 커밋**: 자주 커밋하여 충돌 범위 최소화
3. **사전 커뮤니케이션**: 
   ```bash
   gh issue create --title "큰 변경 사항 사전 공유"
   ```
4. **자동화 도구**: GitHub Actions로 테스트 및 빌드 자동화

## 모니터링 (gh 버전)

```bash
# 열려있는 PR 목록 확인
gh pr list --state open --base dev

# 리뷰 대기 중인 PR 확인
gh pr list --search "review-requested:@me"

# 병합된 PR 통계
gh pr list --state merged --limit 10
```

## 참고 자료

- [GitHub CLI 문서](https://cli.github.com/manual/)
- [gh pr 명령어](https://cli.github.com/manual/gh_pr)
- [브랜치 보호 API](https://docs.github.com/en/rest/branches/branch-protection)

