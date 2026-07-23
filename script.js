const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const year = document.querySelector("#current-year");

const playoffTicketsUrl = "https://events.hometownticketing.com/boxoffice/piaad5/L2VtYmVkL2FsbA%3D%3D";

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.textContent.trim() === "Playoffs" && link.getAttribute("href") === "#") {
    link.textContent = "Playoff Tickets";
    link.href = playoffTicketsUrl;
    link.target = "_blank";
    link.rel = "noopener";
  }
});

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
