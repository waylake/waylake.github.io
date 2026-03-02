---
layout: page
title: Cognitive Science
permalink: /cognition/
---

<div class="post-list">
{% for post in site.categories.cognition %}
<article class="post-item">
  <h2 class="post-item-title">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>
  <div class="post-item-meta">
    <span class="post-item-date">{{ post.date | date: "%Y-%m-%d" }}</span>
  </div>
  <div class="post-item-excerpt">
    {{ post.excerpt }}
  </div>
</article>
{% endfor %}
</div>

<style>
  .post-list {
    margin-top: 2rem;
  }

  .post-item {
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    margin-bottom: 1.5rem;
    transition: box-shadow 0.2s ease;
  }

  .post-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .post-item-title {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }

  .post-item-title a {
    color: var(--text);
    text-decoration: none;
  }

  .post-item-title a:hover {
    text-decoration: underline;
  }

  .post-item-meta {
    font-size: 0.85rem;
    color: var(--muted);
    margin-bottom: 0.75rem;
  }

  .post-item-excerpt {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.5;
  }
</style>
