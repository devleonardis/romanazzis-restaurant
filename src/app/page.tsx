import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Romanazzi's è uno dei ristoranti di pesce più riconosciuti di Giovinazzo: cucina fine dining sul porticciolo, premiata Traveller's Choice 2025 e Top 25 Fine Dining d'Italia.",
};

const dishes = [
  { src: "/images/home/piatto-1.webp", name: "Crudi selezionati" },
  { src: "/images/home/piatto-2.webp", name: "Spaghettone bruciato, cozze" },
  { src: "/images/home/piatto-3.webp", name: "Pappardelle cacio e pepe, tartufo" },
  { src: "/images/home/piatto-4.webp", name: "Polpo arrosto, salsa di taralli" },
  { src: "/images/home/piatto-5.webp", name: "Tonno tataki, topinambur" },
  { src: "/images/home/piatto-6.webp", name: "Scampone scottato" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/home/hero-14.webp"
        eyebrow="Giovinazzo · Porticciolo · Torrione Aragonese"
        title="Cucina raffinata sul mare"
        intro="Affacciato direttamente sul porticciolo, il ristorante interpreta il fine dining con misura, precisione e coerenza. Il mare non è uno sfondo, ma una presenza costante che accompagna la tavola."
      >
        <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid">
          Prenota Ora
        </a>
        <Link href="/menu" className="btn-rect">
          Scopri il Menù
        </Link>
      </Hero>

      <Marquee text="Romanazzi's Restaurant · Cucina di Mare · Giovinazzo sul Porto · Chef Giuseppe Romanazzi ·" />

      <section className="section-space container-xl grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4">Il ristorante a Giovinazzo premiato a livello nazionale</p>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Un percorso costruito nel tempo, fatto di visione e precisione.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Romanazzi&apos;s è stato inserito tra i migliori ristoranti fine
            dining d&apos;Italia ed è vincitore del Traveller&apos;s Choice —
            Best of the Best. Un traguardo che racconta un percorso costruito
            nel tempo, fatto di visione chiara, studio continuo e attenzione
            all&apos;accoglienza.
          </p>
          <Link href="/chi-siamo" className="btn-rect mt-8 w-fit">
            La Nostra Storia
          </Link>
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/home/harbor-13.webp"
            alt="Vista sul porticciolo di Giovinazzo"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="section-space relative flex h-[70vh] min-h-[420px] items-center overflow-hidden">
        <Image
          src="/images/home/photo-16.webp"
          alt="Interni del ristorante Romanazzi's"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container-xl relative">
          <Reveal className="max-w-xl">
            <p className="eyebrow mb-4">Le creazioni del Ristorante Romanazzi&apos;s</p>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
              La cucina dello Chef Giuseppe Romanazzi parte dal mare e lavora
              su precisione e armonia.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/80">
              In carta trovi crudi selezionati, primi dove pesce e ingredienti
              del territorio si incontrano con equilibrio, e secondi con
              cotture calibrate accompagnate da verdure di stagione, oli ed
              erbe. I menù degustazione sintetizzano questa identità in un
              percorso completo.
            </p>
            <Link href="/il-ristorante" className="btn-rect mt-8 w-fit border-ink text-ink">
              Scopri la Filosofia
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-space container-xl">
        <SectionHeading eyebrow="Piatti Signature" title="Alcuni dei nostri piatti" align="center" />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {dishes.map((d, i) => (
            <Reveal key={d.src} delay={i * 0.06} className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src={d.src}
                alt={d.name}
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                sizes="(min-width: 1024px) 16vw, 45vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-3 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                <span className="text-xs text-ink">{d.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space container-xl grid gap-6 sm:grid-cols-3">
        <Reveal>
          <div className="border border-hairline p-8">
            <h3 className="text-xl">Il Menù</h3>
            <p className="mt-3 text-sm text-ink-muted">
              Crudi, primi d&apos;autore, secondi calibrati e i percorsi
              degustazione dello Chef.
            </p>
            <Link href="/menu" className="btn-rect mt-6 w-fit">
              Scopri il Menù
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border border-hairline p-8">
            <h3 className="text-xl">La Carta dei Vini</h3>
            <p className="mt-3 text-sm text-ink-muted">
              Oltre 100 etichette tra Puglia, Italia e Champagne, curate dalla
              Sommelier Miriana.
            </p>
            <Link href="/carta-vini" className="btn-rect mt-6 w-fit">
              Scopri la Carta
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="border border-hairline p-8">
            <h3 className="text-xl">Prenota la tua Cena</h3>
            <p className="mt-3 text-sm text-ink-muted">
              Tavoli vista porto, servizio discreto: pranzo, cena o
              un&apos;occasione speciale.
            </p>
            <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid mt-6 w-fit">
              Prenota Ora
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section-space container-xl">
        <TestimonialCard
          quote="Beautiful location, exquisite food."
          author="Recensione TripAdvisor · 5/5"
        />
      </section>

      <Marquee text="Romanazzi's Restaurant · Cucina di Mare · Giovinazzo sul Porto · Chef Giuseppe Romanazzi ·" />
    </>
  );
}
