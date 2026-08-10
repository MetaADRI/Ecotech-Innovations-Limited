# Ecotech Innovations Limited — Company Website

A modern, green-led marketing website for **Ecotech Innovations Limited**, the Zambian
sustainability-driven technology company behind **FixCycle** (User & Pro apps).

Built with **Next.js 16 · Tailwind CSS v4 · Framer Motion** — all pages are statically
pre-rendered for fast loading and great SEO.

## Run locally

```bash
npm install        # first time only
npm run dev        # http://localhost:3000
```

Production build (static export into `out/`):

```bash
npm run build
npm run preview   # serves the static build locally
```

> A preview server is already running at **http://localhost:3000** if you just
> finished setting this up.

## Where to edit content

Almost all editable content lives in **one file**: [`lib/site.ts`](lib/site.ts).

| You want to change… | Edit… |
| --- | --- |
| Contact details, emails, phones, addresses | `site.email`, `site.phoneLusaka`, … |
| Stats (artisans, downloads, CO₂, jobs) | `site.stats` |
| Testimonials | `site.testimonials` |
| Company timeline | `milestones` |
| Sustainability goals / progress bars | `impactGoals` |
| Volunteer roles & benefits | `volunteerRoles`, `volunteerBenefits` |
| Navigation links | `navLinks` |
| Facebook / LinkedIn links | `site.facebook`, `site.linkedin` |

The brand palette (green `#00A651`, deep blue `#0A2F44`, teal `#008080`, gold accent
`#C9A227` sampled from the logo) and global styles live in [`app/globals.css`](app/globals.css).

## Going live

1. **Contact & volunteer forms** — create a free [Formspree](https://formspree.io) form and
   paste its endpoint into `site.formspreeContact` / `site.formspreeVolunteer`.
   Until then, forms fall back to opening the visitor's email app (mailto).
2. **Newsletter** — the signup boxes are placeholder UX; connect a provider when the CEO wants it.
3. **Real data** — replace the placeholder stats, phones and emails in `lib/site.ts`.
4. **Photos** — the site uses gradients/SVG art so it works with zero assets. Drop real Zambian
   photos into `public/` and swap them in where imagery is wanted.
5. **Deploy (Cloudflare Pages)** — push to GitHub, then in the
   [Cloudflare dashboard](https://dash.cloudflare.com) go to **Workers & Pages →
   Create → Pages → Connect to Git**. Pick this repo and use these settings:

   - Framework preset: **Next.js (Static HTML)** (or leave auto-detected)
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION=22`

   Every push to `main` then auto-deploys. Free tier — no config needed.

## Structure

```
app/                  routes (Home, About, FixCycle, Solutions, Impact, Get Involved, Blog, Contact)
components/           shared UI (Navbar, Footer, buttons, reveals, counters, phone mockup…)
components/sections/  home-page sections
lib/site.ts           ALL editable content
public/logo.jpeg      company logo
```
