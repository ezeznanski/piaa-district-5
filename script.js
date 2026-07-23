const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const year = document.querySelector("#current-year");

const playoffTicketsUrl = "https://events.hometownticketing.com/boxoffice/piaad5/L2VtYmVkL2FsbA%3D%3D";

// Compose the identity from two directly loaded SVGs. This avoids the browser
// restriction that prevented the PIAA artwork nested inside piaa-d5.svg from rendering.
const logoBackground = [
  'url("assets/piaa-official.svg") left center / 48% auto no-repeat',
  'linear-gradient(#d2ac67, #d2ac67) 52% center / 2px 72% no-repeat',
  'url("assets/d5-wordmark.svg") right center / 42% auto no-repeat'
].join(", ");

document.querySelectorAll(".brand-mark").forEach((mark) => {
  mark.style.background = logoBackground;
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  const label = link.textContent.trim();

  if (label === "Playoffs" && link.getAttribute("href") === "#") {
    link.textContent = "Playoff Tickets";
    link.href = playoffTicketsUrl;
    link.target = "_blank";
    link.rel = "noopener";
  }

  if ((label === "Forms & Documents" || label === "Documents & Forms") && link.getAttribute("href") === "#") {
    link.href = "documents.html";
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
