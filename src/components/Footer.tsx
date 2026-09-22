import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section-space border-t border-hairline bg-surface">
      <div className="container-xl grid gap-12 py-16 md:grid-cols-4">
        <div>
          <Image
            src="/images/logo/footer-logo.png"
            alt="Romanazzi's Restaurant"
            width={180}
            height={46}
            className="mb-4 h-10 w-auto"
          />
          <p className="max-w-xs text-sm text-ink-muted">
            Cucina di mare sul porticciolo di Giovinazzo, all&apos;interno del
            Torrione Aragonese del 1488.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Naviga</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/lavora-con-noi" className="transition-colors hover:text-ink">
                Lavora con Noi
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contatti</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li>{site.address}</li>
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-ink">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                {site.email}
              </a>
            </li>
            <li className="pt-2">Pranzo {site.hours.pranzo}</li>
            <li>Cena {site.hours.cena}</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Seguici</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.social.tripadvisor} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                TripAdvisor
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-xl flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Romanazzi&apos;s Restaurant di Giuseppe
            Romanazzi — Piazza Porto 32, Giovinazzo (BA) — P.IVA {site.piva}
          </p>
        </div>
      </div>
    </footer>
  );
}
