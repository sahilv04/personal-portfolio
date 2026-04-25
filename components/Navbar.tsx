"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-2xl border border-white/5 px-4 py-2.5 transition-all",
            scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-transparent"
          )}
        >
          <Link href="/" className="group flex items-center gap-2 font-display text-lg tracking-tight">
            <span className="relative inline-block h-7 w-7">
              <span className="absolute inset-0 rounded-md bg-gradient-to-br from-accent via-accent-hot to-accent-ice opacity-90" />
              <span className="absolute inset-[2px] rounded-[5px] bg-bg" />
              <span className="absolute inset-0 grid place-items-center text-[11px] font-bold tracking-tight text-white">
                SV
              </span>
            </span>
            <span className="hidden text-ink sm:block">Sahil Verma</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-xl px-3 py-1.5 text-sm transition-colors",
                    active ? "text-ink" : "text-ink-dim hover:text-ink"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-white/5"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-xl bg-white text-bg px-3.5 py-1.5 text-sm font-medium transition hover:bg-white/90 md:inline-flex"
          >
            Get in touch
          </Link>

          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-ink"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mx-auto mt-2 max-w-6xl px-4"
          >
            <div className="glass rounded-2xl p-3">
              <ul className="grid gap-1">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-xl px-3 py-2 text-base",
                          active ? "bg-white/5 text-ink" : "text-ink-dim hover:text-ink"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-1">
                  <Link
                    href="/contact"
                    className="block rounded-xl bg-white px-3 py-2 text-base font-medium text-bg"
                  >
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
