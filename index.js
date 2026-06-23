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

});