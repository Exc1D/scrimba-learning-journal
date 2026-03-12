// =============================================================
// main.js — Home Page JavaScript
// =============================================================

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
  const grid = document.getElementById("posts-grid");
  if (grid) {
    grid.innerHTML = postsToRender.map(renderCard).join("");
    grid.querySelectorAll(".post-card").forEach((card) => {
      cardObserver.unobserve(card);
    });
  }
}

renderPosts(posts);
// TODO: renderPosts(...)

// TODO: search/filter
const searchInput = document.querySelector("#search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.ariaValueMax.toLowerCase();
    const filtered = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query),
    );
    renderPosts(filtered);
  });
}

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
