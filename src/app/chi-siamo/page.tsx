import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Chi Siamo — Storia, Location e Recensioni",
  description:
    "10 anni di Romanazzi's: la storia dello Chef Giuseppe Romanazzi, la location sul porto di Giovinazzo e le recensioni di ospiti e volti noti.",
};

const faqs = [
  {
    q: "Il pesce che servite è locale?",
    a: "Lavoriamo prevalentemente con filiere agroittiche locali, integrate da prodotti selezionati da fornitori di fiducia per garantire freschezza e qualità.",
  },
  {
    q: "Tutti i tavoli sono vista mare?",
    a: "Sì, tutti i tavoli sono vista mare, ma solo pochi sono prospicienti allo specchio d'acqua: consigliamo la prenotazione anticipata con richiesta specifica nelle note.",
  },
  {
    q: "Esiste un abbinamento vini al menù degustazione?",
    a: "Sì, su richiesta proponiamo un percorso vini al calice curato dal nostro sommelier, con etichette pugliesi e nazionali.",
  },
  {
    q: "Si possono organizzare eventi privati o cene aziendali?",
    a: "Sì, organizziamo cene aziendali, ricorrenze e piccoli eventi privati, capienza massima 15 persone, menù personalizzabili.",
  },
  {
    q: "Siete adatti a bambini e famiglie?",
    a: "Sì, accogliamo volentieri i bambini: su segnalazione in prenotazione mettiamo a disposizione seggiolone e proposte semplificate.",
  },
];

const vipQuotes = [
  { quote: "Posto stupendo, abbiamo mangiato benissimo e grazie di tutto, mi hanno accolto a braccia aperte, mi sono veramente sentita a casa.", author: "Anna Tatangelo" },
  { quote: "Sono stato molto bene, si mangia bene, che dire, è bravo lo Chef. Tornerò molto presto!", author: "Chef Bruno Barbieri" },
  { quote: "Scoperto su Instagram dalla Sig.na Lucarelli, cibo fantastico, location incredibile.", author: "Selvaggia Lucarelli e Lorenzo Biagiarelli" },
  { quote: "Potrei essere un Romanazzo io, vivendo a Roma oltre che a Lecce. È andata bene, la pasta bruciacchiata.", author: "Giuliano Sangiorgi (Negramaro)" },
];

export default function ChiSiamoPage() {
  return (
    <>
      <Hero
        image="/images/location/harbor-07.jpg"
        eyebrow="10 Anni di Romanazzi's"
        title="Chi Siamo"
        intro="Una storia iniziata nel 2013 sul porto di Giovinazzo, una location a cinque metri dal mare, e un'accoglienza raccontata da chi l'ha vissuta."
        showBadges={false}
      >
        <Link href="/prenota" className="btn-solid">
          Prenota Ora
        </Link>
      </Hero>

      {/* STORIA */}
      <section id="storia" className="section-space container-xl max-w-3xl">
        <SectionHeading eyebrow="2013 – 2023 · La Nostra Storia" title="10 anni di storia, 10 anni di successi" />
        <Reveal delay={0.1} className="mt-10 space-y-5 text-base leading-relaxed text-ink-muted">
          <p>
            Dieci anni fa, Giuseppe Romanazzi ha iniziato con un sogno: creare
            un luogo dove la passione per la cucina e l&apos;amore per la
            Puglia potessero incontrare il mondo. Non solo un luogo per
            mangiare, ma un&apos;esperienza da vivere, un viaggio attraverso i
            sapori, gli odori e i colori della sua terra.
          </p>
          <p>
            &ldquo;Ogni piatto che abbiamo servito, ogni sorriso che abbiamo
            condiviso, ogni brindisi che abbiamo fatto insieme è stato un
            capitolo della nostra storia,&rdquo; scrive lo Chef. &ldquo;Siete
            stati voi, con il vostro sostegno e il vostro affetto, a rendere
            il Romanazzi&apos;s un punto di riferimento nella scena culinaria,
            non solo a Giovinazzo ma anche in Puglia.&rdquo;
          </p>
          <p className="eyebrow text-ink/70 normal-case tracking-normal not-italic">
            — Giuseppe Romanazzi, Chef e Patron
          </p>
        </Reveal>
      </section>

      <section className="section-space container-xl grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["anniversario-100", "anniversario-135", "anniversario-57"].map((img, i) => (
          <Reveal key={img} delay={i * 0.08} className="relative aspect-square overflow-hidden">
            <Image src={`/images/cena/${img}.webp`} alt="Decimo anniversario Romanazzi's" fill className="object-cover" sizes="25vw" />
          </Reveal>
        ))}
      </section>

      {/* LOCATION */}
      <section id="location" className="section-space relative flex min-h-[70vh] items-center overflow-hidden">
        <Image src="/images/location/dsc-9574.webp" alt="Il porticciolo di Giovinazzo" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-xl relative py-16">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">A 5 Metri dall&apos;Acqua</p>
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">La Location sul Porto di Giovinazzo</h2>
            <p className="mt-6 text-base leading-relaxed text-ink/85">
              Romanazzi&apos;s si trova in Piazza Porto 32 a Giovinazzo (Bari),
              affacciato direttamente sul porticciolo, a circa 20 minuti
              d&apos;auto dal centro di Bari e 15 dall&apos;aeroporto. Sala
              interna vista mare con grandi vetrate, terrazza esterna sul
              porto in primavera ed estate: due ambienti, stessa magica
              atmosfera.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space container-xl">
        <SectionHeading eyebrow="Domande Frequenti" title="Cosa sapere prima di prenotare" />
        <div className="mt-10 divide-y divide-hairline border-y border-hairline">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05} className="py-6">
              <h3 className="text-base text-ink">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DICONO DI NOI */}
      <section id="dicono-di-noi" className="section-space container-xl">
        <SectionHeading eyebrow="Dicono di Noi" title="Volti noti e ospiti raccontano Romanazzi's" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {vipQuotes.map((v, i) => (
            <TestimonialCard key={v.author} quote={v.quote} author={v.author} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <section className="section-space container-xl grid gap-6 lg:grid-cols-3">
        <TestimonialCard quote="Location bellissima, accoglienza e professionalità, menù interessante, carta vini eccellente." author="Impeccabile" />
        <TestimonialCard delay={0.1} quote="Perfetto per una serata estiva, tavoli esterni sul mare, servizio cordiale, ottima selezione di ostriche." author="Romanazzi's, una bella scoperta" />
        <TestimonialCard delay={0.2} quote="Esperienza sublime, cucina 'tradizionalmente innovativa' dello Chef Giuseppe Romanazzi, maestria negli abbinamenti." author="Solo complimenti per il Romanazzi's" />
      </section>
    </>
  );
}
