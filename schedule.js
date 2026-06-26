document.addEventListener("DOMContentLoaded", function () {
  const events = [
    {
      date: "May 21, 2026",
      title: "Welcome Event",
      location: "CRX 1st floor",
      type: "Welcome"
    },
    {
      date: "May 28, 2026",
      title: "Opening Workshop",
      location: "Morisset 218",
      type: "Workshop"
    },
    {
      date: "June 1, 2026",
      title: "Bullet Tournament",
      location: "LMX 240",
      type: "Tournament"
    },
    {
      date: "June 18, 2026",
      title: "Endgame Workshop",
      location: "Morisset 218",
      type: "Workshop"
    },
    {
      date: "August 21, 2026",
      title: "Blitz Tournament",
      location: "TBA",
      type: "Tournament"
    }
  ];

  let activeFilter = "all";

  const tableBody = document.getElementById("schedule-body");
  const statusText = document.getElementById("schedule-status");
  const filterButtons = document.querySelectorAll(".schedule-filter");

  function renderSchedule(items) {
    if (!tableBody || !statusText) return;

    tableBody.innerHTML = "";

    items.forEach(function (session) {
      const row = document.createElement("tr");

      const dateCell = document.createElement("th");
      dateCell.scope = "row";
      dateCell.textContent = session.date;

      const titleCell = document.createElement("td");
      titleCell.textContent = `${session.title} (${session.type})`;

      const locationCell = document.createElement("td");
      locationCell.textContent = session.location;

      row.appendChild(dateCell);
      row.appendChild(titleCell);
      row.appendChild(locationCell);
      tableBody.appendChild(row);
    });

    statusText.textContent = `${items.length} event${items.length === 1 ? "" : "s"} shown.`;
  }

  function applyFilter(filter) {
    activeFilter = filter;

    const filteredEvents = filter === "all"
      ? events
      : events.filter(function (session) {
          return session.type === filter;
        });

    filterButtons.forEach(function (button) {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderSchedule(filteredEvents);
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.dataset.filter || "all");
    });
  });

  applyFilter(activeFilter);
});