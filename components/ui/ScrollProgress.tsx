"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin ink-red rule that fills along the very top as you read. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-vermilion"
    />
  );
}
