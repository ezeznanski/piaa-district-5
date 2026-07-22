(() => {
  const years = Object.keys(window.CHAMPIONS_DATA || {});
  const requested = new URLSearchParams(window.location.search).get("year");
  const year = years.includes(requested) ? requested : years[0];
  const record = window.CHAMPIONS_DATA[year];
  const grid = document.querySelector("#record-grid");
  const search = document.querySelector("#record-search");
  const count = document.querySelector("#record-count");
  const empty = document.querySelector("#record-empty");

  document.title = `${year} Champions | PIAA District V`;
  document.querySelector("#record-year").textContent = year;
  document.querySelector("#record-summary").textContent = `${record.sports.length} sports represented in the ${year} District V championship record.`;

  const makeCard = ({ sport, champions }) => {
    const article = document.createElement("article");
    article.className = "champion-sport-card";
    article.dataset.search = `${sport} ${champions.map(({ label, winner }) => `${label} ${winner}`).join(" ")}`.toLowerCase();
    const heading = document.createElement("h3");
    heading.textContent = sport;
    const list = document.createElement("dl");
    champions.forEach(({ label, winner }) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const detail = document.createElement("dd");
      term.textContent = label;
      detail.textContent = winner;
      row.append(term, detail);
      list.append(row);
    });
    article.append(heading, list);
    return article;
  };

  record.sports.forEach((sport) => grid.append(makeCard(sport)));
  const cards = [...grid.children];

  const update = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const show = !query || card.dataset.search.includes(query);
      card.hidden = !show;
      if (show) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? "sport" : "sports"} shown`;
    empty.hidden = visible !== 0;
  };
  search.addEventListener("input", update);
  update();

  const index = years.indexOf(year);
  const newer = document.querySelector("#newer-year");
  const older = document.querySelector("#older-year");
  if (index > 0) newer.href = `champion-year.html?year=${years[index - 1]}`;
  else newer.hidden = true;
  if (index < years.length - 1) older.href = `champion-year.html?year=${years[index + 1]}`;
  else older.hidden = true;
})();
