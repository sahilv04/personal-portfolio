"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-white text-bg hover:bg-white/90 shadow-[0_8px_30px_-10px_rgba(255,255,255,0.4)]",
  ghost:
    "bg-white/5 text-ink hover:bg-white/10 border border-white/10",
  outline:
    "bg-transparent text-ink border border-white/15 hover:bg-white/5",
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const tx = useTransform(sx, (v) => v * 0.18);
  const ty = useTransform(sy, (v) => v * 0.18);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <motion.span
      style={{ x: tx, y: ty }}
      className="pointer-events-none inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const base = cn(
    "group relative inline-flex select-none items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-colors",
    styles[variant],
    className
  );

  const wrapper = (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative inline-block"
    >
      {href ? (
        <Link href={href} className={base} aria-label={ariaLabel}>
          {inner}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={base} aria-label={ariaLabel}>
          {inner}
        </button>
      )}
    </div>
  );

  return wrapper;
}
