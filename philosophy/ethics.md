---
layout: subcategory
title: 倫理學
permalink: /philosophy/ethics/
subcategory: ethics
description: 도덕의 본질과 기준, 선과 악, 도덕적 책임과 의무
color: "#ec4899"
type: core_field
keywords:
  - 도덕
  - 가치
  - 책임
  - 정의
  - 선과 악
  - 의무
---

{% include subcategory-header.html
  title=page.title
  description=page.description
  color=page.color
  type=page.type
  keywords=page.keywords %}

<div class="section-header">
  <span class="section-label">倫理學 포스트</span>
</div>

<div class="post-list">
{% assign subcategory_posts = site.posts | where: "philosophy_subcategory", "ethics" %}
{% for post in subcategory_posts %}
<a href="{{ post.url | relative_url }}" class="post-link">
  <span class="post-title">{{ post.title }}</span>
  <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
</a>
{% endfor %}
{% if subcategory_posts.size == 0 %}
<p class="no-posts">아직 관련 포스트가 없습니다.</p>
{% endif %}
</div>

<style>
.no-posts {
  color: var(--text-secondary, #666);
  font-style: italic;
  padding: 20px 0;
}
</style>
