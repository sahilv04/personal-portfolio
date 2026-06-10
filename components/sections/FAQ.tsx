"use client";

import { useState } from "react";
import { faqs as defaultFaqs, type FAQ as FAQItem } from "@/content/faq";

/**
 * Q&A column — questions as entries, answers folding open beneath.
 * Answers stay in the DOM at all times (collapsed via grid-rows) so search
 * and AI crawlers read the full text; only the reveal is interactive.
 */
export default function FAQ({ items = defaultFaqs }: { items?: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <dl className="double-rule border-b border-ink/20">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-ink/15 last:border-b-0">
            <dt>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-baseline gap-4 py-5 text-left md:gap-6"
              >
                <span className="font-mono text-xs text-vermilion">
                  Q{String(i + 1).padStart(2, "0")}
                </span>
                <span className="wonk flex-1 font-display text-xl font-semibold text-ink transition-colors group-hover:text-vermilion md:text-2xl">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`font-mono text-lg text-ink-faint transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </dt>
            <dd
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 pl-10 italic leading-relaxed text-ink-soft md:pl-14">
                  {item.a}
                </p>
              </div>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
