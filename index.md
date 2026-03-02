---
layout: home
title: Way Log
---

<div class="hero">
  <h1 class="hero-title">思惟を梳く空間</h1>
  <p class="hero-subtitle">認知科学・心理学・哲学の交叉点に於いて</p>
</div>

<div class="category-nav">
  <a href="/cognition" class="category-item">인지과학</a>
  <a href="/psychology" class="category-item">심리학</a>
  <a href="/philosophy" class="category-item">철학</a>
</div>

<div class="section-header">
  <h2 class="section-title">최근 글</h2>
  <a href="/posts" class="section-link">전체 보기</a>
</div>

<div class="post-list">
{% for post in site.posts limit:5 %}
<a href="{{ post.url | relative_url }}" class="post-link">
  <span class="post-title">{{ post.title }}</span>
  <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
</a>
{% endfor %}
</div>

<style>
  .hero {
    text-align: center;
    padding: 2rem 0 1.5rem;
  }

  .hero-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0 0 0.5rem 0;
    border: none;
    padding: 0;
  }

  .hero-subtitle {
    color: var(--muted);
    font-size: 0.85rem;
    font-weight: 300;
    margin: 0;
  }

  .category-nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin: 2rem 0 2.5rem;
  }

  .category-item {
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    text-decoration: none;
    color: var(--text);
    font-size: 0.8rem;
    transition: all 0.2s;
  }

  .category-item:hover {
    background: var(--text);
    color: var(--bg);
    border-color: var(--text);
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
  }

  .section-title {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0;
    border: none;
    padding: 0;
  }

  .section-link {
    font-size: 0.8rem;
    color: var(--muted);
    text-decoration: none;
  }

  .section-link:hover {
    color: var(--text);
    text-decoration: underline;
  }

  .post-list {
    display: flex;
    flex-direction: column;
  }

  .post-link {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.5rem 0;
    text-decoration: none;
    color: var(--text);
    border-bottom: 1px solid var(--border);
  }

  .post-link:hover .post-title {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .post-title {
    font-size: 0.9rem;
    font-weight: 400;
  }

  .post-date {
    font-size: 0.75rem;
    color: var(--muted);
    font-weight: 300;
    white-space: nowrap;
    margin-left: 1rem;
  }
</style>
