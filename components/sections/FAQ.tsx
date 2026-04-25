"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs as defaultFaqs, type FAQ as FAQItem } from "@/content/faq";

export default function FAQ({ items = defaultFaqs }: { items?: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/5 rounded-2xl border border-white/8 bg-white/[0.02]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-ink"
            >
              <span className="font-display text-base md:text-lg">{f.q}</span>
              <span
                aria-hidden
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 transition ${isOpen ? "rotate-45 bg-white/10" : ""}`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-ink-dim md:text-[15px]">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
