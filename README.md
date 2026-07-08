# PRIM'O — Landing Page

Static landing page for **PRIM'O**, a B2B SaaS platform for merit-based employee recognition. Employers and managers reward performance with tokens that employees redeem for real rewards through a partner catalog.

## Overview

Single-page site built with plain HTML, CSS, and vanilla JavaScript — no framework, no build step, no dependencies.

- **Hero scene**: full-bleed background image (logo + tagline baked in) with a looping CSS-animated "token rain" effect and two avatars framing the content.
- **Feature sections**: four alternating text/screenshot blocks (Employer, Manager, Catalog, Settings) showcasing the app's dashboards inside phone mockups.
- **Call to action**: closing section with a QR code linking to the live app.

## Project structure

```
.
├── index.html      # Page markup and section content
├── style.css       # Layout, theming, and animations
├── script.js       # Token rain generation (DOM injection + randomized timing)
└── assets/         # Images, screenshots, and QR code
    ├── landingPage-primo.png   # Hero background (logo + slogan included)
    ├── token-logo-SF.png       # Token image used for the falling animation
    ├── av_3.png / av_4.png     # Left/right avatars
    ├── ecran-employer.png      # Employer dashboard screenshot
    ├── ecran-manageur.png      # Manager dashboard screenshot
    ├── ecran-catalogue.png     # Rewards catalog screenshot
    ├── ecran-parametre.png     # Settings screen screenshot
    └── qr-primo.svg            # QR code to the live app
```

## Running locally

No build tools required — just serve the folder statically, for example:

```bash
npx serve .
# or
python3 -m http.server
```

Then open the printed local URL in your browser.

## How the token rain works

`script.js` generates a variable number of token images (12–28, depending on viewport width) inside `#tokenRain`. Each token gets a randomized size, fall duration, start delay, opacity, and rotation so the animation feels organic rather than mechanical. The rain rebuilds on window resize (debounced) to adapt density to screen size.

## Notes

- All page copy (logo, slogan) is baked into `landingPage-primo.png` — it is intentionally not duplicated in HTML.
- This is a static page with no backend, CMS, or dynamic content.
