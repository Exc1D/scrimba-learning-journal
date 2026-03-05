# Learning Journal Blog — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scaffold a 3-page vanilla HTML/CSS/JS Learning Journal blog with TODO comments so the developer can implement each feature themselves.

**Architecture:** Organized subdirectory structure (css/, js/, assets/) with HTML at root. Posts are driven by a JS data array. All scaffold files contain explicit TODO comments guiding the developer through each implementation step, with stretch goals clearly marked.

**Tech Stack:** Vanilla HTML5, CSS3 (Custom Properties, Grid, Flexbox), Vanilla JS (ES6+), Google Fonts (Inter), no build tools.

---

### Task 1: Create directory structure & CSS foundation

**Files:**
- Create: `css/style.css`
- Create: `css/nav.css`
- Create: `css/footer.css`
- Create: `css/post-card.css`
- Create: `assets/images/.gitkeep`
- Create: `js/data.js`
- Create: `js/main.js`
- Create: `js/post.js`
- Create: `js/about.js`

**Step 1: Create all directories**

```bash
mkdir -p css js assets/images
```

**Step 2: Verify structure**

```bash
ls -R
```
Expected: `css/`, `js/`, `assets/images/` present alongside existing `docs/`, `figma-design/`.

**Step 3: Create `css/style.css` with CSS variables scaffold**

```css
/* =============================================================
   style.css — Global Styles, CSS Custom Properties, Reset
   ============================================================= */

/* TODO 1: Define your CSS custom properties (design tokens) in :root.
   Use the color palette from the Figma design.
   Reference: docs/plans/2026-03-05-learning-journal-design.md

   --bg:               #FAFAFA   (page background)
   --bg-dark:          #202020   (footer background)
   --text-primary:     #141414   (headings, body text)
   --text-secondary:   #505050   (meta, captions)
   --border:           #D7D7D7   (card borders, dividers)
   --border-light:     #ECECEC   (subtle separators)
   --font-sans:        'Inter', system-ui, sans-serif
   --radius:           8px
   --gap:              1.5rem

   Hint: :root { --bg: #FAFAFA; ... }
*/
:root {

}

/* TODO 2: Write a minimal CSS reset.
   Zero out margin and padding, set box-sizing: border-box on *.
   Set img to display: block, max-width: 100%.

   Hint: *, *::before, *::after { box-sizing: border-box; }
*/


/* TODO 3: Set base body styles.
   - font-family: var(--font-sans)
   - background-color: var(--bg)
   - color: var(--text-primary)
   - line-height: 1.6
*/
body {

}

/* TODO 4: Style anchor tags globally.
   - Remove underline by default
   - Inherit color
   - Add underline on :hover
*/
a {

}

/* TODO 5: Add the Google Fonts <link> to each HTML file's <head>
   instead of @import here (better performance).
   Font to use: Inter, weights 400 and 700.
   URL: https://fonts.google.com/specimen/Inter
   Hint: copy the <link> tag from Google Fonts into your HTML.
*/

/* TODO 6 (STRETCH — Dark Mode): Add a [data-theme="dark"] block
   that overrides the color custom properties for dark mode.
   The JS toggle will set data-theme="dark" on <html>.

   Example:
   [data-theme="dark"] {
     --bg: #141414;
     --text-primary: #FAFAFA;
     ...
   }
*/
```

**Step 4: Create `assets/images/.gitkeep`**

```bash
touch assets/images/.gitkeep
```

**Step 5: Verify files exist**

```bash
ls css/ js/ assets/images/
```

**Step 6: Commit**

```bash
git add css/ js/ assets/
git commit -m "scaffold: add project directories and css/style.css foundation"
```

---

### Task 2: Shared nav & footer CSS scaffolds

**Files:**
- Modify: `css/nav.css`
- Modify: `css/footer.css`

**Step 1: Write `css/nav.css` scaffold**

```css
/* =============================================================
   nav.css — Header & Navigation Styles
   ============================================================= */

/* TODO 1: Style the <header> element.
   - position: sticky, top: 0
   - background-color: var(--bg)
   - border-bottom: 1px solid var(--border)
   - z-index: 100 (so it stays above content when scrolling)
*/
header {

}

/* TODO 2: Style the .nav-container inside the header.
   Use flexbox to place the logo on the left and nav links on the right.
   - display: flex
   - justify-content: space-between
   - align-items: center
   - max-width: 1100px
   - margin: 0 auto
   - padding: 0 var(--gap)
   - height: 64px
*/
.nav-container {

}

/* TODO 3: Style the .nav-logo (your site name / logo text).
   - font-weight: 700
   - color: var(--text-primary)
   - font-size: 1.25rem
*/
.nav-logo {

}

/* TODO 4: Style the <nav> links list.
   - Use flexbox, gap: 2rem
   - list-style: none
   - The <a> tags inside should be color: var(--text-secondary)
   - On :hover change color to var(--text-primary)
*/
.nav-links {

}

/* TODO 5 (STRETCH — Hamburger Menu): On mobile (< 768px),
   hide the nav links and show a hamburger button instead.
   The JS in about.js will toggle an .open class to show/hide the menu.

   @media (max-width: 768px) {
     .nav-links { display: none; }
     .nav-links.open { display: flex; flex-direction: column; ... }
     .hamburger { display: block; }
   }
*/
```

**Step 2: Write `css/footer.css` scaffold**

```css
/* =============================================================
   footer.css — Footer Styles
   ============================================================= */

/* TODO 1: Style the <footer> element.
   - background-color: var(--bg-dark)
   - color: #FAFAFA  (light text on dark background)
   - padding: 2rem var(--gap)
   - text-align: center
*/
footer {

}

/* TODO 2: Style .footer-container for inner layout.
   Keep it centered and max-width consistent with nav:
   - max-width: 1100px
   - margin: 0 auto
   - display: flex
   - justify-content: space-between
   - align-items: center
   - flex-wrap: wrap
   - gap: 1rem

   On mobile, flex-direction: column and text-align: center.
*/
.footer-container {

}

/* TODO 3: Style footer links.
   - color: #ECECEC
   - Add :hover state
*/
footer a {

}
```

**Step 3: Commit**

```bash
git add css/
git commit -m "scaffold: add nav.css and footer.css with TODO comments"
```

---

### Task 3: Scaffold `index.html` — Home page

**Files:**
- Create: `index.html`

**Step 1: Write `index.html` scaffold**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Learning Journal</title>

  <!-- TODO: Replace this with the actual Google Fonts <link> for Inter (weights 400, 700) -->
  <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
  <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
  <!-- <link href="..." rel="stylesheet"> -->

  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/nav.css" />
  <link rel="stylesheet" href="css/footer.css" />
  <link rel="stylesheet" href="css/post-card.css" />
</head>
<body>

  <!-- =====================================================
       HEADER / NAV
       ===================================================== -->
  <header>
    <div class="nav-container">

      <!-- TODO 1: Add your logo/site name as a link to index.html
           Example: <a href="index.html" class="nav-logo">My Journal</a>
      -->

      <!-- TODO 2: Add the navigation links list
           Links: Home (index.html), About (about.html)
           Wrap in <nav><ul class="nav-links">...</ul></nav>
      -->

      <!-- TODO 3 (STRETCH): Add a theme toggle button and hamburger icon
           <button class="theme-toggle" aria-label="Toggle dark mode">🌙</button>
           <button class="hamburger" aria-label="Open menu">☰</button>
      -->

    </div>
  </header>

  <main>

    <!-- =====================================================
         HERO SECTION
         ===================================================== -->
    <section class="hero">

      <!-- TODO 4: Add a full-width hero image.
           Use an <img> tag with a descriptive alt attribute.
           Tip: Use a free image from https://unsplash.com or a placeholder.
           The image should fill the full width of the section.
      -->

      <!-- TODO 5: Add the hero post preview card (overlays bottom-left on desktop).
           This is a <div class="hero-card"> containing:
           - A category tag: <span class="tag">CSS</span>
           - The featured post title as an <h1> or <h2>
           - A short excerpt or date
           - A "Read more" link pointing to post.html?slug=YOUR_SLUG
           Tip: On mobile this stacks below the image. On desktop it overlays it.
           Use position: relative on .hero and position: absolute on .hero-card.
      -->

    </section>

    <!-- =====================================================
         POST GRID SECTION
         ===================================================== -->
    <section class="posts-section">
      <div class="posts-container">

        <!-- TODO 6 (STRETCH): Add a search/filter input above the grid
             <input type="text" id="search" placeholder="Search posts..." />
             The JS in main.js will filter cards as you type.
        -->

        <!-- TODO 7: This div is where JS will inject the post cards.
             Leave it empty — main.js will populate it dynamically.
             Give it the id "posts-grid" and class "posts-grid".
        -->
        <div id="posts-grid" class="posts-grid">
          <!-- Post cards rendered here by main.js -->
        </div>

        <!-- TODO 8 (STRETCH): Add a "Load more" button below the grid.
             <button id="load-more" class="btn">Load more posts</button>
             main.js will show/hide this and load more cards on click.
        -->

      </div>
    </section>

  </main>

  <!-- =====================================================
       FOOTER
       ===================================================== -->
  <footer>
    <div class="footer-container">

      <!-- TODO 9: Add footer content.
           - Your site name on the left
           - Copyright text on the right: © 2026 Your Name
           Example:
           <span class="footer-logo">My Journal</span>
           <p>© 2026 Your Name</p>
      -->

    </div>
  </footer>

  <!-- JS loaded at end of body so DOM is ready -->
  <script src="js/data.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

**Step 2: Open in browser and verify**

Open `index.html` with Live Server (VS Code extension) or simply open the file in your browser.
Expected: A blank page — no errors in the browser console. Structure is there, just not visible yet.

**Step 3: Commit**

```bash
git add index.html
git commit -m "scaffold: add index.html home page with TODO comments"
```

---

### Task 4: Scaffold `post.html` — Single post page

**Files:**
- Create: `post.html`

**Step 1: Write `post.html` scaffold**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Post — My Learning Journal</title>

  <!-- TODO: Add Google Fonts link (same as index.html) -->

  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/nav.css" />
  <link rel="stylesheet" href="css/footer.css" />
  <link rel="stylesheet" href="css/post-card.css" />
</head>
<body>

  <!-- HEADER: Copy the same <header> block from index.html -->
  <header>
    <div class="nav-container">
      <!-- TODO 1: Paste your nav here (same as index.html) -->
    </div>
  </header>

  <main>

    <!-- =====================================================
         POST HERO IMAGE
         ===================================================== -->
    <section class="post-hero">
      <!-- TODO 2: This is where post.js will inject the post's hero image.
           Leave this empty — post.js fills it dynamically.
           Give this a id="post-hero-image".
      -->
      <div id="post-hero-image"></div>
    </section>

    <!-- =====================================================
         ARTICLE CONTENT
         ===================================================== -->
    <article class="post-article">
      <div class="post-container">

        <!-- TODO 3: post.js will inject the full article here.
             It will render: category tag, title, author + date meta,
             and each paragraph from the post's body array.
             Leave this empty and give it id="post-content".
        -->
        <div id="post-content">
          <!-- Article rendered by post.js -->
        </div>

        <!-- TODO 4 (STRETCH): Add a like button below the article.
             <button id="like-btn" class="btn btn-like">♡ Like (<span id="like-count">0</span>)</button>
             post.js will handle reading/writing the count to localStorage.
        -->

        <!-- TODO 5 (STRETCH): Add estimated reading time in the post meta.
             post.js will calculate this from word count and inject it.
        -->

      </div>
    </article>

    <!-- =====================================================
         MORE POSTS SECTION
         ===================================================== -->
    <section class="more-posts">
      <div class="posts-container">
        <h2>More posts</h2>

        <!-- TODO 6: post.js will inject 2–3 related post cards here.
             Give this div id="more-posts-grid" and class "posts-grid".
        -->
        <div id="more-posts-grid" class="posts-grid">
          <!-- Related post cards rendered by post.js -->
        </div>

      </div>
    </section>

  </main>

  <!-- FOOTER: Copy the same <footer> block from index.html -->
  <footer>
    <div class="footer-container">
      <!-- TODO 7: Paste your footer here (same as index.html) -->
    </div>
  </footer>

  <script src="js/data.js"></script>
  <script src="js/post.js"></script>
</body>
</html>
```

**Step 2: Commit**

```bash
git add post.html
git commit -m "scaffold: add post.html single post page with TODO comments"
```

---

### Task 5: Scaffold `about.html` — About page

**Files:**
- Create: `about.html`

**Step 1: Write `about.html` scaffold**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About — My Learning Journal</title>

  <!-- TODO: Add Google Fonts link (same as index.html) -->

  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/nav.css" />
  <link rel="stylesheet" href="css/footer.css" />
</head>
<body>

  <!-- HEADER: Copy the same <header> block from index.html -->
  <header>
    <div class="nav-container">
      <!-- TODO 1: Paste your nav here (same as index.html) -->
    </div>
  </header>

  <main>

    <!-- =====================================================
         PROFILE SECTION
         ===================================================== -->
    <section class="about-section">
      <div class="about-container">

        <!-- TODO 2: Add your profile image.
             <img src="assets/images/avatar.jpg" alt="Your Name" class="avatar" />
             Style .avatar to be a circle: border-radius: 50%, width: 120px.
        -->

        <!-- TODO 3: Add your name as an <h1> and a short bio as one or two <p> tags.
             Write 2–3 sentences about yourself and what you're learning.
        -->

        <!-- TODO 4: Add a skills or interests section.
             Use an unordered list or a flex-wrap grid of tags.
             Example:
             <h2>What I'm learning</h2>
             <ul class="skills-list">
               <li>HTML & CSS</li>
               <li>Responsive Design</li>
               <li>JavaScript</li>
             </ul>
        -->

        <!-- TODO 5: Add a link back to the blog.
             <a href="index.html" class="btn">Read my posts →</a>
        -->

      </div>
    </section>

  </main>

  <!-- FOOTER: Copy the same <footer> block from index.html -->
  <footer>
    <div class="footer-container">
      <!-- TODO 6: Paste your footer here (same as index.html) -->
    </div>
  </footer>

  <script src="js/about.js"></script>
</body>
</html>
```

**Step 2: Commit**

```bash
git add about.html
git commit -m "scaffold: add about.html with TODO comments"
```

---

### Task 6: Scaffold `css/post-card.css`

**Files:**
- Modify: `css/post-card.css`

**Step 1: Write `css/post-card.css` scaffold**

```css
/* =============================================================
   post-card.css — Post Card & Grid Styles
   ============================================================= */

/* TODO 1: Style the .posts-section and .posts-container.
   - .posts-container: max-width: 1100px, margin: 0 auto, padding: 2rem var(--gap)
*/
.posts-section {

}

.posts-container {

}

/* TODO 2: Style the .posts-grid using CSS Grid.
   Use auto-fill with minmax so it's naturally responsive:

   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   gap: var(--gap);

   This creates a 1-col layout on mobile, 2-col on tablet, 3-col on desktop
   automatically — no media queries needed!
*/
.posts-grid {

}

/* TODO 3: Style the .post-card.
   - background: var(--bg)
   - border: 1px solid var(--border)
   - border-radius: var(--radius)
   - overflow: hidden  (so image corners are rounded)
   - cursor: pointer
   - Add a subtle box-shadow on :hover and transition it smoothly
*/
.post-card {

}

/* TODO 4: Style the card thumbnail image.
   - width: 100%
   - aspect-ratio: 16 / 9
   - object-fit: cover  (so it fills the space without distorting)
*/
.post-card img {

}

/* TODO 5: Style the .card-body (the text area below the image).
   - padding: 1rem
*/
.card-body {

}

/* TODO 6: Style the .tag (category label e.g. "CSS", "JavaScript").
   - Small text, uppercase, letter-spacing
   - color: var(--text-secondary)
   - font-size: 0.75rem
*/
.tag {

}

/* TODO 7: Style the card title (h2 or h3 inside .card-body).
   - font-size: 1.125rem
   - margin: 0.5rem 0
   - color: var(--text-primary)
*/
.card-body h3 {

}

/* TODO 8: Style the .card-meta row (author + date).
   - Use flexbox, gap, align-items: center
   - font-size: 0.875rem
   - color: var(--text-secondary)
*/
.card-meta {

}

/* TODO 9: Style the hero section.
   The hero has a full-width image and an overlaid card on desktop.
   - .hero: position: relative, overflow: hidden
   - .hero img: width: 100%, aspect-ratio: 16/9, object-fit: cover
   - .hero-card: padding 1.5rem, background: var(--bg), border-radius: var(--radius)

   DESKTOP overlay (min-width: 768px):
   - .hero-card: position: absolute, bottom: 2rem, left: 2rem, max-width: 380px

   MOBILE: .hero-card is just a normal block below the image.
*/
.hero {

}

.hero img {

}

.hero-card {

}

/* TODO 10 (STRETCH): Style the search input.
   - width: 100%, padding: 0.75rem, border: 1px solid var(--border)
   - border-radius: var(--radius), margin-bottom: var(--gap)
   - font-family: inherit, font-size: 1rem
*/
#search {

}

/* TODO 11 (STRETCH): Style the .btn (reusable button class).
   - display: inline-block, padding: 0.6rem 1.25rem
   - border: 2px solid var(--text-primary)
   - background: transparent, color: var(--text-primary)
   - border-radius: var(--radius), cursor: pointer
   - On :hover: background: var(--text-primary), color: var(--bg)
*/
.btn {

}
```

**Step 2: Commit**

```bash
git add css/post-card.css
git commit -m "scaffold: add post-card.css with TODO comments"
```

---

### Task 7: Scaffold `js/data.js` — Post data array

**Files:**
- Modify: `js/data.js`

**Step 1: Write `js/data.js` with sample posts**

```js
// =============================================================
// data.js — Blog Post Data
// This is the single source of truth for all posts.
// =============================================================

// TODO 1: Add at least 4 post objects to this array.
// Each post needs ALL of these fields — they are used by main.js and post.js.
// Replace the sample content below with your own learning topics!

const posts = [
  {
    slug: "what-i-learned-about-css-grid",        // URL-safe unique identifier (no spaces)
    title: "What I Learned About CSS Grid",
    category: "CSS",
    date: "March 1, 2026",
    author: "Your Name",
    image: "assets/images/post-1.jpg",            // TODO: add your own images to assets/images/
    excerpt: "CSS Grid finally clicked for me this week. Here's what made it make sense.",
    body: [
      "This week I tackled CSS Grid and it completely changed how I think about layout. Before Grid, I was stacking flexbox containers inside each other to get two-dimensional layouts, which worked but felt clunky.",
      "The breakthrough was understanding that Grid works on two axes at once. You define the columns and rows on the parent, and the children just place themselves. The auto-fill + minmax pattern alone replaced three media queries in one of my projects.",
      "My favourite property so far is grid-template-areas. Being able to draw your layout in ASCII art inside your CSS is genuinely satisfying."
    ]
  },
  {
    slug: "responsive-design-mobile-first",
    title: "Why Mobile-First Actually Makes Sense",
    category: "Responsive Design",
    date: "February 22, 2026",
    author: "Your Name",
    image: "assets/images/post-2.jpg",
    excerpt: "I resisted mobile-first for months. Here's what finally convinced me.",
    body: [
      "For a long time I wrote my CSS desktop-first and used max-width media queries to scale down. It worked, but scaling down always felt like fighting the cascade rather than working with it.",
      "Mobile-first flips the script: you write the simplest layout first (one column, full width, readable text) and progressively enhance from there. The base CSS is lean, and the media queries only add complexity — they never take it away.",
      "The real aha moment was realising that mobile constraints force you to prioritise content. If something is important enough to show on mobile, it's important. If it only makes sense on desktop, it's probably decorative anyway."
    ]
  },
  {
    slug: "javascript-array-methods",
    title: "Array Methods That Changed How I Write JS",
    category: "JavaScript",
    date: "February 15, 2026",
    author: "Your Name",
    image: "assets/images/post-3.jpg",
    excerpt: "map, filter, and reduce went from intimidating to essential in one week.",
    body: [
      "I avoided map, filter, and reduce for a long time because for loops felt safer and more explicit. Then I started reading other people's code and realised I was the only one still writing for (let i = 0; ...).",
      "Map is now my default for transforming arrays. Filter is how I build search features. And reduce, once I understood it as 'fold this array into one value', finally stopped being scary.",
      "The pattern that unlocked everything: chaining them. posts.filter(p => p.category === 'CSS').map(renderCard) reads almost like English."
    ]
  },
  {
    slug: "flexbox-vs-grid",
    title: "Flexbox vs Grid: When to Use Which",
    category: "CSS",
    date: "February 8, 2026",
    author: "Your Name",
    image: "assets/images/post-4.jpg",
    excerpt: "A practical mental model for choosing between CSS Flexbox and Grid.",
    body: [
      "The question I kept googling: should I use flexbox or grid here? After building several projects with both, here's the mental model that works for me.",
      "Flexbox is one-dimensional. Use it when you want a row of things and don't care about aligning them to a grid — a nav bar, a row of buttons, a card's meta row. It distributes space along one axis.",
      "Grid is two-dimensional. Use it when you're laying out a page section and you need items to align in both rows and columns — a card grid, a page layout with a sidebar, a photo gallery. If you're thinking in terms of rows AND columns, use Grid."
    ]
  }
]

// TODO 2 (STRETCH — fetch() migration):
// When you're ready to practise async/await, move this array to a file called posts.json.
// Then replace the array reference in main.js and post.js with:
//
//   const posts = await fetch('./js/posts.json').then(r => r.json())
//
// The shape of each post object stays exactly the same.
```

**Step 2: Commit**

```bash
git add js/data.js
git commit -m "scaffold: add data.js with 4 sample posts"
```

---

### Task 8: Scaffold `js/main.js` — Home page JS

**Files:**
- Modify: `js/main.js`

**Step 1: Write `js/main.js` scaffold**

```js
// =============================================================
// main.js — Home Page JavaScript
// Renders post cards into #posts-grid from the posts array in data.js
// =============================================================

// TODO 1: Write a function called renderCard(post) that:
//   - Takes a single post object as its argument
//   - Returns an HTML string for a post card
//   - The card should include:
//       - <img> with post.image and post.title as alt
//       - <span class="tag"> with post.category
//       - <h3> with post.title wrapped in an <a> linking to post.html?slug=post.slug
//       - <p class="excerpt"> with post.excerpt
//       - <div class="card-meta"> with post.author and post.date
//
//   Hint: Use a template literal (backtick string):
//   function renderCard(post) {
//     return `<article class="post-card">...</article>`
//   }

function renderCard(post) {
  // Your implementation here
}


// TODO 2: Write a function called renderPosts(postsToRender) that:
//   - Accepts an array of post objects
//   - Selects the #posts-grid element from the DOM
//   - Sets its innerHTML to postsToRender.map(renderCard).join('')
//
//   Hint: document.querySelector('#posts-grid').innerHTML = ...

function renderPosts(postsToRender) {
  // Your implementation here
}


// TODO 3: Call renderPosts(posts) when the page loads.
//   This will render all posts from data.js into the grid.
//   'posts' is the array defined in data.js (loaded before this script in HTML).


// ----------------------------------------------------------------
// STRETCH GOALS
// ----------------------------------------------------------------

// TODO 4 (STRETCH — Search/Filter):
//   Add an event listener to the #search input (if it exists in the HTML).
//   On every 'input' event, filter the posts array to only posts whose
//   title or category includes the search value (case-insensitive).
//   Then call renderPosts() with the filtered array.
//
//   Hint:
//   const searchInput = document.querySelector('#search')
//   searchInput?.addEventListener('input', () => {
//     const query = searchInput.value.toLowerCase()
//     const filtered = posts.filter(p =>
//       p.title.toLowerCase().includes(query) ||
//       p.category.toLowerCase().includes(query)
//     )
//     renderPosts(filtered)
//   })


// TODO 5 (STRETCH — Load More / Pagination):
//   Instead of rendering all posts at once, render only the first 3.
//   Show a #load-more button. On click, render 3 more.
//   Hide the button when all posts are shown.
//
//   Hint: track a 'page' variable and slice the posts array:
//   const PAGE_SIZE = 3
//   let page = 1
//   renderPosts(posts.slice(0, page * PAGE_SIZE))


// TODO 6 (STRETCH — fetch() migration):
//   Replace the direct use of the posts array with a fetch() call.
//   Wrap your render logic in an async function:
//
//   async function init() {
//     const posts = await fetch('./js/posts.json').then(r => r.json())
//     renderPosts(posts)
//   }
//   init()
```

**Step 2: Commit**

```bash
git add js/main.js
git commit -m "scaffold: add main.js with TODO comments for post rendering"
```

---

### Task 9: Scaffold `js/post.js` — Single post page JS

**Files:**
- Modify: `js/post.js`

**Step 1: Write `js/post.js` scaffold**

```js
// =============================================================
// post.js — Single Post Page JavaScript
// Reads the ?slug= URL parameter and renders the matching post.
// =============================================================

// TODO 1: Read the 'slug' query parameter from the URL.
//   The URL will look like: post.html?slug=what-i-learned-about-css-grid
//
//   Hint: URLSearchParams makes this easy:
//   const params = new URLSearchParams(window.location.search)
//   const slug = params.get('slug')


// TODO 2: Find the matching post in the posts array using the slug.
//   Use Array.find():
//   const post = posts.find(p => p.slug === slug)


// TODO 3: Handle the case where no post is found (bad slug / direct URL).
//   Show a friendly message inside #post-content:
//   document.querySelector('#post-content').innerHTML =
//     '<p>Post not found. <a href="index.html">Go back home →</a></p>'


// TODO 4: If the post IS found, render the hero image.
//   Select #post-hero-image and set its innerHTML to:
//   `<img src="${post.image}" alt="${post.title}" />`


// TODO 5: Render the full post content into #post-content.
//   Include:
//   - <span class="tag"> for post.category
//   - <h1> for post.title
//   - <div class="post-meta"> with post.author and post.date
//   - Each string in post.body as a <p> tag
//
//   Hint for rendering body paragraphs:
//   post.body.map(paragraph => `<p>${paragraph}</p>`).join('')


// TODO 6: Update the page <title> to match the post title.
//   document.title = `${post.title} — My Learning Journal`


// TODO 7: Render "More posts" cards into #more-posts-grid.
//   Show up to 3 posts from the posts array, EXCLUDING the current post.
//   Reuse the same card HTML pattern from main.js (or extract it to a shared helper).
//
//   Hint:
//   const morePosts = posts.filter(p => p.slug !== slug).slice(0, 3)


// ----------------------------------------------------------------
// STRETCH GOALS
// ----------------------------------------------------------------

// TODO 8 (STRETCH — Like Button):
//   Read the like count for this post from localStorage.
//   Key: `likes-${slug}`, default value: 0
//   Display the count in #like-count (if the element exists).
//
//   On #like-btn click:
//   - Increment the count
//   - Save back to localStorage
//   - Update #like-count text


// TODO 9 (STRETCH — Reading Time):
//   Calculate estimated reading time from post.body.
//   Average reading speed: 200 words per minute.
//
//   Hint:
//   const wordCount = post.body.join(' ').split(' ').length
//   const minutes = Math.ceil(wordCount / 200)
//   // then inject `${minutes} min read` into the post meta
```

**Step 2: Commit**

```bash
git add js/post.js
git commit -m "scaffold: add post.js with TODO comments for post rendering"
```

---

### Task 10: Scaffold `js/about.js` — About page JS

**Files:**
- Modify: `js/about.js`

**Step 1: Write `js/about.js` scaffold**

```js
// =============================================================
// about.js — About Page JavaScript
// =============================================================

// ----------------------------------------------------------------
// STRETCH GOALS — all of this file is stretch
// ----------------------------------------------------------------

// TODO 1 (STRETCH — Theme Toggle):
//   This function handles dark/light mode toggling.
//   It should work on ALL pages, so consider moving this logic
//   to a shared script (e.g. js/theme.js) and loading it in every HTML file.
//
//   Steps:
//   1. On page load, read 'theme' from localStorage.
//      If it equals 'dark', add data-theme="dark" to document.documentElement.
//   2. Select the .theme-toggle button (if it exists).
//   3. On click, toggle the data-theme attribute:
//      - If currently 'dark' → remove it, save 'light' to localStorage
//      - If currently 'light' → set it to 'dark', save 'dark' to localStorage
//
//   Hint:
//   const savedTheme = localStorage.getItem('theme')
//   if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark')
//
//   themeToggle?.addEventListener('click', () => {
//     const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
//     if (isDark) {
//       document.documentElement.removeAttribute('data-theme')
//       localStorage.setItem('theme', 'light')
//     } else {
//       document.documentElement.setAttribute('data-theme', 'dark')
//       localStorage.setItem('theme', 'dark')
//     }
//   })


// TODO 2 (STRETCH — Hamburger Menu):
//   Toggle the mobile nav menu open/closed.
//   The .hamburger button and .nav-links are in the HTML.
//   On click, toggle the class 'open' on .nav-links.
//
//   Hint:
//   document.querySelector('.hamburger')?.addEventListener('click', () => {
//     document.querySelector('.nav-links').classList.toggle('open')
//   })
```

**Step 2: Commit**

```bash
git add js/about.js
git commit -m "scaffold: add about.js with stretch goal TODO comments"
```

---

### Task 11: Create stretch goals reference doc

**Files:**
- Create: `docs/stretch-goals.md`

**Step 1: Write `docs/stretch-goals.md`**

```markdown
# Stretch Goals — Learning Journal

These are ordered from easiest to hardest. Complete the core TODOs in the main files first.

---

## 1. Google Fonts (Easy)
Add Inter from Google Fonts to all three HTML files.
Reference: https://fonts.google.com/specimen/Inter

---

## 2. Hover Transitions (Easy)
Add CSS `transition` properties to cards and buttons for smooth hover effects.
```css
.post-card { transition: box-shadow 0.2s ease, transform 0.2s ease; }
.post-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
```

---

## 3. Theme Toggle — Dark Mode (Medium)
- Add a toggle button to the nav in all HTML files
- Wire up the JS in about.js (TODO 1)
- Add `[data-theme="dark"]` CSS variable overrides in style.css (TODO 6)
- Load the theme preference on every page using localStorage

---

## 4. Hamburger Menu (Medium)
- Add a hamburger `<button>` to the nav HTML
- Hide it on desktop, show on mobile via media query
- Wire up the JS toggle in about.js (TODO 2)
- Add CSS for the open/close state

---

## 5. Search / Filter Posts (Medium)
- Add a search `<input>` above the grid in index.html
- Wire up the filter logic in main.js (TODO 4)
- Style the input in post-card.css (TODO 10)

---

## 6. Load More Pagination (Medium)
- Start by rendering only 3 posts on page load
- Add a "Load more" button
- Reveal 3 more on each click, hide button when all posts shown
- Reference: main.js TODO 5

---

## 7. Like Button with localStorage (Medium)
- Add a like button to post.html
- Wire up the count read/write in post.js (TODO 8)
- Display the count from localStorage on page load

---

## 8. Reading Time Estimate (Easy, if you've done the post rendering)
- Calculate word count from post.body
- Divide by 200 (avg words per minute), round up
- Inject into the post meta line
- Reference: post.js TODO 9

---

## 9. fetch() Migration (Hard — requires async/await knowledge)
1. Create `js/posts.json` and copy the posts array data into it as valid JSON
2. In main.js, wrap your render logic in an `async function init()`
3. Replace `posts` with `await fetch('./js/posts.json').then(r => r.json())`
4. Call `init()`
5. Do the same in post.js
- Reference: MDN fetch() docs — https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Note: You must run a local server (Live Server extension) for fetch() to work — it doesn't work on `file://` URLs.
```

**Step 2: Commit**

```bash
git add docs/stretch-goals.md
git commit -m "docs: add stretch goals reference document"
```

---

### Task 12: Save memory and wrap up

**Step 1: Save project memory**

Write key facts to the project memory file so future sessions have context.

**Step 2: Final verification**

```bash
ls -R
```

Expected structure:
```
index.html  post.html  about.html
css/style.css  css/nav.css  css/footer.css  css/post-card.css
js/data.js  js/main.js  js/post.js  js/about.js
assets/images/.gitkeep
docs/plans/  docs/resources.md  docs/stretch-goals.md
figma-design/
```

**Step 3: Final commit**

```bash
git add .
git commit -m "scaffold: complete learning journal project scaffold with TODOs"
```

---

## What the developer implements (in recommended order)

1. `style.css` — CSS variables and reset (Task 1 TODOs)
2. `nav.css` / `footer.css` — nav and footer styles (Task 2 TODOs)
3. `index.html` — fill in the nav, hero, and footer HTML (Task 3 TODOs)
4. `post-card.css` — card and grid styles (Task 6 TODOs)
5. `data.js` — personalise the posts with your own content (Task 7 TODO 1)
6. `main.js` — implement `renderCard` and `renderPosts` (Task 8 TODOs 1–3)
7. `post.html` — fill in the nav and footer HTML (Task 4 TODOs)
8. `post.js` — implement full post rendering (Task 9 TODOs 1–7)
9. `about.html` — fill in profile content (Task 5 TODOs)
10. Stretch goals — pick any from `docs/stretch-goals.md`
