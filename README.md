# Ecotech Innovations Limited – Website

Marketing website for **Ecotech Innovations Limited** (Zambia), built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Business profile (site content)

The website reflects Ecotech Innovations Limited’s profile:

- **Core business:** Wholesale trading (cement, maize, fuels and acids sourced and supplied, importation of cars, consumer goods and household items, etc.). Currently an **authorized agent for Chilanga Cement PLC**.
- **Business consultancy & compliance:** Registration and compliance support including PACRA, ZRA, NAPSA, NHIMA, Workers Compensation, CEEC, etc.
- **Independent project monitoring and MVT verification**
- **Logistics management consultancy** and **freight brokerage**
- **Agriculture commodity sourcing and supply:** maize, soya beans, groundnuts, beans, rice, etc.
- **Mining:** Coming Soon
- **Digital platforms:** FixCycle, MobiLink, Lala

## Project notes

- **Static export:** `next.config.ts` uses `output: "export"` with `images.unoptimized: true`.
- **Deployment target:** Netlify (see `netlify.toml`): build `npm run build`, publish `out/`, Node `22`.
- **No runtime Next.js API routes** in static export. The enquiry/contact backend is a separate deployable service in `backend/`.

## Content & configuration

Most editable site content/config lives in [`lib/site.ts`](lib/site.ts), including:

- Company profile, milestones, testimonials, navigation
- Services, platforms, agriculture commodities
- Contact/enquiry details (`email`, `enquiryEmail`, `emailCareers` = `ecotechinnoltd@gmail.com`)
- Phone/location placeholders (do not invent missing exact address/phone details)
- Enquiry routing: `enquiryEndpoint` (`NEXT_PUBLIC_ENQUIRY_ENDPOINT`) and `contactSubjects`

## Enquiry flow (frontend)

`components/forms/ContactForm.tsx` posts JSON enquiries to `site.enquiryEndpoint` (or `site.formspreeContact` fallback) with a honeypot field.  
If no endpoint is configured or the request fails, it falls back to opening the user’s email client via `mailto:ecotechinnoltd@gmail.com`.

## Backend enquiry service (`backend/`)

An Express-based enquiry API is provided separately for deployments where a backend endpoint is available:

- `GET /api/health`
- `POST /api/enquiries` (validation, honeypot, rate limiting, JSONL storage, optional SMTP notifications)
- `GET /api/enquiries` (admin, bearer token via `ADMIN_TOKEN`)

### Backend setup

```bash
cd backend
npm install
cp .env.example .env   # create/edit env values as needed
npm run dev
```

Key env vars (see `backend/.env.example`): `PORT`, `CORS_ORIGIN`, `NOTIFY_TO` (defaults to `ecotechinnoltd@gmail.com`), `SMTP_*`, `ADMIN_TOKEN`, `DATA_DIR`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

Build output is generated in `out/` for static hosting.

## Lint

```bash
npm run lint
```

## Structure (high level)

- `app/` – routes/pages (`/`, `/about`, `/services`, `/solutions`, `/contact`, plus legacy/supporting pages)
- `components/` – shared UI and page sections/forms
- `lib/site.ts` – primary content/config source of truth
- `backend/` – separate enquiry API service
- `public/` – static assets
- `netlify.toml` – Netlify static deploy config
