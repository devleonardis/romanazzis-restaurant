"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const EASE = [0.19, 1, 0.22, 1] as const;

export type MenuItem = [name: string, price: string, description?: string, image?: string];

export function MenuAccordion({
  title,
  note,
  image,
  items,
  defaultOpen = false,
}: {
  title: string;
  note?: string;
  image?: string;
  items: MenuItem[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Reveal className="border border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-5 p-6 text-left"
      >
        {image && (
          <span className="relative hidden h-16 w-16 flex-none overflow-hidden sm:block">
            <Image src={image} alt="" fill className="object-cover" sizes="64px" />
          </span>
        )}
        <span className="flex-1">
          <span className="block text-xl sm:text-2xl">{title}</span>
          {note && <span className="mt-1 block text-xs italic text-ink-muted">{note}</span>}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-2xl font-light text-gold"
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid gap-x-10 gap-y-5 border-t border-hairline p-6 pt-7 md:grid-cols-2">
              {items.map(([name, price, desc, itemImage]) => (
                <div key={name} className="flex gap-4">
                  {itemImage && (
                    <span className="relative h-14 w-14 flex-none overflow-hidden">
                      <Image src={itemImage} alt={name} fill className="object-cover" sizes="56px" />
                    </span>
                  )}
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
                      <span className="text-base text-ink/90">{name}</span>
                      <span className="whitespace-nowrap text-sm text-gold">{price}</span>
                    </div>
                    {desc && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}
