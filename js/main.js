// =============================================================
// main.js — Home Page JavaScript
// Renders post cards into #posts-grid from the posts array in data.js.
// data.js is loaded before this script in index.html, so `posts` is available.
// =============================================================

function renderCard(post) {
  return `<article class="post-card">
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
  </article>`;
}

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = Array.from(card.parentElement.children).indexOf(card);
        card.style.animationDelay = index * 0.06 + "s";
        card.classList.add("animate");
        cardObserver.unobserve(card);
      }
    });
  },
  { threshold: 0.1 },
);

function renderPosts(postsToRender) {
  const grid = document.querySelector("#posts-grid");
  if (grid) {
    grid.innerHTML = postsToRender.map(renderCard).join("");
    grid.querySelectorAll(".post-card").forEach((card) => {
      cardObserver.observe(card);
    });
  }
}

// Pagination settings
const PAGE_SIZE = 3;
let currentPage = 1;

// Initial render with pagination
renderPosts(posts.slice(0, PAGE_SIZE * currentPage));

// Hide load more button if all posts are shown
const loadMoreBtn = document.querySelector("#load-more");
if (loadMoreBtn && currentPage * PAGE_SIZE >= posts.length) {
  loadMoreBtn.style.display = "none";
}

// Load more button click handler
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    renderPosts(posts.slice(0, PAGE_SIZE * currentPage));
    if (currentPage * PAGE_SIZE >= posts.length) {
      loadMoreBtn.style.display = "none";
    }
  });
}

// Search/filter functionality
const searchInput = document.querySelector("#search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query),
    );
    renderPosts(filtered);
    // Hide load more when filtering
    if (loadMoreBtn) {
      loadMoreBtn.style.display = "none";
    }
  });
}

// TODO 6 (STRETCH — fetch() migration):
//   Once you have moved posts to js/posts.json, wrap everything in an async function:
//
//   async function init() {
//     const posts = await fetch('./js/posts.json').then(r => r.json())
//     renderPosts(posts)
//     // move your search and load-more setup here too
//   }
//   init()
