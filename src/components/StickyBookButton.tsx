"use client";

import Link from "next/link";

export function StickyBookButton() {
  return (
    <Link
      href="/prenota"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-widest text-ink shadow-lg shadow-black/40 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105 sm:flex"
    >
      Prenota un tavolo
    </Link>
  );
}
