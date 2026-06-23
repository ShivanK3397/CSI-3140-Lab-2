
document.addEventListener("DOMContentLoaded", function () {

  // --- Dark Mode Toggle ---
  // Dynamically creates a button, inserts it into the header, and
  // toggles the dark-mode class on the body when clicked
  function createThemeToggle() {
    const header = document.querySelector(".site-header") || document.querySelector("header");
    if (!header) return;

    // Create the button and set its initial attributes
    const themeButton = document.createElement("button");
    themeButton.id = "theme-button";
    themeButton.textContent = "Dark Mode";
    themeButton.setAttribute("aria-pressed", "false");

    // Insert the button into the header
    header.appendChild(themeButton);

    // Toggle dark-mode class on body when button is clicked
    themeButton.addEventListener("click", function () {
      const isDark = document.body.classList.toggle("dark-mode");
      themeButton.textContent = isDark ? "Light Mode" : "Dark Mode";
      themeButton.setAttribute("aria-pressed", String(isDark));
    });
  }

  createThemeToggle();


  // --- Active Nav Link Highlighting ---
  // Adds the "active" class to the nav link matching the current page
  function highlightActiveNav() {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  }

  highlightActiveNav();

});