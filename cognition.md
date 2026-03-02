---
layout: page
title: Cognitive Science
permalink: /cognition/
---

<div class="post-list">
{% for post in site.categories.cognition %}
<a href="{{ post.url | relative_url }}" class="post-link">
  <span class="post-title">{{ post.title }}</span>
  <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
</a>
{% endfor %}
</div>

<style>
  .post-list {
    margin-top: 1.5rem;
  }

  .post-link {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.4rem 0;
    text-decoration: none;
    color: var(--text);
    border-bottom: 1px solid var(--border);
  }

  .post-link:hover .post-title {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .post-title {
    font-size: 0.95rem;
    font-weight: 400;
  }

  .post-date {
    font-size: 0.8rem;
    color: var(--muted);
    font-weight: 300;
    white-space: nowrap;
    margin-left: 1rem;
  }
</style>
