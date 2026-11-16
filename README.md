# Rozhin Ahmadi — personal site

This is a static site for GitHub Pages. It is served from the `main` branch at [https://rozhinahmadi.github.io](https://rozhinahmadi.github.io). There is no build step. An empty `.nojekyll` file is in the repo root so GitHub Pages will not run Jekyll.

This guide is for Amir, who will fill in the blanks and publish the site.

## Preview locally

From the repo root:

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/). Root-relative links (`/css/styles.css`, `/js/nav.js`) need that local server. Opening `index.html` as a file will not load the menu.

## Publish

After this pull request is merged to `main`, turn on GitHub Pages if it is not already on: Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Where things live

| File | What it is |
| --- | --- |
| `index.html` | The whole page, in this order: hero, case studies, tools, experience, education, research, about, contact |
| `case-studies/vancouver-university-campus.html` | The campus energy model |
| `case-studies/teaching-building-lca.html` | Building LCA labs at SFU |
| `case-studies/placeholder.html` | Empty case-study template. It is marked `noindex` |
| `css/styles.css` | All styling. Colors and fonts are in `:root` at the top |
| `js/nav.js` | The only copy of the menu. Do not paste the menu into HTML files |
| `js/footer.js` | The only copy of the footer |
| `js/main.js` | Mobile menu and the current-section highlight |
| `assets/resume/Rozhin-Ahmadi-Resume.pdf` | The file the Download resume button opens |
| `assets/img/` | Photos and figures |
| `sitemap.xml` | Pages search engines should see. The placeholder case study is left out on purpose |

`nav.js` and `footer.js` are plain scripts with no `async` and no `defer`. Leave them that way. They write the menu and footer while the page loads.

## Edit text

Most sentences are in `index.html`. Case-study pages repeat the campus numbers and the lab image so a shared link has the same facts. If you change a result, change it in both places.

The hero and the About section use Rozhin’s bio. Standards named on the site are ones she has used: NECB 2020, ASHRAE 62.1 (ventilation), and the BC Energy Step Code, plus IES VE and the Athena Impact Estimator.

The contact email is in `index.html`, in the contact section. `@` is written as `&#64;` so the link still works in a browser and the raw HTML is a bit less obvious to scrapers. If the address changes, update both the `href` and the visible text.

## Change colors and type

Open `css/styles.css` and edit the variables in `:root`.

| Variable | Role |
| --- | --- |
| `--paper` | Page background |
| `--paper-raised` | Cards |
| `--ink` | Body text |
| `--ink-soft` | Secondary text |
| `--line` | Borders |
| `--sage` | Tools strip and About band |
| `--forest` | Nav, hero, and contact |
| `--forest-deep` | Footer |
| `--cream` / `--cream-dim` | Text on the dark bands |
| `--teal` / `--teal-deep` | Links and small labels |
| `--clay` | The short warm rule and the menu mark |
| `--ph-bg` / `--ph-ink` | The tan highlight on anything still unknown |
| `--font-serif` | Name and headings (Fraunces) |
| `--font-sans` | Body (Source Sans 3) |
| `--font-mono` | Labels and placeholder text (DM Mono) |

Font files are in `assets/fonts/`. Their licenses are the `OFL-*.txt` files beside them.

## Add a case study

1. Copy `case-studies/placeholder.html` to a new file, for example `case-studies/your-project.html`.
2. Delete the `<meta name="robots" content="noindex">` line so the page can be indexed.
3. Replace the title, the description, the canonical URL, and every bracketed line.
4. Save images in `assets/img/` and point the `<img src>` at them.
5. Add a card in `index.html` inside the case-studies section (`id="work"`), next to the existing cards.
6. Add the new URL to `sitemap.xml`.

## Profile photo

The hero photo is `assets/img/profile.jpg` (600×800, a 3:4 crop). The tag is in `index.html` around line 89, with alt text “Rozhin Ahmadi”. Replace that file to change the picture. Delete the `<figure class="hero-photo">` block to remove the photo.

## Leave these off the site

Do not add a phone number, references, or IELTS scores. Do not claim EIT, P.Eng., or LEED. If a credential line is added later, the only wording to use is: “Pursuing EIT registration with EGBC.”

The Mitacs industry partner stays unnamed. The public line is “a Vancouver post-secondary institution.” Do not add the organization’s name.

## Every placeholder

Unknowns are tan mono chips, or the word PLACEHOLDER on an image. Search the repo for `class="ph"` and `PLACEHOLDER`.

| What is missing | Where | Drop-in file, or what to edit |
| --- | --- | --- |
| Resume | `index.html` hero, the Download resume link (about line 79). The button label includes `[file]` | Replace `assets/resume/Rozhin-Ahmadi-Resume.pdf` and keep that filename. The current PDF only says “Resume coming soon” |
| Campus model image | `index.html` case studies (about line 104) and `case-studies/vancouver-university-campus.html` (about line 90) | Save the screenshot as `assets/img/campus-model.jpg` and change both `src` attributes |
| Campus results image | `index.html` (about line 109) and `case-studies/vancouver-university-campus.html` (about line 94) | Save the figure as `assets/img/campus-results.jpg` and change both `src` attributes |
| Floor area | Both campus write-ups: `index.html` about line 124, case-study page about line 75 | Replace `[Floor area: XX m²]` |
| Thermal zones | `index.html` about line 125, case-study page about line 76 | Replace `[Thermal zones: XX]` |
| TEDI | `index.html` about line 126, case-study page about line 77 | Replace `[TEDI: XX kWh/m²·yr]` |
| CEDI | `index.html` about line 127, case-study page about line 78 | Replace `[CEDI: XX kWh/m²·yr]` |
| TEUI | `index.html` about line 128, case-study page about line 79 | Replace `[TEUI: XX kWh/m²·yr]` |
| GHGI | `index.html` about line 129, case-study page about line 80 | Replace `[GHGI: XX kgCO2e/m²·yr]` |
| TEUI reduction | `index.html` about line 130, case-study page about line 81 | Replace `[% reduction in TEUI vs baseline: XX%]` |
| GHGI reduction | `index.html` about line 131, case-study page about line 82 | Replace `[% reduction in GHGI vs baseline: XX%]` |
| IES VE version | `case-studies/vancouver-university-campus.html` about line 55 | Replace `[software version: confirm]` |
| LCA lab image | `index.html` about line 141 and `case-studies/teaching-building-lca.html` about line 69 | Save it as `assets/img/lca-teaching.jpg` and change both `src` attributes |
| Third case study | `index.html` card `id="case-study-3"` (about lines 151–162). Title is “Case study placeholder” | Duplicate `case-studies/placeholder.html`, then point this card at the new file. Image drop-in: `assets/img/case-03.jpg` (the card currently uses `assets/img/case-placeholder-03.svg`) |
| Math-teaching employer | `index.html` experience, about line 220 | Replace `[School or organization: confirm]` |
| AgriEngOrg end year | `index.html` experience, about line 223 | Replace `[End year: confirm]` |
| Quality-control internship end year | `index.html` experience, about line 229 | Replace `[End year: confirm]` |
| IROST / University of Tehran year | `index.html` experience, about line 236 | Replace `[Year: confirm — 2017 or 2018]` |
| Thesis title | `index.html` education, about line 257 | Replace `[Thesis title: confirm]` |
| BSc class size | `index.html` education, about line 265 | Replace `[of XX students: confirm]` next to class rank 9 |
| SEE GRAD 2026 | `index.html` research, about lines 288–290 | Replace the title, date and place, and abstract chips |
| Publications | `index.html` research, about lines 296–297 | Replace the title and the citation line. Add another article the same way for each paper |

The template page `case-studies/placeholder.html` is entirely bracketed (project name, building type, role, software, goal, what was modelled, scenarios, and the four result chips). It is the file to copy, not a finished project.
