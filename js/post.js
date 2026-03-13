// =============================================================
// post.js — Single Post Page JavaScript
// PRACTICE FILE — implement each TODO to rebuild the functionality.
// data.js is loaded before this script in post.html, so `posts` is available.
// =============================================================

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const post = posts.find((p) => p.slug === slug);

// -------------------------------------------------------------
// TODO 3 — HANDLE "POST NOT FOUND"
// If no post matched (bad URL, typo in slug), show a friendly
// error message inside #post-content and stop here.
//
// Wrap all remaining code in an `if (post) { ... }` block
// so it only runs when a valid post was found.
// -------------------------------------------------------------

// TODO: not found guard, then wrap the rest in if (post) { ... }

// -------------------------------------------------------------
// TODO 4 — RENDER THE HERO IMAGE
// Inject an <img> tag into the #post-hero-image element.
// Use post.image as the src and post.title as the alt text.
// -------------------------------------------------------------

// TODO: hero image

// -------------------------------------------------------------
// TODO 5 — RENDER THE FULL ARTICLE
// Build and inject the post content into #post-content.
//
// The structure to produce:
//
//   <span class="tag">category</span>
//   <h1>title</h1>
//   <div class="post-meta">
//     <span>author</span>
//     <span>date</span>
//   </div>
//   <p>paragraph one</p>
//   <p>paragraph two</p>
//   ...
//
// post.body is an array of paragraph strings.
// Turn it into <p> tags with:
//   post.body.map((paragraph) => `<p>${paragraph}</p>`).join("")
// -------------------------------------------------------------

// TODO: article content

// -------------------------------------------------------------
// TODO 6 — UPDATE THE BROWSER TAB TITLE
// Set document.title so the browser tab shows the post name
// instead of the generic page title.
// -------------------------------------------------------------

// TODO: document.title = ...

// -------------------------------------------------------------
// TODO 7 (STRETCH) — RENDER "MORE POSTS"
// Show up to 3 other posts at the bottom of the page.
// Filter out the current post, then take the first 3 results.
//
//   const morePosts = posts.filter((p) => p.slug !== slug).slice(0, 3)
//
// Reuse your renderCard function from main.js, or copy it here —
// post.html loads post.js, not main.js, so it needs to be available.
//
// Inject the cards into #more-posts-grid.
// -------------------------------------------------------------

// TODO: renderCard function (copy or write fresh)

// TODO: more posts grid

// -------------------------------------------------------------
// TODO 8 (STRETCH) — LIKE BUTTON WITH LOCALSTORAGE
// Track how many times this post has been liked and persist it.
//
// On page load:
//   1. Read saved count: localStorage.getItem(`likes-${slug}`)
//   2. Default to 0 if nothing saved
//   3. Display the count in the #like-count span
//
// On #like-btn click:
//   1. Read current count, add 1
//   2. Write back: localStorage.setItem(`likes-${slug}`, newCount)
//   3. Update #like-count text
//
// Note: #like-btn and #like-count must exist in post.html.
// -------------------------------------------------------------

// TODO: like button

// -------------------------------------------------------------
// TODO 9 (STRETCH) — READING TIME ESTIMATE
// Average reading speed: 200 words per minute.
//
//   const wordCount = post.body.join(" ").split(/\s+/).length
//   const minutes = Math.ceil(wordCount / 200)
//   const readingTime = `${minutes} min read`
//
// Add a <span>${readingTime}</span> inside the post-meta
// section you built in TODO 5.
// -------------------------------------------------------------

// TODO: reading time
