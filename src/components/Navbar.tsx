"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="container-xl flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/footer-logo.png"
            alt="Romanazzi's Restaurant"
            width={160}
            height={40}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow tracking-widest text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid">
            Prenota Ora
          </a>
        </div>

        <button
          aria-label="Apri menu"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-ink" />
          <span className="block h-px w-6 bg-ink" />
          <span className="block h-px w-4 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-bg lg:hidden">
          <div className="container-xl flex flex-col gap-5 py-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-base normal-case tracking-normal text-ink/85"
              >
                {l.label}
              </Link>
            ))}
            <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn-solid w-fit">
              Prenota Ora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
