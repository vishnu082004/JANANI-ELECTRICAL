# Janani Electricals

React website built with Vite.

## Run locally

```sh
npm install
npm run dev
```

## Build for production

```sh
npm run build
npm run preview
```

## Project structure

- `src/App.jsx` contains the site layout, page views, and route selection.
- `src/components/` contains reusable React components.
- `src/pages/` contains page modules used by the app.
- `src/content.js` contains product, client, process, and blog content and the media lookup.
- `src/content/company.js` contains company contact details.
- `src/assets/` contains images and videos bundled by Vite.
- `src/styles/` contains the site stylesheets.
- `public/` contains static files served as-is, including `robots.txt` and `sitemap.xml`.
- `archive/` stores the original HTML exports and one-off maintenance scripts; these are not loaded by the website.

## Website routes

- `/` — Home
- `/about-us/` — About Us
- `/products/` — Products
- `/blogs/` — Blog index
- Each article has its own URL based on its slug in `src/content.js`.
- `/contact-us/` — Contact
- `/privacy-policy/` — Privacy Policy

`/product-gallery/` redirects to `/products/`.
