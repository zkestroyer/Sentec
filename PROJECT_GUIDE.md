# SENTEC Website Project Guide

> **Purpose:** This guide is the practical map for editing the SENTEC website. The project is a React 19 + Vite frontend with a dark-default **Signal / Structure** visual language, a persistent clinical light mode, exact supplied SENTEC logo artwork, responsive public navigation, and motion that honors reduced-motion preferences.

## 1. Development Commands

Run all commands from the project root.

| Task | Command | Notes |
|---|---|---|
| Start the development server | `pnpm dev` | Runs Vite with host access. |
| Check TypeScript | `pnpm check` | Runs `tsc --noEmit`. |
| Create a production build | `pnpm build` | Builds the browser bundle and production server entry. |
| Format source files | `pnpm format` | Runs Prettier across the project. |

```bash
cd sentec-landing-redesign
pnpm dev
```

## 2. Source Map

```text
sentec-landing-redesign/
├── client/
│   ├── index.html                         # Document title, fonts, and mount point
│   └── src/
│       ├── App.tsx                        # Wouter routes and dark-default ThemeProvider
│       ├── index.css                      # Tokens, themes, responsive layout, and animation
│       ├── contexts/
│       │   └── ThemeContext.tsx            # Persistent light/dark preference
│       ├── components/
│       │   ├── SiteChrome.tsx              # Shared nav, footer, and secondary-page shell
│       │   └── ThemeToggle.tsx             # Accessible theme switch control
│       └── pages/
│           ├── Home.tsx                    # Landing page and exact-logo hero animation stack
│           ├── Team.tsx                    # Team directory and filters
│           ├── Events.tsx                  # Events destination and honest empty state
│           ├── Partners.tsx                # Partner destination and honest empty state
│           ├── Gallery.tsx                 # Filterable visual archive cards
│           └── Contact.tsx                 # Contact information and presentational form
├── server/index.ts                         # Static production-serving entry point
├── PROJECT_GUIDE.md                        # This implementation guide
├── ideas.md                                # Chosen design direction and non-negotiable rules
├── package.json                            # Scripts and dependencies
└── vite.config.ts                          # Vite configuration
```

## 3. Routes and Public Navigation

`client/src/App.tsx` contains the route table. The same public link set must be maintained in the home-page navigation inside `pages/Home.tsx` and the reusable navigation in `components/SiteChrome.tsx`.

| Label | URL | Primary file | Editing guidance |
|---|---|---|---|
| Home | `/` | `pages/Home.tsx` | Landing page and hero. |
| About | `/#about` | `pages/Home.tsx` | Homepage section anchor. |
| Team | `/team` | `pages/Team.tsx` | Supplied leadership and member data. |
| Events | `/events` | `pages/Events.tsx` | Add confirmed event records only. |
| Partners | `/partners` | `pages/Partners.tsx` | Add approved partner information and marks only. |
| Gallery | `/gallery` | `pages/Gallery.tsx` | Replace archive placeholders with approved media. |
| Contact Us | `/contact` | `pages/Contact.tsx` | Connect the form before treating it as live. |
| Login | External destination | `Home.tsx`, `SiteChrome.tsx` | Keep both existing links synchronized. |

At narrow widths, the public links remain visible as a compact wrapped navigation grid rather than being replaced by a hamburger-only menu.

## 4. Theme System

`ThemeProvider` in `App.tsx` starts the site in dark mode and permits switching. `ThemeContext.tsx` applies the `.dark` class to the root document and saves the chosen preference locally. `ThemeToggle.tsx` is used in the home navigation and the shared page shell.

| Theme | Intent | Exact logo asset | Implementation area |
|---|---|---|---|
| Dark, default | Near-black engineering field with restrained steel-blue detail and ember-orange signals | `SENTECNEWWHITELOGO_2ba86ec2.webp` | Base CSS and `.dark` rules |
| Clinical light | Cool sky-blue drafting surface with deep navy text/panels and the same ember-orange signal | `SENTECNEWLOGO_b206fe12.webp` | `html:not(.dark)` overrides |

> **Theme rule:** Light mode is a lighter technical interface, not a blank white reskin. Keep its texture, navy engineering surfaces, orange accent, and full public navigation intact.

## 5. Exact SENTEC Logo and Hero

The original supplied logo artwork is the source of truth. It is referenced in `pages/Home.tsx` as theme-aware assets.

```ts
const logoAsset = "/manus-storage/SENTECNEWWHITELOGO_2ba86ec2.webp";
const lightLogoAsset = "/manus-storage/SENTECNEWLOGO_b206fe12.webp";
```

`AnimatedMark()` renders a base image and registered duplicate image layers. The layers use clipped regions to animate individual areas while preserving the supplied source geometry. The animation must never reconstruct or manually reposition the logo’s internal illustration.

| Layer group | Current role | Main CSS selectors |
|---|---|---|
| Base artwork | Holds the complete, exact logo in its native portrait composition | `.reference-logo-base`, `.reference-logo` |
| Scan and activation groups | Reveal the overall artwork in stages | `.layer-scan`, `.layer-frame`, `.layer-upper`, `.layer-core`, `.layer-wordmark` |
| Individual details | Highlight the bolt, bridge, tower, sensor, monitor, flask, gears, and core in place | `.element-*` |
| Signal pass | Provides the horizontal engineering pulse | `.mark-sweep` |

### Hero placement rule

The final hero intentionally has **no added square field, circular halo, clipped instrument frame, or separate backing shape behind the logo**. The exact artwork is presented unframed over the existing hero texture in its native portrait aspect ratio. Do not reintroduce independent background geometry behind the artwork unless the design direction is explicitly changed.

When adjusting the hero, keep `mark-stage`, `reference-logo-stack`, and every duplicate image layer on the same scale and `object-fit: contain` logic. This preserves the position of the logo illustration, wordmark, and animated clipped regions together.

## 6. Design System

Most styling lives in `client/src/index.css`.

| Element | Direction | Where to edit |
|---|---|---|
| Base surfaces | Ink-black technical field in dark mode; cool sky drafting plane in light mode | Root variables and theme blocks |
| Accent | Signal orange (`--orange`) for active paths, rules, controls, and key data | Root variables and component selectors |
| Technical labels | Uppercase `IBM Plex Mono` with calibrated spacing | Eyebrow, metadata, and navigation selectors |
| Display type | Tight, high-impact editorial heading treatment | Heading rules in `index.css` |
| Structural detail | Thin system lines, ticks, brackets, and background texture | Section, card, and hero styles |

> **Editing principle:** Do not add unrelated gradients, generic rounded-card systems, or arbitrary bright colors. New work should reinforce the editorial engineering atmosphere and reserve orange for active signals.

## 7. Shared Page Shell and Content Areas

`components/SiteChrome.tsx` provides the shared page shell.

| Component | Responsibility |
|---|---|
| `SiteNav` | Public links, theme toggle, logo lockup, and Login link. |
| `SiteFooter` | Shared footer navigation and base contact details. |
| `SecondaryPage` | Shared secondary-page hero and section-reveal behavior. |

Secondary routes should be wrapped with `SecondaryPage` so they inherit the page rhythm and motion system.

| Page | Current implementation | Safe next change |
|---|---|---|
| Team | Supplied member roster with categories and external profile links | Edit the local member data array. |
| Events | Honest empty state | Add confirmed dates, titles, registration URLs, and approved media. |
| Partners | Honest partner placeholder | Add approved partner details and logo files. |
| Gallery | Filterable archive records | Replace placeholders with real approved photographs and captions. |
| Contact | Presentational form that prevents submission | Connect a validated backend or hosted form endpoint. |

## 8. Responsive Behavior and Motion

Responsive styling is centralized in `index.css`, principally in the `@media (max-width: 900px)`, `@media (max-width: 700px)`, and `@media (max-width: 560px)` blocks. Test at approximately 375–390px wide and again at 1280px wide whenever navigation, the hero, or section layout changes.

The landing copy leads on mobile, followed by the unframed exact-logo composition. Gallery records become single-column; team entries become compact horizontal records; forms and section spacing tighten while preserving hierarchy.

The shared `.motion-reveal` class drives section entrances. Hero motion is limited to source-registered image-layer reveals, a restrained whole-mark rhythm, and the horizontal signal pass. The final `prefers-reduced-motion` block makes content visible and stops nonessential looping; preserve that behavior whenever motion is edited.

## 9. Asset Policy

The standard managed preview uses durable `/manus-storage/...` URLs for visual assets. The connected GitHub repository also includes an `assets/` directory with the exact source files and a manifest. `client/src/lib/assets.ts` selects hosted URLs by default and switches to local `/assets/...` URLs when `VITE_ASSET_MODE=local` is enabled.

For a normal local or self-hosted build, run `pnpm dev:local` or `pnpm build:local`. Those commands copy the tracked root-level `assets/` directory into Vite’s generated public directory before serving or building. See [`LOCAL_HOSTING.md`](./LOCAL_HOSTING.md) for the complete workflow. Do not commit the generated `client/public/assets/` directory.

| Asset | Purpose |
|---|---|
| `SENTECNEWWHITELOGO_2ba86ec2.webp` | Exact dark-mode SENTEC artwork. |
| `SENTECNEWLOGO_b206fe12.webp` | Exact clinical-light-mode SENTEC artwork. |
| `sentec-hero-texture_fbda6e33.png` | Home hero technical texture. |
| `sentec-about-texture_326034d4.png` | About-section atmosphere. |
| `sentec-project-texture_223a946e.png` | Project-section atmosphere. |

## 10. Safe Editing and Repository Workflow

Make focused changes, then run `pnpm check` and `pnpm build`. Inspect the affected route on desktop and mobile before saving a checkpoint. For navigation changes, update both navigation implementations; for new routes, add the page under `pages/` and register it in `App.tsx`.

The connected source repository is [`zkestroyer/Sentec`](https://github.com/zkestroyer/Sentec). When synchronizing code, include source files, the tracked root-level `assets/` directory, and the durable project documents, but exclude `node_modules`, `dist`, `.manus-logs`, generated `client/public/assets/`, temporary task notes, and project-local runtime configuration.

## 11. Current Follow-Ups

The implementation is ready for content work. The highest-value next steps are replacing Gallery placeholders with approved project imagery, adding confirmed Events and Partners records, and connecting the Contact form to an actual submission workflow.
