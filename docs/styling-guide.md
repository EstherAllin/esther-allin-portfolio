# Styling Guide

> **Read when:** Working with backgrounds, brand colors, animations, Tailwind 4 syntax, custom utilities, or glass-morphism effects.

---

## Tailwind CSS 4 Syntax

This project uses **Tailwind CSS v4**, which differs significantly from v3:

| Feature | v3 | v4 (this project) |
|---------|----|--------------------|
| Base import | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| Custom utilities | `@layer utilities { … }` | `@utility class-name { … }` |
| Theme tokens | `tailwind.config.js` | `@theme inline { … }` in `globals.css` |
| PostCSS plugin | `tailwindcss` | `@tailwindcss/postcss` |

All Tailwind configuration lives in `app/globals.css` — there is no `tailwind.config.js` file.

---

## Brand Colors

| Name | Hex | CSS Arbitrary | Usage |
|------|-----|---------------|-------|
| Background | `#070B14` | `bg-[#070B14]` | Page base, footer |
| Purple | `#7B3FF2` | `text-[#7B3FF2]` | Primary accent, Twitch theme |
| Magenta | `#FF2D95` | `text-[#FF2D95]` | Secondary accent, music/flair |
| Cyan | `#19E3FF` | `text-[#19E3FF]` | Cool accent, hero badge, info |
| Orange | `#FF8A3D` | `text-[#FF8A3D]` | Warm accent, energy |
| Kick green | `#53FC18` | `text-[#53FC18]` | Kick platform branding |
| Discord indigo | `#5865F2` | `text-[#5865F2]` | Discord platform branding |

---

## Custom Utilities

Defined in `app/globals.css` using `@utility`:

```css
@utility glow-purple {
  background: radial-gradient(circle, rgba(123, 63, 242, 0.28) 0%, transparent 70%);
}

@utility glow-fuchsia {
  background: radial-gradient(circle, rgba(255, 45, 149, 0.20) 0%, transparent 70%);
}

@utility glow-indigo {
  background: radial-gradient(circle, rgba(25, 227, 255, 0.13) 0%, transparent 70%);
}
```

Use as regular Tailwind class names: `className="glow-purple"`, etc. These are typically applied to large absolutely-positioned decorative `<div>` elements behind content.

---

## Card Surface

The `.card-surface` class (defined in `globals.css` under `@layer components`) provides the standard glass-morphism card appearance:

```tsx
<div className="card-surface rounded-2xl p-6">…</div>
```

**What it provides:**
- `background: rgba(17, 24, 39, 0.88)` (dark fill)
- `border: 1px solid rgba(255, 255, 255, 0.07)` (subtle border)
- `box-shadow` with purple inner glow + dark drop shadow
- `backdrop-filter: blur(8px)` (blur behind card)
- Hover: brighter border, stronger purple glow, less transparent bg

---

## Section Background Pattern

All section backgrounds use the same two-layer approach:

### Layer 1 — Radial gradient stack (inline `style` prop)

```tsx
<section
  id="section-id"
  className="relative overflow-hidden py-24 …"
  style={{
    background: [
      "radial-gradient(ellipse at 15% 40%, rgba(236,72,153,0.32) 0%, transparent 55%)",
      "radial-gradient(ellipse at 82% 60%, rgba(168,85,247,0.28) 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 100%, rgba(251,146,60,0.18) 0%, transparent 60%)",
      "radial-gradient(ellipse at 50% 0%, rgba(88,28,135,0.20) 0%, transparent 65%)",
      "linear-gradient(180deg, #1e0a2e 0%, #22102e 50%, #1a0a24 100%)",
    ].join(", "),
  }}
>
```

The **last item** in the array should always be a `linear-gradient` — it sets the base background color. Items earlier in the array are layered on top.

### Layer 2 — Texture echo (first child inside section)

```tsx
  {/* Texture echo */}
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage: "url('/images/hero-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.05,
    }}
  />
```

Always add `pointer-events-none` so it doesn't block interaction, and keep opacity at `0.05` unless intentionally adjusting.

### Current Section Palettes

| Section | Dominant colors | Base hex |
|---------|----------------|----------|
| About | magenta `#EC4899` + purple `#A855F7` + orange `#FB923C` | `#1e0a2e` |
| What I Do | cyan `#22D3EE` + indigo `#6366F1` + blue | `#071828` |
| Music | pink `#F472B6` + orange `#FB923C` + violet `#8B5CF6` | `#24112c` |

---

## Gradient Text

```tsx
className="bg-gradient-to-r from-[#19E3FF] to-[#7B3FF2] bg-clip-text text-transparent"
```

Requires `bg-clip-text` and `text-transparent` together.

---

## Animations

| Effect | Classes |
|--------|---------|
| Pulse dot | `animate-pulse rounded-full bg-[#19E3FF]` |
| Bounce chevron | `animate-bounce` |
| Smooth hover transitions | `transition-all duration-300` or `transition-colors duration-200` |

---

## Responsive Patterns

Mobile-first approach. Common patterns:

```tsx
// Layout direction
className="flex flex-col md:flex-row"

// Grid
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

// Visibility
className="hidden md:flex"    // show at md+ (desktop nav)
className="md:hidden"         // show on mobile only (hamburger)

// Typography scale
className="text-4xl md:text-6xl lg:text-7xl font-black"

// Padding scale
className="px-4 md:px-6 py-16 md:py-24"
```

Breakpoints: `sm` = 640px, `md` = 768px, `lg` = 1024px, `xl` = 1280px

---

## Manual Glass-Morphism (without `.card-surface`)

For one-off glass elements that don't need the full card treatment:

```tsx
className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
```

---

## Z-Index Conventions

| Element | z-index |
|---------|---------|
| NavBar | `z-50` |
| Texture/overlay divs | `absolute inset-0` (no z-index — beneath content) |
| Section content | `relative z-10` (above overlays) |
| Modal/overlay (if added) | `z-50` minimum |
