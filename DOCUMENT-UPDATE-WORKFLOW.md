# District V Website Document Update Workflow

Use this process whenever a new sport packet, tournament form, bracket, or similar PDF is added to the website.

## 1. Start with the current project

Before editing, open Git Bash in the `DistrictVWebsite` folder and run:

```bash
git pull origin main
```

This makes sure the local website folder includes the most recent code and documents.

## 2. Save the document in the website project

Place the new PDF in:

```
documents/sports/
```

Use the established filename format:

```
District-V-[Sport]-[Season]-Packet.pdf
```

Example:

```
District-V-Golf-2026-27-Packet.pdf
```

Keep the source document unchanged unless the tournament director specifically sends a corrected version.

## 3. Update the correct website files

For fall sports such as Golf:

- Update the season label in the sport page, such as `golf.html`.
- Update the document card in `fall-sports.js`.

For winter and spring sports:

- Update the season label in the sport page.
- Update the document card in `seasonal-sports.js`.

For Football, also check `resource-links.js`, which supplies its handbook and report links.

Each document card should include:

- the current season or year in its title;
- a brief, accurate description;
- the matching filename in `documents/sports/`;
- the existing button wording unless a change is needed.

## 4. Publish the update

After the page and PDF are updated, commit and push the changes to GitHub. If the update was published directly to GitHub, run this locally afterward:

```bash
git pull origin main
```

## 5. Verify the live page

Check the sport page in a browser and confirm:

1. The season label is current.
2. The document card title is current.
3. The card opens the new PDF.
4. The PDF opens cleanly and is the correct version.

If the page still shows older information, use a hard refresh:

```
Ctrl + Shift + R
```

## Golf Packet Example

| Item | Standard |
| --- | --- |
| Folder | `documents/sports/` |
| File | `District-V-Golf-2026-27-Packet.pdf` |
| Page | `golf.html` |
| Data file | `fall-sports.js` |
| Card title | `2026 District V Golf Information` |
| Season label | `2026-2027 Season` |
