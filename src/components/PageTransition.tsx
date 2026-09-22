"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const EASE = [0.19, 1, 0.22, 1] as const;

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE } }}
        exit={{ opacity: 0, y: -10, transition: { duration: 0.22, ease: EASE } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
