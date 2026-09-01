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

// Back Button
(function () {
  var backButton = document.getElementById("post-back");
  if (!backButton) return;

  backButton.addEventListener("click", function (event) {
    if (window.history.length > 1) {
      event.preventDefault();
      window.history.back();
    }
  });
})();

// Lazy Images
(function () {
  function initLazyImages() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
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

    document.querySelectorAll("[data-lazy-image]").forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLazyImages);
  } else {
    initLazyImages();
  }
})();

// Post Table of Contents (Mounted in Sidebar when available)
(function () {
  function slugify(text) {
    return text
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  function initToc() {
    var postBody = document.querySelector(".post-body");
    var targetContainer = document.querySelector(".post-sidebar-sticky") || document.querySelector(".post-content");
    if (!postBody || !targetContainer) return;

    var headings = postBody.querySelectorAll("h2, h3");
    if (headings.length < 2) return;

    var usedIds = {};
    var list = document.createElement("ul");

    headings.forEach(function (heading) {
      var id = heading.id;
      if (!id) {
        var base = slugify(heading.textContent) || "section";
        id = base;
        var i = 1;
        while (usedIds[id]) {
          id = base + "-" + i++;
        }
        heading.id = id;
      }
      usedIds[id] = true;

      var item = document.createElement("li");
      item.className = "toc-" + heading.tagName.toLowerCase();

      var link = document.createElement("a");
      link.href = "#" + id;
      link.textContent = heading.textContent;
      link.dataset.tocTarget = id;

      link.addEventListener("click", function (e) {
        e.preventDefault();
        var targetId = this.dataset.tocTarget;
        var targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          if (history.pushState) {
            history.pushState(null, null, "#" + targetId);
          } else {
            location.hash = "#" + targetId;
          }
        }
      });

      item.appendChild(link);
      list.appendChild(item);
    });

    var nav = document.createElement("nav");
    nav.className = "post-toc";
    nav.setAttribute("aria-label", "목차");

    var label = document.createElement("p");
    label.className = "post-toc-label";
    label.textContent = "목차";

    nav.appendChild(label);
    nav.appendChild(list);
    targetContainer.appendChild(nav);

    var links = nav.querySelectorAll("a");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var active = nav.querySelector(
            'a[data-toc-target="' + entry.target.id + '"]',
          );
          if (!active) return;
          links.forEach(function (l) {
            l.classList.remove("active");
          });
          active.classList.add("active");
          active.scrollIntoView({ block: "nearest", behavior: "smooth" });
        });
      },
      { rootMargin: "-10% 0px -70% 0px" },
    );

    headings.forEach(function (heading) {
      observer.observe(heading);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initToc);
  } else {
    initToc();
  }
})();

// Reading Progress Bar
(function () {
  function initReadingProgress() {
    var fill = document.getElementById("reading-progress-fill");
    if (!fill) return;

    var ticking = false;

    function updateProgress() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var progress = 0;
      if (max > 0) {
        progress = Math.min(Math.max((window.scrollY / max) * 100, 0), 100);
      } else {
        progress = 100;
      }
      fill.style.width = progress + "%";
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateProgress();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReadingProgress);
  } else {
    initReadingProgress();
  }
})();
