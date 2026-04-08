---
layout: subcategory
title: 19世紀哲學
permalink: /philosophy/nineteenth_century/
subcategory: nineteenth_century
description: 관념론, 실존주의, 실용주의의 태동
period: 19세기
color: "#8b5cf6"
type: modern
philosophers:
  - 헤겔
  - 니체
  - 키에르케고르
  - 마르크스
---

{% include subcategory-header.html
  title=page.title
  description=page.description
  color=page.color
  type=page.type %}

{% include subcategory-post-list.html
  subcategory=page.subcategory
  category_label=page.title
  philosophers=page.philosophers %}
