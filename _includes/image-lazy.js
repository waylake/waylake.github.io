<script>
(function() {
  function initLazyImages() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = document.createElement("img");
          img.src = entry.target.dataset.src;
          img.alt = entry.target.dataset.alt || "";
          img.className = entry.target.dataset.className || "category-bg";
          img.loading = "lazy";
          entry.target.prepend(img);
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('[data-lazy-image]').forEach(el => {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyImages);
  } else {
    initLazyImages();
  }
})();
</script>
