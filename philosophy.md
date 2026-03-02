---
layout: page
title: 哲學
permalink: /philosophy/
---

<div class="category-hero">
  <img src="{{ "/assets/images/philosophy.png" | relative_url }}" alt="哲學" class="category-bg">
  <div class="category-title">哲學</div>
</div>

<div class="post-list">
{% for post in site.categories.philosophy %}
<a href="{{ post.url | relative_url }}" class="post-link">
  <span class="post-title">{{ post.title }}</span>
  <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
</a>
{% endfor %}
</div>

<style>
  .category-hero {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 200px;
    margin: 0 auto 2rem;
    border-radius: 4px;
    overflow: hidden;
  }

  .category-hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25));
    pointer-events: none;
  }

  [data-theme="dark"] .category-hero::after {
    background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2));
  }

  .category-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .category-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    color: #1a1a1a;
    text-shadow: 0 1px 3px rgba(255,255,255,0.4);
    z-index: 1;
  }

  [data-theme="dark"] .category-title {
    color: #f5f5f5;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }

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
