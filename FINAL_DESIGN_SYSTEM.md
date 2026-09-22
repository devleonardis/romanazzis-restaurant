# Romanazzi's — Final Design System

Fusion of the reference UX/motion grammar (`reference/DESIGN_SYSTEM.md`, from
restaurantgem.com) with Romanazzi's real brand (`BRAND_COLORS.md`) and real
content (`content/`). This is the single source of truth for implementation.

## Sitemap (slimmed from 15 nav destinations to 8 pages)

Several near-duplicate sub-pages on the live site (Pranzo Aziendale / Cena
Aziendale were near-identical; Perché Sceglierci was really a restatement of
the Cena Romantica pitch) were merged into richer single pages instead of
being replicated 1:1 — same information, fewer thin pages, better UX.

1. `/` — Home
2. `/il-ristorante` — cucina, filiera, percorsi degustazione
3. `/menu` — menu à la carte + tasting menus + Pienissimo embed
4. `/carta-vini` — wine list categories + Pienissimo embed
5. `/servizi` — sections: Pranzo, Cena, Eventi Aziendali (pranzo+cena aziendale merged), Cena Romantica (perché-sceglierci folded in)
6. `/chi-siamo` — sections: La Storia, La Location (+FAQ), Dicono di Noi
7. `/contatti` — contact form + info
8. `/lavora-con-noi`

## Color roles (Romanazzi's palette, replacing restaurantgem.com's values)

| Role | Value | Notes |
|---|---|---|
| Background — dark/primary | `#0b0f0f` (near-black, slight teal cast) | evokes night sea, not pure black |
| Background — deep navy secondary | `#0d1b23` | used for alternating full-bleed sections |
| Surface / card | `#141a1a` | cards, footer |
| Text — primary (on dark) | `#f4efe7` (warm off-white) | headings & body over dark |
| Text — muted | `rgba(244,239,231,0.62)` | captions, secondary copy |
| Accent — primary (real brand color) | `#8a1330` (brightened from source `#731026` for dark-bg contrast) | CTAs, links, dividers, price tags |
| Accent — secondary (thematic, sea) | `#c9a15a` (warm brass/gold, restrained) | small icon accents, award badges, rare highlight |
| Border / hairline | `rgba(244,239,231,0.12)` | dividers |

Kept from the reference: near-monochrome dark base + **one** rare warm/deep
accent, used sparingly (never as a large fill). Romanazzi's actual brand red
(`#731026`) is the anchor accent (not restaurantgem's gold) — the gold becomes
a secondary/tertiary touch for awards and dividers only, in keeping with the
"sea and precious materials" theme.

## Typography

- Display/heading: **Playfair Display** (matches the current real Romanazzi's
  theme, elevated with generous sizing + regular/medium weight only, normal
  tracking) — serif, editorial, already the brand's authentic voice.
- Body/UI: **Inter** (clean geometric sans, light/regular weights) — sans-serif for contrast with the serif headings.
- Scale (desktop): H1 56–72px/1.05, H2 42–56px/1.15, H3 24–28px/1.4, body 17–18px/1.6, button label 14px uppercase tracked +0.08em.
- Uppercase + letter-spacing reserved for buttons/eyebrow labels only, never headlines.

## Spacing

- Section rhythm: 140px desktop / 96px tablet / 56px mobile margin-top between sections.
- Container: max-width 1280px, 24px mobile / 32px desktop side padding.
- Alternate full-bleed image sections with contained text sections — never two full-bleed in a row.

## Motion grammar (Framer Motion equivalents of the GSAP patterns observed)

- Entrance: opacity 0→1 + translateY 24px→0, duration 0.9s, ease `[0.16,1,0.3,1]`, triggered on scroll (`whileInView`, `viewport={{ once: true, margin: "-10%" }}`).
- Hover: 0.25–0.3s ease for color/background/transform on buttons and cards — a distinctly snappier timing than entrance.
- Parallax: hero and full-bleed images translate ~10–15% slower than scroll via a scroll-linked transform (`useScroll` + `useTransform`).
- Marquee ticker: infinite horizontal scroll of duplicated text ("Romanazzi's • Cucina di Mare • Giovinazzo sul Porto •"), pure CSS keyframes, pauses on hover.
- Navbar: transparent over hero, gains a solid blurred dark background + smaller height after ~80px scroll.
- No border-radius on inline CTAs (sharp rectangles); a pill-shaped persistent "Prenota" button lives fixed bottom-right on scroll.

## Components to build

- `Navbar` (transparent→solid on scroll, mobile drawer)
- `Hero` (full-bleed image, parallax, badges row, dual CTA)
- `Marquee` (ticker)
- `SectionHeading` (eyebrow + H2 + optional intro paragraph)
- `SignatureDishes` (image-led grid, hover reveal)
- `ServiceCard` (used for Pranzo/Cena/Aziendale/Romantica sections)
- `AwardBadge`
- `TestimonialCard` / `TestimonialMarquee`
- `InstagramStrip` (static curated grid linking out, since no API embed without auth)
- `Footer` (multi-column: nav, contact, social, legal)
- `StickyBookButton` (pill, fixed bottom-right)
- `Reveal` (shared scroll-reveal wrapper using Framer Motion)

## Booking integration

Keep the real Pienissimo mechanism: all "Prenota" CTAs link to
`https://ypbfeygzmlodmzrfj5bn4gqk33umeh0z.forms.pienissimo.pro/?id=Kn1nHv`
(new tab). `/menu` and `/carta-vini` embed the live Pienissimo iframes
(`?id=7` food, `?id=8` wine) so pricing stays in sync automatically, with the
scraped static content as a readable fallback/preview above the iframe.

## SEO

- Per-page metadata (title/description) based on real scraped copy.
- JSON-LD `Restaurant` schema in root layout: name, address, phone, openingHours, servesCuisine, sameAs (social links), priceRange.
