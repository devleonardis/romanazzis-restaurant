# Site Meta — Romanazzi's Restaurant (romanazzis.it)

## Business identity
- Name: Romanazzi's Restaurant di Giuseppe Romanazzi
- Chef/Owner (Chef-patron): Giuseppe Romanazzi
- Sommelier: Miriana
- Address: Piazza Porto, 32, 70054 Giovinazzo BA, Italia (inside/adjacent to the Torrione Aragonese, a 1488 Aragonese tower, on the harbor/porticciolo)
- P.IVA: 07427660720
- Phone: +39 080 332 3845 (tel link on site: `tel:0803323845` / `tel:+390803323845`)
- Contact/reservations email (from FAQ on location page): ristoranteromanazzis@gmail.com
- Jobs email (Lavora con noi page): JOB@ROMANAZZIS.IT
- Contact form page: https://www.romanazzis.it/contatti/ (fields: Nome, Cognome, Cellulare, Email, Messaggio — WPForms, submit button styled with the brand color #731026)

## Hours (as stated on site — footer, present on every page)
Aperti tutti i giorni sia a pranzo che a cena:
- Pranzo: 12:30 – 14:30
- Cena: 19:30 – 22:30
(Confirms the assumed hours in the brief — verified directly from the live footer.)

## Social links (verified from live site footer/nav)
- Facebook: https://www.facebook.com/romanazzis/
- Instagram: https://www.instagram.com/romanazzis_restaurant/
- TripAdvisor (restaurant page): https://www.tripadvisor.com/Restaurant_Review-g659608-d4063949-Reviews-Romanazzi_s_Restaurant-Giovinazzo_Province_of_Bari_Puglia.html
- TripAdvisor (specific review deep-link used as a homepage quote source): https://www.tripadvisor.com/ShowUserReviews-g659608-d4063949-r892035798-Romanazzi_s_Restaurant-Giovinazzo_Province_of_Bari_Puglia.html

No Google Business, YouTube, or TikTok links were found on the live site.

## Awards / badges (exact wording found on site)
- "Top 25 Fine Dining d'Italia" — badge/label shown on homepage, "Il ristorante" page, "La location" page, "Cena romantica" page.
- "Traveller's Choice – Best of the Best 2025" (TripAdvisor award) — shown as a badge image (`Travellers-Choice-Best-of-the-Best.webp`) plus text label "Traveller's Choice Best of the Best 2025" on multiple pages.
- "1.400+ recensioni TripAdvisor" — recurring trust stat shown alongside the two badges above (also appears as "1.100+ recensioni" on the Perché Sceglierci page, and "oltre 900 recensioni positive su Google" / "più di 1.400 recensioni... su Tripadvisor" on the Location page — figures vary slightly by page/date, use ~1,400+ TripAdvisor reviews as the current headline number).
- Homepage intro copy: "Romanazzi's è stato inserito tra i migliori ristoranti fine dining d'Italia ed è vincitore del Traveller's Choice – Best of the Best."
- Press/mentions listed on "Dicono di noi": 2night.it (two articles), Il Golosario ("Romanazzi's Apulia Restaurant, un tocco di Puglia").
- Celebrity guest quotes shown on "Dicono di noi" page: Anna Tatangelo, Chef Bruno Barbieri, Selvaggia Lucarelli & Lorenzo Biagiarelli, Giuliano Sangiorgi (Negramaro). Photos also mention Marco Mengoni, Elodie, Annalisa, and Tananai as past guests (photo captions only, no quotes attributed).

## Booking / reservation system
- Platform: **Pienissimo** (pienissimo.pro), a hosted restaurant reservation/menu SaaS.
- Main "PRENOTA" / "PRENOTA ORA" buttons across the site link to:
  `https://ypbfeygzmlodmzrfj5bn4gqk33umeh0z.forms.pienissimo.pro/?id=Kn1nHv`
  (opens the Pienissimo booking form in a new tab; this is a tenant-specific subdomain, the long random string is the Pienissimo account/tenant id).
- The digital menu (à la carte + tasting menus) and the wine list are embedded as **iframes** pointing to the same Pienissimo tenant, different "menu" ids:
  - Food menu iframe: `https://ypbfeygzmlodmzrfj5bn4gqk33umeh0z.menu.pienissimo.pro/?id=7`
  - Wine list iframe: `https://ypbfeygzmlodmzrfj5bn4gqk33umeh0z.menu.pienissimo.pro/?id=8`
- These Pienissimo menu pages also include an e-commerce style "cart" (IL TUO CARRELLO / CONCLUDI ORDINE) — suggesting Pienissimo supports pre-ordering, not just browsing, though it's unclear if ordering is actually enabled for this venue.
- No PDF menus were found anywhere on the site (menu/wine list are fully digital via Pienissimo, not downloadable PDFs) — the only PDF-like exception is a **Christmas menu**, which is published as an **image** (`Menu-Natale-romanazzi-819x1024.webp`), not a real PDF, shown as a promotional block ("Menù di Natale") on many pages.
- To replicate for the redesign: either (a) re-embed the same Pienissimo iframes/links (simplest, keeps live pricing in sync), or (b) statically reproduce the menu/wine content captured in `menu.md` and `carta-vini.md` if a fully custom-styled menu page is wanted instead.

## Structural note on live site navigation
Actual nav differs slightly from the assumed structure in the brief — here is what's really live:
- Home
- Il ristorante → `/ristorante-di-pesce/`
- Menù → `/menu/` (Pienissimo iframe)
- Carta dei vini → `/carta-vini/` (Pienissimo iframe)
- Servizi (dropdown) → Pranzo (`/ristorante-aperto-a-pranzo-a-giovinazzo-romanazzis-restaurant/`), Cena (`/cena-ristorante-a-giovinazzo/`), Pranzo aziendale (`/pranzo-aziendale/`), Cena aziendale (`/cena-aziendale/`), Cena romantica (`/cena-romantica-per-due/`)
- Chi siamo (dropdown) → La nostra storia (`/romanazzis-storia/`), La location (`/ristoranti-a-bari-sul-mare/`), Perché sceglierci (`/perche-sceglierci/`), Dicono di noi (`/dicono-di-noi/`)
- Contatti → `/contatti/`
- Lavora con noi → `/lavora-con-noi/` (in footer, not top nav)

All pages exist and match the brief's assumed structure with the URL slugs above.

## Technical / environment note
The live site briefly redirects (client-side JS, a few seconds after load) to an unrelated third-party site (`restaurantgem.com`). This looks like a hijacked/misconfigured ad or tracking script rather than intentional site behavior, and is unrelated to Romanazzi's own content — it was worked around during scraping by reading each page immediately after navigation. Worth flagging to the site owner/dev separately; it should NOT be carried into the redesign.
