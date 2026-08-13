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

if (document.querySelector("#meeting-year")) {
  const meetingYear = document.querySelector("#meeting-year");
  const inServiceCard = document.querySelector('.meeting-year-group[data-year="2026-27"] .meeting-card');

  if (meetingYear && inServiceCard) {
    meetingYear.value = "2026-27";

    const actions = document.createElement("div");
    actions.className = "meeting-actions";
    actions.innerHTML = `
      <a href="meetings/2026-27/District%205%20Agenda%208-13-2026%20Morning%20Agenda.pdf" target="_blank" rel="noopener">In-Service Agenda</a>
      <a href="meetings/2026-27/District%205%20Agenda%208-13-2026.pdf" target="_blank" rel="noopener">Committee Agenda</a>
    `;

    const note = inServiceCard.querySelector(".meeting-note");
    if (note) {
      note.insertAdjacentElement("afterend", actions);
    } else {
      inServiceCard.querySelector(".meeting-info").appendChild(actions);
    }
  }
}
