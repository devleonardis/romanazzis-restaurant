import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menù — Menù di Pesce e Degustazione",
  description:
    "Il menù di Romanazzi's: crudi di mare, sfilettati, paste e riso, secondi e dolci. Tre percorsi degustazione ideati dallo Chef Giuseppe Romanazzi.",
};

const tastingMenus = [
  {
    name: "Romanazzi's Storia",
    price: "€58,00",
    text: "Il baccalà mantecato con gazpacho di pomodoro e basilico; lo spaghettone bruciato con cozze pomodorino e bagnetto di peperone giallo; il polpo arrosto con salsa di taralli e verdurine; il sottobosco.",
  },
  {
    name: "DaNonPerdere",
    price: "€68,00",
    text: "Carpaccio di spigola con granita di finocchio e limone; calamaretti fritti, favetta e cicoria; risotto ostriche champagne e salicornia; tonno in crosta al nero di seppie; il limonolio.",
  },
  {
    name: "Giuseppe Fai Tu",
    price: "€88,00",
    text: "Menù a sorpresa creato dallo chef, 6 portate: 2 antipasti, 2 primi, 1 secondo, 1 dolce, con piatti fuori carta.",
  },
];

const categories = [
  {
    title: "Le Crudité di Mare",
    items: [
      ["Caviale Asetra 10g", "€30,00"],
      ["Ostrica Gillardeau cal.2", "€8,00"],
      ["Gambero rosso cal.2", "€6,00"],
      ["Scampo cal.3", "€8,00"],
    ],
  },
  {
    title: "Gli Sfilettati",
    items: [
      ["Il gran piatto di sfilettati", "€28,00"],
      ["Carpaccio di spigola", "€18,00"],
      ["Battuta di tonno", "€18,00"],
      ["Ricciola mandorla ed erbe", "€20,00"],
    ],
  },
  {
    title: "Le Paste e il Riso",
    items: [
      ["Gli spaghettoni bruciati", "€18,00"],
      ["Pappardelle cacio-pepe", "€18,00"],
      ["Tagliolino bianco e nero", "€45,00"],
      ["Risotto ostriche, salicornia e champagne", "€26,00"],
    ],
  },
  {
    title: "I Secondi",
    items: [
      ["Il polpo e il tarallo", "€26,00"],
      ["Il tonno in nero", "€24,00"],
      ["La cernia, pappa al pomodoro e cozze", "€28,00"],
      ["L'astice \"nudo\", il \"bue\" e il \"fumo\"", "€60,00"],
    ],
  },
  {
    title: "I Dolci",
    items: [
      ["Sottobosco", "€10,00"],
      ["Lo sfogliamisù", "€8,00"],
      ["Foresta nera contemporanea", "€14,00"],
      ["Il limonolio", "€10,00"],
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Hero
        image="/images/il-ristorante/piatto.webp"
        eyebrow="Tradizionalmente Innovativo"
        title="Il Menù"
        intro={`"Definisco il mio concetto di cucina 'Tradizionalmente Innovativo'. Parte dalle radici della nostra cultura gastronomica, ma le reinterpreta con creatività e tecniche moderne." — Giuseppe Romanazzi`}
        showBadges={false}
      >
        <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid">
          Prenota Ora
        </a>
      </Hero>

      <section className="section-space container-xl">
        <SectionHeading eyebrow="I Menù Degustazione" title="Un percorso completo, pensato dallo Chef" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tastingMenus.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1} className="flex flex-col border border-hairline p-8">
              <h3 className="text-xl">{m.name}</h3>
              <p className="eyebrow mt-2 text-accent-strong text-base normal-case tracking-normal">{m.price} a persona</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{m.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          I menù degustazione sono realizzati per l&apos;intero tavolo, vini,
          bevande e coperto esclusi. Coperto: €5,00.
        </p>
      </section>

      <section className="section-space container-xl">
        <SectionHeading eyebrow="Alla Carta" title="Crudi, sfilettati, paste, secondi e dolci" />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 2) * 0.1}>
              <h3 className="mb-4 text-lg text-gold">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map(([name, price]) => (
                  <li key={name} className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3 text-sm">
                    <span className="text-ink/90">{name}</span>
                    <span className="whitespace-nowrap text-ink-muted">{price}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space container-xl">
        <SectionHeading
          eyebrow="Menù completo e aggiornato"
          title="Consulta il menù digitale con prezzi sempre aggiornati"
        />
        <Reveal delay={0.1} className="mt-10 overflow-hidden border border-hairline">
          <iframe
            src={site.menuEmbed}
            title="Menù digitale Romanazzi's"
            className="h-[720px] w-full"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}
