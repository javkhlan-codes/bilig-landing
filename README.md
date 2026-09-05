# BILIG LMS — landing page

Next.js (App Router) + TypeScript + Tailwind CSS port of the BILIG LMS
marketing landing page (dark/light themed, Mongolian copy).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** — brand tokens as CSS variables, bridged into Tailwind
  utilities via `@theme inline` in `app/globals.css`
- **next/font** — Unbounded / Onest / JetBrains Mono, self-hosted with the
  Cyrillic subset for the Mongolian copy

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                    # App Router: layout, page, global styles/tokens
components/
  ui/                   # Generic primitives: Button, Eyebrow, SectionHeading,
                         # Reveal (scroll-in animation), Arc, ThemeToggle
  layout/               # Navbar, Footer
  sections/             # One file per landing-page section (Hero, Problems,
                         # Features, DayFlow, Modules, Pricing, FAQ, CTA, ...);
                         # sections with a distinct visual (schedule grid,
                         # dashboard mocks, plan cards, contact form) get a
                         # same-named subfolder
  icons.tsx             # Shared inline SVG icon set
data/content.ts         # All copy + structured content (typed), kept out of
                         # components so they stay presentational
lib/
  colors.ts             # Brand color name -> static Tailwind class lookup
                         # (Tailwind needs literal class strings, not
                         # `text-${color}` interpolation)
  emphasis.tsx           # Renders "*emphasised*" substrings from content.ts
                         # as brand-colored <em>
  money.tsx              # Works around the ₮ (Tugrik) glyph missing from
                         # the display typeface
```

## Theming

Dark is the default and primary theme. `data-theme="dark" | "light"` on
`<html>` switches the whole palette — every brand/surface/text color is a CSS
variable in `app/globals.css`, redefined under `[data-theme="light"]`. The
initial value is stamped before hydration by an inline script in
`app/layout.tsx` (no flash of the wrong theme); `ThemeToggle` flips the
attribute and persists the choice to `localStorage`.

Tailwind utilities like `bg-blue`, `text-txt-2`, `border-line` resolve to
these variables via `@theme inline`, so they react to the theme switch
automatically. Bespoke, brand-specific chrome that doesn't fit Tailwind's
utility model (decorative arcs, the gradient promo band, the schedule grid,
staggered cards, the FAQ accordion marker, scroll-reveal) lives in
`app/globals.css` under `@layer components` as `.c-*` classes.
