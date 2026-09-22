import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Scrivici per maggiori informazioni: indirizzo, telefono, email e form di contatto di Romanazzi's Restaurant a Giovinazzo (Bari).",
};

export default function ContattiPage() {
  return (
    <>
      <section className="relative flex h-[50vh] min-h-[380px] items-end overflow-hidden pt-32">
        <Image src="/images/contatti/hero.jpg" alt="Romanazzi's Restaurant" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10" />
        <div className="container-xl relative pb-14">
          <p className="eyebrow mb-4">Scrivici</p>
          <h1 className="text-4xl sm:text-6xl">Contatti</h1>
        </div>
      </section>

      <section className="section-space container-xl grid gap-16 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="Le Nostre Informazioni" title="Vieni a trovarci sul porto di Giovinazzo" />
          <ul className="mt-8 space-y-5 text-base text-ink-muted">
            <li>
              <span className="eyebrow mb-1 block">Indirizzo</span>
              {site.address}
            </li>
            <li>
              <span className="eyebrow mb-1 block">Telefono</span>
              <a href={site.phoneHref} className="hover:text-ink">{site.phone}</a>
            </li>
            <li>
              <span className="eyebrow mb-1 block">Email</span>
              <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
            </li>
            <li>
              <span className="eyebrow mb-1 block">Orari</span>
              Pranzo {site.hours.pranzo} — Cena {site.hours.cena}, tutti i giorni
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="space-y-5 border border-hairline p-8">
            <p className="text-sm text-ink-muted">
              Inviaci la tua richiesta compilando il modulo: ti risponderemo
              il prima possibile.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <input required name="nome" placeholder="Nome" className="border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
              <input required name="cognome" placeholder="Cognome" className="border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <input required type="tel" name="cellulare" placeholder="Cellulare" className="border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
              <input required type="email" name="email" placeholder="Email" className="border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
            </div>
            <textarea required name="messaggio" placeholder="Messaggio" rows={5} className="w-full border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
            <label className="flex items-start gap-3 text-xs text-ink-muted">
              <input required type="checkbox" className="mt-1" />
              Dichiaro di aver letto l&apos;informativa privacy ed autorizzo il
              Titolare a rispondermi.
            </label>
            <button type="submit" className="btn-solid">
              Invia la Tua Richiesta
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
