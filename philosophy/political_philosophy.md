---
layout: subcategory
title: 政治哲學
permalink: /philosophy/political_philosophy/
subcategory: political_philosophy
description: 정의와 자유, 권력의 정당성, 민주주의와 계약론
color: "#f59e0b"
type: core_field
keywords:
  - 정의
  - 자유
  - 권력
  - 민주주의
  - 계약론
  - 국가
---

{% include subcategory-header.html
  title=page.title
  description=page.description
  color=page.color
  type=page.type
  keywords=page.keywords %}

<div class="section-header">
  <span class="section-label">政治哲學 포스트</span>
</div>

<div class="post-list">
{% assign subcategory_posts = site.posts | where: "philosophy_subcategory", "political_philosophy" %}
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
