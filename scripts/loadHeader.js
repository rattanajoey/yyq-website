function loadHeader() {
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      const headerContainer = document.getElementById("header-container");
      if (headerContainer) {
        headerContainer.innerHTML = data;

        // Set active class based on current URL
        const currentPath = window.location.pathname;
        const navLinks = headerContainer.querySelectorAll(".dropdown-nav-text");

        navLinks.forEach((link) => {
          if (link.getAttribute("href") === currentPath) {
            link.classList.add("drop-current");
          }
        });
      } else {
        console.error("Header container not found");
      }
    })
    .catch((error) => console.error("Error loading header:", error));
}

document.addEventListener("DOMContentLoaded", loadHeader);
