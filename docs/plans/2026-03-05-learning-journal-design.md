# Learning Journal Blog — Design Document

**Date:** 2026-03-05
**Project:** Scrimba Responsive Design Module — Solo Project
**Stack:** Vanilla HTML, CSS, JavaScript (no build tools)

---

## Overview

A personal learning journal / blog with 3 pages, built mobile-first using vanilla HTML/CSS/JS.
Posts are driven by a JS data array (with a stretch goal to migrate to `fetch()` from JSON).
The visual design is minimal and monochromatic, following the provided Figma spec.

---

## File Structure

```
scrimba-learning-journal/
├── index.html
├── post.html
├── about.html
├── css/
│   ├── style.css       ← Global styles, CSS variables, reset
│   ├── nav.css         ← Header/nav component styles
│   ├── footer.css      ← Footer component styles
│   └── post-card.css   ← Blog post card component styles
├── js/
│   ├── data.js         ← Blog post objects array (source of truth)
│   ├── main.js         ← Home: renders post cards from data
│   ├── post.js         ← Post page: reads URL param, renders full post
│   └── about.js        ← About page: interactive behavior
├── assets/
│   └── images/
├── docs/
│   └── plans/
└── figma-design/
```

---

## Color Palette (from Figma SVG)

| Variable             | Value     | Usage                    |
|----------------------|-----------|--------------------------|
| `--bg`               | `#FAFAFA` | Page background          |
| `--bg-dark`          | `#202020` | Footer background        |
| `--text-primary`     | `#141414` | Headings, body text      |
| `--text-secondary`   | `#505050` | Meta, captions           |
| `--border`           | `#D7D7D7` | Card borders, dividers   |
| `--border-light`     | `#ECECEC` | Subtle separators        |
| `--font-sans`        | `'Inter', system-ui, sans-serif` | All text |
| `--radius`           | `8px`     | Card border radius       |
| `--gap`              | `1.5rem`  | Grid and flex gaps       |

---

## Pages & Components

### Home (`index.html`)
- `<header>` — logo/site name left, nav links right
- Hero section — full-width image, post preview card overlaid bottom-left
- Post grid — responsive card grid (thumbnail, category tag, title, excerpt, author + date)
- `<footer>` — dark background, site name, copyright

### Post (`post.html`)
- Same `<header>` and `<footer>`
- Full-width hero image
- Article body — title, author/date meta, paragraphs
- "More posts" section — 2–3 related cards from `data.js`

### About (`about.html`)
- Same `<header>` and `<footer>`
- Profile section — avatar, name, bio
- Skills/interests list or grid
- Link back to posts

---

## Data Model (`data.js`)

```js
{
  slug: "my-first-post",
  title: "What I Learned About CSS Grid",
  category: "CSS",
  date: "March 1, 2026",
  author: "Your Name",
  image: "./assets/images/post-1.jpg",
  excerpt: "A short 1–2 sentence teaser shown on the card.",
  body: [
    "First paragraph of the full article...",
    "Second paragraph...",
  ]
}
```

Each `body` string renders as a `<p>` tag on `post.html`.

---

## JavaScript Behavior

| File       | Responsibility |
|------------|---------------|
| `main.js`  | Loop `posts` array → build card HTML → inject into grid |
| `post.js`  | Read `?slug=` URL param → find post → render title/image/body. Show 404 if not found |
| `about.js` | Any interactive behavior on the About page |

**Theme toggle:**
- Button in nav adds/removes `data-theme="dark"` on `<html>`
- CSS vars swap via `[data-theme="dark"] { --bg: #141414; ... }`
- Preference saved to `localStorage`

**Likes:**
- Per-post like button on cards
- Count stored in `localStorage` keyed by `slug`

---

## Responsive Design

**Breakpoints (mobile-first):**

```css
/* Base:  < 768px  — single column, stacked layout      */
/* md:    ≥ 768px  — 2-col grid, nav inline             */
/* lg:    ≥ 1024px — 3-col grid, wider hero             */
```

**Key techniques from the Responsive Design module:**
- Flexbox — nav, card meta row, footer
- CSS Grid — post card grid with `auto-fill` / `minmax`
- `clamp()` — fluid heading sizes
- `aspect-ratio` — hero and card images
- Media queries — layout shifts at breakpoints
- CSS Custom Properties — theming and spacing scale

**Post grid column rule:**
```css
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
```
Naturally responsive with no explicit media query needed.

**Hero overlay:**
- Mobile: preview card stacks below image
- Desktop: preview card overlays bottom-left via `position: absolute`

---

## Stretch Goals

1. **Dark/light theme toggle** — `localStorage` persistence, CSS var swap
2. **Search/filter** — client-side filter by title or category on Home
3. **"Load more" pagination** — render 3 cards initially, reveal more on click
4. **Like system** — per-post likes stored in `localStorage`
5. **`fetch()` migration** — move `data.js` array to `posts.json`, load with `fetch()`
6. **Smooth scroll & transitions** — CSS transitions on hover states, scroll-reveal on cards
7. **Reading time estimate** — calculate from `body` word count, display in post meta

---

## Resources

See `docs/resources.md` for references and links.
