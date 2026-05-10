// Theme Manager
(function () {
  function getCurrentTheme() {
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  if (typeof window !== "undefined") {
    window.themeManager = { getCurrentTheme, setTheme };
    setTheme(getCurrentTheme());
  }
})();

// Theme Toggle Button
(function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeManager = window.themeManager;

  if (themeManager && themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current = themeManager.getCurrentTheme();
      const newTheme = current === "dark" ? "light" : "dark";
      themeManager.setTheme(newTheme);
    });
  }
})();

// Lazy Images
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
