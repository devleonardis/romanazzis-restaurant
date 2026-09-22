"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { AwardBadges } from "@/components/AwardBadges";

const EASE = [0.19, 1, 0.22, 1] as const;

export function Hero({
  image,
  eyebrow,
  title,
  intro,
  children,
  showBadges = true,
}: {
  image: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  showBadges?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.5 });
  const y = useTransform(smoothProgress, [0, 1], ["0%", "16%"]);

  return (
    <div ref={ref} className="relative flex h-[92vh] min-h-[560px] w-full items-end overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-black/25" />
      </motion.div>

      <div className="container-xl relative pb-16 pt-40 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          className="eyebrow mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.22, ease: EASE }}
          className="max-w-3xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.42, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {intro}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.62, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          {children}
        </motion.div>

        {showBadges && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.8, ease: EASE }}
            className="mt-12"
          >
            <AwardBadges />
          </motion.div>
        )}
      </div>
    </div>
  );
}
