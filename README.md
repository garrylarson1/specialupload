# Bell Consulting

Marketing site for Bell Consulting — a static, multi-page site built with plain
HTML, CSS, and a little vanilla JavaScript. No framework, no build step.

## Pages
- `index.html` — home
- `about.html` — about
- `growth-solutions.html`, `market-solutions.html`, `services.html` — What We Do
- `work.html` — case studies + testimonials
- `contact.html` — contact form
- `privacy.html`

## Layout
- `css/tokens.css` — design tokens (colour, type, spacing, motion)
- `css/style.css` — site styles
- `js/main.js` — entry module; loads `navigation`, `disclosure`, `contact`
- `assets/` — logos, favicon, and the generated brand visuals
- `robots.txt`, `sitemap.xml`

## URLs
Pages link to extensionless paths (`/about`, `/work`, …). GitHub Pages, Netlify,
Vercel and Cloudflare Pages all resolve those to the matching `.html` file, so the
`.html` never shows in the address bar.

## Running locally
The JS is loaded as ES modules and the links are extensionless, so use a static
server that resolves clean URLs (don't open the files directly with file://):

    npx serve

Then open the printed http://localhost:3000. (`python3 -m http.server` works too,
but it won't map `/about` to `about.html` — you'd hit the file as `/about.html`.)

## Deploy
Drop the folder on any static host (GitHub Pages, Netlify, Cloudflare Pages…).
Nothing to compile.
