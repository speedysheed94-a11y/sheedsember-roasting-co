# Ember Roasting Co. — Mini Project Website

A three-page website for a fictional small-batch coffee roastery, built as a capstone covering F1–F7.

**Live site:** _add your deployed URL here after publishing (see Deployment below)_

## Pages
- `index.html` — Home: hero with an SVG "roast curve" graphic, value props, featured coffee.
- `about.html` — Beans & Process: current single-origin lineup and a four-stage roasting process.
- `contact.html` — Contact: roastery info and a validated contact form.

## How this covers F1–F7

**F1–F2 HTML & CSS**
- Semantic markup throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- One shared stylesheet (`style.css`) using CSS custom properties for a consistent color and type system, responsive layout with media queries, and a mobile nav.

**F3–F4 JavaScript** (`script.js`)
- Mobile menu toggle (`initNavToggle`) with `aria-expanded` state.
- Contact form validation (`initContactForm`) — required fields, email pattern check, inline error messages, blur + submit validation.
- Dynamic time-of-day greeting on the home page (`initGreeting`) and a footer year that updates automatically (`setFooterYear`).

**F5 Web technologies**
- Design principles: consistent alignment to a shared grid, repetition of the eyebrow/label pattern and mono-font data tags, proximity grouping in cards and form fields, and one high-contrast accent color (amber) used sparingly against a dark/light two-tone base.
- Basic SEO: unique `<title>` per page, a `<meta name="description">` per page, descriptive `alt` text on images, and one `<h1>` per page.

**F6 Version control**
- Git repository initialized locally with staged, meaningful commits.
- Feature branch `feature/js-interactivity` used for the JavaScript work, merged back into `main` with `--no-ff` to preserve history.

**F7 Deployment**
- Ready to deploy as a static site to GitHub Pages, Netlify, or Vercel — no build step required. See below.

## Deploying

### GitHub Pages
1. Create a new GitHub repository and push this project:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Netlify
1. Push the repo to GitHub (see above), or use `netlify deploy` from the CLI.
2. In Netlify, click **Add new site → Import an existing project**, pick the repo.
3. Leave the build command empty and the publish directory as `/` (this is a static site, no build step).
4. Deploy — Netlify gives you a live URL immediately.

### Vercel
1. Push the repo to GitHub.
2. In Vercel, **Add New → Project**, import the repo.
3. Framework preset: **Other** (static site). Leave build command empty, output directory `/`.
4. Deploy.

## Local preview
No build tools are required. Open `index.html` directly in a browser, or serve the folder locally:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.
