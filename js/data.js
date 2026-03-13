// =============================================================
// data.js — Blog Post Data
// This is the single source of truth for all posts.
// Loaded before main.js and post.js in each HTML file's <script> tags.
// =============================================================

// TODO 1: Personalise this array with your own learning topics!
// Replace the sample posts below with content about what YOU have been learning.
// Each post needs ALL fields — they are all used by main.js and post.js.
// The slug must be URL-safe (no spaces, all lowercase, hyphens only).

const posts = [
  {
    slug: "what-i-learned-about-css-grid",
    title: "What I Learned About CSS Grid",
    category: "CSS",
    date: "March 1, 2026",
    image: "assets/images/post-1.jpg",
    excerpt:
      "CSS Grid finally clicked for me this week. Here's what made it make sense.",
    body: [
      "This week I tackled CSS Grid and it completely changed how I think about layout. Before Grid, I was stacking flexbox containers inside each other to get two-dimensional layouts, which worked but felt clunky.",
      "The breakthrough was understanding that Grid works on two axes at once. You define the columns and rows on the parent, and the children just place themselves. The auto-fill + minmax pattern alone replaced three media queries in one of my projects.",
      "My favourite property so far is grid-template-areas. Being able to draw your layout in ASCII art inside your CSS is genuinely satisfying.",
    ],
  },
  {
    slug: "responsive-design-mobile-first",
    title: "Why Mobile-First Actually Makes Sense",
    category: "Responsive Design",
    date: "February 22, 2026",
    image: "assets/images/post-2.jpg",
    excerpt:
      "I resisted mobile-first for months. Here's what finally convinced me.",
    body: [
      "For a long time I wrote my CSS desktop-first and used max-width media queries to scale down. It worked, but scaling down always felt like fighting the cascade rather than working with it.",
      "Mobile-first flips the script: you write the simplest layout first (one column, full width, readable text) and progressively enhance from there. The base CSS is lean, and the media queries only add complexity — they never take it away.",
      "The real aha moment was realising that mobile constraints force you to prioritise content. If something is important enough to show on mobile, it's important. If it only makes sense on desktop, it's probably decorative anyway.",
    ],
  },
  {
    slug: "javascript-array-methods",
    title: "Array Methods That Changed How I Write JS",
    category: "JavaScript",
    date: "February 15, 2026",
    image: "assets/images/post-3.jpg",
    excerpt:
      "map, filter, and reduce went from intimidating to essential in one week.",
    body: [
      "I avoided map, filter, and reduce for a long time because for loops felt safer and more explicit. Then I started reading other people's code and realised I was the only one still writing for (let i = 0; ...).",
      "Map is now my default for transforming arrays. Filter is how I build search features. And reduce, once I understood it as 'fold this array into one value', finally stopped being scary.",
      "The pattern that unlocked everything: chaining them. posts.filter(p => p.category === 'CSS').map(renderCard) reads almost like English.",
    ],
  },
  {
    slug: "flexbox-vs-grid",
    title: "Flexbox vs Grid: When to Use Which",
    category: "CSS",
    date: "February 8, 2026",
    image: "assets/images/post-4.jpg",
    excerpt:
      "A practical mental model for choosing between CSS Flexbox and Grid.",
    body: [
      "The question I kept googling: should I use flexbox or grid here? After building several projects with both, here's the mental model that works for me.",
      "Flexbox is one-dimensional. Use it when you want a row of things and don't care about aligning them to a grid — a nav bar, a row of buttons, a card's meta row. It distributes space along one axis.",
      "Grid is two-dimensional. Use it when you're laying out a page section and you need items to align in both rows and columns — a card grid, a page layout with a sidebar, a photo gallery. If you're thinking in terms of rows AND columns, use Grid.",
    ],
  },
  {
    slug: "traded-my-rifle-for-a-keyboard",
    title: "From a Soldier to a Software Developer",
    category: "Life",
    date: "February 1, 2026",
    image: "assets/images/soldiers-marching.jpg",
    excerpt: "I traded my rifle for a keyboard and a cup of coffee. ",
    body: [
      "Life doesn't always turn out as you always wanted, learned that the painful way. With a rifle on my shoulder, I used to march the hallowed grounds of the Borromeo Field in the Philippine Military Academy.",
      "Now I am drowning in codes and docs with me and my PC against the world. The shift was hard but it's nothing compared to how hard my life used to be.",
      "Although I'm glad to be not waking up with the morning bugle anymore, there's just some parts of the military life that can never be replaced by civilian life.",
      "Do I miss it? Yes. Do I have some regrets? Maybe a little. Would I want to go back? Probably not.",
      "I think the universe placed me exactly where I need to be, all that's left for me is to put in the work to become the man I need to be. One cup of coffee at a time.",
    ],
  },
];

// TODO 2 (STRETCH — fetch() migration):
// When you are ready to practise async/await, move this array to a file called js/posts.json.
// Then replace the array reference in main.js and post.js with:
//
//   const posts = await fetch('./js/posts.json').then(r => r.json())
//
// The shape of each post object stays exactly the same — no other changes needed.
// Note: fetch() requires a local server (e.g. VS Code Live Server extension).
// It does NOT work when opening the file directly as file:// in the browser.
