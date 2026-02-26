# Waylake's Thinking - Jekyll 블로그

GitHub 협업 전략 및 개발 관련 생각들을 공유하는 Jekyll 기반 블로그입니다.

## 🚀 시작하기

### 전제 조건
- Ruby 4.0+
- Bundler
- Jekyll

### 설치

```bash
# 의존성 설치
bundle install

# 로컬 서버 실행
bundle exec jekyll serve

# http://localhost:4000 에서 사이트 확인
```

## 📝 글 작성하기

새로운 글을 작성하려면 `_posts` 디렉토리에 Markdown 파일을 생성하세요:

```bash
# 포맷: YYYY-MM-DD-제목.md
touch _posts/2026-02-26-새로운-글.md
```

글 상단에 다음과 같은 Front Matter를 추가하세요:

```markdown
---
layout: post
title:  "글 제목"
date:   2026-02-26 00:00:00 +0900
categories: 카테고리
author: waylake
tags: [태그1, 태그2]
lang: ko
---

# 글 내용
```

## 🌐 배포하기

GitHub Pages에 배포하려면:

```bash
# 빌드 및 배포
./deploy.sh "커밋 메시지"

# 또는 수동으로:
bundle exec jekyll build
git add .
git commit -m "업데이트 메시지"
git push origin main
```

배포 후 몇 분 후 [https://waylake.github.io](https://waylake.github.io)에서 확인할 수 있습니다.

## 📂 구조

```
waylake.github.io/
├── _config.yml          # 사이트 설정
├── _posts/              # 블로그 글
│   └── 2026-02-26-...   # Markdown 글
├── _site/               # 빌드된 정적 파일 (자동 생성)
├── assets/              # CSS, JS, 이미지
├── index.md             # 메인 페이지
├── Gemfile              # Ruby 의존성
├── deploy.sh            # 배포 스크립트
└── README.md            # 이 파일
```

## 🔧 설정

- `_config.yml`: 사이트 제목, 설명, 테마 등 설정
- `Gemfile`: Ruby 의존성 관리
- `assets/`: 정적 파일 (CSS, JS, 이미지)

## 🎨 테마

Minima 테마를 사용하며, 다음과 같이 커스터마이즈할 수 있습니다:

```yaml
# _config.yml
minima:
  skin: dark  # dark 또는 light
  date_format: "%Y년 %m월 %d일"
  social_links:
    - { platform: github, user_url: "https://github.com/waylake" }
```

## 🔄 업데이트

```bash
# Jekyll 및 플러그인 업데이트
bundle update

# 테마 업데이트
bundle update minima
```

## 🐛 문제 해결

### Jekyll 빌드 오류

```bash
# 의존성 재설치
rm -rf Gemfile.lock
bundle install
```

### Ruby 버전 문제

```bash
# Ruby 버전 확인
ruby -v

# 필요한 경우 Ruby 업그레이드
brew upgrade ruby
```

## 📚 참고 자료

- [Jekyll 문서](https://jekyllrb.com/docs/)
- [Minima 테마](https://github.com/jekyll/minima)
- [GitHub Pages](https://pages.github.com/)

---

© 2026 Waylake. All rights reserved.