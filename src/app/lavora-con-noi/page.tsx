import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lavora con Noi",
  description:
    "Carriera al Romanazzi's, Giovinazzo (BA): formazione continua, ambiente motivante, contratto annuale o stagionale.",
};

export default function LavoraConNoiPage() {
  return (
    <>
      <section className="relative flex h-[50vh] min-h-[380px] items-end overflow-hidden pt-32">
        <Image src="/images/lavora-con-noi/team-1.jpg" alt="Il team di Romanazzi's" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10" />
        <div className="container-xl relative pb-14">
          <p className="eyebrow mb-4">Carriera</p>
          <h1 className="text-4xl sm:text-6xl">Lavora con Noi</h1>
        </div>
      </section>

      <section className="section-space container-xl grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Unisciti al Team"
            title="Il Romanazzi's è l'ambiente perfetto per crescere"
            intro="Sei alla ricerca di nuove opportunità lavorative o non ti senti appagato dal tuo attuale impiego? Il Romanazzi's Restaurant a Giovinazzo offre un contesto stimolante e dinamico per la tua crescita personale e professionale."
          />
          <ul className="mt-8 space-y-3 text-sm text-ink-muted">
            <li>— Possibilità di formazione continua</li>
            <li>— Un ambiente di lavoro motivante</li>
            <li>— Retribuzione fissa</li>
            <li>— Un team di persone della tua stessa età</li>
            <li>— Contratto annuale o stagionale, con possibilità di collaborazione a lungo termine</li>
          </ul>
          <a href={`mailto:${site.jobsEmail}`} className="btn-solid mt-8 w-fit">
            Invia la Tua Candidatura
          </a>
          <p className="mt-4 text-xs text-ink-muted">
            Allega CV e una breve lettera di presentazione a {site.jobsEmail}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden">
          <Image src="/images/lavora-con-noi/staff-6.webp" alt="Staff Romanazzi's" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </Reveal>
      </section>
    </>
  );
}
