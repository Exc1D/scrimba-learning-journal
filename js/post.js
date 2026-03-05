// =============================================================
// post.js — Single Post Page JavaScript
// Reads the ?slug= URL parameter and renders the matching post.
// data.js is loaded before this script in post.html, so `posts` is available.
// =============================================================

// TODO 1: Read the 'slug' query parameter from the current page URL.
//   The URL looks like: post.html?slug=what-i-learned-about-css-grid
//
//   const params = new URLSearchParams(window.location.search)
//   const slug = params.get('slug')
//   // slug is now the string "what-i-learned-about-css-grid"


// TODO 2: Find the post in the posts array whose slug matches.
//   Use Array.find() — it returns the first item where the test passes, or undefined.
//
//   const post = posts.find(p => p.slug === slug)


// TODO 3: Handle the "post not found" case (bad URL, typo in slug, etc).
//   If post is undefined, show a message and stop:
//
//   if (!post) {
//     document.querySelector('#post-content').innerHTML =
//       '<p>Post not found. <a href="index.html">← Go back home</a></p>'
//     return  // or wrap the rest of the code in an else block
//   }


// TODO 4: Render the post's hero image into #post-hero-image.
//   document.querySelector('#post-hero-image').innerHTML =
//     `<img src="${post.image}" alt="${post.title}" />`


// TODO 5: Render the full article into #post-content.
//   Include all of:
//   - <span class="tag"> for post.category
//   - <h1> for post.title
//   - <div class="post-meta"> with post.author and post.date
//   - Each string in post.body as its own <p> tag
//
//   Hint for rendering the body paragraphs:
//   post.body.map(paragraph => `<p>${paragraph}</p>`).join('')
//
//   Build the full HTML string and set it as the innerHTML of #post-content.


// TODO 6: Update the browser tab title to the post title.
//   document.title = `${post.title} — My Learning Journal`


// TODO 7: Render "More posts" cards into #more-posts-grid.
//   Show up to 3 posts from the posts array, excluding the current post.
//   Reuse the same card HTML structure from main.js (copy the template literal, or
//   extract renderCard to a shared helper function both files can use).
//
//   const morePosts = posts.filter(p => p.slug !== slug).slice(0, 3)
//   document.querySelector('#more-posts-grid').innerHTML =
//     morePosts.map(/* your renderCard function here */).join('')


// ----------------------------------------------------------------
// STRETCH GOALS — complete the core TODOs above first
// ----------------------------------------------------------------

// TODO 8 (STRETCH — Like Button):
//   Read the like count for this post from localStorage on page load.
//   Key to use: `likes-${slug}` — e.g. "likes-css-grid"
//   Default value if the key does not exist: 0
//
//   Display the count in #like-count (the <span> inside the like button).
//   On #like-btn click:
//   1. Read current count from localStorage (default 0)
//   2. Increment it
//   3. Write back to localStorage
//   4. Update the #like-count text
//
//   Note: the #like-btn and #like-count elements must exist in post.html (see post.html TODO 2).


// TODO 9 (STRETCH — Reading Time):
//   Estimate reading time from the post body text.
//   Average reading speed: 200 words per minute.
//
//   const wordCount = post.body.join(' ').split(' ').length
//   const minutes = Math.ceil(wordCount / 200)
//   const readingTime = `${minutes} min read`
//
//   Inject readingTime into the post meta section of #post-content.
//   Add it to the HTML string you build in TODO 5.
