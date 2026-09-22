import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prenota un Tavolo",
  description:
    "Prenota il tuo tavolo al Romanazzi's Restaurant: pranzo, cena o un'occasione speciale sul porto di Giovinazzo.",
};

export default function PrenotaPage() {
  return (
    <>
      <section className="relative flex h-[50vh] min-h-[380px] items-end overflow-hidden pt-32">
        <Image
          src="/images/cena-romantica/cena-romantica-10.jpg"
          alt="Un tavolo al Romanazzi's Restaurant"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10" />
        <div className="container-xl relative pb-14">
          <p className="eyebrow mb-4">Ti Aspettiamo sul Porto</p>
          <h1 className="text-4xl sm:text-6xl">Prenota un Tavolo</h1>
        </div>
      </section>

      <section className="section-space container-xl grid gap-16 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Come Funziona"
            title="Scegli data, ora e numero di persone"
            intro="Invia la richiesta e ti confermeremo la disponibilità il prima possibile. Per prenotazioni last-minute o gruppi numerosi, ti consigliamo di chiamarci direttamente."
          />
          <ul className="mt-8 space-y-5 text-sm text-ink-muted">
            <li>
              <span className="eyebrow mb-1 block">Telefono</span>
              <a href={site.phoneHref} className="hover:text-ink">{site.phone}</a>
            </li>
            <li>
              <span className="eyebrow mb-1 block">Orari</span>
              Pranzo {site.hours.pranzo} — Cena {site.hours.cena}, tutti i giorni
            </li>
            <li>
              <span className="eyebrow mb-1 block">Indirizzo</span>
              {site.address}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <BookingForm />
        </Reveal>
      </section>
    </>
  );
}
