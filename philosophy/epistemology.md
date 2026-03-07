---
layout: subcategory
title: 認識論
permalink: /philosophy/epistemology/
subcategory: epistemology
description: 지식의 기원과 한계, 진리의 기준, 경험과 이성의 역할
color: "#8b5cf6"
type: core_field
keywords:
  - 지식
  - 진리
  - 경험
  - 이성
  - 회의주의
  - 확실성
---

{% include subcategory-header.html
  title=page.title
  description=page.description
  color=page.color
  type=page.type
  keywords=page.keywords %}

<div class="section-header">
  <span class="section-label">認識論 포스트</span>
</div>

<div class="post-list">
{% assign subcategory_posts = site.posts | where: "philosophy_subcategory", "epistemology" %}
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
