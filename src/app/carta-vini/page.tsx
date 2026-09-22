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

const categories: { title: string; intro?: string; items: [string, string][] }[] = [
  {
    title: "Le Birre",
    intro: "Selezione artigianale \"32 Via dei Birrai\", Veneto — 50cl",
    items: [
      ["Tre+Due", "€8,00"],
      ["Ambita", "€8,00"],
      ["Curmi", "€8,00"],
      ["Oppale", "€8,00"],
    ],
  },
  {
    title: "La Lista dei Vini al Calice",
    items: [
      ["Calice Equipe 5 Rosé (Pinot Nero)", "€7,00"],
      ["Calice Brut (San Marzano)", "€6,00"],
      ["Calice Bollicine Cheri (Negroamaro)", "€5,00"],
      ["Calice Isotteo Spumante Brut (Verdeca)", "€6,00"],
      ["Calice Talò Verdeca", "€6,00"],
      ["Calice Badò Negroamaro Rosato", "€6,00"],
      ["Calice Gibelè (Zibibbo secco)", "€7,00"],
      ["Calice Rosa di Cuti (Bombino nero)", "€6,00"],
      ["Calice Susumaniello Rosato", "€7,00"],
      ["Calice Stune Ottavianello", "€8,00"],
    ],
  },
  {
    title: "Le Bollicine Bianche — Metodo Classico",
    items: [
      ["Amore Protetto Brut (Colli della Murgia, Minutolo)", "€32,00"],
      ["D'Araprì Brut", "€28,00"],
      ["Pisan Battèl Brut", "€30,00"],
      ["Franciacorta Ca' del Bosco Satèn", "€75,00"],
      ["Bellavista Brut Teatro alla Scala", "€68,00"],
      ["Abissi Spumante Bisson (18 mesi a 60m in mare)", "€100,00"],
      ["Leonia Éternelle 2014 Frescobaldi", "€185,00"],
    ],
  },
  {
    title: "Le Bollicine Rosé — Metodo Classico",
    items: [
      ["Diffondo Rosato (Amalberga)", "€30,00"],
      ["Calice Rosè Brut (San Marzano)", "€27,00"],
      ["Bellavista Rosé Brut 2020", "€82,00"],
      ["Franciacorta Ca' del Bosco Rosé", "€90,00"],
      ["Ancestrale Rosé (Tenute Chiaromonte)", "€98,00"],
    ],
  },
  {
    title: "Champagne",
    items: [
      ["Lallier Grand Cru", "€90,00"],
      ["Pierre Gobillard Brut", "€75,00"],
      ["Taittinger Prestige Rosé", "€130,00"],
      ["Louis Roederer Brut Vintage 2018", "€180,00"],
      ["Louis Roederer Collection 246", "€110,00"],
      ["Dom Pérignon Vintage 2013", "€400,00"],
      ["Cristal Vintage 2016 Louis Roederer", "€450,00"],
    ],
  },
  {
    title: "I Francesi e non Solo — Bianchi e Rosati",
    items: [
      ["Chablis Grand Cru Régnard", "€80,00"],
      ["Petite Chablis Albert Pic", "€48,00"],
      ["Pouilly-Fumé Ladoucette", "€65,00"],
      ["Sancerre Comte Lafond", "€70,00"],
      ["Clos Mireille Blanc 2023 (Domaines Ott)", "€75,00"],
      ["Miraval Rosé", "€55,00"],
      ["Château Romassan Bandol (Domaines Ott)", "€78,00"],
    ],
  },
  {
    title: "I Bianchi di Puglia",
    items: [
      ["Negroamaro Bianco (Maccone)", "€24,00"],
      ["Talò Verdeca (San Marzano)", "€22,00"],
      ["Agorà Bianco", "€24,00"],
      ["Askos Verdeca (Masseria Li Veli)", "€26,00"],
      ["5 Uve Bianche (Botromagno)", "€25,00"],
      ["Epiro (Cantine Pirro, Nero di Troia in bianco)", "€28,00"],
      ["Panascio (Giancarlo Ceci)", "€26,00"],
      ["Portokali Orange (Colli della Murgia, Minutolo)", "€30,00"],
    ],
  },
  {
    title: "I Bianchi di Altre Regioni",
    items: [
      ["Gibelè Pellegrino 1880 (Sicilia)", "€25,00"],
      ["Ribolla Gialla Eufem (La Viarte, Friuli)", "€32,00"],
      ["Sauvignon Livio Felluga", "€38,00"],
      ["Vintage Tunina Jermann", "€67,00"],
      ["Pecorino Hydra (Abruzzo)", "€28,00"],
      ["Exulet Quintodecimo (Fiano di Avellino)", "€55,00"],
    ],
  },
  {
    title: "I Rosati di Puglia",
    items: [
      ["Parchitello (Giancarlo Ceci)", "€22,00"],
      ["Rosa di Cuti", "€24,00"],
      ["Agorà Rosé", "€24,00"],
      ["Kimia Rosé Primitivo (Chiaromonte)", "€30,00"],
      ["Torrerose (Masseria Li Veli)", "€26,00"],
      ["Sessantanni Rosé (San Marzano)", "€28,00"],
      ["Marilina (Nero di Troia)", "€24,00"],
    ],
  },
  {
    title: "I Rosati di Altre Regioni",
    items: [
      ["Aliè (Frescobaldi)", "€30,00"],
      ["Cerasuolo d'Abruzzo", "€25,00"],
      ["Aurea Gran Rosé (Frescobaldi Tenuta Ammiraglia)", "€36,00"],
      ["Il Rogito (Cantine del Notaio)", "€32,00"],
      ["Scalabrone (Marchesi Antinori)", "€34,00"],
    ],
  },
  {
    title: "I Rossi",
    items: [
      ["Amativo (Cantele)", "€24,00"],
      ["Muro Sant'Angelo (Chiaromonte, Primitivo Gioia del Colle)", "€30,00"],
      ["Sessantanni Primitivo di Manduria (San Marzano)", "€32,00"],
      ["Talò Negroamaro", "€24,00"],
      ["Fanova (Terre Carsiche)", "€28,00"],
      ["Surani Primitivo di Manduria", "€26,00"],
    ],
  },
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
        <SectionHeading
          eyebrow="La Cantina"
          title="Dalla Puglia alle grandi etichette internazionali"
          intro="Oltre 100 etichette selezionate, dalle bollicine metodo classico pugliesi ai grandi Champagne, passando per i bianchi e i rossi delle migliori denominazioni italiane e francesi."
        />
      </section>

      {categories.map((cat, i) => (
        <section key={cat.title} className="section-space container-xl">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-hairline pb-4">
              <h2 className="text-2xl sm:text-3xl">{cat.title}</h2>
              {cat.intro && <p className="text-xs italic text-ink-muted">{cat.intro}</p>}
            </div>
          </Reveal>
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {cat.items.map(([name, price], j) => (
              <Reveal key={name} delay={(j % 6) * 0.05} y={14}>
                <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
                  <span className="text-base text-ink/90">{name}</span>
                  <span className="whitespace-nowrap text-sm text-gold">{price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <section className="section-space container-xl">
        <Reveal>
          <p className="max-w-2xl text-xs text-ink-muted">
            La carta è in continuo aggiornamento in base alle disponibilità
            delle cantine. Per un abbinamento su misura, chiedete alla
            Sommelier Miriana un percorso vini al calice pensato per il
            vostro menù.
          </p>
        </Reveal>
      </section>
    </>
  );
}
