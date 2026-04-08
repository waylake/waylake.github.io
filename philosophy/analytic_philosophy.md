---
layout: subcategory
title: 分析哲學
permalink: /philosophy/analytic_philosophy/
subcategory: analytic_philosophy
description: 언어 분석과 논리, 과학철학의 전통
period: 20세기~
color: "#06b6d4"
type: contemporary
philosophers:
  - 러셀
  - 비트겐슈타인
  - 카르납
  - 퀘이인
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
