---
layout: home
title: Way Log
---

<div class="hero">
  <h1 class="hero-title">思惟を梳く空間</h1>
  <p class="hero-subtitle">認知科學・心理學・哲學の交叉点に於いて</p>
</div>

<div class="category-nav">
  <a href="/cognition" class="category-item">認知科學</a>
  <a href="/psychology" class="category-item">心理學</a>
  <a href="/philosophy" class="category-item">哲學</a>
</div>

<div class="divider"></div>

<div class="section-header">
  <span class="section-label">近況</span>
</div>

<div class="post-list">
{% for post in site.posts limit:5 %}
<a href="{{ post.url | relative_url }}" class="post-link">
  <span class="post-title">{{ post.title }}</span>
  <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
</a>
{% endfor %}
</div>

<div class="more-link">
  <a href="/posts">すべて見る →</a>
</div>

<style>
  .hero {
    text-align: center;
    padding: 5rem 1rem 3rem;
    background-image: linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url("{{ "/assets/images/landing-bg.jpg" | relative_url }}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 4px;
    margin-bottom: 2rem;
  }

  [data-theme="dark"] .hero {
    background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("{{ "/assets/images/landing-bg.jpg" | relative_url }}");
  }

  .hero-title {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    margin: 0 0 0.75rem 0;
    border: none;
    padding: 0;
    color: #1a1a1a;
    text-shadow: 0 1px 3px rgba(255,255,255,0.4);
    opacity: 0;
    animation: fadeIn 1.5s ease forwards;
  }

  [data-theme="dark"] .hero-title {
    color: #f5f5f5;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }

  .hero-subtitle {
    color: rgba(50,50,50,0.85);
    font-size: 0.75rem;
    font-weight: 300;
    margin: 0;
    letter-spacing: 0.05em;
    text-shadow: 0 1px 3px rgba(255,255,255,0.3);
    opacity: 0;
    animation: fadeIn 1.5s ease 0.3s forwards;
  }

  [data-theme="dark"] .hero-subtitle {
    color: rgba(230,230,230,0.85);
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .category-nav {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 3rem 0;
    opacity: 0;
    animation: fadeIn 1.5s ease 0.6s forwards;
  }

  .category-item {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: var(--muted);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    transition: color 0.3s ease;
  }

  .category-item:hover {
    color: var(--text);
  }

  .divider {
    width: 40px;
    height: 1px;
    background: var(--border);
    margin: 2rem auto;
  }

  .section-header {
    margin: 3rem 0 1.5rem;
    text-align: center;
  }

  .section-label {
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .post-list {
    display: flex;
    flex-direction: column;
    gap: 0;
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
    font-size: 0.85rem;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }

  .post-date {
    font-size: 0.7rem;
    color: var(--muted);
    font-weight: 300;
    white-space: nowrap;
    margin-left: 1rem;
  }

  .more-link {
    text-align: center;
    margin-top: 2rem;
  }

  .more-link a {
    font-size: 0.75rem;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }

  .more-link a:hover {
    color: var(--text);
  }
</style>
