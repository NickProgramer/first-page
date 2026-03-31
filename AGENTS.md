<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project: Pine Creative (marketing site)

**What it is:** A small multi-page marketing site for **Pine Creative** — a software / web studio positioning as building **websites for businesses** (strategy, design, build, ongoing care).

**Tone / positioning:** Professional, conversion-focused copy; green primary CTAs; white/light global backgrounds (`globals.css`); “What we do” service cards use pastel mint defaults and **hover** to match solid green CTA styling.

---

## Stack

| Layer | Choice |
|--------|--------|
| Framework | **Next.js 16.2** (App Router) |
| React | **19.x** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** (`@import "tailwindcss"` in `globals.css`) |
| Fonts | **Geist** + **Geist Mono** (see `layout.tsx`) |

**Scripts:** `npm run dev` (Turbopack by default), `npm run dev:webpack` if dev hydration quirks appear, `npm run build` / `npm run start` for production.

---

## Routes & IA

| Path | Purpose |
|------|---------|
| `/` | Home: hero, “What we do” (4 services), “How we work” (3 steps), trust line + CTA |
| `/projects` | “Selected work” — grid from `src/data/projects.ts` |
| `/contact` | Intro + contact form (Server Action) |

**Global chrome:** `SiteHeader` (brand + nav) and `SiteFooter` (copyright, `hello@pinecreative.co`) wrap all pages via `src/app/layout.tsx`.

---

## Key files (edit these for most content/UI changes)

| File | Role |
|------|------|
| `src/app/page.tsx` | Home layout, hero CTAs (“Start a project”, “Our Work”), services/steps copy, card styling |
| `src/app/layout.tsx` | Root layout, `metadata`, `viewport`, fonts, header/footer shell |
| `src/app/globals.css` | CSS variables `--background` / `--foreground`, Tailwind theme hooks |
| `src/components/site-header.tsx` | Logo text, nav links (`/`, `/projects`, `/contact`) |
| `src/components/site-footer.tsx` | Footer copy and mailto |
| `src/data/projects.ts` | Project cards: `title`, `summary`, `tags[]` |
| `src/app/projects/page.tsx` | Projects page layout + metadata |
| `src/app/contact/page.tsx` | Contact page shell + metadata |
| `src/app/contact/contact-form.tsx` | Client form; `useActionState` |
| `src/app/contact/actions.ts` | `"use server"` `submitContact` — validates, dev `console.log` stub (no email provider yet) |

**Import alias:** `@/*` → `src/*` (per `tsconfig.json`). `layout.tsx` may use relative imports for header/footer.

---

## Patterns to preserve

- **Navigation:** Use `next/link` for internal routes.
- **Contact:** Keep server-side validation in the Server Action; production email (e.g. Resend) would plug into `actions.ts`.
- **Metadata:** Page-level `metadata` exports where present; root defaults in `layout.tsx`.
- **Hydration:** Root `<html suppressHydrationWarning>` is intentional for dev/metadata quirks with React 19.

---

## Deploy

- **GitHub → Vercel** is typical. If the repo root is not the Next app (e.g. app lives in a subfolder), set Vercel **Root Directory** to that folder.
- Production builds should pass `npm run build` before push.

---

## Constraints for agents

- Prefer **small, focused diffs**; match existing Tailwind and component style.
- Do **not** add dependencies unless the task requires it (e.g. real email).
- **Do not** remove the `<!-- BEGIN:nextjs-agent-rules -->` block at the top without an explicit request.

---

## Sharing context with other tools (e.g. ChatGPT)

For planning or reviews, attach or paste: this file, plus `src/app/page.tsx` and `src/app/layout.tsx`. Add `site-header.tsx`, `site-footer.tsx`, and contact/projects files when those areas change.
