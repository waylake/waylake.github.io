# ADR 2026-05-10: Code Line Optimization Plan (Design Preservation)

## Status

Accepted — 구현 완료 (Phases 1–9, PR #4)

## Context

The goal is to reduce the total line count of the codebase while strictly maintaining the existing design and layout. Previous optimizations have already achieved a significant reduction (76%), but further refinements are needed to ensure maintainability and efficiency.

---

## Full Project Analysis

### Line Count Summary (1,394 total lines)

| Category       | Files       | Lines | Notes                                           |
| :------------- | :---------- | :---- | :---------------------------------------------- |
| **CSS**        | `theme.css` | 713   | Single centralized file                         |
| **Includes**   | 11 files    | 450   | Contains embedded `<style>` & `<script>` blocks |
| **Layouts**    | 5 files     | 51    | Base shell + wrappers                           |
| **Pages**      | 6 files     | 71    | Category pages, index, posts                    |
| **Philosophy** | 9 files     | ~200+ | Subcategory pages (front matter heavy)          |
| **Posts**      | 4 files     | ~80   | Content files (not optimization target)         |

---

## Identified Optimization Opportunities

### 🔴 HIGH IMPACT (Design-safe, significant line reduction)

#### 1. Extract Inline `<style>` Blocks → `theme.css`

Three include files contain embedded CSS that duplicates the pattern of `theme.css`:

| File                                | CSS Lines | Classes to Extract                                         |
| :---------------------------------- | :-------- | :--------------------------------------------------------- |
| `_includes/index-template.html`     | ~94 lines | `.zen-hero-*`, `.zen-category-*`, `.zen-sumi-*`            |
| `_includes/category-template.html`  | ~51 lines | `.zen-category-hero-*`, `.zen-post-list`, `.zen-post-item` |
| `_includes/subcategory-header.html` | ~63 lines | `.zen-subcategory-*`, `.zen-keywords`, `.zen-philosophers` |

**Expected reduction:** ~208 HTML lines → appended to `theme.css` (net gain in CSS, but removes HTML bloat)

#### 2. Consolidate Inline `<script>` Blocks → `assets/js/main.js`

Three files embed JavaScript directly in HTML:

| File                          | JS Lines  | Purpose                           |
| :---------------------------- | :-------- | :-------------------------------- |
| `_includes/theme-init.html`   | ~18 lines | Theme detection & management      |
| `_includes/theme-toggle.html` | ~12 lines | Toggle button click handler       |
| `_includes/image-lazy.js`     | ~29 lines | IntersectionObserver lazy loading |

**Expected reduction:** ~59 HTML lines → single `assets/js/main.js` file

#### 3. Remove Dead/Empty Files

| File                        | Lines | Action                                  |
| :-------------------------- | :---- | :-------------------------------------- |
| `_includes/post-style.html` | 0     | **Delete** — empty file, never included |

### 🟡 MEDIUM IMPACT (Structural improvements)

#### 4. Simplify Layout Chain

Current chain: `page/home/post` → `base.html` (via `default.html` for some)

- `_layouts/default.html` is a **pass-through wrapper** (only `{{ content }}`)
- Pages like `posts.md` and `404.html` use `layout: default` which then calls `base.html`
- This adds an unnecessary indirection layer

**Action:** Change pages using `layout: default` to use `layout: base` directly. Then evaluate if `default.html` can be removed entirely.

#### 5. Fix Semantic HTML Issue in `header.html`

```html
<header class="site-header">
  <meta http-equiv="Cache-Control" content="public, max-age=31536000" />
</header>
```

`<meta>` tag inside `<header>` is semantically invalid — should be in `<head>`. Move to `head.html` or remove (browser caching is handled by server/GitHub Pages).

#### 6. Extract Hardcoded Data → `_data/` Files

`index-template.html` hardcodes:

- **3 category links** (cognition, psychology, philosophy) — could be driven by `_data/categories.yml`
- **4 Sumi items** (静, 間, 素, 空) — could be driven by `_data/sumi.yml`

This reduces HTML lines and makes future additions zero-code.

### 🟢 LOW IMPACT (Cleanup & consistency)

#### 7. Empty Footer Content

```html
<footer class="site-footer">
  <div class="footer-content"></div>
</footer>
```

`footer.html` has an empty `<div>` with whitespace. Can be simplified to a single line.

#### 8. Duplicate Data: `_data/philosophy_structure.yml` vs Front Matter

The philosophy subcategory pages (e.g., `philosophy/metaphysics.md`) have front matter that **duplicates** data already in `_data/philosophy_structure.yml`:

- `title`, `description`, `color`, `keywords`, `philosophers`

**Future opportunity:** Generate subcategory pages programmatically from the YAML data file (would require Jekyll collection generation).

#### 9. CSS Consolidation in `theme.css` (713 lines)

The main CSS file has several areas for consolidation:

- Multiple `[data-theme="dark"]` blocks scattered throughout → can be merged into one section
- `.zen-post-item` styles exist in both `category-template.html` inline CSS AND are used by `subcategory-post-list.html` — potential duplication risk

---

## Implementation Plan (Phased)

| Phase       | Task                                      | Files Affected                  | Expected Line Reduction      | Risk                        |
| :---------- | :---------------------------------------- | :------------------------------ | :--------------------------- | :-------------------------- |
| **Phase 1** | Extract inline `<style>` → `theme.css`    | 3 includes + theme.css          | ~208 lines removed from HTML | Low (CSS classes preserved) |
| **Phase 2** | Consolidate inline `<script>` → `main.js` | 3 includes + new JS file        | ~59 lines removed from HTML  | Low (JS behavior preserved) |
| **Phase 3** | Remove dead files                         | `post-style.html`               | 0 lines (cleanup)            | None                        |
| **Phase 4** | Simplify layout chain                     | `default.html`, pages           | ~4 lines + cleaner structure | Low (verify page rendering) |
| **Phase 5** | Fix semantic HTML                         | `header.html`, `head.html`      | ~1 line                      | None                        |
| **Phase 6** | Extract hardcoded data → `_data/`         | `index-template.html`, new YAML | ~20 lines in template        | Low (data-driven)           |

### Total Expected Reduction: ~290+ lines from HTML files

---

## Risk Mitigation

1. **Visual Regression Testing**: Before each phase, document current rendered output
2. **DOM Comparison**: Verify generated HTML structure is identical after CSS/JS extraction
3. **Incremental Commits**: Each phase committed separately for easy rollback
4. **CSS Class Preservation**: All existing class names remain unchanged — only location moves
5. **JavaScript Behavior**: Consolidated JS must maintain exact same DOM interactions

## Decision

Proceed with Phases 1–6 in order. Phase 1 (CSS extraction) provides the largest immediate benefit with the lowest risk.
