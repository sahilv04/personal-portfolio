"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroSceneLoader from "@/components/three/HeroSceneLoader";
import Button from "@/components/ui/Button";
import { personal } from "@/content/personal";

const headline = personal.headline;

export default function Hero() {
  const reduce = useReducedMotion();
  const words = headline.split(" ");

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <HeroSceneLoader />

      <div className="relative mx-auto w-full max-w-6xl px-4">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink-dim backdrop-blur"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-ice/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-ice" />
          </span>
          Technical Lead @ Webmob · Chandigarh, India · Replies within 24h
        </motion.p>

        <h1 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.05] tracking-tight">
          <span className="block text-ink-dim">{personal.name}.</span>{" "}
          <span className="block">
            {words.map((w, i) => (
              <span
                key={`${w}-${i}`}
                className="hero-word text-gradient mr-[0.28em]"
                style={{ ["--d" as string]: `${0.08 + i * 0.04}s` }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-7 max-w-2xl text-lg text-ink-dim md:text-xl"
        >
          {personal.intro}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button href="/projects">View work →</Button>
          <Button href="/contact" variant="ghost">Contact me</Button>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          {personal.stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-4"
            >
              <p className="font-display text-2xl text-ink md:text-3xl">{s.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-ink-muted">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
