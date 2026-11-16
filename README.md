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
| `case-studies/future-climate-resilience.html` | 2040, 2050 and 2060 HVAC runs for that same building |
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

Most sentences are in `index.html`. Case-study pages repeat the campus numbers, the future-climate numbers, and the lab image so a shared link has the same facts. If you change a result, change it in both places.

The CSME 2026 talk is written out under Research and presentations. It is not a placeholder.

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
| Resume | `index.html` hero, the Download resume link (about line 81). The button label includes `[file]` | Replace `assets/resume/Rozhin-Ahmadi-Resume.pdf` and keep that filename. The current PDF only says “Resume coming soon” |
| Campus model image | `index.html` case studies (about line 106) and `case-studies/vancouver-university-campus.html` (about line 88) | Save the screenshot as `assets/img/campus-model.jpg` and change both `src` attributes |
| Campus results image | `index.html` (about line 111) and `case-studies/vancouver-university-campus.html` (about line 92) | Save the figure as `assets/img/campus-results.jpg` and change both `src` attributes |
| Heating load | `index.html` about line 126 and `case-studies/vancouver-university-campus.html` about line 74 | Replace `[Heating load: XX]` |
| Cooling load | `index.html` about line 127 and the campus page about line 75 | Replace `[Cooling load: XX]` |
| GHGI | `index.html` about line 128 and the campus page about line 76 | Replace `[GHGI: XX]` |
| IES VE version | Campus page about line 55, and `case-studies/future-climate-resilience.html` about line 51 | Replace `[IES VE version: confirm]` |
| Future-climate figure | `index.html` about line 151 and `case-studies/future-climate-resilience.html` about line 71 | Save it as `assets/img/future-climate.jpg` and change both `src` attributes |
| 2040 performance | `index.html` about line 160 and the future-climate page about line 62 | Replace `[2040 performance: XX]` |
| 2050 performance | `index.html` about line 161 and the future-climate page about line 63 | Replace `[2050 performance: XX]` |
| 2060 performance | `index.html` about line 162 and the future-climate page about line 64 | Replace `[2060 performance: XX]` |
| Operating cost change | `index.html` about line 163 and the future-climate page about line 65 | Replace `[Operating cost change: XX]` |
| LCA lab image | `index.html` about line 138 and `case-studies/teaching-building-lca.html` about line 69 | Save it as `assets/img/lca-teaching.jpg` and change both `src` attributes |
| Math-teaching employer | `index.html` experience, about line 225 | Replace `[School or organization: confirm]` |
| AgriEngOrg end year | `index.html` experience, about line 228 | Replace `[End year: confirm]` |
| Quality-control internship end year | `index.html` experience, about line 234 | Replace `[End year: confirm]` |
| IROST / University of Tehran year | `index.html` experience, about line 241 | Replace `[Year: confirm — 2017 or 2018]` |
| Thesis title | `index.html` education, about line 262 | Replace `[Thesis title: confirm]` |
| BSc class size | `index.html` education, about line 270 | Replace `[of XX students: confirm]` next to class rank 9 |
| SEE GRAD 2026 | `index.html` research, about lines 299–301 | Replace the title, date and place, and abstract chips |
| Publications | `index.html` research, about lines 307–308 | Replace the title and the citation line. Add another article the same way for each paper |

The template page `case-studies/placeholder.html` is entirely bracketed (project name, building type, role, software, goal, what was modelled, scenarios, and the four result chips). It is the file to copy, not a finished project.
