document.addEventListener("DOMContentLoaded", function () {

  // --- Welcome Message ---
  function updateWelcomeMessage() {
    const message = document.querySelector("#welcome-message");
    if (message) {
      message.textContent = "Welcome to our interactive CSI 3140 website!";
    }
  }
 
  updateWelcomeMessage();

  // JavaScript array (required)
  const announcements = [
    "Registration opens on June 15.",
    "Workshop seats are limited.",
    "Please bring your laptop to the lab session.",
    "Weekly chess puzzles are now available online.",
    "Club tournament starts next Friday."
  ];

  const chessTips = [
    "Develop your pieces before launching an attack.",
    "Protect the center early so your pieces have more space.",
    "When ahead in material, trade pieces but avoid unnecessary pawn trades.",
    "Castle early to keep your king safe and connect your rooks.",
    "Before every move, check for checks, captures, and threats."
  ];

  let tipIndex = 0;

  // Loop through array and display dynamically
  function loadAnnouncements(items) {
    const list = document.getElementById("announcements");
    if (!list) return;
 
    // Clear any existing items before inserting
    list.innerHTML = "";
 
    items.forEach(function (announcementText) {
      const item = document.createElement("li");
      item.textContent = announcementText;
      item.classList.add("announcement-item");
      list.appendChild(item);
    });
  }
 
  loadAnnouncements(announcements);

  function showTip(index) {
    const tipText = document.getElementById("tip-text");
    if (!tipText) return;

    tipText.textContent = chessTips[index];
  }

  function setupAnnouncementToggle() {
    const toggleButton = document.getElementById("toggle-announcements");
    const panel = document.getElementById("announcements-panel");

    if (!toggleButton || !panel) return;

    toggleButton.addEventListener("click", function () {
      const isHidden = panel.classList.toggle("is-hidden");
      toggleButton.textContent = isHidden ? "Show Announcements" : "Hide Announcements";
      toggleButton.setAttribute("aria-expanded", String(!isHidden));
    });
  }

  function setupTipButton() {
    const tipButton = document.getElementById("next-tip");
    if (!tipButton) return;

    showTip(tipIndex);

    tipButton.addEventListener("click", function () {
      tipIndex = (tipIndex + 1) % chessTips.length;
      showTip(tipIndex);
    });
  }

  setupAnnouncementToggle();
  setupTipButton();

});