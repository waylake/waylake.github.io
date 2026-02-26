---
layout: page
title: Waylake's Thinking
---

# Waylake의 생각 정리

GitHub 협업 전략, 개발 워크플로우 최적화, 그리고 기술 관련 생각들을 공유하는 공간입니다.

## 최근 글

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y년 %m월 %d일" }}
{% endfor %}

## 카테고리

- GitHub 협업
- 개발 워크플로우
- gh CLI 사용법
- 팀 개발 프로세스

## 소개

이 블로그는 GitHub을 활용한 효율적인 팀 협업 방법과 개발 프로세스 개선에 대한 생각과 경험을 공유하기 위해 만들어졌습니다. 실제 프로젝트에서 발생하는 문제들과 그 해결 전략들을 기록하고 있습니다.

[모든 글 보기](/posts/)