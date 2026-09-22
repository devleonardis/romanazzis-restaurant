# Romanazzi's — Real Brand Colors (extracted from live site, romanazzis.it)

Extracted via computed-style inspection (`getComputedStyle`) of live DOM elements and inline CSS found in page source. The current WordPress/Elementor theme (Hello Elementor) mostly uses default black/white/grey for typography, with **one deliberate brand accent color** used consistently on every CTA button and form: a deep wine/burgundy red. This is the closest thing the current site has to a "brand color" and should anchor the redesign's palette (fits a seafood fine-dining / wine-list identity).

## Primary accent — Wine / Burgundy Red
- **`#731026`** (rgb(115, 16, 38))
- Observed on: every "PRENOTA" / "PRENOTA ORA" / "PRENOTA IL TUO TAVOLO" button (`a[href*="prenota-ora"]`, computed `background-color`), and confirmed again in inline CSS on the Contatti page form:
  ```css
  .elementor-widget-wpforms.elementor-element-1ba2aa5 {
    --wpforms-button-background-color: #731026;
  }
  ```
- Button text on this background: white `#ffffff`.
- This is the single most consistent, deliberate brand color across the entire site — use it as the primary CTA / accent color in the redesign.

## Neutrals / typography
- Body text color: `#333333` (rgb(51,51,51)) — observed on `body`, `header`, `nav`.
- Heading (h2) color: `#000000` (pure black) — observed on `h2` computed style.
- Page background: `#ffffff` (white) — observed on `body`.
- Hero/header text over photo backgrounds: white `#ffffff` (h1 on homepage hero, computed style over the hero image).
- Link color found in one spot was `rgb(204, 51, 102)` (#CC3366, pink/rose) — this appears to be a leftover default theme accent (not used site-wide on visible links) rather than an intentional brand choice; treat with caution and prefer the burgundy `#731026` as the true accent.

## Logo
- Two logo files are used:
  - `Rebrand_romanazzi-1.png` — a horizontal wordmark logo used in the header/nav (dark version, for use on white backgrounds).
  - `logo-bianco-romanazzis.png` — a white version of the wordmark, used in the footer (dark backgrounds).
- The logo itself is primarily typographic/wordmark based (no strong secondary logo color detected beyond black/white variants).

## Fonts (as currently implemented, for reference only — not necessarily what to keep)
- Site-wide font-family stack found in computed styles: `"Playfair Display", sans-serif` (headings, body, nav all fell back to this in the current build — the theme's default serif display font is Playfair Display, a common elegant/editorial serif good for fine dining).
- Note: default WordPress/Gutenberg preset color variables (`--wp--preset--color--*`) are also present in `:root` (vivid-cyan-blue, vivid-purple, etc.) — these are WordPress core defaults, NOT used anywhere visibly on the site, and should be ignored/not carried into the redesign.

## Recommendation for redesign palette
Given the seafood/fine-dining/waterfront positioning and the one deliberate brand color found:
- **Primary/accent:** `#731026` (deep wine burgundy) — CTAs, buttons, highlights.
- **Ink/text:** `#1a1a1a`–`#333333` (near-black) for body copy.
- **Background:** `#ffffff` / warm off-white for a fine-dining, airy feel.
- **Complementary:** consider a deep navy or sea-glass teal as a secondary accent to reinforce the "porto/mare" (harbor/sea) identity — not found on the live site, but thematically consistent with the extensive sea/harbor photography and copy ("il mare non è uno sfondo, ma una presenza costante").
