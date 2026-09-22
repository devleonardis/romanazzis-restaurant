import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AwardBadges } from "@/components/AwardBadges";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servizi — Pranzo, Cena, Eventi Aziendali e Cena Romantica",
  description:
    "Pranzo e cena vista mare, eventi aziendali sul porto di Giovinazzo e cene romantiche riservate: i servizi di Romanazzi's Restaurant.",
};

export default function ServiziPage() {
  return (
    <>
      <Hero
        image="/images/pranzo/62.webp"
        eyebrow="I Nostri Servizi"
        title="Pranzo, Cena ed Eventi sul Porto"
        intro="Dal pranzo con vista mare alla cena romantica riservata, fino agli eventi aziendali: ogni occasione ha la sua cornice, sempre sul porticciolo di Giovinazzo."
        showBadges={false}
      >
        <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid">
          Prenota Ora
        </a>
      </Hero>

      {/* PRANZO */}
      <section id="pranzo" className="section-space container-xl grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4">Ristorante Aperto a Pranzo a Giovinazzo</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">Il piacere di un pranzo vista mare</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Vivi l&apos;esperienza unica del tuo pranzo con vista mare, sotto
            le antiche mura Aragonesi. Un ambiente elegante e raffinato,
            ideale per un pranzo da vivere con le persone a te vicine — con
            oltre 1.000 recensioni a 5 stelle su TripAdvisor a raccontarlo.
          </p>
          <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-rect mt-8 w-fit">
            Prenota il Tuo Tavolo
          </a>
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden">
          <Image src="/images/pranzo/f-25.jpg" alt="Pranzo vista mare al Romanazzi's" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </Reveal>
      </section>

      {/* CENA */}
      <section id="cena" className="section-space container-xl grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden lg:order-1">
          <Image src="/images/cena/interior.webp" alt="Cena al Romanazzi's" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </Reveal>
        <Reveal className="lg:order-2">
          <p className="eyebrow mb-4">Cena Ristorante a Giovinazzo</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">Una cena vista mare, sotto il Torrione</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Vivi l&apos;esperienza unica della tua cena con vista mare, sotto
            le antiche mura Aragonesi: la routine quotidiana si ferma, resta
            il suono del mare a fare da sottofondo. Oltre 900 recensioni a 5
            stelle su TripAdvisor.
          </p>
          <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-rect mt-8 w-fit">
            Prenota il Tuo Tavolo
          </a>
        </Reveal>
      </section>

      <section className="section-space container-xl">
        <TestimonialCard
          quote="Bellissima e suggestiva location nella piazzetta del porto, vicino all'acqua e alle barche ormeggiate. Ambiente curato ed elegante. Accoglienza attenta, servizio premuroso."
          author="Ottima cena — recensione TripAdvisor"
        />
      </section>

      {/* EVENTI AZIENDALI (merged pranzo+cena aziendale) */}
      <section id="eventi-aziendali" className="section-space relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cena/anniversario-100.webp" alt="Evento aziendale sul porto" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-xl relative py-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">Pranzo e Cena Aziendale sul Mare</p>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
              Eventi aziendali nel cuore del porto di Giovinazzo
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/85">
              Ambiente raffinato e cucina d&apos;eccellenza fanno da sfondo a
              momenti di condivisione e team building indimenticabili, per il
              pranzo come per la cena.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/80">
              <li>— Spazio esterno esclusivo fino a 20 ospiti</li>
              <li>— Possibilità di riservare l&apos;intero ristorante</li>
              <li>— Proposte culinarie su misura per le aziende</li>
              <li>— Menù vegani e senza glutine su richiesta</li>
            </ul>
            <a href={`mailto:${site.email}`} className="btn-solid mt-8 w-fit">
              Richiedi un Preventivo
            </a>
          </Reveal>
        </div>
      </section>

      {/* CENA ROMANTICA (perché-sceglierci folded in) */}
      <section id="cena-romantica" className="section-space container-xl grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4">Cena Romantica sul Mare vicino Bari</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Un posto riservato, elegante, dove parlare davvero
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Sul porticciolo di Giovinazzo, a pochi minuti da Bari, un
            ristorante affacciato sull&apos;acqua dove cucina, servizio e
            atmosfera lavorano insieme per una serata che ha il sapore di
            un&apos;occasione speciale — scelto ogni anno da coppie che
            festeggiano anniversari e momenti importanti.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink/80">
            <li>— Tavoli riservati vista porto</li>
            <li>— Cucina di mare fine dining</li>
            <li>— Servizio discreto e mai invadente</li>
            <li>— Cantina ampia con la Sommelier Miriana al tuo servizio</li>
          </ul>
          <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid mt-8 w-fit">
            Prenota Ora
          </a>
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden">
          <Image src="/images/cena-romantica/cena-romantica-10.jpg" alt="Cena romantica al Romanazzi's" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </Reveal>
      </section>

      <section className="section-space container-xl">
        <AwardBadges />
      </section>
    </>
  );
}
