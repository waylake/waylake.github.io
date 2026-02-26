---
layout: page
title: 모든 글
permalink: /posts/
---

# 모든 글

블로그에 게시된 모든 글을 날짜 순으로 볼 수 있습니다.

## 최근 글

{% for post in site.posts %}
<article class="post-summary">
  <h2 class="post-summary-title">
    <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
  </h2>
  
  <div class="post-summary-meta">
    <span class="post-summary-date">
      {{ post.date | date: "%Y년 %m월 %d일" }}
    </span>
    
    {% if post.author %}
      <span class="post-summary-author">
        • {{ post.author }}
      </span>
    {% endif %}
    
    {% if post.categories %}
      <span class="post-summary-categories">
        • 
        {% for category in post.categories limit:2 %}
          <a href="/categories/{{ category | slugify }}">{{ category }}</a>
          {% unless forloop.last %}, {% endunless %}
        {% endfor %}
        {% if post.categories.size > 2 %}
          외 {{ post.categories.size | minus:2 }}개
        {% endif %}
      </span>
    {% endif %}
  </div>
  
  <div class="post-summary-excerpt">
    {{ post.excerpt | strip_html | truncatewords: 50 }}
  </div>
  
  {% if post.tags %}
    <div class="post-summary-tags">
      {% for tag in post.tags limit:3 %}
        <a href="/tags/{{ tag | slugify }}" class="tag">#{{ tag }}</a>
      {% endfor %}
      {% if post.tags.size > 3 %}
        <span class="tag">+{{ post.tags.size | minus:3 }} 더보기</span>
      {% endif %}
    </div>
  {% endif %}
</article>
{% endfor %}

## 글 찾기

<div class="post-search">
  <input type="text" id="post-search-input" placeholder="글 제목으로 검색..." class="post-search-input">
  <button id="post-search-button" class="post-search-button">검색</button>
</div>

<div id="post-search-results" class="post-search-results" style="display: none;">
  <h3>검색 결과</h3>
  <div id="search-results-container"></div>
</div>

## 카테고리별 보기

<div class="categories-list">
  {% assign sorted_categories = site.categories | sort %}
  {% for category in sorted_categories %}
    <div class="category-item">
      <h3 class="category-name">
        <a href="/categories/{{ category[0] | slugify }}">{{ category[0] }}</a>
        <span class="category-count">({{ category[1].size }})</span>
      </h3>
    </div>
  {% endfor %}
</div>

## 태그별 보기

<div class="tags-list">
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    <a href="/tags/{{ tag[0] | slugify }}" class="tag">
      #{{ tag[0] }} ({{ tag[1].size }})
    </a>
  {% endfor %}
</div>

<style>
  .post-summary {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s;
  }
  
  .post-summary:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  
  .post-summary-title {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
  }
  
  .post-summary-title a {
    color: var(--heading-color);
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .post-summary-title a:hover {
    color: var(--primary-color);
  }
  
  .post-summary-meta {
    color: var(--secondary-color);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .post-summary-excerpt {
    color: var(--text-color);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .post-summary-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tag {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    background: var(--code-bg);
    color: var(--code-text);
    border-radius: 1rem;
    font-size: 0.8rem;
    text-decoration: none;
    transition: all 0.3s;
  }
  
  .tag:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
  
  .post-search {
    display: flex;
    gap: 0.5rem;
    margin: 3rem 0;
    max-width: 500px;
  }
  
  .post-search-input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1rem;
    transition: all 0.3s;
  }
  
  .post-search-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(64, 120, 192, 0.2);
  }
  
  .post-search-button {
    padding: 0.8rem 1.5rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s;
  }
  
  .post-search-button:hover {
    background: var(--link-hover);
    transform: translateY(-1px);
  }
  
  .post-search-results {
    margin: 2rem 0;
    padding: 1.5rem;
    background: var(--code-bg);
    border-radius: 6px;
  }
  
  .categories-list {
    margin: 3rem 0;
  }
  
  .category-item {
    margin-bottom: 1rem;
  }
  
  .category-name {
    font-size: 1.2rem;
    margin: 0;
  }
  
  .category-name a {
    color: var(--heading-color);
    text-decoration: none;
  }
  
  .category-count {
    color: var(--secondary-color);
    font-size: 0.9rem;
  }
  
  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 2rem 0;
  }
  
  @media (max-width: 768px) {
    .post-search {
      flex-direction: column;
    }
    
    .post-summary-title {
      font-size: 1.3rem;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('post-search-input');
    const searchButton = document.getElementById('post-search-button');
    const searchResults = document.getElementById('post-search-results');
    const resultsContainer = document.getElementById('search-results-container');
    
    // Search functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
    
    function performSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      
      if (searchTerm === '') {
        searchResults.style.display = 'none';
        return;
      }
      
      // Get all posts
      const posts = document.querySelectorAll('.post-summary');
      let results = [];
      
      posts.forEach(post => {
        const title = post.querySelector('.post-summary-title a').textContent.toLowerCase();
        const excerpt = post.querySelector('.post-summary-excerpt').textContent.toLowerCase();
        const tags = post.querySelectorAll('.tag');
        
        // Check if search term matches
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
          results.push(post);
        } else {
          // Check tags
          let tagMatch = false;
          tags.forEach(tag => {
            if (tag.textContent.toLowerCase().includes(searchTerm)) {
              tagMatch = true;
            }
          });
          
          if (tagMatch) {
            results.push(post);
          }
        }
      });
      
      // Display results
      if (results.length > 0) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
          const clone = result.cloneNode(true);
          resultsContainer.appendChild(clone);
        });
        searchResults.style.display = 'block';
      } else {
        resultsContainer.innerHTML = '<p>검색 결과가 없습니다.</p>';
        searchResults.style.display = 'block';
      }
    }
  });
</script>