# Architecture Overview

> **Read when:** Understanding component hierarchy, data flow, or page structure; adding new sections; major layout refactors.

---

## System Overview

ValaShibbs is a **fully static, single-page website**. There is no backend, no database, no API calls, and no external data fetching. All content is hardcoded in component files and rendered at build time.

---

## Component Hierarchy (Atomic Design)

```
app/page.tsx
  └─ HomeTemplate              ← templates/: page-level compositions only
       ├─ NavBar                ← organisms/: full-width interactive sections
       └─ <main>
            ├─ HeroSection      (id="home")
            ├─ AboutSection     (id="about")
            ├─ ContentSection   (id="what-i-do")
            ├─ MusicSection     (id="music")
            ├─ LinksSection     (id="links")
            └─ FooterSection
```

### Atomic Layers

| Layer | Folder | Purpose | Examples |
|-------|--------|---------|---------|
| **Atoms** | `src/components/atoms/` | Primitive, single-purpose UI elements | `Button`, `Tag`, `SectionLabel`, icons |
| **Molecules** | `src/components/molecules/` | Composed multi-element components | `ContentCard`, `TrackCard`, `NavLinks`, `SpotifyEmbed` |
| **Organisms** | `src/components/organisms/` | Full page sections with layout and local data | `HeroSection`, `AboutSection`, `NavBar` |
| **Templates** | `src/components/templates/` | Page-level composition only — no logic, no styling | `HomeTemplate` |

**Rule:** Place a new component at the lowest layer it belongs to. A full `<section>` with its own content = organism. A reusable block combining atoms = molecule.

---

## Data Flow

All data is **static** — defined as constants, arrays, or inline JSX directly inside each organism file. There is no state management library (no Redux, Zustand, or Context).

```
Hardcoded constants in organism file
  → passed as props to molecules/atoms
  → rendered to static HTML
```

**The only interactive state in the entire app:**
- `NavBar.tsx` — `scrolled: boolean` (scroll listener) and `menuOpen: boolean` (mobile hamburger). Local `useState` only.

---

## Page Sections

| Section | File | Anchor | Notes |
|---------|------|--------|-------|
| NavBar | `NavBar.tsx` | — | Sticky; client component; scroll-aware |
| Hero | `HeroSection.tsx` | `#home` | Background image + gradient orbs, CTAs |
| About | `AboutSection.tsx` | `#about` | Avatar, bio, stats, tags |
| What I Do | `ContentSection.tsx` | `#what-i-do` | 3 content cards in responsive grid |
| Music | `MusicSection.tsx` | `#music` | Spotify embed + track cards |
| Links | `LinksSection.tsx` | `#links` | Social platform link list |
| Footer | `FooterSection.tsx` | — | Copyright, dark base |

---

## Routing

- **Single route:** Only `app/page.tsx` (`/`)
- **Navigation:** In-page anchor scroll (`#section-id` href links)
- **Scroll offset:** `scroll-margin-top: 4rem` in `globals.css` prevents the sticky navbar from covering anchor targets

---

## Rendering Strategy

All sections are **React Server Components** (default in Next.js App Router) except `NavBar.tsx`, which is a Client Component (`"use client"`) due to scroll listeners and `useState`. No `useEffect` or client-side data fetching anywhere else.

---

## Key Files

| File | Role |
|------|------|
| `app/layout.tsx` | Root HTML shell, metadata, Geist font loading, global CSS import |
| `app/globals.css` | Tailwind 4 config, CSS custom properties, custom utilities |
| `app/page.tsx` | Entry point — renders `HomeTemplate` |
| `src/components/templates/HomeTemplate.tsx` | Section order is defined here |
| `src/components/atoms/icons/index.tsx` | All SVG icons as named exports |
| `public/images/` | All static images (see below) |

---

## Image Assets

All static images live in `public/images/`:

| File | Used In |
|------|---------|
| `hero-bg.jpg` | Texture echo overlay in Hero, About, What I Do, Music sections |
| `ALPHA_NOTEXT.png` | Avatar/logo in About section |
| `PUG_Animated.gif` | Animated graphic in the Pug Empire card (ContentSection) |
