// =============================================================
// main.js — Home Page JavaScript
// Renders post cards into #posts-grid from the posts array in data.js.
// data.js is loaded before this script in index.html, so `posts` is available.
// =============================================================

// TODO 1: Write a function called renderCard(post) that:
//   - Takes a single post object as its argument
//   - Returns an HTML string for one post card
//   - The returned string should produce this structure:
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
//   Use a template literal (backtick string) to build the HTML:
//   function renderCard(post) {
//     return `<article class="post-card">...</article>`
//   }

function renderCard(post) {
  // Your implementation here
}


// TODO 2: Write a function called renderPosts(postsToRender) that:
//   - Accepts an array of post objects
//   - Selects #posts-grid from the DOM
//   - Sets its innerHTML to all the cards joined together
//
//   Hint: postsToRender.map(renderCard).join('') turns the array into one HTML string.
//   document.querySelector('#posts-grid').innerHTML = postsToRender.map(renderCard).join('')

function renderPosts(postsToRender) {
  // Your implementation here
}


// TODO 3: Call renderPosts(posts) to render all posts on page load.
//   `posts` is the array from data.js (loaded first in index.html).


// ----------------------------------------------------------------
// STRETCH GOALS — complete the core TODOs above first
// ----------------------------------------------------------------

// TODO 4 (STRETCH — Search / Filter):
//   Wire up the #search input so typing filters the post cards in real time.
//   Add this after TODO 3.
//
//   const searchInput = document.querySelector('#search')
//   searchInput?.addEventListener('input', () => {
//     const query = searchInput.value.toLowerCase()
//     const filtered = posts.filter(p =>
//       p.title.toLowerCase().includes(query) ||
//       p.category.toLowerCase().includes(query)
//     )
//     renderPosts(filtered)
//   })
//
//   Note: the #search input must exist in index.html for this to work (see index.html TODO 6).


// TODO 5 (STRETCH — Load More Pagination):
//   Render only 3 posts initially. Show a #load-more button that reveals 3 more on click.
//   Hide the button when all posts are shown.
//
//   const PAGE_SIZE = 3
//   let page = 1
//   renderPosts(posts.slice(0, PAGE_SIZE))
//
//   document.querySelector('#load-more')?.addEventListener('click', () => {
//     page++
//     renderPosts(posts.slice(0, page * PAGE_SIZE))
//     if (page * PAGE_SIZE >= posts.length) {
//       document.querySelector('#load-more').style.display = 'none'
//     }
//   })
//
//   Note: replace the renderPosts(posts) call in TODO 3 with the slice version above.
//   Note: the #load-more button must exist in index.html (see index.html TODO 7).


// TODO 6 (STRETCH — fetch() migration):
//   Once you have moved posts to js/posts.json, wrap everything in an async function:
//
//   async function init() {
//     const posts = await fetch('./js/posts.json').then(r => r.json())
//     renderPosts(posts)
//     // move your search and load-more setup here too
//   }
//   init()
