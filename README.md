# Sample Cafe – Responsive Business Website (Concept)

> **Concept / sample project.** A self-made demo for portfolio purposes. "Sample Cafe" is a fictional business – it is **not client work**. All text, prices, hours and the address are placeholders, and the booking form does not send or store any data.

## What it is
A responsive multi-section website for a fictional neighbourhood cafe: hero, story, tabbed menu, photo gallery, booking form UI, opening hours / location and footer.

## Tech
- Semantic **HTML5**
- Hand-written **CSS** (custom properties, Grid, Flexbox, `clamp()` fluid type, `prefers-reduced-motion`)
- Vanilla **JavaScript** (no dependencies, no build step)
- Royalty-free stock photos (Unsplash) stored locally in `assets/images/` (resized, compressed, `object-fit: cover` with fixed aspect ratios, descriptive alt text); the logo, favicon and map are inline SVG; no third-party fonts or hot-linked assets

## Features
- Mobile-first responsive layout with a collapsible navigation
- Accessible tabbed menu (arrow-key / Home / End support, ARIA roles)
- Booking form UI with client-side validation, inline error messages and an on-screen confirmation (**front-end only**)
- Skip link, visible focus styles, sufficient colour contrast, one `h1`, landmark regions
- Lighthouse-style practices: meta description, theme colour, favicon, no render-blocking JS (`defer`), no external requests, optimised images

## Run locally
```bash
python3 -m http.server 8000   # or open index.html directly
```
Then visit http://localhost:8000.

## Screenshots
| Desktop | Mobile |
|---|---|
| ![Desktop](screenshots/desktop.png) | ![Mobile](screenshots/mobile.png) |

## Photo credits
Stock photos are from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license) (free for commercial use, no attribution required – credited here anyway). They are generic placeholders and do not depict a real business.

| File (`assets/images/`) | Used for | Photo | Photographer |
|---|---|---|---|
| `hero-cafe-interior.jpg` | Hero | https://unsplash.com/photos/cozy-cafe-interior-with-wooden-tables-and-chairs-AiSh2Y6tlpk | Tasha Kostyuk |
| `about-sunlit-table.jpg` | Our story | https://unsplash.com/photos/sunlight-streams-through-a-window-onto-a-cafe-table-6_Yye5kmEkM | Long Chung |
| `menu-coffee.jpg` | Menu – Coffee | https://unsplash.com/photos/latte-art-in-a-coffee-cup-on-a-wooden-table-HINbY6sHh3M | Nadia Valko |
| `menu-bakery.jpg` | Menu – Bakery | https://unsplash.com/photos/freshly-baked-croissants-displayed-in-a-bakery-case-NFSD019JVrI | Khanh Do |
| `menu-brunch.jpg` | Menu – Brunch | https://unsplash.com/photos/avocado-toast-with-poached-egg-and-greens-wwIGj5h4LmI | Humphrey M |
| `gallery-cappuccino.jpg` | Gallery – Latte art | https://unsplash.com/photos/a-coffee-cup-with-latte-art-on-a-wooden-table-GVCliS6raYY | Juno Jo |
| `gallery-bakery-case.jpg` | Gallery – Fresh bakes | https://unsplash.com/photos/bakery-display-case-filled-with-fresh-bread-and-pastries-NmECeQiuTuk | Hazel J |
| `gallery-plants.jpg` | Gallery – Green corners | https://unsplash.com/photos/cozy-cafe-interior-with-wooden-tables-and-lush-plants-FxcSWWu98Ys | Nguyen Phuc Hau |
| `gallery-interior.jpg` | Gallery – Quiet seats | https://unsplash.com/photos/cozy-cafe-interior-with-wooden-tables-and-plants-q1SgzwmvR1s | Kris Tian |

## Honest note
This is a sample built to demonstrate my web development workflow. It contains no real brand, testimonials, metrics or client data. Photos are stock images used as placeholders.
