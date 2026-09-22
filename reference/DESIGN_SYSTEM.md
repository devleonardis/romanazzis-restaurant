# Design System Reference — analysis of restaurantgem.com

This document distills the visual language, layout, typography, spacing, color
roles, and motion patterns of **restaurantgem.com** (Restaurant GEM, a
2-Michelin-star restaurant in a 14th-century Dutch castle) so they can be
reused — as generic, reusable *design roles*, not literal brand values — for
the Romanazzi's rebuild. Romanazzi's is an Italian fine-dining/fish restaurant
on the harbor of Giovinazzo, Puglia, and should get its own brand colors,
imagery and copy voice; only the *system* (structure, rhythm, motion
grammar) is meant to be carried over.

Analysis method: the live site was loaded in a real browser (not static HTML
fetch), scrolled through, and inspected with `getComputedStyle` on key
elements (headings, body text, CTAs, sections, containers) plus a DOM/class
audit to detect the animation library and structural patterns.

---

## 1. Layout structure & section hierarchy (homepage, top to bottom)

| # | Section (class observed) | Height (approx, desktop) | Purpose |
|---|---------------------------|---------------------------|---------|
| 1 | `hero-section` | ~768px (full viewport) | Full-bleed hero photo (castle door/entrance detail) with logotype mark, H1 restaurant name, one-line chef/heritage introduction, and a floating bottom-right sticky reservation pill button. Nav is absolutely positioned/transparent over the image. |
| 2 | `spacing horizontal-scroll` (marquee) | ~253px | A horizontally auto-scrolling ticker band repeating brand taglines ("Restaurant GEM. • Cultural Heritage • Soenil Bahadoer •"). Acts as a rhythmic divider/palate-cleanser between hero and story, and reinforces brand keywords. |
| 3 | `container spacing` (about/value-prop) | ~650px | "Where cultural heritage meets culinary excellence" — H2 + a short paragraph explaining the culinary philosophy (fusion of heritage cuisines). This is the value-proposition / brand-story section. |
| 4 | `spacing parallax-container parallax-section` | ~768px (full viewport) | Full-width parallax image (the "journey menu" teaser: "Around the world, one plate at a time") with a "VIEW OUR MENU" CTA — a cinematic, scroll-linked visual break that sells the tasting-menu concept. |
| 5 | `spacing container featured-menu` | ~614px | **Signature Dishes** showcase: a row/grid of named hero dishes (KING CRAB, SCALLOP, SPINACH, CAVIAR 30 GRAMS, RENDANG) each presumably as an image card with the dish name (price/detail likely revealed on hover or on a linked menu page rather than inline text). |
| 6 | `spacing` (accommodation) | ~910px | "Stay the night at our beautiful Gardensuite…" — a suite/accommodation upsell section (two room cards: "The Donjon Tower Suite", "The Garden Suite", each with a "Read more" link) with a "BOOK OUR ROOMS" CTA. This is the "stay/experience extension" section — for Romanazzi's this concept maps to a private dining room / terrace-on-the-harbor experience rather than literal lodging. |
| 7 | `spacing horizontal-scroll` (repeat marquee) | ~253px | Same ticker pattern repeated — bookends the page's mid-content the way it opened it, before the footer. |
| 8 | `spacing parallax-section` (newsletter) | ~400px | Newsletter signup band ("Fresh menu drops, events and behind-the-scenes spice tips straight to your inbox") over a parallax image — a soft, low-pressure email capture. |
| 9 | `footer-area-ig` (social feed) | ~96px+ | "Follow Us On Instagram" — a horizontal strip of recent Instagram post thumbnails/captions (social proof / lifestyle feed). |
| 10 | `footer-area-one/two/three` (multi-column footer) | ~150–240px combined | Standard multi-column footer: site nav links (Home/About/Stay/Menu/Contact), contact block (address, phone, email), legal line + policy links (Cookies/Privacy/Terms/Sitemap). |

**Overall narrative arc:** arrival (hero) → brand ticker → philosophy/story →
cinematic menu teaser → signature dishes with visual proof → extended
experience (stay/suite) → ticker again → soft conversion (newsletter) →
social proof (Instagram) → utility footer. This "story → proof → soft
conversion → utility" arc is the piece most worth reusing structurally.

---

## 2. Typography

Confirmed via computed styles (`getComputedStyle`) on live rendered elements:

- **Display / heading font:** `"Gilda Display", sans-serif` (serif fallback
  label is misleading — Gilda Display is itself a classic, high-contrast
  serif). Used for H1, H2, H3. Weight is a single **400 (regular)** — no
  bold display weight is used; elegance comes from size and generous
  line-height, not weight.
- **Body font:** `"DM Sans", sans-serif` — a clean, low-contrast geometric
  sans. Body paragraph weight observed as **300 (light)**, giving a soft,
  editorial feel against the heavier serif headings.
- **Type scale observed (desktop, ~1024px viewport):**
  - H1 (hero title): **37.4px / line-height 44.8px** (this instance was a
    smaller hero sub-line; treat as an H1 variant — larger hero word-marks
    in the design run bigger, closer to 60–90px at full desktop width)
  - H2 (section headline, e.g. "Where cultural heritage meets culinary
    excellence"): **81.9px / line-height 98.3px** — very large, ~1.2x
    line-height ratio, no letter-spacing adjustment (normal tracking)
  - H3 (sub-headings, e.g. room/dish names): **24px / line-height 36px**
    (1.5x line-height — generous)
  - Body paragraph: **18px / line-height 28px** (~1.56x line-height),
    weight 300
  - CTA / button label: **16px**, uppercase, `letter-spacing: normal` in
    this build but visually tracked-out via uppercase transform + spacing
    in the padding rhythm (see CTA section below)
- **Letter-spacing / tracking:** headings use *normal* (0) tracking — the
  luxury feel comes from the serif letterforms and huge size, not from
  tracked-out caps. Uppercase treatment is reserved for **labels/eyebrows
  and buttons**, not headlines.
- **Color on text:** headings and body render in near-white
  (`rgb(255,255,255)`) against dark backgrounds — high contrast, minimal
  text color variation (accent color is reserved for links/CTAs, not body
  copy).
- **Pairing takeaway for Romanazzi's:** one elegant serif display face
  (regular weight only) for headlines + one light-weight geometric sans for
  body/UI text. Avoid bold display weights; avoid tracked-out headline
  caps; reserve uppercase+letter-spacing for small UI labels only.

---

## 3. Spacing system

- **Vertical rhythm between sections:** sections carry a class `.spacing`
  with **`margin-top: 160px`** and zero internal top/bottom padding — i.e.
  the "spacing" is a single consistent 160px gap injected *between*
  sections at desktop width, not a large padding baked into each section.
  (Expect this to scale down responsively, but 160px is the desktop
  anchor — recommend roughly 96–120px on tablet, 56–72px on mobile.)
- **Horizontal container padding:** `.container` uses **30px** left/right
  padding with a **max-width of 1440px**, then centered. This is a
  fairly wide max-width (content can breathe at large desktop sizes) with
  a modest 30px gutter — not the more common 24px/16px pattern, giving a
  slightly more spacious, "gallery" feel.
- **Full-bleed breaks:** hero and parallax sections intentionally ignore the
  container and run edge-to-edge, alternating with the constrained
  `.container` sections — this alternation (full-bleed image → contained
  text → full-bleed image → contained grid …) is a core rhythm device.
  Recommend mirroring: never have two full-bleed sections back-to-back
  without a contained section between them.
- **Whitespace usage:** generous — large section-to-section gaps (160px),
  generous line-heights (1.2–1.56x), and single-column, centered or
  asymmetric two-column layouts rather than dense grids. Only the
  signature-dish and footer areas use multi-column grids; everything else
  is generously single-column.

---

## 4. Color role palette

> ⚠️ These are the **literal hex/rgb values observed on restaurantgem.com**,
> captured only as a reference data point for how the roles relate to each
> other (contrast ratios, how sparingly the accent is used, etc). They are
> **not** meant to be copied onto Romanazzi's — replace every value below
> with Romanazzi's own brand palette (likely warmer, Mediterranean,
> harbor/blue + terracotta or similar) while keeping the *role structure*.

| Role | Observed value (restaurantgem.com) | Usage pattern | Romanazzi's should... |
|------|-------------------------------------|----------------|----------------------|
| **Background — dark/primary** | `rgb(21, 21, 21)` (body bg), near-black sections | Dominant background across almost the entire page — this is a dark-mode-first luxury site | keep a dark, moody base (e.g. deep navy/charcoal evoking night sea) rather than switching to white |
| **Text — primary (on dark)** | `rgb(255, 255, 255)` | Headings and body copy | use a warm off-white, not pure white, for a softer Mediterranean warmth |
| **Accent / luxury role** | `rgb(196, 166, 118)` — a muted warm gold/brass | Used sparingly: CTA link text, small decorative icons, hover states, brand ticker — never as a large fill | this is the role to swap for a Romanazzi's signature accent (e.g. a burnished brass, or a deep coral/terracotta) — key is it stays **rare and precise**, used for interactive/important elements only |
| **Muted / secondary** | Semi-transparent whites/greys for captions, ticker text, footer labels | Lower-emphasis copy, dividers | keep a desaturated neutral for secondary text so the accent doesn't get diluted |
| **Surface / overlay** | `rgba(0,0,0,0)` transparent nav over hero, dark scrims over images for text legibility | Nav bar and text-over-image treatments | replicate the transparent-nav-over-hero + dark gradient scrim pattern for legibility |

**Contrast philosophy:** near-monochrome (black/near-black + white) does the
heavy lifting; the single warm accent color is the entire "luxury" signal and
appears in maybe 4–6 places on the whole page (buttons, one icon set, ticker
text). This restraint is the most important, reusable lesson — resist adding
more accent colors.

---

## 5. Animations & micro-interactions

Confirmed via DOM inspection: the site uses **GSAP** (`window.gsap` present)
plus custom classes (`horizontal-scroll`, `parallax-container`,
`parallax-section`) rather than a generic scroll-animation library like AOS.

- **Fade-in-on-scroll:** section content (headlines, paragraphs, dish
  cards) is revealed as it enters the viewport, consistent with GSAP
  ScrollTrigger-style reveals — typically implemented as opacity 0→1 plus a
  small upward translate (e.g. `translateY(20–40px)` → `0`) over
  ~0.8–1s with an eased curve (`ease-out`/`power2.out` is the GSAP
  convention for this effect). Direct evidence: CTA elements carry
  `transition: opacity 1s 0.3s, transform 1s 0.3s, background 0.3s 0.3s` —
  i.e. **1 second duration, 0.3s staggered delay**, separate faster
  (0.3s) transition just for background/hover state.
- **Image reveal / parallax:** signature-dish and hero images are wrapped
  in overflow-hidden containers and translated via inline `transform:
  matrix(...)` that updates on scroll (observed a live negative
  translate offset on an `<img>`), i.e. **images pan/scale slightly as you
  scroll past them** rather than sitting static — classic parallax
  "background moves slower than foreground" or "image scales down from
  a slight zoom" treatment. `.parallax-section` / `.parallax-container`
  classes explicitly mark these full-bleed image sections.
- **Horizontal marquee ticker:** the repeating tagline band
  (`horizontal-scroll` class) scrolls continuously left (infinite loop,
  duplicated text content back-to-back so the loop is seamless) — a nice
  ambient-motion element that doesn't require user interaction.
- **Button/CTA hover:** buttons are text-only (no fill) with the accent
  gold color and uppercase label; hover very likely swaps to a filled
  background or underline given the separate `background 0.3s` transition
  timing distinct from the slower `opacity/transform 1s` entrance
  transition — i.e. **entrance animation and hover animation use two
  different timing curves**, which is worth replicating (slow graceful
  entrance, snappy 300ms hover feedback).
  - CTA visual spec: no border-radius (**`border-radius: 0`** — sharp
    rectangular buttons, not pills, for the "View our menu" CTA);
    the sticky reservation button in the corner, by contrast, appears
    pill-shaped in the hero screenshot — so the site actually mixes a
    **pill-shaped persistent booking CTA** with **sharp-edged inline
    CTAs**, a useful dual-affordance pattern (persistent action = pill,
    inline content actions = rectangle).
  - Padding: `12px 24px` on the inline CTA — compact, not oversized.
- **Navbar behavior on scroll:** nav is `position: absolute` and
  transparent (`background: rgba(0,0,0,0)`) at the top over the hero image,
  consistent with a typical **transparent-to-solid transition on scroll**
  pattern (the nav sits over dark hero imagery so text is white by
  default; expect it to gain a solid/blurred dark background once the user
  scrolls past the hero — this is the standard implementation for this
  visual style even though the exact scroll-triggered class change wasn't
  captured live).
- **Section transitions:** no hard borders between sections; large
  `margin-top` (160px) plus color continuity (everything dark) makes
  transitions feel like one continuous scroll rather than "pages" — full
  bleed parallax sections act as punctuation marks/breathers between
  text sections.

---

## 6. CTA style

- **Shape:** two coexisting affordances —
  1. **Pill-shaped persistent CTA** (bottom-right floating "Reserveer een
     tafel" / "Book a table" button, always visible, with a small icon) —
     acts as the omnipresent conversion anchor.
  2. **Sharp/rectangular inline text CTAs** (`border-radius: 0`) for
     in-content actions like "View our menu" / "Book our rooms" —
     uppercase label, generous letter spacing via uppercase transform,
     accent gold color, no fill, sometimes with a small arrow/icon prefix.
- **Sizing:** compact — `16px` label text, `12px 24px` padding. Never
  oversized/shouty.
- **Copy tone:** inviting, low-pressure, sensory rather than salesy.
  Observed real examples:
  - "View our menu"
  - "Book our rooms"
  - "Read more"
  - "Fresh menu drops, events and behind-the-scenes spice tips straight to
    your inbox." (newsletter subhead — playful, informal "spice tips"
    phrasing even inside a fine-dining site)
  - Hero body copy: "Two-Michelin-starred chef Soenil Bahadoer welcomes you
    to his culinary jewel inside 14th-century Kasteel Gemert." — leads with
    the *person* and the *place*, not a hard sell.
  - Section headline: "Where cultural heritage meets culinary excellence"
    — an evocative, story-first headline rather than a feature list.
  This voice — warm, narrative, specific about heritage/craft, verbs like
  "welcomes," "layer," "trace," "finished with" — is the tone Romanazzi's
  copy should imitate (adapted to sea/harbor/Puglia storytelling), not the
  literal English/Dutch words.

---

## 7. Distinctive components worth replicating conceptually

- **Signature dish showcase:** a dedicated `.featured-menu` section
  presenting a short curated list of hero dishes by name only (KING CRAB,
  SCALLOP, SPINACH, CAVIAR 30 GRAMS, RENDANG) as a visual gallery — likely
  image-led cards where the dish name overlays or sits beneath a
  full-bleed photo, with price/description deferred to hover state or the
  full menu page rather than cluttering the homepage. **For Romanazzi's:**
  a parallel "Piatti Signature" section with 4–6 hero fish/sea dishes,
  each a large photo + dish name, optionally a price revealed on hover,
  linking through to the full menu — keeps the homepage cinematic instead
  of listing full menu detail.
- **Heritage/storytelling section:** the "cultural heritage meets culinary
  excellence" block is a short, single paragraph of brand philosophy
  placed early (position #3), establishing *why* before showing *what*.
  For Romanazzi's this maps directly to a "the sea is not a backdrop, it's
  a presence" style narrative about Giovinazzo's harbor and the chef's
  approach — same placement (right after hero, before menu teaser).
- **"Stay/extend the experience" section:** GEM upsells overnight suites
  tied to the castle. Romanazzi's has no lodging, so this section's
  *concept* — "extend your visit beyond dinner" — should be reinterpreted
  as e.g. a private dining terrace, a chef's table, or a
  wine-pairing/tasting-menu upsell, using the same two-card "Read more"
  layout pattern.
  section pattern (image + name + "Read more") rather than the literal
  hotel-room content.
- **Ambient brand ticker:** the horizontally auto-scrolling tagline strip
  is a lightweight, low-cost way to reinforce 2–3 brand pillars
  (name • distinction • founder/chef) between major sections without new
  copywriting — recommend for Romanazzi's: "Romanazzi's • Cucina di Mare •
  Giovinazzo •" or similar, repeated once near the top and once again
  before the footer.
- **Social proof strip (Instagram feed):** a simple horizontal strip of
  recent Instagram posts placed just above the footer — cheap, always-fresh
  content and implicit social proof; recommend keeping this pattern.
- **Multi-column footer with legal line:** standard but worth matching
  exactly — nav column, contact column (address/phone/email), legal
  links row (Cookies/Privacy/Terms/Sitemap) beneath a copyright line.

---

## Summary of the 5 most important reusable rules

1. **Near-monochrome dark base + one rare warm accent color** used only for
   CTAs/links/icons — never expand the accent palette.
2. **Serif display (regular weight only) + light-weight geometric sans**,
   both used at *normal* letter-spacing; reserve uppercase+tracking for
   buttons/labels only.
3. **160px inter-section rhythm at desktop**, alternating full-bleed
   parallax/image sections with contained, generously-spaced text
   sections — never two full-bleed sections back-to-back.
4. **GSAP-style scroll reveals** (opacity+translateY, ~1s ease-out entrance)
   distinct from **fast 300ms hover transitions** — two different timing
   languages for "arriving" vs "interacting."
5. **Narrative-first copy voice**: lead with people/place/heritage, use
   sensory and story language, keep CTAs short, low-pressure, and
   lowercase-friendly in tone even when styled uppercase.
