# Fat Cat Bakery — Website

Live demo-ready website for **Fat Cat Bakery**, Charlottetown, PEI.
Built with React, Vite, and Tailwind CSS.

---

## What's Inside

### Pages & Sections

| Section | What it does |
|---|---|
| **Hero** | Full-screen landing with the Fat Cat Bakery logo, tagline, and two call-to-action buttons — "Order a Custom Cake" and "Browse the Menu" |
| **Photo Strip** | Auto-scrolling band of real bakery photos pulled from the Fat Cat Bakery Facebook page. Loops continuously, no interaction needed |
| **Our Story** | Brand story section — the from-scratch, small-batch philosophy, local PEI ingredients, stats, and a real bakery counter photo |
| **Menu** | Five category cards (Cakes, Cheesecakes, Cookies & Cupcakes, Squares & Brownies, Sweet Breads) each with a real product photo and item list. Separate vegan section below with mint-green styling |
| **Custom Orders** | Inquiry form — name, email, phone, occasion, cake type, servings, pickup date, details, vegan toggle. Validates all required fields before submitting. Shows a confirmation screen on success |
| **Reviews** | Google Reviews section showing a 4.1-star rating, breakdown bar chart, most-mentioned highlights, and 6 customer review cards. Links directly to the Google Maps listing |
| **Contact** | Address, click-to-call phone number, full hours table (today highlighted, Monday shown as Closed), Instagram and Facebook links, embedded Google Map |
| **Footer** | Navigation links, contact details, social icons, and a "Start Your Order" CTA banner |

---

### Features

#### AI Chatbot
A floating chat button sits in the bottom-right corner of every page.
Powered by **Groq AI (Llama 3.1)** — completely free tier, no billing required.

The bot knows:
- Opening hours (Tue–Sun, 8 AM–6 PM, closed Monday)
- Address and phone number
- How to place a custom cake order (5 days notice, 50% deposit)
- The full vegan menu
- All cake and baked goods categories
- Social media handles

It politely deflects off-topic questions back to bakery topics.

#### Custom Order Form
The form collects all the information needed for a cake inquiry:
- Customer name, email, phone
- Occasion, cake type, approximate servings
- Preferred pickup date (enforces minimum 5-day lead time)
- Free-text details field
- Vegan option toggle

**Currently:** On submit, it shows a success confirmation but does not send an email yet. The code has a clearly marked placeholder where an email service (e.g. EmailJS or Formspree) can be connected in one step — no backend required.

#### Real Bakery Photos
All photos are sourced directly from the Fat Cat Bakery Facebook page. No stock photography. Images are used across:
- The auto-scrolling photo strip (7 unique photos)
- Menu category cards (5 unique photos)
- About / Our Story section (1 photo)

No image appears twice on the same page.

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Building for Production

```bash
npm run build
npm run preview
```

## Deploying to Vercel

1. Push to GitHub (already done — [github.com/moshrx/fatcat](https://github.com/moshrx/fatcat))
2. Go to [vercel.com](https://vercel.com) → Import repository → select `moshrx/fatcat`
3. Add the environment variable in Vercel project settings:
   - **Key:** `VITE_GROQ_API_KEY`
   - **Value:** your Groq API key
4. Deploy — Vercel auto-detects Vite, no extra config needed

---

## Environment Variables

Create a `.env` file in the project root (already set up locally):

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

Get a free Groq API key at [console.groq.com](https://console.groq.com).
The `.env` file is excluded from Git — the key is never committed to the repository.

---

## Connecting the Order Form

When ready to receive real order emails, open `src/components/CustomOrderForm.jsx` and find this comment around line 71:

```js
// TODO: Replace with real send — e.g.:
// await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', fields, 'PUBLIC_KEY')
// or: await fetch('/api/order', { method:'POST', body:JSON.stringify(fields) })
await new Promise(r => setTimeout(r, 1300))  // ← remove this line
```

Replace the stub with either:
- **EmailJS** (free, no backend) — sign up at emailjs.com, create a template, drop in the credentials
- **Formspree** (free, no backend) — sign up at formspree.io, get a form ID, one `fetch()` call

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI components |
| Vite | Build tool and dev server |
| Tailwind CSS | All styling |
| Groq API (Llama 3.1) | AI chatbot |
| Playwright | Used during development for visual testing |
| Sharp | Used during development to process the logo PNG |

---

## Project Structure

```
src/
  components/
    Navbar.jsx          Fixed top nav, mobile slide-in drawer
    Hero.jsx            Full-screen landing section
    PhotoCarousel.jsx   Auto-scrolling photo strip
    About.jsx           Our Story + brand pillars
    Menu.jsx            Category cards + vegan section
    CustomOrderForm.jsx Controlled form with validation
    Reviews.jsx         Google Reviews display
    Contact.jsx         Address, hours, map, socials
    Footer.jsx          Footer with CTA banner
    ChatBot.jsx         Groq-powered floating chatbot
    CatLogo.jsx         Official logo (transparent PNG)
  App.jsx               Page layout and section order
  main.jsx              React entry point
  index.css             Tailwind base + component classes

public/
  logo.png              Transparent-background logo
  images/               Real bakery photos from Facebook
```
