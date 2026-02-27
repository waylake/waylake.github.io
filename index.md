---
layout: home
title: Waylake's Thinking
---

# 최근 글

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

<style>
  .post-item {
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border);
  }

  .post-item:first-child {
    border-top: 1px solid var(--border);
  }

  .post-item-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0 0 0.5rem 0;
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
</style>
