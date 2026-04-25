"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "REST APIs",
  "AWS",
  "Cloud",
  "R3 Corda",
  "Docker",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Opensource",
];

export default function Marquee() {
  const reduce = useReducedMotion();
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-6">
      <motion.div
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-10 whitespace-nowrap"
      >
        {row.map((it, i) => (
          <span key={`${it}-${i}`} className="font-display text-2xl text-ink-muted md:text-3xl">
            {it}
            <span className="mx-6 text-accent">●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
