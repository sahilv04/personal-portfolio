"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/content/skills";

export default function SkillsGrid() {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((g, i) => (
        <motion.article
          key={g.title}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-white/20"
        >
          <div className="absolute -inset-px -z-10 opacity-0 transition group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.18), rgba(92,242,255,0.06))" }} />
          <p className="font-display text-lg text-ink">{g.title}</p>
          <p className="mt-1 text-sm text-ink-dim">{g.blurb}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {g.items.map((item, j) => (
              <motion.li
                key={item}
                initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * j, duration: 0.4 }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-dim transition hover:border-white/30 hover:text-ink"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
