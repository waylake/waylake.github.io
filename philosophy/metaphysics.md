---
layout: subcategory
title: 形而上學
permalink: /philosophy/metaphysics/
subcategory: metaphysics
description: 존재와 실재의 본질, 시간과 공간, 자유의지와 인과율에 대한 탐구
color: "#6366f1"
type: core_field
keywords:
  - 존재
  - 실재
  - 시간
  - 공간
  - 자유의지
  - 인과율
---

{% include subcategory-header.html
  title=page.title
  description=page.description
  color=page.color
  type=page.type
  keywords=page.keywords %}

<div class="section-header">
  <span class="section-label">形而上學 포스트</span>
</div>

<div class="post-list">
{% assign subcategory_posts = site.posts | where: "philosophy_subcategory", "metaphysics" %}
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
