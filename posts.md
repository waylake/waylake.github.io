---
layout: default
title: All Posts
permalink: /posts/
---

# All Posts

{% for post in site.posts %}
<article class="post-summary">
  <h2 class="post-summary-title">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>

  <div class="post-summary-meta">
    <span class="post-summary-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    {% if post.author %}
      <span class="post-summary-author">• {{ post.author }}</span>
    {% endif %}
  </div>
</article>
{% endfor %}

<style>
  .post-summary {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border);
  }

  .post-summary:last-child {
    border-bottom: none;
  }

  .post-summary-title {
    font-size: 1.25rem;
    margin: 0 0 0.5rem 0;
    font-weight: 500;
  }

  .post-summary-title a {
    color: var(--text);
    text-decoration: none;
  }

  .post-summary-title a:hover {
    text-decoration: underline;
  }

  .post-summary-meta {
    font-size: 0.85rem;
    color: var(--muted);
  }

  .post-summary-meta span {
    margin-right: 0.5rem;
  }
</style>
