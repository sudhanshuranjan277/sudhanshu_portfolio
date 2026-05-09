# Sudhanshu Ranjan — Premium Futuristic Portfolio (PRD)

## Original Problem Statement
Premium futuristic AI/ML + Full Stack Developer portfolio for "Sudhanshu Ranjan".
Originally requested in Next.js 15 + TS; adapted to the supported stack: **React (CRA) + FastAPI + MongoDB**.
Dark futuristic UI, glassmorphism, neon cyan/purple highlights, Framer Motion, particles, sticky navbar, 10 featured projects, AI/ML + GitHub + Journey + DSA + Certifications + Contact sections.

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + react-type-animation + react-icons + lucide-react + ShadCN UI primitives + sonner toasts.
- **Backend**: FastAPI + Motor (Mongo). Routes prefixed `/api`.
- **DB**: MongoDB collections — `status_checks`, `contact_messages`.
- **Design**: Archetype 7 (Electric & Neon) — void black `#05050A`, neon cyan `#00F0FF`, purple `#B026FF`. Fonts: Outfit (heading), Inter (body), JetBrains Mono (mono).

## User Personas
- **Recruiters / Hiring Managers** — quickly assess skills, projects, contact.
- **Collaborators / Peers** — explore tech depth, GitHub, DSA practice, journey.
- **Sudhanshu** — owner; updates content (projects, certs) over time.

## Core Requirements (static)
- Hero with name, animated typing roles, CTAs (Resume, GitHub, Contact), code window, floating tech icons.
- About + Education timeline.
- Skills grid (Frontend, Backend, AI/ML & Python, Tools).
- 10 Featured Projects with detail modal (tech + architecture + GitHub + Live).
- AI/ML workflow visualization.
- GitHub stats (cards + heatmap, user `sudhanshuranjan277`).
- Developer Journey timeline.
- DSA & Problem Solving cards (platforms, topics, terminal preview).
- Certifications & Achievements grid.
- Contact form persisting to MongoDB; social icons.
- Sticky animated navbar w/ scroll progress + active section indicator + mobile menu.
- Particle canvas background, custom cursor, smooth scroll.
- SEO meta tags, OG tags, Inter/Outfit/JetBrains Mono fonts.

## What's Implemented (2025-12-09)
- All 11 sections live with Framer Motion animations and `data-testid` attributes.
- Backend endpoints: `GET /api/`, `GET /api/projects`, `POST/GET /api/contact`, `POST/GET /api/status`.
- Backend testing: 6/6 pytest tests passing (root, projects, contact create + persist, invalid email 422, empty fields 422, missing fields 422).
- Frontend testing: 100% — all sections, project modal, contact form (valid + validation), navbar nav (desktop + mobile) verified.
- SEO: title, description, OG, twitter card configured.

## Backlog (not done — for future iterations)
- **P1** — Replace placeholder `#` resume link with actual PDF.
- **P1** — Replace placeholder GitHub/Live URLs in `PROJECTS` (server.py) with real ones.
- **P1** — Add real LinkedIn/Twitter URLs in `Contact.jsx` and `Footer.jsx`.
- **P2** — Migrate to FastAPI lifespan handlers (replace deprecated `@app.on_event`).
- **P2** — Add admin auth gate on `GET /api/contact`.
- **P2** — Tighten CORS (avoid `*` + credentials combo) once a real domain is set.
- **P3** — Add a blog / writing section, project case-study pages, and a downloadable resume PDF asset.
- **P3** — Email forwarding via Resend on contact submissions.
