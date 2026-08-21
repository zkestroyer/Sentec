# SENTEC Website — Project Guide

> **Purpose:** This guide is the practical map for editing the SENTEC website. The project is a React 19 + Vite frontend using a shared dark **Signal / Structure** visual system, an exact supplied SENTEC logo asset, responsive layouts, and motion that respects reduced-motion preferences.

## 1. Quick Start

| Task | Command | Notes |
|---|---|---|
| Run locally | `pnpm dev` | Starts the Vite development server. |
| Check TypeScript | `pnpm check` | Runs `tsc --noEmit`. |
| Create a production build | `pnpm build` | Builds the client bundle and production server output. |
| Format files | `pnpm format` | Runs Prettier across the project. |

Run the commands from the repository root:

```bash
cd sentec-landing-redesign
pnpm dev
```

## 2. Source Map

```text
sentec-landing-redesign/
├── client/
│   ├── index.html                 # Document title, fonts, root mount point
│   └── src/
│       ├── App.tsx                # Route table for every public page
│       ├── index.css              # Global design tokens, responsive styles, animations
│       ├── pages/
│       │   ├── Home.tsx           # Landing page and exact-logo hero animation stack
│       │   ├── Team.tsx           # Team directory, filters, supplied roster
│       │   ├── Events.tsx         # Events destination and empty calendar state
│       │   ├── Partners.tsx       # Honest partner register / partnership CTA
│       │   ├── Gallery.tsx        # Filterable visual archive cards
│       │   └── Contact.tsx        # Contact details and client-side form UI
│       └── components/
│           └── SiteChrome.tsx     # Shared navbar, footer, and secondary-page hero shell
├── server/
│   └── index.ts                   # Static production-serving entry point
├── PROJECT_GUIDE.md               # This editing guide
├── package.json                   # Scripts and dependencies
└── vite.config.ts                 # Vite configuration
```

## 3. Routes and Navigation

The route table lives in `client/src/App.tsx`. Use this file whenever a new page needs a URL.

| Navbar label | URL | Source file | Editing notes |
|---|---|---|---|
| Home | `/` | `pages/Home.tsx` | Landing page and hero. |
| About | `/#about` | `pages/Home.tsx` | Homepage section anchor. |
| Team | `/team` | `pages/Team.tsx` | Supplied leadership/directory data. |
| Events | `/events` | `pages/Events.tsx` | Add confirmed events here. |
| Partners | `/partners` | `pages/Partners.tsx` | Add confirmed partner records here. |
| Gallery | `/gallery` | `pages/Gallery.tsx` | Replace archive cards with real event media. |
| Contact Us | `/contact` | `pages/Contact.tsx` | Connect the form to a form service or backend. |
| Login | External link | `components/SiteChrome.tsx`, `pages/Home.tsx` | Currently points to `https://sentecneduet.live/login`. |

The shared navigation for **Team, Events, Partners, Gallery, and Contact** is defined in `client/src/components/SiteChrome.tsx`. The home page has its own navigation markup in `client/src/pages/Home.tsx`, so update both places when changing the public tab set.

## 4. Design System

The site’s visual language is defined in `client/src/index.css`.

| System element | Direction | Where to edit |
|---|---|---|
| Base surface | Near-black engineering field with subtle grid texture | `:root`, `.secondary-page`, `.site-shell` |
| Accent | Signal orange (`--orange`) used for active paths, rules, controls, and important data | Root color variables |
| Body type | Readable technical sans | Font setup in `client/index.html` and global CSS |
| Technical labels | `IBM Plex Mono` with uppercase letter spacing | `.eyebrow`, `.section-kicker`, metadata classes |
| Display type | Editorial high-impact heading style | Heading rules in `index.css` |
| Borders | Thin, low-contrast system lines | `--line` and card/section styles |

> **Editing principle:** Do not add unrelated gradients, rounded-card systems, or bright colors. New components should reinforce the dark editorial engineering atmosphere and reserve orange for active signals.

## 5. Exact SENTEC Logo and Hero Animation

The original supplied logo is the visual source of truth. Its asset is referenced as:

```ts
const logoAsset = "/manus-storage/SENTECNEWWHITELOGO_2ba86ec2.webp";
```

The hero markup lives in `pages/Home.tsx`, primarily inside `AnimatedMark()`.

### How the animation works

The logo is **not redrawn from loose coordinates**. Multiple perfectly registered image layers use the exact original artwork, clipped to highlight regions while keeping all geometry fixed.

| Layer group | Motion behavior | CSS area |
|---|---|---|
| Base artwork | Establishes the full logo and subtle breathing | `.reference-logo-base` |
| Global scan | Reveals the artwork through an aligned scan | `.layer-scan` |
| Frame / upper / core / wordmark | Staged system activation | `.layer-frame`, `.layer-upper`, `.layer-core`, `.layer-wordmark` |
| Bolt, bridge, tower, sensor, monitor, flask, gears | Independent aligned element highlights | `.element-*` selectors |
| Signal beam | Horizontal signal pass | `.mark-sweep` |

To change the logo timing, adjust the **8-second keyframes** named `reference-*` and `element-*` in `index.css`. Avoid changing the `clip-path` regions unless you are deliberately refining a specific logo element’s highlight area. The image layers must always stay `width: 100%`, `height: 100%`, and use the same `object-fit`/`object-position` values to preserve alignment.

## 6. Shared Page Shell

`components/SiteChrome.tsx` contains three reusable pieces:

| Component | Responsibility |
|---|---|
| `SiteNav` | All public tabs, desktop/mobile menu state, logo lockup, and Login link. |
| `SiteFooter` | Shared footer links and SENTEC base contact details. |
| `SecondaryPage` | Secondary page hero composition and common viewport-triggered reveal behavior. |

Every secondary route should be wrapped like this:

```tsx
return (
  <SecondaryPage
    eyebrow="SECTION / LABEL"
    title="Primary"
    accent="accent."
    intro="One concise paragraph describing the page."
  >
    <section className="secondary-section">...</section>
  </SecondaryPage>
)
```

## 7. Page-Specific Editing

### Team

The supplied team roster is held in the `members` array in `pages/Team.tsx`.

```ts
["Name", "Role", "Category", "image-file.webp", "https://linkedin.com/in/..."],
```

The image base URL is configured once at the top of the file. Add or update a member by editing one row. Use an empty LinkedIn string only if no URL is available. On narrow phones, cards switch to readable horizontal records automatically.

### Events

`pages/Events.tsx` intentionally uses an honest empty state. Replace it with confirmed event records, dates, registration URLs, and images. Do not publish invented event details.

### Partners

`pages/Partners.tsx` also uses transparent current/past partner placeholders. Replace them only with confirmed partnership information and approved logos.

### Gallery

`pages/Gallery.tsx` uses a `records` array to build filterable archive cards. Replace the graphical archive fields with real photographs and captions when assets are available. Keep one record object per item so filtering remains simple.

### Contact

`pages/Contact.tsx` contains the presentational form. It currently calls `event.preventDefault()` so it does not submit anywhere. Connect the form to a validated backend or hosted form endpoint before treating it as live.

## 8. Responsive Rules

Mobile styling is centralized in `index.css` under the `@media (max-width: 700px)`, `@media (max-width: 560px)`, and `@media (max-width: 900px)` blocks.

Key mobile decisions are deliberate:

- Navigation collapses into a menu button, with the full public tab set inside the menu.
- The landing copy leads, followed by a scaled exact-logo composition that remains visible above the fold.
- Gallery cards become single-column visual records.
- Team members become one-column horizontal records under 560px for readable names and roles.
- Forms, filters, page headers, and footers use reduced padding without losing hierarchy.

Test changes at **390px wide** as a baseline phone viewport and again at **1280px wide** for desktop.

## 9. Motion and Accessibility

The common section-entry class is `.motion-reveal`. It is activated by `IntersectionObserver` on the home page and by `SecondaryPage` for secondary routes.

| Motion | Use |
|---|---|
| `motion-reveal` | Page and section entrance: opacity + short upward movement. |
| `field-rise` | Staggered cards and domain rows after a section enters. |
| `logo-system-breathe` | Quiet full-logo rhythm that supports the exact-logo activation sequence. |
| Element keyframes | Individual logo symbol highlights, without moving source geometry. |

The final `prefers-reduced-motion` rules force content visible and stop nonessential looping. Keep this behavior when introducing new motion.

## 10. Asset Policy

The project references durable web assets through `/manus-storage/...` URLs. Keep new large images and media outside `client/public` and add them through the established asset upload workflow. Do not place large media files inside the project source tree.

| Existing asset | Purpose |
|---|---|
| `SENTECNEWWHITELOGO_2ba86ec2.webp` | Exact supplied SENTEC identity artwork. |
| `sentec-hero-texture_fbda6e33.png` | Home hero background. |
| `sentec-about-texture_326034d4.png` | About section atmosphere. |
| `sentec-project-texture_223a946e.png` | Projects section atmosphere. |

## 11. Safe Editing Workflow

1. Make a small edit in the appropriate page or shared component.
2. Adjust matching styling in `client/src/index.css` only when needed.
3. Run `pnpm check`.
4. Run `pnpm build`.
5. Test the relevant route on desktop and mobile.
6. Commit with a clear, focused message.

For navigation edits, update **both** `SiteChrome.tsx` and the homepage navigation in `Home.tsx`. For new pages, add the component under `pages/`, then register its path in `App.tsx`.

## 12. Current Known Follow-Ups

The project is ready for content updates. The next practical changes are to replace Gallery archive placeholders with real event media, populate Events and Partners with confirmed records, and connect the Contact form to a real submission service.
