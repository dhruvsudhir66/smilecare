# SmileCare Dental Studio

A production-oriented Next.js 15 dental clinic website with a premium, calm visual system and Framer Motion interactions.

## Included

- App Router architecture with reusable components
- Responsive desktop/mobile navigation
- Home, About, Services, dynamic Service Detail, Team, Patient Stories, Contact and Appointment pages
- Framer Motion reveal, stagger, hover and floating interactions
- Accessible focus states, semantic navigation and responsive layouts
- Appointment and contact API route boundaries ready for a database/CRM/email integration
- Loading, error and 404 states
- Generated sitemap and robots metadata routes
- Optimised Next/Image usage and modern AVIF/WebP configuration

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Production integration

The API routes currently validate input and log the payload. Connect `/api/appointment` and `/api/contact` to your preferred database, transactional email, CRM or WhatsApp/SMS provider before launch.

Also replace `metadataBase` and the sitemap/robots domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with the real production domain.
