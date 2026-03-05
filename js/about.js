// =============================================================
// about.js — About Page JavaScript
// All functionality in this file is stretch goal content.
// Complete the core HTML/CSS TODOs on all three pages first.
// =============================================================

// ----------------------------------------------------------------
// STRETCH GOALS
// ----------------------------------------------------------------

// TODO 1 (STRETCH — Theme Toggle):
//   Implement dark/light mode toggling that persists across page loads.
//
//   This logic needs to run on ALL pages (not just about.html).
//   Two options:
//   A) Create a new file js/theme.js with this code and add
//      <script src="js/theme.js"></script> to every HTML file's <head>.
//   B) Add this logic to main.js and post.js directly (less clean but simpler).
//
//   Step-by-step:
//   1. On page load, read the saved theme from localStorage:
//      const savedTheme = localStorage.getItem('theme')
//      if (savedTheme === 'dark') {
//        document.documentElement.setAttribute('data-theme', 'dark')
//      }
//
//   2. Select the .theme-toggle button. Use optional chaining (?.) so this
//      does not throw an error on pages where the button does not exist yet:
//      const themeToggle = document.querySelector('.theme-toggle')
//
//   3. On click, read the current state and swap it:
//      themeToggle?.addEventListener('click', () => {
//        const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
//        if (isDark) {
//          document.documentElement.removeAttribute('data-theme')
//          localStorage.setItem('theme', 'light')
//        } else {
//          document.documentElement.setAttribute('data-theme', 'dark')
//          localStorage.setItem('theme', 'dark')
//        }
//      })
//
//   4. Add the [data-theme="dark"] CSS override block in style.css (TODO 6 in that file).
//   5. Add the .theme-toggle button to the nav in all three HTML files (index.html TODO 3).


// TODO 2 (STRETCH — Hamburger Menu):
//   Implement a mobile navigation toggle.
//   The .hamburger button toggles the .nav-links list open and closed on small screens.
//
//   document.querySelector('.hamburger')?.addEventListener('click', () => {
//     document.querySelector('.nav-links').classList.toggle('open')
//   })
//
//   Also add CSS in nav.css (TODO 5) to:
//   - Hide .nav-links on mobile (display: none)
//   - Show .nav-links.open on mobile (display: flex, flex-direction: column)
//   - Show .hamburger only on mobile, hide on desktop
//   - Add the .hamburger button to the nav HTML in all three HTML files (index.html TODO 3).
