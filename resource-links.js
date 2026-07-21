window.DISTRICT_V_RESOURCES = {
  football: {
    handbook: "https://district5.piaa.org/sports/fall/football/Football%20Info%202025-2026.pdf",
    scores: "https://district5.piaa.org/sports/fall/football/D5%20Football%20Scores%202025.pdf",
    classA: {
      rankings: "https://district5.piaa.org/sports/fall/football/a/rankings.html",
      bracket: "https://district5.piaa.org/sports/fall/football/a/2025-26%20FB%20Brackets%20-%201A.pdf"
    },
    classAA: {
      rankings: "https://district5.piaa.org/sports/fall/football/aa/rankings.html",
      bracket: "https://district5.piaa.org/sports/fall/football/aa/2025-26%20FB%20Brackets%20-%202A.pdf"
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
