// =============================================================
// main.js — Home Page JavaScript
// PRACTICE FILE — implement each TODO to rebuild the functionality.
// data.js is loaded before this script in index.html, so `posts` is available.
// =============================================================

// -------------------------------------------------------------
// TODO 1 — RENDER A SINGLE CARD
// Write a function called renderCard(post) that:
//   - Takes one post object as its argument
//   - Returns an HTML string for one post card
//
// The HTML structure to produce:
//
//   <article class="post-card">
//     <img src="..." alt="..." />
//     <div class="card-body">
//       <span class="tag">category</span>
//       <h3><a href="post.html?slug=...">title</a></h3>
//       <p class="excerpt">excerpt</p>
//       <div class="card-meta">
//         <span>author</span>
//         <span>date</span>
//       </div>
//     </div>
//   </article>
//
// Use a template literal (backtick string) so you can embed
// post.image, post.title, post.category, post.slug, etc. directly.
// -------------------------------------------------------------

function renderCard(post) {
  return `
  <article class="post-card">
    <img src="${post.image}" alt="${post.title}" />
    <div class="card-body">
      <span class="tag">${post.category}</span>
      <h3><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
      <p class="excerpt">${post.excerpt}</p>
      <div class="card-meta">
        <span>${post.author}</span>
        <span>${post.date}</span>
      </div>
    </div>
  </article>
  `;
}

// -------------------------------------------------------------
// TODO 2 — RENDER MULTIPLE CARDS
// Write a function called renderPosts(postsToRender) that:
//   - Accepts an array of post objects
//   - Selects the #posts-grid element from the DOM
//   - Sets its innerHTML to all cards joined into one string
//
// Hint: postsToRender.map(renderCard).join("") maps each post
// through renderCard and glues the results into one big string.
// -------------------------------------------------------------

function renderPosts(postsToRender) {
  // TODO: select #posts-grid and set its innerHTML
  const grid = document.getElementById("posts-grid");
  grid.innerHTML = postsToRender.map(renderCard).join("");
}

// -------------------------------------------------------------
// TODO 3 — INITIAL RENDER
// Call renderPosts with the full posts array to display all cards.
// The `posts` variable comes from data.js which loads first.
// -------------------------------------------------------------
renderPosts(posts);
// TODO: renderPosts(...)

// -------------------------------------------------------------
// TODO 4 (STRETCH) — SCROLL-TRIGGERED CARD ANIMATION
// Make cards animate in only when they scroll into view, so the
// user actually gets to see the animation play out.
//
// How it works:
// - Cards start invisible (opacity: 0, no animation class)
// - An IntersectionObserver watches each card
// - When a card enters the viewport, add an "animate" class
// - The CSS on .post-card.animate triggers the fadeInUp animation
// - Stagger the delay based on the card's index in the grid
//
// Steps:
// 1. Create the observer:
//      const cardObserver = new IntersectionObserver((entries) => {
//        entries.forEach((entry) => {
//          if (entry.isIntersecting) {
//            const card = entry.target
//            const index = Array.from(card.parentElement.children).indexOf(card)
//            card.style.animationDelay = index * 0.06 + "s"
//            card.classList.add("animate")
//            cardObserver.unobserve(card) // stop watching once animated
//          }
//        })
//      }, { threshold: 0.1 })
//
// 2. After setting innerHTML in renderPosts, observe each card:
//      grid.querySelectorAll(".post-card").forEach((card) => {
//        cardObserver.observe(card)
//      })
//
// Note: update renderPosts to call the observer after rendering.
// Note: the CSS must have .post-card { opacity: 0 } and
//       .post-card.animate { animation: fadeInUp 0.45s ease both; opacity: 1 }
// -------------------------------------------------------------

// TODO: IntersectionObserver setup

// -------------------------------------------------------------
// TODO 5 (STRETCH) — SEARCH / FILTER
// Wire up the #search input so typing filters the post cards.
//
// Steps:
// 1. Select the #search input
// 2. Listen for the "input" event
// 3. Get the query: searchInput.value.toLowerCase()
// 4. Filter the posts array — check if the query appears in
//    the title, category, or excerpt (all lowercased)
// 5. Call renderPosts with the filtered array
//
// Note: the #search input must exist in index.html.
// -------------------------------------------------------------

// TODO: search/filter

// -------------------------------------------------------------
// TODO 6 (STRETCH) — LOAD MORE PAGINATION
// Show only 3 posts initially and reveal 3 more on each click
// of the #load-more button.
//
// Steps:
// 1. Replace renderPosts(posts) with renderPosts(posts.slice(0, 3))
// 2. Track the current page with: let currentPage = 1
// 3. On #load-more click:
//      currentPage++
//      renderPosts(posts.slice(0, currentPage * 3))
//      if all posts are shown, hide the button
//
// Note: the #load-more button must exist in index.html.
// -------------------------------------------------------------

// TODO: load more pagination
