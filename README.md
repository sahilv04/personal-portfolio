# Sahil Verma — Portfolio

Production-grade personal portfolio for **Sahil Verma**, Technical Lead / Frontend Lead.
Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**.

## Features
- Static-first, App Router, fully typed
- Animated hero with React Three Fiber + Drei (lazy-loaded, reduced-motion aware)
- Polished sections: hero, about, experience timeline, projects, skills, services, FAQ, contact
- SEO: metadata API, Open Graph, Twitter cards, canonical URLs, sitemap, robots
- GEO / AI search: JSON-LD (Person, WebSite, ProfessionalService, FAQ, Breadcrumb), `llms.txt`, semantic structure
- Accessibility: skip link, keyboard focus, semantic HTML, `prefers-reduced-motion`
- Mobile-first responsive design
- Glassy navbar with mobile menu, magnetic buttons, scroll reveals, animated marquee

## Getting started

```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — eslint via Next.js config
- `npm run typecheck` — `tsc --noEmit`

## Project structure
```
app/                # App Router pages, layout, sitemap, robots
components/
  sections/         # Page-level sections (hero, projects, faq, ...)
  ui/               # Reusable primitives (Section, Button, Reveal, Badge)
  three/            # React Three Fiber scenes (lazy-loaded)
content/            # Typed content (personal, projects, experience, skills, services, faq)
lib/                # Utilities (cn), SEO helpers, JSON-LD schemas
public/             # llms.txt, favicon
```

## Personalisation
Update `content/personal.ts`, `content/projects.ts`, `content/experience.ts`,
`content/skills.ts`, `content/services.ts` and `content/faq.ts`.

Update `SITE_URL` in `content/personal.ts` before deployment.

## Deployment
Optimised for **Vercel**:

```bash
npm run build
```

Then deploy the repo to Vercel (or any Node host). Most pages are statically generated.

## Notes
- Replace social URLs in `content/personal.ts` with your real handles.
- Replace `hello@sahilverma.dev` with the address you want to receive enquiries on.
- Drop a real `og-image.png` into `public/` and add it to `lib/seo.ts` if desired.
