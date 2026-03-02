---
layout: page
title: 哲學
permalink: /philosophy/
---

<div class="post-list">
{% for post in site.categories.philosophy %}
<a href="{{ post.url | relative_url }}" class="post-link">
  <span class="post-title">{{ post.title }}</span>
  <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
</a>
{% endfor %}
</div>

<style>
  .post-list {
    margin-top: 2rem;
  }

  .post-link {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 0;
    text-decoration: none;
    color: var(--text);
    border-bottom: 1px solid var(--border);
    transition: border-color 0.3s ease;
  }

  .post-link:hover {
    border-color: var(--muted);
  }

  .post-link:first-child {
    border-top: 1px solid var(--border);
  }

  .post-title {
    font-size: 0.9rem;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }

  .post-date {
    font-size: 0.75rem;
    color: var(--muted);
    font-weight: 300;
    white-space: nowrap;
    margin-left: 1rem;
  }
</style>
