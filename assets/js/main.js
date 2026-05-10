// Theme Manager API (for toggle button)
(function () {
  function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme");
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  if (typeof window !== "undefined") {
    window.themeManager = { getCurrentTheme, setTheme };
  }
})();

// Theme Toggle Button
(function () {
  var themeToggle = document.getElementById("theme-toggle");
  var themeManager = window.themeManager;

  if (themeManager && themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = themeManager.getCurrentTheme();
      var newTheme = current === "dark" ? "light" : "dark";
      themeManager.setTheme(newTheme);
    });
  }
})();

// Lazy Images
(function() {
  function initLazyImages() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = document.createElement("img");
          img.src = entry.target.dataset.src;
          img.alt = entry.target.dataset.alt || "";
          img.className = entry.target.dataset.className || "category-bg";
          img.loading = "lazy";
          entry.target.prepend(img);
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('[data-lazy-image]').forEach(function(el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyImages);
  } else {
    initLazyImages();
  }
})();
