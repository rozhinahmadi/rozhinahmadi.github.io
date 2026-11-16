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
| `css/styles.css` | All styling. Colors and fonts are in `:root` at the top |
| `js/nav.js` | The only copy of the menu. Do not paste the menu into HTML files |
| `js/footer.js` | The only copy of the footer |
| `js/main.js` | Mobile menu and the current-section highlight |
| `assets/resume/Rozhin-Ahmadi-Resume.pdf` | The file the Download resume button opens |
| `assets/img/` | Photos and figures |
| `sitemap.xml` | Pages search engines should see |

`nav.js` and `footer.js` are plain scripts with no `async` and no `defer`. Leave them that way. They write the menu and footer while the page loads.

## Edit text

Most sentences are in `index.html`. The case-study pages repeat the same descriptions. Case studies describe what was modelled and compared. They do not state numeric findings.

Presentations holds one talk: “Study of Toxic Air Contaminants Exposure and Evacuation Zone for an Oil Tank Pool Fire in a Residential Neighborhood,” at the Canadian Society for Mechanical Engineering International Congress 2026. The nav item is Presentations.

## Resume

The Download resume button is in `index.html`, inside `.hero-actions`. It points at `assets/resume/Rozhin-Ahmadi-Resume.pdf` and downloads as `Rozhin-Ahmadi-Resume.pdf`. Replace that file to update the resume. Do not copy contact numbers from the PDF onto the page.

The hero, About, skills, and case studies follow the current bio. Standards named on the site are NECB 2020, the NECB 2025 performance path, ASHRAE 62.1 (ventilation), and the BC Energy Step Code, plus IES VE, ApacheHVAC, and the Athena Impact Estimator. The campus building is described only as a Vancouver university campus building, through a partnership with a Vancouver post-secondary institution.

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
| `--font-mono` | Small labels (DM Mono) |

Font files are in `assets/fonts/`. Their licenses are the `OFL-*.txt` files beside them.

## Add a case study

1. Copy `case-studies/teaching-building-lca.html` to a new file, for example `case-studies/your-project.html`.
2. Replace the title, the description, and the canonical URL.
3. Add a card in `index.html` inside the case-studies section (`id="work"`), next to the existing cards.
4. Add the new URL to `sitemap.xml`.

## Profile photo

The hero photo is `assets/img/profile.jpg` (600×800, a 3:4 crop). The tag is in `index.html` around line 89, with alt text “Rozhin Ahmadi”. Replace that file to change the picture. Delete the `<figure class="hero-photo">` block to remove the photo.

## Leave these off the site

Do not add a contact number, references, or IELTS scores. Do not claim EIT, P.Eng., or LEED. If a credential line is added later, the only wording to use is: “Pursuing EIT registration with EGBC.”

The Mitacs industry partner stays unnamed. The public line is “a Vancouver post-secondary institution.” Do not add the organization’s name.

## What was taken off the public page

Case studies describe scope only: what was modelled and what was compared. They do not show charts or numeric findings. The thesis line, the publications block, and SEE GRAD 2026 are gone. The nav item is Presentations, not Research. IES VE is named without a version. Open dates that were not known are shown as a start year only, or omitted. The math-teaching role has no employer line. Class rank is “9” with no class size.
