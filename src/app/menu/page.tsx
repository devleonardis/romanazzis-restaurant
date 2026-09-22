import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { MenuAccordion, type MenuItem } from "@/components/MenuAccordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menù — Menù di Pesce e Degustazione",
  description:
    "Il menù di Romanazzi's: crudi di mare, sfilettati, antipasti, paste e riso, secondi e dolci. Tre percorsi degustazione ideati dallo Chef Giuseppe Romanazzi.",
};

const tastingMenus = [
  {
    name: "Romanazzi's Storia",
    price: "€58,00",
    image: "/images/home/piatto-1.webp",
    text: "Il baccalà mantecato con gazpacho di pomodoro e basilico; lo spaghettone bruciato con cozze pomodorino e bagnetto di peperone giallo; il polpo arrosto con salsa di taralli e verdurine; il sottobosco, semifreddo alla nocciola, crema al pistacchio e crumble al cacao e frutti rossi.",
  },
  {
    name: "DaNonPerdere",
    price: "€68,00",
    image: "/images/home/piatto-4.webp",
    text: "Il carpaccio di spigola con granita di finocchio e limone; i calamaretti fritti, favetta e cicoria e salsa alla nduja; il risotto ostriche champagne e salicornia e limone; il tonno in crosta al nero di seppie, purea di patate montate, verdurine e cipolla rossa; il limonolio.",
  },
  {
    name: "Giuseppe Fai Tu",
    price: "€88,00",
    image: "/images/home/piatto-6.webp",
    text: "Menù a sorpresa creato dallo chef con alcuni piatti della carta e altri fuori menù. 6 portate: 2 antipasti, 2 primi, 1 secondo, 1 dolce.",
  },
];

const categories: { title: string; note?: string; image: string; items: MenuItem[] }[] = [
  {
    title: "Le Crudité di Mare",
    image: "/images/il-ristorante/pesce-5.webp",
    items: [
      ["Caviale Asetra 10g", "€30,00", "caviale estratto dallo storione russo, gusto che ricorda la nocciola, servito con crostini e burro presalè"],
      ["Ostrica Gillardeau cal.2 (al pz)", "€8,00", "Marennes-Oléron, affinate, media sapidità con leggera dolcezza"],
      ["Ostrica Divine cal.2 (al pz)", "€7,00", "Bretagna, polpa chiara e soda"],
      ["Ostrica Kristale cal.2 (al pz)", "€6,00", "Normandia, fragrante e speziata"],
      ["Noce bianca (al pz)", "€4,00"],
      ["Tagliatelle 100g", "€6,00"],
      ["Gambero rosso cal.2 (al pz)", "€6,00"],
      ["Scampo cal.3 (al pz)", "€8,00"],
      ["Polipetti crudi 100g", "€12,00", undefined, "/images/il-ristorante/pesce-5.webp"],
      ["Allievi di seppie 100g", "€7,00"],
    ],
  },
  {
    title: "Gli Sfilettati",
    image: "/images/home/piatto-2.webp",
    items: [
      ["Il gran piatto di sfilettati", "€28,00", "sfilettati e tartare di pesce con condimenti"],
      ["Carpaccio di spigola", "€18,00", "battuto di spigola, misticanza aromatica, agrumi, granita di finocchietto selvatico"],
      ["Filetti di alici del Mar Cantabrico in olio 50g", "€16,00", "con burro presalè e crostini"],
      ["Battuta di tonno", "€18,00", "battuta di tonno crudo, pesto di fave fresche, cipolla in agro, polvere di capperi", "/images/il-ristorante/tonno-tataki.webp"],
      ["Ricciola mandorla ed erbe", "€20,00", "crudo di ricciola, latte di mandorla pugliese, olio alle erbe"],
      ["Gambero rosa stracciatella e peperone", "€16,00", "tartare di gambero rosa, crema di peperone giallo, stracciatella, crumble al tarallo"],
      ["Avocado toast e salmone", "€16,00", "pan brioches tostato, salmone marinato e affumicato, guacamole, mayo al tuorlo agrumato"],
    ],
  },
  {
    title: "Gli Antipasti Cotti",
    image: "/images/il-ristorante/fish-02.jpg",
    items: [
      ["Baccalà mantecato", "€16,00", "gazpacho di pomodoro, pesto di basilico, crumble di tarallo e origano"],
      ["Pesce spada nell'orto", "€18,00", "tagliata di pesce spada, verdure in varie consistenze, tartufo nero", "/images/il-ristorante/fish-06.jpg"],
      ["Le cozze in soft-tempura, pecorino e patate", "€16,00"],
      ["Calamaretti, fave e cicoriella", "€18,00", "calamaretti spillo fritti, purea di fave, cicoriella selvatica, olio di nduja"],
      ["Seppie, zucchine e mandorla", "€20,00", "seppia arrosto, zucchine alla poverella, crema di mandorla e croccante"],
      ["Gamberi viola, asparagi, burro nocciola", "€28,00"],
      ["La guancia di vitello", "€16,00", "guancia di vitello cbt, verdurine, barbabietola, stracciatella"],
      ["Le mazzancolle e una parmigiana", "€20,00", "mazzancolle in sfoglia, scamorza affumicata, caviar di melanzane"],
    ],
  },
  {
    title: "Le Paste e il Riso",
    note: "Massimo tre tipologie per tavolo.",
    image: "/images/home/piatto-3.webp",
    items: [
      ["Gli spaghettoni bruciati", "€18,00", "sugo di cozze, pomodorino infornato, bagnetto di peperone giallo"],
      ["Pappardelle cacio-pepe", "€18,00", "crema di pecorino romano stagionato e pepe pimento, tartufo nero, crudo di tonno"],
      ["Tagliolino bianco e nero", "€45,00", "tagliolino fresco mantecato con burro francese e caviale di storione siberiano 10g"],
      ["Mezze maniche", "€18,00", "interpretazione della pasta e patate con ragù leggero di triglia"],
      ["Fusillone gambero e pistacchio", "€22,00", "pesto di pistacchio e basilico, crudo di gambero rosso e corallo"],
      ["Tortelli di ricotta, pescatrice e limone fermentato", "€20,00"],
      ["Risotto ostriche, salicornia e champagne", "€26,00"],
    ],
  },
  {
    title: "I Secondi",
    image: "/images/il-ristorante/tonno-tataki.webp",
    items: [
      ["Il polpo e il tarallo", "€26,00", "medaglioni di polpo arrosto, salsa di taralli e pomodoro condito"],
      ["Il tonno in nero", "€24,00", "lingotto di tonno in crosta di pane al nero di seppia, fondente di patata, cipolla rossa caramellata"],
      ["La pescatrice e finocchietto", "€24,00", "darna di pescatrice CBT, emulsione di sedano e finocchietto, garum di pesce"],
      ["La spigola, carote e chimichurri", "€26,00"],
      ["La cernia, pappa al pomodoro e cozze", "€28,00"],
      ["Dentice all'antica", "€28,00", "scaloppa di dentice con olive, capperi, cipolla, pomodorino, purea di fave secche"],
      ["L'astice \"nudo\", il \"bue\" e il \"fumo\"", "€60,00", "astice scottato senza carapace, tartare di pomodori cuori di bue, cipolla dolce, basilico", "/images/home/piatto-5.webp"],
      ["Manzo intagliato", "€28,00", "tagliata di cuberoll Argentina con crema di patate e verdure"],
    ],
  },
  {
    title: "I Dolci",
    image: "/images/il-ristorante/dolce.webp",
    items: [
      ["Sottobosco", "€10,00", "semifreddo alla nocciola, crema al pistacchio, crumble al cacao", "/images/il-ristorante/dessert-01.jpg"],
      ["Lo sfogliamisù", "€8,00", "sfoglia croccante, mousse al mascarpone, granita al caffè e cacao"],
      ["Foresta nera contemporanea", "€14,00", "morbido, namelaka, crumble al fondente, amarene, gelato al cioccolato"],
      ["Il limonolio", "€10,00", "crema al limone e sorbetto, meringa, spugna all'olio evo, croccante alla mandorla"],
      ["Il maritozzo", "€10,00", "farcito con mousse allo yogurt, composta di fragola, granita di vin brulé e basilico"],
      ["Creme brulé in \"crostata\"", "€10,00", "crema brulée in crostata di frolla viennese, sorbetto al gelso e frutti rossi"],
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
            <Reveal key={m.name} delay={i * 0.12} className="flex flex-col overflow-hidden border border-hairline">
              <div className="relative h-44 w-full">
                <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-xl">{m.name}</h3>
                <p className="mt-2 text-base normal-case tracking-normal text-gold">{m.price} a persona</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          I menù degustazione sono realizzati per l&apos;intero tavolo, vini,
          bevande e coperto esclusi. È possibile modificare una sola portata,
          a condizione che la variazione riguardi tutti i commensali. Coperto: €5,00.
        </p>
      </section>

      <section className="section-space container-xl">
        <SectionHeading
          eyebrow="Alla Carta"
          title="Crudi, sfilettati, paste, secondi e dolci"
          intro="Tocca una categoria per scoprire tutti i piatti."
        />
        <div className="mt-12 space-y-5">
          {categories.map((cat, i) => (
            <MenuAccordion
              key={cat.title}
              title={cat.title}
              note={cat.note}
              image={cat.image}
              items={cat.items}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </section>

      <section className="section-space container-xl">
        <Reveal>
          <p className="max-w-2xl text-xs text-ink-muted">
            Alcuni prodotti potrebbero subire un processo di abbattimento di
            temperatura o congelazione all&apos;origine. Coperto: €5,00. Per
            allergie o intolleranze vi preghiamo di segnalarlo al personale
            di sala.
          </p>
        </Reveal>
      </section>
    </>
  );
}
