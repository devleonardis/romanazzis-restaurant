import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Il Ristorante — Ristorante di Pesce a Giovinazzo (Bari)",
  description:
    "La cucina di mare di Romanazzi's, su un tavolo che guarda il porto di Giovinazzo: filiera corta, crudi, primi d'autore, secondi e percorsi degustazione dello Chef Giuseppe Romanazzi.",
};

const courses = [
  {
    title: "I crudi e gli antipasti di mare",
    text: "Ostriche francesi, gamberi rossi di calibro 2, scampi, tartare di tonno, medaglioni di polpo e calamaro all'aglio, olio e peperoncino. Il rituale di apertura, dove la qualità o c'è, o si sente subito.",
    image: "/images/il-ristorante/pesce-5.webp",
  },
  {
    title: "Primi piatti d'autore",
    text: "Lo spaghettone bruciato con le cozze. Le pappardelle cacio e pepe con crudo di tonno e tartufo nero. Piatti che rispettano il territorio rivisitando la tradizione.",
    image: "/images/il-ristorante/fish-02.jpg",
  },
  {
    title: "Secondi a regola d'arte",
    text: "Il polpo arrosto tenero e croccante, il tonno tataki con topinambur, lo scampone scottato: la materia prima esaltata con maestria dallo Chef.",
    image: "/images/il-ristorante/tonno-tataki.webp",
  },
  {
    title: "I dessert",
    text: "Chiusure pensate per un finale che esalti il pasto con leggerezza, dalla moderna granita al basilico ai dessert studiati per completare con eleganza una cena raffinata.",
    image: "/images/il-ristorante/dolce.webp",
  },
];

export default function IlRistorantePage() {
  return (
    <>
      <Hero
        image="/images/il-ristorante/harbor-05.jpg"
        eyebrow="Dove mangiare pesce vicino a Bari"
        title="Ristorante di Pesce a Bari e Provincia"
        intro="La cucina di mare di Romanazzi's, su un tavolo che guarda il porto di Giovinazzo, all'interno del Torrione Aragonese."
      >
        <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid">
          Prenota il Tuo Tavolo
        </a>
        <a href={site.phoneHref} className="btn-rect">
          Chiama
        </a>
      </Hero>

      <section className="section-space container-xl max-w-3xl">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink/90">
            C&apos;è un modo in cui andrebbe mangiato il pesce: con il mare in
            vista, l&apos;odore del pescato del giorno che la cucina porta in
            sala e una mano che lavora la materia prima senza coprirla. Per
            quanti ristoranti di pesce ci siano a Bari e provincia, ne
            incontri pochi in cui le tre cose stanno insieme senza
            compromessi. Romanazzi&apos;s è uno di questi.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Ci trovi direttamente sul porticciolo di Giovinazzo, all&apos;interno
            del Torrione Aragonese, a una ventina di minuti dal centro di
            Bari. In carta trovi una cucina di mare costruita in oltre 10 anni
            d&apos;esperienza dallo Chef-patron Giuseppe Romanazzi.
          </p>
        </Reveal>
      </section>

      <section className="section-space container-xl grid gap-6 sm:grid-cols-3">
        {[
          "Riconoscimento nazionale",
          "Pescato fresco del giorno",
          "Cucina d'autore autentica",
          "Location esclusiva",
        ].map((item, i) => (
          <Reveal key={item} delay={i * 0.08} className="border border-hairline p-6">
            <p className="eyebrow mb-2">0{i + 1}</p>
            <p className="text-base">{item}</p>
          </Reveal>
        ))}
      </section>

      <section className="section-space container-xl">
        <SectionHeading
          eyebrow="La nostra carta a filiera corta"
          title="La lista cambia con ciò che il mare ha dato"
          intro="Il pesce della carta arriva da una filiera corta lavorata sulla costa pugliese: quando un ingrediente non è disponibile, semplicemente non c'è in menù. Una scelta che, dopo dieci anni, resta alla base del nostro successo."
        />
      </section>

      {courses.map((c, i) => (
        <section key={c.title} className="section-space container-xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
            <h3 className="text-2xl sm:text-3xl">{c.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">{c.text}</p>
          </Reveal>
          <Reveal delay={0.15} className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <Image src={c.image} alt={c.title} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </Reveal>
        </section>
      ))}

      <section className="section-space container-xl max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="I percorsi degustazione"
            title="Dieci anni di cucina di mare, in un percorso completo"
            intro="Diversi percorsi degustazione ideati interamente dallo Chef Giuseppe Romanazzi ripercorrono l'identità del ristorante e la sua prossima fase. La scelta naturale per chi viene per la prima volta e per chi torna."
          />
          <Link href="/menu" className="btn-rect mt-8 w-fit">
            Vedi i Menù Degustazione
          </Link>
        </Reveal>
      </section>

      <section className="section-space container-xl grid gap-6 lg:grid-cols-3">
        <TestimonialCard
          quote="Ho mangiato in questo ristorante sul mare ed è stata un'esperienza davvero spettacolare! La vista è meravigliosa, l'atmosfera rilassante e il profumo del mare rende tutto ancora più speciale."
          author="Mare fuori"
        />
        <TestimonialCard
          delay={0.1}
          quote="Soufflé di pesce bianco con salsa al baccalà, pappardelle cacio-pepe al tartufo nero e crudo di tonno, fusilloni alla polpa di riccio, tonno al nero di seppia, dessert limonato e sottobosco."
          author="Un pranzo gourmet"
        />
        <TestimonialCard
          delay={0.2}
          quote="Ottimo ristorante. Posizione eccezionale, letteralmente sul mare! Cucina eccellente, ricercata ma non troppo sofisticata."
          author="Romanazzi è sempre una certezza"
        />
      </section>
    </>
  );
}
