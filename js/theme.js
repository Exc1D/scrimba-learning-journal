// =============================================================
// theme.js — Theme Toggle & Hamburger Menu
// PRACTICE FILE — implement each TODO to rebuild the functionality.
// =============================================================

// -------------------------------------------------------------
// TODO 1 — PERSIST THEME ACROSS PAGE LOADS
// When the page loads, check if the user previously chose dark mode.
// Use localStorage.getItem("theme") to retrieve the saved value.
// If it equals "dark", immediately apply the dark theme by setting
// the data-theme attribute on the <html> element:
//   document.documentElement.setAttribute("data-theme", "dark")
//
// This must run BEFORE the DOM paints to avoid a flash of wrong theme.
// That's why theme.js is the FIRST script loaded on every page.
// -------------------------------------------------------------

// TODO: read from localStorage and apply saved theme on load

// -------------------------------------------------------------
// TODO 2 — SELECT THE TOGGLE BUTTON
// Use document.querySelector() to find the .theme-toggle button.
// Store it in a const — you'll use it in multiple places below.
// -------------------------------------------------------------

// TODO: const themeToggle = ...

// -------------------------------------------------------------
// TODO 3 — ACCESSIBILITY HINT FUNCTION
// Create a function called updateToggleHint() that:
//   1. Checks if the current theme is dark by reading the
//      data-theme attribute from document.documentElement
//   2. Updates the button's title attribute:
//        dark  → "Switch to light mode"
//        light → "Switch to dark mode"
//   3. Updates the button's aria-label to the same string
//      (aria-label is what screen readers announce)
//
// Guard against themeToggle being null (the button might not
// exist on a page that doesn't have a nav).
//
// Call this function immediately after defining it so the hint
// is correct on initial page load.
// -------------------------------------------------------------

function updateToggleHint() {
  // TODO
}

// TODO: call updateToggleHint() here

// -------------------------------------------------------------
// TODO 4 — THEME TOGGLE CLICK HANDLER
// Add a "click" event listener to the themeToggle button.
// On click:
//   - Check if dark mode is currently active (read data-theme)
//   - If dark:
//       remove the data-theme attribute from document.documentElement
//       save "light" to localStorage
//   - If light:
//       set data-theme="dark" on document.documentElement
//       save "dark" to localStorage
//   - Call updateToggleHint() to refresh accessibility text
//
// Guard with: if (themeToggle) { ... }
//
// Note: you do NOT need to change the SVG icon in JavaScript.
// The CSS already handles the sun/moon swap using [data-theme="dark"]
// selectors — changing the data-theme attribute is enough.
// -------------------------------------------------------------

// TODO: add click event listener to themeToggle

// -------------------------------------------------------------
// TODO 5 — HAMBURGER MENU TOGGLE (mobile nav)
// Select both .hamburger and .nav-links using querySelector.
// Add a "click" event listener to the hamburger button.
// On click: toggle the "open" class on the navLinks element.
//   navLinks.classList.toggle("open")
//
// The CSS handles the show/hide — .nav-links.open sets display: flex.
//
// Guard with: if (hamburger && navLinks) { ... }
// -------------------------------------------------------------

// TODO: hamburger menu toggle
