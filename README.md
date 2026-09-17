# The Food Court — EASTC public venue site

Public website for **The Food Court** on the EASTC Technocentric Varsity campus.

This is an **informative venue / events site**, not a food-ordering app.

- Live domain: [https://eastechfoodcourt.co.za/](https://eastechfoodcourt.co.za/)
- GitHub Pages source: `main` branch, site root (`/`)
- Meals, pre-order, cart, and checkout belong on [https://thefood-court.co.za/](https://thefood-court.co.za/)

## What this site covers

- Hero and campus pavilion story
- About the venue (kitchen, glass lounge, courtyard)
- Events and space hire
- Gallery of on-site photographs
- Kitchen hours
- Location: **43 Maxwell Street, Kempton Park** (43B on some EASTC listings)
- Contact / enquiry (opens email to `queries@eastc.co.za`)

## Local preview

The site is static HTML, CSS, and JavaScript. No build step.

```bash
# from the repository root
python3 -m http.server 8080
```

Open [http://localhost:8080/](http://localhost:8080/).

Any other static server works (`npx serve`, VS Code Live Server, etc.). Keep the root at the repo root so `assets/` and `CNAME` resolve.

## Deploy to GitHub Pages

GitHub Pages is already enabled for this repository:

| Setting | Value |
| --- | --- |
| Source | Deploy from a branch |
| Branch | `main` |
| Folder | `/` (root) |
| Custom domain | `eastechfoodcourt.co.za` |
| HTTPS | Enforced |

### First-time or rebuilt setup

1. Push this repository to `billyboy95/eastech-food-court` on `main`.
2. GitHub → **Settings → Pages**.
3. Set source to **Deploy from a branch**, branch **`main`**, folder **`/`**.
4. Under **Custom domain**, enter `eastechfoodcourt.co.za` and save.
5. Wait for DNS checks, then tick **Enforce HTTPS**.

The `CNAME` file in the repo root must contain:

```
eastechfoodcourt.co.za
```

`.nojekyll` is present so GitHub Pages does not run Jekyll (underscore folders and raw HTML stay as-is).

### Custom domain DNS

At the domain registrar, point `eastechfoodcourt.co.za` at GitHub Pages:

**Apex (recommended A records)**

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**www CNAME**

```
www.eastechfoodcourt.co.za  →  billyboy95.github.io
```

AAAA records for GitHub Pages IPv6 are listed in [GitHub’s Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

After DNS propagates, confirm:

- [https://eastechfoodcourt.co.za/](https://eastechfoodcourt.co.za/)
- [https://www.eastechfoodcourt.co.za/](https://www.eastechfoodcourt.co.za/) (if `www` is configured)

A Pages deploy usually finishes a minute or two after a push to `main`.

## Project layout

```
index.html          Home (hero, about, spaces, kitchen note, gallery, hours, map)
about.html          Venue story
events.html         Hire spaces + enquiry form
gallery.html        Photograph grid + lightbox
contact.html        Contact + map
meals.html          Pointer to thefood-court.co.za (no cart here)
menu.html           Redirect → meals.html
today.html          Redirect → meals.html
specials.html       Redirect → meals.html
catering.html       Redirect → events.html
404.html
CNAME
.nojekyll
assets/css/venue.css
assets/js/venue.js
assets/img/         On-site photography
```

## Brand

Navy and gold follow the EASTC ecosystem (`#0B1F3A`, `#D4A437`). The round red **FC** mark matches the badge on the building.

## What this repo does not include

- Shopping cart, checkout, or payment
- Live menu board as a product
- Server-side form handling (enquiry opens a mail client)

For hire or general queries: **011 394 1488** · **queries@eastc.co.za** · 43 Maxwell Street, Kempton Park.
