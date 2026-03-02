---
layout: home
title: Way Log
---

<div class="category-grid">
  <div class="category-card">
    <h2>Cognitive Science</h2>
    <a href="/cognition" class="category-link">View more →</a>
  </div>

  <div class="category-card">
    <h2>Psychology</h2>
    <a href="/psychology" class="category-link">View more →</a>
  </div>

  <div class="category-card">
    <h2>Philosophy</h2>
    <a href="/philosophy" class="category-link">View more →</a>
  </div>
</div>

## Recent Posts

<div class="post-grid">
{% for post in site.posts limit:3 %}
<article class="post-item">
  <h2 class="post-item-title">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>
  <div class="post-item-meta">
    <span class="post-item-date">{{ post.date | date: "%Y-%m-%d" }}</span>
  </div>
</article>
{% endfor %}
</div>

<a href="/posts" class="view-all-posts">View all posts →</a>
