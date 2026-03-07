---
layout: subcategory
title: 經驗論
permalink: /philosophy/empiricism/
subcategory: empiricism
description: 경험을 통한 지식 획득, 록크에서 흄까지
period: 17-18세기
color: "#10b981"
type: modern
philosophers:
  - 록크
  - 버클리
  - 흄
---

{% include subcategory-header.html 
  title=page.title 
  description=page.description 
  color=page.color 
  type=page.type %}

<div class="philosophers-section">
  <h3 class="subsection-title">主要哲學者</h3>
  <div class="philosophers-list">
    {% for philosopher in page.philosophers %}
    <span class="philosopher-badge">{{ philosopher }}</span>
    {% endfor %}
  </div>
</div>

<div class="section-header">
  <span class="section-label">經驗論 포스트</span>
</div>

<div class="post-list">
{% assign subcategory_posts = site.posts | where: "philosophy_subcategory", "empiricism" %}
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
.philosophers-section {
  margin: 30px 0;
}

.subsection-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary, #111);
  margin-bottom: 15px;
}

.philosophers-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.philosopher-badge {
  background: var(--bg-secondary, #e5e7eb);
  color: var(--text-primary, #111);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
}

.no-posts {
  color: var(--text-secondary, #666);
  font-style: italic;
  padding: 20px 0;
}

[data-theme="dark"] .philosopher-badge {
  background: var(--bg-secondary, #374151);
  color: var(--text-primary, #f9fafb);
}
</style>
