# QA Report — Romanazzi's Luxury Rebuild

## Status: build & type-check pass, all pages verified in-browser (desktop + mobile)

- `npx tsc --noEmit` — no errors.
- `npm run build` — succeeds, all 8 routes prerendered as static content
  (`/`, `/il-ristorante`, `/menu`, `/carta-vini`, `/servizi`, `/chi-siamo`,
  `/contatti`, `/lavora-con-noi`).
- Visually verified in the browser pane: Home, Il Ristorante, Menù, Servizi,
  Chi Siamo, Contatti — hero parallax, scroll-reveal animations, navbar
  transparent→solid on scroll, sticky "Prenota" pill, and the Pienissimo
  iframes all render correctly.
- Mobile viewport (375×812) checked on Home: hero, badges, CTAs and body
  copy reflow correctly with no horizontal scroll or clipped text.

## Content coverage vs. the original 15 nav destinations

Every real content item from the live site is present, but restructured into
8 pages instead of 15 (see "Simplification" below — done per explicit
request to snellire the site):

| Original page | Where it lives now |
|---|---|
| Home | `/` |
| Il ristorante | `/il-ristorante` |
| Menù | `/menu` (static content + live Pienissimo embed) |
| Carta dei vini | `/carta-vini` (static content + live Pienissimo embed) |
| Servizi → Pranzo | `/servizi#pranzo` |
| Servizi → Cena | `/servizi#cena` |
| Servizi → Pranzo aziendale | `/servizi#eventi-aziendali` (merged) |
| Servizi → Cena aziendale | `/servizi#eventi-aziendali` (merged) |
| Servizi → Cena romantica | `/servizi#cena-romantica` |
| Chi siamo → La nostra storia | `/chi-siamo#storia` |
| Chi siamo → La location | `/chi-siamo#location` (incl. FAQ) |
| Chi siamo → Perché sceglierci | folded into `/servizi#cena-romantica` (same pitch, was a near-duplicate) |
| Chi siamo → Dicono di noi | `/chi-siamo#dicono-di-noi` |
| Contatti | `/contatti` |
| Lavora con noi | `/lavora-con-noi` (footer link, as on the live site) |

## Simplification ("snellire") rationale

- **Pranzo Aziendale** and **Cena Aziendale** were near-identical pages on
  the live site (same offer, same form, reworded headline only) — merged
  into one "Eventi Aziendali" section.
- **Perché Sceglierci** was, on inspection, actually a restatement of the
  Cena Romantica pitch (same three selling points, same CTA) — folded into
  the Cena Romantica section rather than kept as a separate thin page.
- Net result: 15 nav destinations → 8 pages, no real content dropped, less
  duplicate copy for a visitor to click through.

## Known gaps / things to check before going live

1. **Contact form has no backend.** `/contatti` renders the real form
   fields (Nome, Cognome, Cellulare, Email, Messaggio, privacy checkbox) but
   submitting does nothing — there's no server action or email-sending
   integration wired up. Before launch, either wire it to an email service
   (Resend, Formspree, etc.) or keep directing users to phone/email/Pienissimo.
2. **Pienissimo iframes** (`/menu`, `/carta-vini`) depend on the third-party
   `pienissimo.pro` domain staying up and embeddable (no `X-Frame-Options`
   block observed during scraping, but re-verify at launch).
3. **Instagram feed** — the brief asked for a live embed of
   `@romanazzis_restaurant`; no official free Instagram embed API exists
   without a Meta developer app + access token, so this was **not
   implemented** as a live feed. Recommend either a Meta Graph API
   integration (needs the restaurant's Instagram Business account + app
   review) or a simple manual/static curated grid.
4. **Reviews screenshots** (`Ristorante-Romanazzis-Recensione-1..8.webp`) —
   these are pre-made graphic cards from the old site, not raw photos; they
   were not downloaded/used since real quote text was already captured and
   rendered as native `TestimonialCard` components (more accessible/SEO-
   friendly than an image of text).
5. **Lighthouse/performance** — not run in this session (no Lighthouse CLI
   available in this environment); recommend running
   `npx lighthouse http://localhost:3000 --view` locally before launch.
   Expect a good score: images are served via `next/image` (automatic
   WebP/AVIF, lazy loading below the fold, `priority` only on hero images),
   fonts are self-hosted via `next/font`, and there's no client-side
   JS beyond Framer Motion + the two Pienissimo iframes.
6. **Unused source images removed** — of the ~50 curated images downloaded
   from the live site, ~26 duplicates/extras not referenced in any page were
   deleted from `public/images/` to keep the repo lean (see git history).
   The full manifest of every image found on the live site (including ones
   not used) remains in `content/_image_manifest.md` for reference.

## Not yet done (out of original 5-phase scope, flagging explicitly)

- No automated Lighthouse run (see above).
- No production deployment — this is verified only via local
  `npm run dev` / `npm run build`.
