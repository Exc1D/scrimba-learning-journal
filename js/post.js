// =============================================================
// post.js — Single Post Page JavaScript
// =============================================================

const postContent = document.getElementById("post-content");

// Search for the slug and match using .find()
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const post = posts.find((p) => p.slug === slug);

if (!post) {
  postContent.textContent = "Oops! This post can't be found. :(";
}

// Inject Hero image
const postHeroImg = document.getElementById("post-hero-image");
let newImg = document.createElement("img");
newImg.setAttribute("src", post.image);
newImg.setAttribute("alt", post.title);
postHeroImg.appendChild(newImg);

// Insert post contents
postContent.innerHTML = `
<span class="tag">${post.category}</span>
<h1>${post.title}</h1>
<div class="post-meta">
    <span>${post.date}</span>
</div>
${post.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
`;

// Add document title
document.title = `${post.title}`;
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
function renderCard(post) {
  return `<article class="post-card">
    <img src="${post.image}" alt="${post.title}" />
    <div class="card-body">
      <span class="tag">${post.category}</span>
      <h3><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
      <p class="excerpt">${post.excerpt}</p>
      <div class="card-meta">
        <span>${post.date}</span>
      </div>
    </div>
  </article>`;
}
const morePostsGrid = document.getElementById("more-posts-grid");
const morePosts = posts.filter((p) => p.slug !== slug).slice(0, 3);
morePostsGrid.innerHTML = morePosts.map(renderCard).join("");

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
