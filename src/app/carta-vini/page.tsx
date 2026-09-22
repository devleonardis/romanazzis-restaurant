import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carta dei Vini — Romanazzi's Ristorante a Giovinazzo",
  description:
    "Oltre 100 etichette tra bollicine, Champagne, bianchi e rossi di Puglia e non solo, curate dalla Sommelier Miriana per accompagnare la cucina di mare di Romanazzi's.",
};

const categories = [
  "Bevande",
  "Le Birre",
  "La Lista dei Vini al Calice",
  "Le Bollicine Bianche — Metodo Classico",
  "Le Bollicine Bianche e Rosate — Metodo Charmat",
  "Le Bollicine Rosé — Metodo Classico",
  "Champagne",
  "I Francesi e non solo — Bianchi e Rosati",
  "I Bianchi di Puglia",
  "I Bianchi di Altre Regioni",
  "I Rosati di Puglia",
  "I Rosati di Altre Regioni",
  "I Rossi",
];

export default function CartaViniPage() {
  return (
    <>
      <Hero
        image="/images/il-ristorante/piatto.webp"
        eyebrow="A cura della Sommelier Miriana"
        title="La Carta dei Vini"
        intro="Una cantina ampia e studiata ad hoc per gli abbinamenti con la cucina di mare di Romanazzi's: dalle bollicine pugliesi alle grandi Maison di Champagne."
        showBadges={false}
      >
        <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid">
          Prenota Ora
        </a>
      </Hero>

      <section className="section-space container-xl">
        <SectionHeading eyebrow="13 Categorie" title="Dalla Puglia alle grandi etichette internazionali" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c} delay={(i % 4) * 0.06} className="border border-hairline p-5 text-sm">
              {c}
            </Reveal>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-ink-muted">
          Selezione che include etichette come Dom Pérignon Vintage, Cristal
          Louis Roederer, Franciacorta Ca&apos; del Bosco, D&apos;Araprì e Pisan
          Battèl, oltre a rossi e bianchi pugliesi come Talò, Sessantanni e
          Askos Verdeca.
        </p>
      </section>

      <section className="section-space container-xl">
        <SectionHeading
          eyebrow="Carta completa e aggiornata"
          title="Consulta la carta dei vini digitale"
        />
        <Reveal delay={0.1} className="mt-10 overflow-hidden border border-hairline">
          <iframe
            src={site.wineEmbed}
            title="Carta dei vini digitale Romanazzi's"
            className="h-[720px] w-full"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}
