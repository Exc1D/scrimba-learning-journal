# Stretch Goals — Learning Journal

Complete the core TODOs in all files first. These are ordered from easiest to hardest.

---

## 1. Google Fonts — Easy

Add the Inter font from Google Fonts to all three HTML files.

Steps:
1. Go to https://fonts.google.com/specimen/Inter
2. Select weights 400 (Regular) and 700 (Bold)
3. Copy the `<link>` snippet
4. Paste it into the `<head>` of index.html, post.html, and about.html
   (replacing the commented-out placeholder lines)

---

## 2. Hover Transitions — Easy

Add smooth hover effects to post cards and buttons using CSS `transition`.

In css/post-card.css, add to `.post-card`:
```css
transition: box-shadow 0.2s ease, transform 0.2s ease;
```
And to `.post-card:hover`:
```css
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
```

---

## 3. Dark Mode Theme Toggle — Medium

Let visitors switch between light and dark colour schemes.

Files to touch: style.css (TODO 6), index.html (TODO 3), post.html, about.html, js/about.js (TODO 1)

Steps:
1. Add the `[data-theme="dark"]` CSS block in style.css (TODO 6) — override all 6 colour tokens
2. Add the `.theme-toggle` button to the nav in all three HTML files
3. Implement the toggle in js/about.js (TODO 1) — or in a new js/theme.js loaded on all pages
4. On page load, read the saved preference from localStorage and apply it

---

## 4. Hamburger Mobile Menu — Medium

Collapse the nav into a hamburger button on small screens.

Files to touch: css/nav.css (TODO 5), index.html (TODO 3), post.html, about.html, js/about.js (TODO 2)

Steps:
1. Add the `.hamburger` button to the nav HTML in all three files
2. Write the CSS in nav.css (TODO 5): hide `.nav-links` on mobile, show on `.open`, hide hamburger on desktop
3. Implement the toggle in js/about.js (TODO 2)

---

## 5. Search and Filter Posts — Medium

Let visitors filter post cards by typing in a search box.

Files to touch: index.html (TODO 6), css/post-card.css (TODO 10), js/main.js (TODO 4)

Steps:
1. Add the `<input id="search">` element in index.html (TODO 6)
2. Style the input in css/post-card.css (TODO 10)
3. Add the filter event listener in js/main.js (TODO 4)

---

## 6. Load More Pagination — Medium

Show 3 posts initially and reveal more with a button click.

Files to touch: index.html (TODO 7), js/main.js (TODO 5)

Steps:
1. Add the `<button id="load-more">` in index.html (TODO 7)
2. Replace the `renderPosts(posts)` call in js/main.js with the paginated version (TODO 5)
3. Hide the button when all posts have been shown

---

## 7. Like Button — Medium

Let visitors like posts, with counts saved between page visits.

Files to touch: post.html (TODO 2), js/post.js (TODO 8)

Steps:
1. Add the like button HTML in post.html (TODO 2)
2. Implement the localStorage read/write in js/post.js (TODO 8)
3. Display the saved count on page load

---

## 8. Reading Time Estimate — Easy (after core post rendering is working)

Show an estimated reading time in the post header.

File to touch: js/post.js (TODO 9)

Steps:
1. Calculate word count: `post.body.join(' ').split(' ').length`
2. Divide by 200 (average words per minute), round up with `Math.ceil`
3. Inject the result into the post meta HTML you built in js/post.js TODO 5

---

## 9. fetch() Data Migration — Hard (requires async/await)

Load post data from a JSON file using the Fetch API instead of a JS array.

Prerequisite: read about async/await at https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises

Files to touch: js/data.js (TODO 2), js/main.js (TODO 6), js/post.js

Steps:
1. Create js/posts.json — copy the posts array content, formatted as valid JSON
   (JSON keys must be in double quotes; no trailing commas; no JS comments)
2. In js/main.js, wrap the render logic in `async function init()` and use `fetch()` (see TODO 6)
3. Do the same in js/post.js
4. Delete js/data.js and its `<script>` tags in the HTML files — the JSON replaces it
5. Test with a local server (VS Code Live Server extension) — fetch() does not work on file:// URLs
