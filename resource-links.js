window.DISTRICT_V_RESOURCES = {
  football: {
    handbook: "documents/sports/District-V-Football-2026-27-Packet.pdf",
    scores: "https://district5.piaa.org/sports/fall/football/D5%20Football%20Scores%202025.pdf",
    classA: {
      rankings: "https://district5.piaa.org/sports/fall/football/a/rankings.html",
      bracket: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQVMJZaFV8KaIo8WCgpkv_1F33pM87OVN2Opg4e8Eq1dGOgDYt2HOaCtz8b59k7gi6ZWXiFYwjo6Ux/pubhtml?gid=1634357382&single=true"
    },
    classAA: {
      rankings: "https://district5.piaa.org/sports/fall/football/aa/rankings.html",
      bracket: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQVMJZaFV8KaIo8WCgpkv_1F33pM87OVN2Opg4e8Eq1dGOgDYt2HOaCtz8b59k7gi6ZWXiFYwjo6Ux/pubhtml?gid=4003&single=true"
    }
  }
};

document.querySelectorAll("[data-resource]").forEach((link) => {
  const value = link.dataset.resource
    .split(".")
    .reduce((current, key) => current && current[key], window.DISTRICT_V_RESOURCES);

  if (value) {
    link.href = value;
  }
});
