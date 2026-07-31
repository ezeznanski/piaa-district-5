const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const year = document.querySelector("#current-year");

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
