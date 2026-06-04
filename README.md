# Fat Cat Bakery — Demo Website

React + Vite + Tailwind CSS single-page site for Fat Cat Bakery, Charlottetown PEI.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for production

```bash
npm run build
npm run preview   # local preview of the build
```

## Deploy to Vercel

```bash
npx vercel
# or push to GitHub and import the repo at vercel.com
```

Vercel auto-detects Vite; no extra config needed. Set the build command to `npm run build` and output directory to `dist` if prompted.

## Swapping in real content

### Photos
All images currently use `picsum.photos` placeholders. Each component has a comment showing where to drop in the real path, e.g.:

```jsx
// Replace with: <img src="/images/hero-bakery.jpg" alt="…" />
```

Drop photos in `public/images/` and update the `src` attributes.

### Logo
`src/components/CatLogo.jsx` renders a hand-crafted SVG approximation of the orange lounging cat logo. Replace the SVG contents — or swap the whole component — with the official brand file when available.

### Custom order form
The form validates client-side and shows a success state on submit. The actual send is stubbed with a `setTimeout`. Look for this comment in `src/components/CustomOrderForm.jsx`:

```js
// TODO: Replace this timeout with your actual send logic, e.g.:
// await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', fields, 'PUBLIC_KEY')
// or:
// await fetch('/api/custom-order', { method: 'POST', body: JSON.stringify(fields) })
```

Plug in EmailJS (client-side, no backend needed) or a Resend/Nodemailer endpoint.

### Google Maps
The map embed in `Contact.jsx` uses a generic embed URL. For a more precise pin, replace the `src` of the `<iframe>` with an embed URL generated from [Google Maps → Share → Embed a map](https://support.google.com/maps/answer/144361).

## Project structure

```
src/
  components/
    CatLogo.jsx          SVG logo + wordmark
    Navbar.jsx           Fixed top nav with mobile drawer
    Hero.jsx             Full-screen hero with CTA
    Menu.jsx             Category cards + vegan section
    CustomOrderForm.jsx  Controlled form with validation + success state
    About.jsx            Brand story + pillars
    Contact.jsx          Address, hours, map, social links
    Footer.jsx           Footer with links + socials
  App.jsx
  main.jsx
  index.css              Tailwind base + component layer
```
