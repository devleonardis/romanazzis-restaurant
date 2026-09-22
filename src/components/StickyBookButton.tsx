"use client";

import { site } from "@/lib/site";

export function StickyBookButton() {
  return (
    <a
      href={site.booking}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-widest text-ink shadow-lg shadow-black/40 transition-transform hover:scale-105 sm:flex"
    >
      Prenota un tavolo
    </a>
  );
}
