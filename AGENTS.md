# ValaShibbs — Agent Instructions

> This is the canonical instruction source. Read this file first. Then read only the `docs/` guides relevant to your current task.
>
> **⚠ Next.js version note:** This project uses Next.js 15 with the App Router. APIs, conventions, and file structure may differ from your training data. Check `node_modules/next/dist/docs/` before writing framework-specific code.

---

## Project Overview

Personal portfolio/landing page for a Twitch streamer and music creator.

| | |
|--|--|
| **Framework** | Next.js 15.2.2 (App Router, static) |
| **UI** | React 19 + Tailwind CSS 4 |
| **Language** | TypeScript 5 (strict mode) |
| **Backend** | None — fully static, no API, no database |
| **Deployment** | Vercel |

---

## Quick Start

```bash
npm run dev      # Start dev server → http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

---

## Key File Locations

| Path | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, Geist font loading |
| `app/globals.css` | Tailwind 4 config, CSS variables, custom utilities |
| `app/page.tsx` | Entry point → renders `HomeTemplate` |
| `src/components/templates/HomeTemplate.tsx` | Section order (the page's composition) |
| `src/components/organisms/` | Full page sections (Hero, About, ContentSection, Music, Links, Footer, NavBar) |
| `src/components/molecules/` | Multi-element reusable components (cards, embeds, nav links) |
| `src/components/atoms/` | Primitive components (Button, Tag, SectionLabel) |
| `src/components/atoms/icons/index.tsx` | All SVG icons as named exports |
| `public/images/` | Static images (hero-bg.jpg, ALPHA_NOTEXT.png, PUG_Animated.gif) |

---

## Common Imports

```typescript
// Atoms
import Button from "../atoms/Button";
import Tag from "../atoms/Tag";
import SectionLabel from "../atoms/SectionLabel";
import { TwitchIcon, SpotifyIcon, KickIcon, DiscordIcon, YouTubeIcon } from "../atoms/icons";

// Molecules
import ContentCard from "../molecules/ContentCard";
import SectionHeading from "../molecules/SectionHeading";
import SpotifyEmbed from "../molecules/SpotifyEmbed";
import TrackCard from "../molecules/TrackCard";
import SocialLinkItem from "../molecules/SocialLinkItem";
```

> Paths above are relative. `@/*` alias also works (maps to project root).

---

## Quick Reference

### Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#070B14` | Page base |
| Purple | `#7B3FF2` | Primary accent |
| Magenta | `#FF2D95` | Secondary accent |
| Cyan | `#19E3FF` | Cool accent |
| Orange | `#FF8A3D` | Warm accent |
| Kick green | `#53FC18` | Kick branding |
| Discord | `#5865F2` | Discord branding |

### Button Variants

```tsx
<Button href="…" variant="primary">…</Button>  // purple→magenta gradient
<Button href="…" variant="ghost">…</Button>    // zinc border + blur
<Button href="…" variant="green">…</Button>    // Kick green, black text
<Button href="…" variant="dark">…</Button>     // dark zinc
```

### Card Surface (glass-morphism)

```tsx
<div className="card-surface rounded-2xl p-6">…</div>
```

### Section Background Pattern (summary)

Each section uses a `style` prop with layered `radial-gradient` arrays + an absolutely-positioned `hero-bg.jpg` texture echo div at `opacity: 0.05`. See `docs/styling-guide.md` for the full pattern.

### Section Anchors

`#home` · `#about` · `#what-i-do` · `#music` · `#links`

### Content Data Locations

| Content | File |
|---------|------|
| Nav links | `src/components/molecules/NavLinks.tsx` |
| About bio/stats/tags | `src/components/organisms/AboutSection.tsx` |
| What I Do cards | `src/components/organisms/ContentSection.tsx` |
| Music tracks | `src/components/organisms/MusicSection.tsx` |
| Social links | `src/components/organisms/LinksSection.tsx` |

---

## Guides

> Only read guides relevant to your current task to conserve tokens.
> Keep documentation updated when features change.

| Guide | Description | Read when |
|-------|-------------|-----------|
| [docs/architecture-overview.md](docs/architecture-overview.md) | Component hierarchy, data flow, page sections, routing, image assets | Understanding project structure; adding sections; major layout refactors |
| [docs/styling-guide.md](docs/styling-guide.md) | Tailwind 4 syntax, brand colors, section backgrounds, glass-morphism, animations, responsive patterns | Changing backgrounds, colors, gradients, or Tailwind utilities |
| [docs/coding-standards.md](docs/coding-standards.md) | Naming conventions, file placement, TypeScript patterns, component structure, button/icon/prop conventions | Adding or modifying any component; unsure about conventions |
| [docs/common-tasks.md](docs/common-tasks.md) | Step-by-step workflows for routine tasks | Adding content, cards, links, icons, sections, or updating text/URLs |

---

## Guide Selection Helper

| Task | Read |
|------|------|
| Add a new page section | architecture-overview, common-tasks |
| Change background gradients or colors | styling-guide |
| Add a card to What I Do | common-tasks |
| Add a social link | common-tasks |
| Add a new icon | common-tasks |
| Add a music track | common-tasks |
| Fix a layout or responsive issue | styling-guide |
| Add a new component | coding-standards, architecture-overview |
| Update text, bios, or URLs | common-tasks |
| Work with Tailwind or globals.css | styling-guide |
| Understand the component tree | architecture-overview |
| Unsure which file to edit | coding-standards |

