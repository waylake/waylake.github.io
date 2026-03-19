---
layout: post
title: "Git Flow 브랜치 전략 정리"
date: 2026-03-19 00:00:00 +0900
categories: development
author: waylake
tags: [git, gitflow, branch, workflow, devops]
lang: ko
---

## 브랜치 유형

| 브랜치 | 역할 |
|--------|------|
| **main** | 프로덕션 코드 (항상 배포 가능) |
| **release/** | 다음 버전 개발 통합 브랜치 |
| **feature/** | 개별 기능 개발 |
| **hotfix/** | 프로덕션 긴급 버그 수정 |

## 분기 기준

- `release/x.x.x` → `main`에서 분기
- `feature/*` → `release/x.x.x`에서 분기
- `hotfix/x.x.x` → `main`에서 분기

## 흐름

**버전 개발**: `main` → `release/` → `main` (출시)

**기능 추가**: `release/` → `feature/` → `release/` (병합)

**긴급 수정**: `main` → `hotfix/` → `main` + `release/` (양쪽 병합)

## 예시

```bash
# 새 버전 개발 시작
git checkout main
git checkout -b release/1.1.0

# 기능 개발
git checkout -b feature/login release/1.1.0
# ... 작업 후 ...
git checkout release/1.1.0
git merge --no-ff feature/login
git branch -d feature/login

# 버전 출시
git checkout main
git merge --no-ff release/1.1.0
git tag -a 1.1.0 -m "Version 1.1.0"
git branch -d release/1.1.0
```

## 핵심 규칙

1. main은 항상 배포 가능 상태
2. release/는 main에서 분기
3. feature는 release에서 분기
4. hotfix는 main에서 분기
5. 병합 완료 후 브랜치 삭제
6. 버전 태그는 main에 붙임

## 버전 번호

```
major.minor.patch
  │      │     │
  │      │     └── 패치: 버그 수정
  │      └────── 마이너: 새 기능 (하위 호환)
  └───────────── 메이저: 대규모 변경 (비호환)
```

## 요약

| 상황 | 분기점 | 병합점 |
|------|--------|--------|
| 새 버전 | `main` | `main` |
| 기능 추가 | `release/` | `release/` |
| 긴급 수정 | `main` | `main` + `release/` |
