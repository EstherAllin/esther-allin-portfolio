# Common Tasks

> **Read when:** Performing specific development tasks: adding sections, cards, social links, icons, updating content, or running the project.

---

## Table of Contents

- [Run the dev server](#run-the-dev-server)
- [Update text content or links](#update-text-content-or-links)
- [Add a navigation link](#add-a-navigation-link)
- [Add a social link](#add-a-social-link)
- [Add a content card (What I Do)](#add-a-content-card-what-i-do)
- [Add a music track card](#add-a-music-track-card)
- [Add a page section](#add-a-page-section)
- [Add an icon](#add-an-icon)
- [Update background colors](#update-background-colors)
- [Update page metadata](#update-page-metadata)

---

## Run the Dev Server

```bash
npm run dev
```

Opens at **http://localhost:3000**. Hot reloads on save.

Other commands:

```bash
npm run build   # Production build
npm run start   # Serve production build locally
npm run lint    # Run ESLint
```

---

## Update Text Content or Links

All content is hardcoded in organism files. Find the target below and edit directly:

| Content | File | What to change |
|---------|------|----------------|
| About bio paragraphs | `src/components/organisms/AboutSection.tsx` | Inline JSX `<p>` elements |
| About stats | `src/components/organisms/AboutSection.tsx` | `stats` array |
| About tags | `src/components/organisms/AboutSection.tsx` | `tags` array |
| Hero title/tagline/CTAs | `src/components/organisms/HeroSection.tsx` | Inline JSX |
| What I Do card text/URLs | `src/components/organisms/ContentSection.tsx` | `cards` array |
| Music track info/URLs | `src/components/organisms/MusicSection.tsx` | `releases` array |
| Social platform links | `src/components/organisms/LinksSection.tsx` | `socials` array |
| Footer copyright text | `src/components/organisms/FooterSection.tsx` | Inline JSX |

---

## Add a Navigation Link

1. Open `src/components/molecules/NavLinks.tsx`
2. Add an entry to `NAV_LINKS`:
   ```typescript
   { label: "My Section", href: "#my-section" }
   ```
3. Ensure the target section has a matching `id` attribute: `<section id="my-section">`

The link automatically appears in both the desktop nav and the mobile dropdown.

---

## Add a Social Link

1. Open `src/components/organisms/LinksSection.tsx`
2. Import the icon (add to the import at the top if it's a new icon):
   ```typescript
   import { MyIcon } from "../atoms/icons";
   ```
3. Add to the `socials` array:
   ```typescript
   {
     name: "Platform Name",
     handle: "@yourhandle",
     href: "https://platform.com/yourhandle",
     icon: <MyIcon size={22} />,
     bg: "bg-[#hexColor]/15",
     shadow: "rgba(R, G, B, 0.35)",
   }
   ```

Each entry renders as a full-width clickable row with the icon, name, handle, and a chevron arrow. Links open in a new tab.

---

## Add a Content Card (What I Do)

1. Open `src/components/organisms/ContentSection.tsx`
2. Add to the `cards` array:
   ```typescript
   {
     emoji: "🎮",                          // OR use image instead of emoji:
     // image: "/images/my-image.png",     // 64×64 image
     // imageAlt: "Description",
     label: "CATEGORY LABEL",
     title: "Card Title",
     description: "One or two sentences describing this.",
     cta: "Primary Button Text",
     href: "https://…",
     ctaClass: "",                         // optional Tailwind overrides for button
     secondaryCta: "Secondary Button",     // optional — renders Kick-green pill
     secondaryHref: "https://…",
     accent: "from-purple-500/20 to-indigo-500/20",   // gradient overlay
     border: "border-purple-500/20",                   // border color
   }
   ```
3. The grid is `sm:2 cols / lg:3 cols`. Adding a 4th card will wrap to a second row.

---

## Add a Music Track Card

1. Open `src/components/organisms/MusicSection.tsx`
2. Add to the `releases` array:
   ```typescript
   {
     title: "Track or EP Title",
     description: "Short one-line description",
     spotify: "https://open.spotify.com/track/…",  // omit if not yet released
   }
   ```
3. `TrackCard` automatically shows **"Play on Spotify →"** if `spotify` is provided, or a pulsing **"Coming Soon"** badge if omitted.

---

## Add a Page Section

1. **Create the organism file** at `src/components/organisms/MySectionName.tsx`:
   - Wrap in `<section id="my-section">` with `relative overflow-hidden`
   - Follow the background pattern from `docs/styling-guide.md`
   - Add the texture echo `<div>` as the first child
   - Wrap content in `<div className="relative z-10 mx-auto max-w-6xl px-6">`
   - See `docs/coding-standards.md` for the full template

2. **Register in the template** — open `src/components/templates/HomeTemplate.tsx`:
   ```tsx
   import MySectionName from "../organisms/MySectionName";

   // Inside return, add in desired position:
   <MySectionName />
   ```

3. **Add a nav link** if needed — see [Add a navigation link](#add-a-navigation-link).

---

## Add an Icon

1. Open `src/components/atoms/icons/index.tsx`
2. Add a named export at the end of the file:
   ```tsx
   export function MyBrandIcon({ size = 20 }: { size?: number }) {
     return (
       <svg
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="currentColor"
         aria-hidden="true"
       >
         <path d="… SVG path data …" />
       </svg>
     );
   }
   ```
3. Import wherever needed:
   ```typescript
   import { MyBrandIcon } from "../atoms/icons";
   ```

---

## Update Background Colors

Background colors for each section are defined as inline `style` props using layered `radial-gradient` arrays. See `docs/styling-guide.md` for the full pattern and current palettes.

To change a section's color scheme:
1. Open the section's organism file (e.g., `ContentSection.tsx`)
2. Find the `style={{ background: […].join(", ") }}` prop on the `<section>` element
3. Update the RGBA values in the `radial-gradient` entries
4. Update the `linear-gradient` at the end of the array to change the base background color

---

## Update Page Metadata

Open `app/layout.tsx` and update the `metadata` export:

```typescript
export const metadata: Metadata = {
  title: "ValaShibbs — Your New Title",
  description: "Your new meta description.",
};
```

This controls the browser tab title and SEO description.
