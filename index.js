// JavaScript array (required)
const announcements = [
  "Registration opens on June 15.",
  "Workshop seats are limited.",
  "Please bring your laptop to the lab session.",
  "Weekly chess puzzles are now available online.",
  "Club tournament starts next Friday."
];

// Loop through array and display dynamically
announcements.forEach(function (announcement) {
  const item = document.createElement("li");
  item.textContent = announcement;

  document.getElementById("announcements").appendChild(item);
});