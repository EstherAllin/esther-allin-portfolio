# Coding Standards

> **Read when:** Adding or modifying components; unsure about naming, file placement, prop patterns, or TypeScript conventions.

---

## File Organization

```
src/components/
  atoms/          ← Primitive, single-purpose UI elements
    icons/        ← All SVG icons as named exports in index.tsx
  molecules/      ← Composed multi-element components (no <section> wrapper)
  organisms/      ← Full page sections — contain a <section> element, local data, layout
  templates/      ← Page-level composition only (imports + renders organisms, no styling)
```

**Placement rule:** Use the lowest atomic level that fits.
- Has a `<section>` wrapper + owns its own content data → **organism**
- Combines multiple atoms into a reusable block → **molecule**
- Single-purpose, no composition → **atom**
- Composes organisms into a full page → **template**

---

## Naming Conventions

| Type | Convention | Examples |
|------|-----------|---------|
| Component files | `PascalCase.tsx` | `ContentCard.tsx`, `HeroSection.tsx` |
| Component exports | `PascalCase` | `export default function ContentCard` |
| Props interfaces | `PascalCaseProps` | `interface ContentCardProps` |
| Prop names | `camelCase` | `spotifyUrl`, `secondaryCta`, `ctaClass` |
| Local constants | `camelCase` arrays/objects | `const cards = […]`, `const socials = […]` |
| Named constants | `UPPER_SNAKE_CASE` | `const NAV_LINKS` |
| CSS utility classes | kebab-case | `card-surface`, `glow-purple` |
| Image files | kebab-case | `hero-bg.jpg` |
| Section `id` attributes | kebab-case | `id="what-i-do"`, `id="music"` |

---

## Standard Component Structure

Pattern for a new **section organism**:

```tsx
// 1. Data constants defined OUTSIDE the component (at module level)
const items = [
  { id: 1, title: "…", description: "…" },
];

// 2. Interface for props (use interface, not type)
interface MySectionProps {
  className?: string;
}

// 3. Default export function
export default function MySection({ className }: MySectionProps) {
  return (
    <section
      id="my-section"
      className={`relative overflow-hidden py-24 px-6 ${className ?? ""}`}
      style={{ background: […].join(", ") }}
    >
      {/* Texture echo — always first child */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover", opacity: 0.05 }}
      />

      {/* Content — always relative z-10 */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* … content … */}
      </div>
    </section>
  );
}
```

---

## TypeScript Conventions

- **Strict mode** is on (`"strict": true` in `tsconfig.json`)
- Use `interface` for component props
- Mark optional props with `?`: `label?: string`
- Use `React.ReactNode` for icon/children props: `icon: React.ReactNode`
- Avoid `any` — infer or import types
- Prefer explicit return types for exported functions when not obvious

---

## Import Paths

The `@/*` alias maps to the project root (defined in `tsconfig.json`). Both relative and `@/`-prefixed paths work; the codebase primarily uses relative imports:

```tsx
// Relative (existing pattern in the codebase)
import Button from "../atoms/Button";
import { TwitchIcon } from "../atoms/icons";

// Alias — also valid
import Button from "@/src/components/atoms/Button";
```

Use relative paths when within `src/components/` to stay consistent with existing files.

---

## "use client" Directive

Only add `"use client"` to a component that uses:
- `useState` / `useEffect` / other client-only React hooks
- Browser APIs (`window`, `document`, `navigator`)
- Event listeners attached to the `window` object

**Currently, `NavBar.tsx` is the only client component.** All other components are Server Components by default. Do not add `"use client"` unless required.

---

## Button Variants

The `Button` atom supports four variants via the `variant` prop:

```tsx
<Button href="…" variant="primary">…</Button>  // purple→magenta gradient, purple shadow
<Button href="…" variant="ghost">…</Button>    // zinc border + backdrop blur
<Button href="…" variant="green">…</Button>    // Kick green bg, black text
<Button href="…" variant="dark">…</Button>     // dark zinc bg
```

All `Button` renders are anchor tags (`<a>`) — they open in a new tab by default.

---

## SectionLabel Accents

```tsx
<SectionLabel label="Section Name" accent="purple" withLines />
```

| `accent` | Color |
|---------|-------|
| `"purple"` | `#7B3FF2` / violet-400 |
| `"cyan"` | `#19E3FF` |
| `"fuchsia"` | `#FF2D95` |

---

## Icon Component Pattern

All icons live in `src/components/atoms/icons/index.tsx` as named exports. Each accepts an optional `size` prop (default `20`):

```tsx
export function MyBrandIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="…" />
    </svg>
  );
}
```

Import:
```tsx
import { MyBrandIcon } from "../atoms/icons";
```

---

## Content Data Locations

All copy and link data is hardcoded directly in organism files:

| Content | File | Variable/Location |
|---------|------|------------------|
| Page title + meta description | `app/layout.tsx` | `metadata` export |
| Nav links | `src/components/molecules/NavLinks.tsx` | `NAV_LINKS` array |
| Hero CTAs and text | `src/components/organisms/HeroSection.tsx` | Inline JSX |
| About bio, stats, tags | `src/components/organisms/AboutSection.tsx` | Inline JSX |
| What I Do cards | `src/components/organisms/ContentSection.tsx` | `cards` array |
| Music tracks | `src/components/organisms/MusicSection.tsx` | `releases` array |
| Social links | `src/components/organisms/LinksSection.tsx` | `socials` array |

To update any text or URLs, edit the relevant constant or JSX directly — there is no CMS or config file.

---

## Secondary CTA Pattern

`ContentCard` supports an optional secondary action (used for Kick alongside Twitch):

```tsx
// In the cards array
{
  cta: "Watch on Twitch",
  href: "https://twitch.tv/…",
  secondaryCta: "Watch on Kick",
  secondaryHref: "https://kick.com/…",
}
```

The secondary CTA renders as a Kick-green pill below the primary button.
