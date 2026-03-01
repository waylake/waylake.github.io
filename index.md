---
layout: home
title: Way Log
---

# 최근 글

<div class="post-grid">
{% for post in site.posts %}
<article class="post-item">
  <h2 class="post-item-title">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>
  <div class="post-item-meta">
    <span class="post-item-date">{{ post.date | date: "%Y년 %m월 %d일" }}</span>
  </div>
</article>
{% endfor %}
</div>

<style>
  .post-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .post-item {
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: box-shadow 0.2s ease;
  }

  .post-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .post-item-title {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 0 0.75rem 0;
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
  }

  @media (max-width: 768px) {
    .post-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
