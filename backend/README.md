# Ecotech Innovations Limited �?" Website Backend

Small Node/Express backend for the Ecotech Innovations Limited website enquiry form.

## What it does
- `POST /api/enquiries` �?" receives enquiry/contact submissions, validates input, blocks obvious spam (honeypot + rate limit), stores each enquiry to `data/enquiries.jsonl`, and optionally emails a notification.
- `GET /api/enquiries` �?" protected admin listing of saved enquiries (`Authorization: Bearer <ADMIN_TOKEN>`).
- `GET /api/health` �?" health check.

The frontend form is designed to POST JSON to `/api/enquiries` and fall back to `mailto:ecotechinnoltd@gmail.com` if no backend URL is configured or the request fails.

## Quick start
```bash
cd backend
npm install
cp .env.example .env   # Windows: copy .env.example .env
# edit .env with your values
npm start              # or: npm run dev
```
Server runs on `http://localhost:4000` by default.

## Environment variables
See `.env.example`.
- `PORT` �?" server port.
- `CORS_ORIGIN` �?" comma-separated allowed frontend origins (e.g. `https://eilzm.com,https://www.eilzm.com,http://localhost:3000`).
- `NOTIFY_TO` �?" enquiry notification email (default `ecotechinnoltd@gmail.com`).
- `NOTIFY_FROM` �?" from address for notification emails.
- `SMTP_HOST/PORT/SECURE/USER/PASS` �?" optional; if unset, enquiries are stored but no email is sent.
- `ADMIN_TOKEN` �?" bearer token for `GET /api/enquiries`.
- `DATA_DIR` �?" where enquiry records are stored.

## Frontend wiring
Set the website enquiry endpoint in `lib/site.ts`:
```ts
enquiryEndpoint: "https://your-backend.example.com/api/enquiries",
```
When set, `components/forms/ContactForm.tsx` posts to it; on failure it falls back to the visitor's email app addressed to `ecotechinnoltd@gmail.com`.

## Deploy notes
- Host on any Node platform (Render, Railway, VPS, etc.). Persist `DATA_DIR` or replace file storage with a database for production durability.
- Set `CORS_ORIGIN` to your real site domains and a strong `ADMIN_TOKEN`.
- Use TLS (HTTPS) in production.
- Data files under `data/*.jsonl` may contain personal contact details; treat as confidential.
