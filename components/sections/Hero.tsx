"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import InkSculpture from "@/components/three/InkSculptureLoader";
import { personal } from "@/content/personal";
import { track } from "@/lib/analytics";

const ease = [0.22, 1, 0.36, 1] as const;

function Rise({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Halftone field bleeding off the right edge, with a slow wireframe engraving turning inside it */}
      <div
        aria-hidden
        className="absolute -right-24 top-16 hidden h-[28rem] w-[28rem] lg:block"
      >
        <div className="halftone absolute inset-0 opacity-25 [mask-image:radial-gradient(closest-side,black,transparent)]" />
        <InkSculpture variant="knot" color="#211D14" className="absolute inset-0 opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Rise>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
                Portfolio &amp; field notes — {personal.role}
              </p>
            </Rise>

            <Rise delay={0.08}>
              <h1 className="wonk mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
                I build <em className="soft-display font-medium text-vermilion">end-to-end</em>{" "}
                products and lead the engineers who{" "}
                <span className="hand-underline whitespace-nowrap">ship them</span> —
              </h1>
            </Rise>

            <Rise delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
                React, Angular, Node.js, Cloud and Opensource at enterprise scale.{" "}
                <span className="italic">{personal.intro}</span>
              </p>
            </Rise>

            <Rise delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/projects">View work →</Button>
                <Button href="/contact" variant="ghost">
                  Contact me
                </Button>
                <a
                  href={personal.socials.email}
                  onClick={() => track("contact_click", { method: "email", location: "hero" })}
                  className="marginalia text-sm"
                >
                  replies within 24 hrs — actually*
                </a>
              </div>
            </Rise>
          </div>

          {/* Pinned photograph, slightly askew, captioned like a plate in a journal */}
          <Rise delay={0.2} className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
            <motion.figure
              initial={false}
              whileHover={{ rotate: 0 }}
              className="relative rotate-[2.2deg] border border-ink/30 bg-paper-card p-3 pb-4 shadow-offset transition-transform duration-300"
            >
              <span aria-hidden className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
              <Image
                src="/sahil-verma.webp"
                alt={`${personal.name} — ${personal.role}, based in ${personal.location}`}
                width={897}
                height={1200}
                priority
                sizes="(max-width: 1024px) 300px, 380px"
                className="h-auto w-full border border-ink/20 object-cover grayscale-[35%] contrast-105"
              />
              <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                <span>fig. 01 — the engineer</span>
                <span>{personal.location}</span>
              </figcaption>
              <span className="stamp absolute -bottom-4 -right-3 rotate-[-8deg] text-[10px] text-vermilion">
                Shipping since ’16
              </span>
            </motion.figure>
          </Rise>
        </div>

        {/* Vital statistics, typeset as a ruled ledger strip */}
        <Rise delay={0.34}>
          <dl className="double-rule mt-16 grid grid-cols-2 border-b border-ink/20 md:mt-24 md:grid-cols-4">
            {personal.stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-6 md:px-6 ${i > 0 ? "border-l border-ink/15" : ""} ${i === 2 ? "max-md:border-l-0" : ""} max-md:[&:nth-child(n+3)]:border-t max-md:[&:nth-child(n+3)]:border-ink/15`}
              >
                <dd className="wonk font-display text-4xl font-bold text-ink md:text-5xl">
                  {s.value}
                </dd>
                <dt className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink-soft">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-3 font-mono text-[10px] tracking-wide text-ink-faint">
            * measured across every enquiry to date; the asterisk is decorative, the habit is not.
          </p>
        </Rise>
      </div>
    </section>
  );
}
