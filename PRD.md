# PRD: 2026 1st Odisha AI Conference (OAIC) Website

> **For executing agents:** This PRD is self-contained. Execute phases in order, completing all steps within each phase before moving to the next. Each milestone is a checkpoint — verify all success criteria before proceeding.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Goals & Success Criteria](#2-goals--success-criteria)
3. [Technical Stack & Constraints](#3-technical-stack--constraints)
4. [Design System](#4-design-system)
5. [Site Architecture & Navigation](#5-site-architecture--navigation)
6. [Page Specifications](#6-page-specifications)
7. [Components Library](#7-components-library)
8. [Implementation Phases](#8-implementation-phases)
9. [File & Folder Structure](#9-file--folder-structure)
10. [Content Placeholders](#10-content-placeholders)
11. [Responsive Design Requirements](#11-responsive-design-requirements)
12. [Accessibility & SEO](#12-accessibility--seo)
13. [Deployment](#13-deployment)

---

## 1. Project Overview

**Conference Name:** 2026 1st Odisha AI Conference (OAIC)
**Website Type:** Fully functional, frontend-only static website
**Framework:** Next.js (App Router, static export)
**Design Inspiration:** [IEEE GLOBECOM 2026](https://globecom2026.ieee-globecom.org/) — migrate and adapt its HTML structure, layout patterns, and component conventions into Next.js with a refreshed visual identity.
**Visual Identity:** Earthy tones + glowing accent palette — think warm terracotta, deep forest greens, and sun-amber glows layered over dark charcoal backgrounds, evoking both Odisha's natural and cultural richness and the luminous cutting-edge of AI.

---

## 2. Goals & Success Criteria

### Goals

- Establish a professional, visually distinctive web presence for OAIC 2026.
- Provide all conference information (dates, calls, program, registration, travel) in a clean, navigable structure.
- Be fully mobile-responsive and accessible.
- Require zero backend — all content is static (hardcoded or JSON-driven via local files).

### Success Criteria

| Criterion | Target |
|-----------|--------|
| Lighthouse Performance Score | ≥ 90 |
| Lighthouse Accessibility Score | ≥ 90 |
| Lighthouse SEO Score | ≥ 90 |
| Mobile responsiveness | All pages render correctly at 320px–2560px |
| No broken links | 0 broken internal links |
| Build succeeds as static export | `next build && next export` exits with code 0 |
| All navbar dropdowns functional | All 7 top-level nav items and sub-items render and navigate |

---

## 3. Technical Stack & Constraints

### Core Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 (with a custom `tailwind.config.ts` extending the earthy/glow palette)
- **Icons:** `lucide-react`
- **Fonts:** Google Fonts via `next/font` — display font (e.g., *Playfair Display* or *DM Serif Display*) + body font (e.g., *Nunito* or *DM Sans*)
- **Images:** `next/image` with static imports or remote patterns disabled (frontend-only)
- **Animation:** Framer Motion (subtle scroll-reveal, navbar transitions, hero animations)
- **Deployment target:** Static export (`output: 'export'` in `next.config.ts`) — deployable to GitHub Pages, Netlify, Vercel, or any static host

### Constraints

- **No backend, no API routes, no server actions**
- **No database, no authentication**
- All content lives in `/src/data/*.ts` typed constant files (easy to update)
- No external CMS
- Images stored in `/public/images/`

---

## 4. Design System

### 4.1 Color Palette

```ts
// tailwind.config.ts — extend colors
colors: {
  earth: {
    50:  '#fdf6ee',
    100: '#f7e4c8',
    200: '#edc48a',
    300: '#e0a050',   // warm amber
    400: '#c97c2e',
    500: '#a85e1a',   // terracotta
    600: '#7c3f0e',
    700: '#5a2d09',
    800: '#3b1c05',
    900: '#1e0e02',
  },
  forest: {
    300: '#7db88a',
    400: '#4e9460',
    500: '#2e7044',   // deep green
    600: '#1a5230',
    700: '#0e3620',
  },
  glow: {
    amber:  '#ffb347',   // warm glow
    gold:   '#ffd700',
    teal:   '#00e5c0',   // cool AI accent
    indigo: '#7b5ea7',
  },
  dark: {
    900: '#0d0d0d',
    800: '#141414',
    700: '#1c1c1c',
    600: '#252525',
    500: '#2f2f2f',
  },
  surface: '#1a1610',    // primary background (dark warm)
}
```

### 4.2 Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / Hero headline | DM Serif Display | 400 | Large, editorial, serif |
| Section headings (h2, h3) | Playfair Display | 600/700 | Warm authority |
| Body text | Nunito | 400/500 | Readable, friendly |
| Labels / Badges / UI | DM Mono | 400 | Technical precision |
| Navigation | Nunito | 600 | Clean |

### 4.3 Spacing & Layout

- Max content width: `1280px` (centered)
- Section vertical padding: `py-20` (desktop), `py-12` (mobile)
- Gutter: `px-6` (mobile), `px-8` (tablet), `px-16` (desktop)
- Card border-radius: `rounded-xl`
- Button border-radius: `rounded-full` (CTA), `rounded-lg` (secondary)

### 4.4 Effects & Atmosphere

- **Background:** Dark charcoal (`#0d0d0d` to `#1a1610`) with subtle warm noise texture overlay (CSS `background-image: url('/textures/noise.png')`)
- **Glow effects:** Box-shadow and drop-shadow using `glow.amber` or `glow.teal` on key CTAs, section dividers, and card borders on hover
- **Gradient dividers:** Horizontal `linear-gradient` dividers between sections using earth tones fading to transparent
- **Hero:** Full-viewport section with an Odisha-landscape or abstract AI particle background (SVG or CSS-animated), conference title in large serif, date/location badge glowing in amber
- **Cards:** Dark surface (`dark.700`) with `1px` border in `earth.700`, hover lifts with subtle amber glow shadow

### 4.5 Navbar

- Sticky, blur-backdrop (`backdrop-blur-md bg-dark-900/80`)
- Logo left, nav links center/right
- Dropdowns: slide-down with Framer Motion (`AnimatePresence`), dark surface background, items with left-border accent on hover
- Mobile: hamburger → full-screen slide-in drawer with accordion dropdowns
- Active page: underline accent in `glow.amber`

---

## 5. Site Architecture & Navigation

### Navbar Structure

```
OAIC 2026 [Logo]
├── Authors ▾
│   ├── Important Dates          → /authors/important-dates
│   ├── Call for Papers          → /authors/call-for-papers
│   ├── Call for Industry Workshop Proposals → /authors/call-for-workshop-proposals
│   ├── Call for Poster Presentations → /authors/call-for-posters
│   └── Submission Guidelines   → /authors/submission-guidelines
│
├── Committees ▾
│   ├── Organizing Committee     → /committees/organizing
│   ├── Technical Program Committee → /committees/technical-program
│   ├── Operations Committee     → /committees/operations
│   └── Industry Forums and Exhibition Committee → /committees/industry-forums
│
├── Program ▾
│   ├── At a Glance              → /program/at-a-glance
│   ├── Workshops                → /program/workshops
│   └── Hackathons               → /program/hackathons
│
├── Registration ▾
│   └── Registration Fees        → /registration/fees
│
├── Travel ▾
│   ├── Visa Information         → /travel/visa
│   └── Tourist Attractions      → /travel/attractions
│
├── Patrons & Exhibitors         → /patrons-exhibitors
│
└── About ▾
    ├── About Us                 → /about/about-us
    └── Contact Us               → /about/contact
```

### Page Inventory (22 pages total)

| Route | Page Name |
|-------|-----------|
| `/` | Home / Landing |
| `/authors/important-dates` | Important Dates |
| `/authors/call-for-papers` | Call for Papers |
| `/authors/call-for-workshop-proposals` | Call for Workshop Proposals |
| `/authors/call-for-posters` | Call for Poster Presentations |
| `/authors/submission-guidelines` | Submission Guidelines |
| `/committees/organizing` | Organizing Committee |
| `/committees/technical-program` | Technical Program Committee |
| `/committees/operations` | Operations Committee |
| `/committees/industry-forums` | Industry Forums & Exhibition Committee |
| `/program/at-a-glance` | Program At a Glance |
| `/program/workshops` | Workshops |
| `/program/hackathons` | Hackathons |
| `/registration/fees` | Registration Fees |
| `/travel/visa` | Visa Information |
| `/travel/attractions` | Tourist Attractions |
| `/patrons-exhibitors` | Patrons & Exhibitors |
| `/about/about-us` | About OAIC |
| `/about/contact` | Contact Us |

---

## 6. Page Specifications

### 6.1 Home Page (`/`)

**Sections (top to bottom):**

1. **Hero**
   - Full-viewport height
   - Background: animated particle canvas or CSS gradient with Odisha landscape silhouette (SVG)
   - Conference logo/seal (top center or offset left)
   - Headline: "2026 1st Odisha AI Conference" in DM Serif Display, large
   - Subline: Date (e.g., "October 15–17, 2026") + Location (e.g., "Bhubaneswar, Odisha, India")
   - Two CTA buttons: "Submit Your Paper" (primary, amber glow) + "Learn More" (ghost)
   - Scroll-down indicator (animated chevron)

2. **Key Dates Ticker / Countdown Strip**
   - Horizontal scrolling strip with key deadlines (Paper Submission, Notification, Camera Ready, etc.)
   - Background: `earth.800` with `glow.amber` text

3. **About the Conference**
   - Two-column layout: text left, decorative imagery/map right
   - 2–3 paragraphs on OAIC's mission, scope, and significance
   - "About OAIC →" link

4. **Conference Highlights / Stats**
   - 4-column stat cards: Expected Attendees, Technical Sessions, Workshops, Sponsors
   - Each stat glows on hover

5. **Call for Papers (Teaser)**
   - Section with topics/tracks listed as pill badges
   - "View Full Call for Papers →" CTA

6. **Keynote Speakers (Teaser)**
   - Placeholder cards (photo circle, name, title, org) — 3–4 speakers
   - "View Full Program →" link

7. **Important Dates**
   - Timeline component (vertical on mobile, horizontal steps on desktop)
   - 5–6 key dates with icons

8. **Venue**
   - Wide-format section with venue name, city, and embedded map placeholder (static image with link)
   - Brief description of Bhubaneswar

9. **Sponsors / Patrons**
   - Logo grid with 2–3 tier rows (Gold, Silver, Bronze)
   - "Become a Patron →" CTA

10. **Footer**
    - Logo + tagline left
    - Quick links (nav mirror) center
    - Contact info + social icons right
    - Copyright line bottom

---

### 6.2 Authors Pages

**Important Dates (`/authors/important-dates`)**

- Styled table or timeline component
- Columns: Event, Date, Status (Open/Closed/Upcoming) with color badges
- Reminder: highlight "Extended" dates in amber if applicable

**Call for Papers (`/authors/call-for-papers`)**

- Hero banner with section title
- Topics of interest: categorized cards or expandable accordion groups
- Submission types (Full Paper, Short Paper, etc.) as styled cards
- CTA: "Submit via [System]" button (links to external submission portal)

**Call for Industry Workshop Proposals (`/authors/call-for-workshop-proposals`)**

- What is a workshop proposal + eligibility
- Proposal format (bullet list)
- Key dates specific to workshops
- CTA: Download proposal template (PDF link placeholder)

**Call for Poster Presentations (`/authors/call-for-posters`)**

- Purpose + audience
- Poster format requirements
- Submission instructions
- Key dates

**Submission Guidelines (`/authors/submission-guidelines`)**

- Tabbed layout: General Guidelines | Formatting | Ethics Policy | Camera-Ready
- Each tab shows relevant content
- Download links for LaTeX/Word templates

---

### 6.3 Committees Pages

Each committee page follows the same template:

**Layout Template:**

- Page title banner
- Brief committee description
- Committee member cards: Photo (circular, placeholder), Name, Role/Title, Institution/Org
- Cards in a responsive grid: 4-col desktop → 3-col tablet → 2-col → 1-col mobile

**Committees:**

- Organizing Committee
- Technical Program Committee
- Operations Committee
- Industry Forums and Exhibition Committee

---

### 6.4 Program Pages

**At a Glance (`/program/at-a-glance`)**

- Day-by-day schedule grid (tabbed by day)
- Time slots in rows, tracks in columns
- Color-coded by session type (Keynote, Workshop, Panel, Break)
- Mobile: condensed single-column list per day

**Workshops (`/program/workshops`)**

- Cards per workshop: title, organizers, date/time, room, abstract
- Filter/sort by day (client-side JS filter, no backend)
- Each card expands or links to a detail section

**Hackathons (`/program/hackathons`)**

- Hero with hackathon title and theme
- Timeline: Registration → Ideation → Submission → Demo Day → Awards
- Prize tiers with glow accents
- Registration CTA button

---

### 6.5 Registration Fees (`/registration/fees`)

- Tabbed pricing table: Early Bird | Regular | On-Site
- Row categories: Student, Academic, Industry, International
- Includes/Excludes checklist per tier
- CTA: "Register Now" → external link placeholder
- Important notes section (cancellation policy, payment methods)

---

### 6.6 Travel Pages

**Visa Information (`/travel/visa`)**

- Countries requiring visa / visa-on-arrival / e-visa table
- Step-by-step visa application guide
- Invitation letter request form placeholder (static mailto link)
- Link to official Indian visa portal

**Tourist Attractions (`/travel/attractions`)**

- Hero with Odisha imagery
- Grid of attraction cards: Konark Sun Temple, Puri Jagannath Temple, Chilika Lake, Lingaraj Temple, Nandankanan Zoo, etc.
- Each card: photo placeholder, name, short description, distance from venue
- Local cuisine section

---

### 6.7 Patrons & Exhibitors (`/patrons-exhibitors`)

- Why sponsor/exhibit section
- Sponsorship tiers table (Platinum, Gold, Silver, Bronze, Exhibitor) with benefits matrix
- Download sponsorship brochure CTA
- Current patrons/exhibitors logo grid (placeholder)
- Contact for sponsorship (mailto link)

---

### 6.8 About Pages

**About Us (`/about/about-us`)**

- Conference history and vision
- Organizers: institution logos and descriptions
- Photo/illustration of Odisha or AI concept
- Mission statement quote block (styled with earth tones)

**Contact Us (`/about/contact`)**

- Static contact form (submits via `mailto:` href on button, no backend)
- Contact details: email addresses per category (General, Papers, Sponsorship, Media)
- Physical address of organizing institution
- Social media links

---

## 7. Components Library

All components live in `/src/components/`. Below is the full inventory:

### Layout Components

| Component | File | Description |
|-----------|------|-------------|
| `Navbar` | `layout/Navbar.tsx` | Sticky top nav with dropdowns and mobile drawer |
| `NavDropdown` | `layout/NavDropdown.tsx` | Animated dropdown for desktop nav |
| `MobileDrawer` | `layout/MobileDrawer.tsx` | Full-screen mobile nav with accordion groups |
| `Footer` | `layout/Footer.tsx` | Sitewide footer |
| `PageLayout` | `layout/PageLayout.tsx` | Wraps all inner pages with banner + content area |
| `PageBanner` | `layout/PageBanner.tsx` | Top section with breadcrumb + page title |

### UI Primitives

| Component | File | Description |
|-----------|------|-------------|
| `Button` | `ui/Button.tsx` | Variants: primary (glow), secondary, ghost, outline |
| `Badge` | `ui/Badge.tsx` | Colored pill for topics, status, tiers |
| `Card` | `ui/Card.tsx` | Dark surface card with hover glow |
| `SectionHeading` | `ui/SectionHeading.tsx` | Serif h2 + subtitle + decorative underline |
| `Divider` | `ui/Divider.tsx` | Gradient horizontal rule |
| `Tabs` | `ui/Tabs.tsx` | Client-side tab switcher |
| `Accordion` | `ui/Accordion.tsx` | Expand/collapse sections |
| `CountdownTimer` | `ui/CountdownTimer.tsx` | Live countdown to conference date |
| `GlowText` | `ui/GlowText.tsx` | Text with amber glow CSS effect |

### Section Components

| Component | File | Description |
|-----------|------|-------------|
| `HeroSection` | `sections/HeroSection.tsx` | Full-viewport homepage hero |
| `DatesTicker` | `sections/DatesTicker.tsx` | Scrolling deadlines strip |
| `StatsBar` | `sections/StatsBar.tsx` | 4-column conference stats |
| `TimelineSection` | `sections/TimelineSection.tsx` | Important dates visual timeline |
| `SpeakerCard` | `sections/SpeakerCard.tsx` | Speaker photo + info card |
| `SponsorGrid` | `sections/SponsorGrid.tsx` | Logo grid with tier labels |
| `VenueSection` | `sections/VenueSection.tsx` | Venue info + map placeholder |
| `CommitteeMemberCard` | `sections/CommitteeMemberCard.tsx` | Person card for committee pages |
| `ScheduleGrid` | `sections/ScheduleGrid.tsx` | Day-by-day program grid |
| `WorkshopCard` | `sections/WorkshopCard.tsx` | Workshop detail card |
| `PricingTable` | `sections/PricingTable.tsx` | Registration fees table |
| `AttractionCard` | `sections/AttractionCard.tsx` | Tourist attraction card |

---

## 8. Implementation Phases

### Phase 1 — Project Scaffold & Design System

**Objective:** Working Next.js project with full design system wired up.

**Steps:**

1. `npx create-next-app@latest oaic-2026 --typescript --tailwind --app --no-src-dir` (or with `--src-dir`)
2. Configure `tailwind.config.ts` with the full custom color palette, fonts, and custom utilities (glow shadows, noise texture).
3. Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`
4. Set up Google Fonts in `app/layout.tsx` via `next/font/google`
5. Create global CSS: noise texture overlay, scrollbar styling, selection color
6. Create `src/lib/cn.ts` utility (clsx + twMerge)
7. Set `output: 'export'` in `next.config.ts`
8. Verify: `npm run dev` starts, Tailwind custom colors resolve, fonts load

**Milestone 1 Checkpoint:**

- [ ] Dev server runs without errors
- [ ] Custom colors visible in a test component
- [ ] Fonts render correctly
- [ ] Static export builds (`npm run build`)

---

### Phase 2 — Layout Shell (Navbar + Footer)

**Objective:** Navigation and footer implemented across all pages.

**Steps:**

1. Create `Navbar.tsx` with all 7 top-level items and all sub-items defined in a `navConfig.ts` data file
2. Implement desktop dropdown using Framer Motion `AnimatePresence`
3. Implement mobile hamburger + full-screen drawer with accordion groups
4. Add active link highlighting using `usePathname`
5. Implement sticky behavior with `backdrop-blur` on scroll
6. Create `Footer.tsx` with logo, quick links, contact info, copyright
7. Create `PageLayout.tsx` wrapping children with Navbar + Footer
8. Create `PageBanner.tsx` (title + breadcrumb) used by all inner pages
9. Wire layout into `app/layout.tsx`

**Milestone 2 Checkpoint:**

- [ ] All nav items render on desktop with working dropdowns
- [ ] Mobile drawer opens/closes, all sub-items accessible
- [ ] Footer renders on all pages
- [ ] Active route highlighted correctly
- [ ] No layout shift on scroll

---

### Phase 3 — Home Page

**Objective:** Full homepage with all 10 sections implemented.

**Steps:**

1. `app/page.tsx` — compose all home sections
2. `HeroSection.tsx` — animated background (CSS keyframes or Framer Motion), headline, CTAs
3. `DatesTicker.tsx` — CSS marquee or JS scroll with key dates from `src/data/dates.ts`
4. About section — static text + placeholder image
5. `StatsBar.tsx` — 4 animated counter stats
6. Call for Papers teaser — topic badges from `src/data/topics.ts`
7. Keynote speakers teaser — placeholder cards from `src/data/speakers.ts`
8. `TimelineSection.tsx` — dates from `src/data/dates.ts`
9. Venue section — static content + map placeholder image
10. `SponsorGrid.tsx` — placeholder logos from `src/data/sponsors.ts`

**Milestone 3 Checkpoint:**

- [ ] All 10 sections render without errors
- [ ] Hero animation runs smoothly (no jank)
- [ ] All CTAs link to correct internal routes
- [ ] Page looks correct on mobile (375px) and desktop (1440px)

---

### Phase 4 — Authors Section (5 pages)

**Steps:**

1. Create route folders: `app/authors/important-dates/`, etc.
2. Build data files: `src/data/importantDates.ts`, `src/data/callForPapers.ts`, `src/data/submissionGuidelines.ts`
3. Implement each page using `PageLayout` + `PageBanner`
4. Implement `Tabs` component for Submission Guidelines
5. Implement timeline/table for Important Dates

**Milestone 4 Checkpoint:**

- [ ] All 5 author pages accessible via nav
- [ ] No 404s on direct URL access
- [ ] Tables/timelines render on mobile

---

### Phase 5 — Committees Section (4 pages)

**Steps:**

1. Create route folders for all 4 committees
2. Create `src/data/committees.ts` with placeholder member data (name, role, institution, placeholder photo path)
3. Implement `CommitteeMemberCard.tsx`
4. Use shared `CommitteePage` template component to reduce duplication

**Milestone 5 Checkpoint:**

- [ ] All 4 committee pages render correctly
- [ ] Member cards responsive grid works at all breakpoints

---

### Phase 6 — Program Section (3 pages)

**Steps:**

1. Create routes for At a Glance, Workshops, Hackathons
2. Build `src/data/program.ts` with schedule data
3. Implement `ScheduleGrid.tsx` with day tabs
4. Implement `WorkshopCard.tsx` with client-side filter
5. Implement Hackathons page with timeline + prizes

**Milestone 6 Checkpoint:**

- [ ] Schedule grid renders and tabs switch days
- [ ] Workshop filter works client-side
- [ ] Hackathon page CTA links correctly

---

### Phase 7 — Registration, Travel, Patrons, About (7 pages)

**Steps:**

1. Registration Fees — `PricingTable.tsx` with tabs (Early/Regular/On-site)
2. Visa Information — guide + table
3. Tourist Attractions — `AttractionCard.tsx` grid with Odisha attractions
4. Patrons & Exhibitors — sponsorship tiers + logo grid
5. About Us — mission, organizers
6. Contact Us — static contact form (mailto action)

**Milestone 7 Checkpoint:**

- [ ] All 7 pages render and are accessible via nav
- [ ] Pricing table tabs work
- [ ] Contact form submits via mailto (no JS errors)

---

### Phase 8 — Polish, Responsiveness & Optimization

**Steps:**

1. Audit all pages at 320px, 375px, 768px, 1024px, 1280px, 1440px, 1920px
2. Fix any overflow, wrapping, font-size issues
3. Add `<meta>` tags, Open Graph, Twitter card data to `app/layout.tsx`
4. Add `robots.txt` and `sitemap.xml` (static files in `/public`)
5. Optimize images: use `next/image` with correct `sizes` prop
6. Add `aria-label` to all interactive elements
7. Verify keyboard navigation (tab order, focus rings)
8. Run Lighthouse audit; fix any score below 90
9. Final `npm run build` — verify 0 errors, 0 warnings

**Milestone 8 Checkpoint:**

- [ ] Lighthouse scores ≥ 90 across all metrics
- [ ] No console errors in production build
- [ ] All pages accessible via keyboard
- [ ] Static export complete and deployable

---

## 9. File & Folder Structure

```
oaic-2026/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.svg
│   │   ├── venue-placeholder.jpg
│   │   ├── odisha-konark.jpg
│   │   ├── speakers/         # speaker headshots
│   │   ├── sponsors/         # sponsor logos
│   │   └── attractions/      # tourist attraction photos
│   ├── textures/
│   │   └── noise.png
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Navbar + Footer + fonts + meta)
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── authors/
│   │   │   ├── important-dates/page.tsx
│   │   │   ├── call-for-papers/page.tsx
│   │   │   ├── call-for-workshop-proposals/page.tsx
│   │   │   ├── call-for-posters/page.tsx
│   │   │   └── submission-guidelines/page.tsx
│   │   ├── committees/
│   │   │   ├── organizing/page.tsx
│   │   │   ├── technical-program/page.tsx
│   │   │   ├── operations/page.tsx
│   │   │   └── industry-forums/page.tsx
│   │   ├── program/
│   │   │   ├── at-a-glance/page.tsx
│   │   │   ├── workshops/page.tsx
│   │   │   └── hackathons/page.tsx
│   │   ├── registration/
│   │   │   └── fees/page.tsx
│   │   ├── travel/
│   │   │   ├── visa/page.tsx
│   │   │   └── attractions/page.tsx
│   │   ├── patrons-exhibitors/
│   │   │   └── page.tsx
│   │   └── about/
│   │       ├── about-us/page.tsx
│   │       └── contact/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavDropdown.tsx
│   │   │   ├── MobileDrawer.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PageLayout.tsx
│   │   │   └── PageBanner.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Divider.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── CountdownTimer.tsx
│   │   │   └── GlowText.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── DatesTicker.tsx
│   │       ├── StatsBar.tsx
│   │       ├── TimelineSection.tsx
│   │       ├── SpeakerCard.tsx
│   │       ├── SponsorGrid.tsx
│   │       ├── VenueSection.tsx
│   │       ├── CommitteeMemberCard.tsx
│   │       ├── ScheduleGrid.tsx
│   │       ├── WorkshopCard.tsx
│   │       ├── PricingTable.tsx
│   │       └── AttractionCard.tsx
│   │
│   ├── data/
│   │   ├── nav.ts              # navConfig: all nav items + routes
│   │   ├── dates.ts            # importantDates[]
│   │   ├── callForPapers.ts    # topics[], submissionTypes[]
│   │   ├── speakers.ts         # keynoteSpeakers[]
│   │   ├── committees.ts       # all 4 committee member arrays
│   │   ├── program.ts          # schedule[], workshops[], hackathons[]
│   │   ├── registration.ts     # pricingTiers[]
│   │   ├── sponsors.ts         # sponsors[] with tiers
│   │   ├── attractions.ts      # touristAttractions[]
│   │   └── contact.ts          # contactInfo
│   │
│   ├── lib/
│   │   └── cn.ts               # clsx + tailwind-merge utility
│   │
│   └── types/
│       └── index.ts            # Shared TypeScript interfaces
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 10. Content Placeholders

All content should be stored in `src/data/` as TypeScript constants. Below are the key data shapes:

### `src/types/index.ts`

```ts
export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface ImportantDate {
  event: string;
  date: string;
  status: 'open' | 'closed' | 'upcoming' | 'extended';
}

export interface Speaker {
  name: string;
  title: string;
  organization: string;
  photoUrl: string;
  bio?: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
  institution: string;
  photoUrl?: string;
}

export interface ScheduleSlot {
  day: number; // 1, 2, 3
  time: string;
  title: string;
  type: 'keynote' | 'workshop' | 'panel' | 'break' | 'social';
  room?: string;
  speaker?: string;
}

export interface Workshop {
  id: string;
  title: string;
  organizers: string[];
  day: number;
  time: string;
  room: string;
  abstract: string;
}

export interface PricingTier {
  name: string; // 'Early Bird' | 'Regular' | 'On-Site'
  cutoff: string;
  rows: { category: string; amount: string; currency: string }[];
}

export interface Sponsor {
  name: string;
  logoUrl: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'exhibitor';
  website?: string;
}

export interface TouristAttraction {
  name: string;
  description: string;
  photoUrl: string;
  distanceFromVenue: string;
  category: 'heritage' | 'nature' | 'religious' | 'museum';
}
```

---

## 11. Responsive Design Requirements

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| `xs` | 320px | Single column, minimal padding, hamburger nav |
| `sm` | 640px | Single column, slightly more padding |
| `md` | 768px | Two-column layouts begin, tablet nav still hamburger |
| `lg` | 1024px | Desktop nav appears, three-column grids |
| `xl` | 1280px | Full layout, max-width container centered |
| `2xl` | 1536px | Same as xl, content stays constrained |

**Critical mobile behaviors:**

- Navbar collapses to hamburger at `< lg`
- Hero text scales down gracefully (use `clamp()` or responsive text classes)
- Tables convert to card stacks on mobile (Registration, Visa, Important Dates)
- ScheduleGrid converts to single-column day list on mobile
- Committee member grids: 4-col → 2-col → 1-col
- Footer stacks vertically on mobile

---

## 12. Accessibility & SEO

### Accessibility

- All images have descriptive `alt` text
- All interactive elements have `aria-label` or visible label text
- Dropdown menus have `aria-expanded`, `aria-haspopup`, `role="menu"`, `role="menuitem"`
- Color contrast ratio ≥ 4.5:1 for all body text on dark backgrounds
- Focus ring visible on all focusable elements (use `focus-visible:ring-2 ring-glow-amber`)
- Skip-to-main-content link at top of page
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

### SEO

- `<title>` tag per page: e.g., "Call for Papers | OAIC 2026"
- Meta description per page (≤ 160 chars)
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- Twitter card tags
- Canonical URL
- Structured data (JSON-LD) on homepage for `Event` schema:

  ```json
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "2026 1st Odisha AI Conference",
    "startDate": "2026-10-15",
    "location": { "@type": "Place", "name": "Bhubaneswar, Odisha, India" }
  }
  ```

- `sitemap.xml` listing all 19 routes
- `robots.txt` allowing all crawlers

---

## 13. Deployment

### Build Command

```bash
npm run build
# Output: /out directory (static HTML/CSS/JS)
```

### `next.config.ts`

```ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,      // required for static hosting
  images: { unoptimized: true }, // required for static export
};
export default nextConfig;
```

### Hosting Options (any static host works)

- **Vercel:** Push repo, set framework to Next.js — auto-detected
- **GitHub Pages:** Use `gh-pages` branch, set base path if not root domain
- **Netlify:** Connect repo, set build command `npm run build`, publish dir `out`

### Environment

- No environment variables required (frontend-only, no API keys)

---

*PRD Version 1.0 — OAIC 2026 Website*
*Prepared for agent-driven implementation. All phases are sequential and self-contained.*
