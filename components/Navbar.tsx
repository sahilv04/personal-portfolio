"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/about", label: "About", index: "01" },
  { href: "/experience", label: "Experience", index: "02" },
  { href: "/projects", label: "Work", index: "03" },
  { href: "/skills", label: "Skills", index: "04" },
  { href: "/articles", label: "Writing", index: "05" },
  { href: "/contact", label: "Contact", index: "06" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm">
      {/* Folio strip — the newspaper dateline */}
      <div className="border-b border-ink/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint md:px-8">
          <span>Est. 2016 — Chandigarh, IN</span>
          <span className="hidden sm:inline">The collected work of a full stack engineer</span>
          <span>Vol. IX</span>
        </div>
      </div>

      <div className="double-rule-thick border-b border-ink/0">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 md:px-8">
          <Link
            href="/"
            className="wonk font-display text-xl font-bold tracking-tight text-ink md:text-2xl"
          >
            Sahil&nbsp;Verma<span className="text-vermilion">.</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group font-mono text-[12px] uppercase tracking-[0.16em] transition-colors",
                    active ? "text-vermilion" : "text-ink-soft hover:text-ink",
                  )}
                >
                  <span className="mr-1 text-[9px] text-ink-faint group-hover:text-vermilion">
                    {item.index}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-ink bg-paper-card shadow-offset-sm lg:hidden"
          >
            <span
              className={cn(
                "h-[2px] w-5 bg-ink transition-transform",
                open && "translate-y-[4px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-[2px] w-5 bg-ink transition-transform",
                open && "-translate-y-[4px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile index — full-page table of contents */}
      {open && (
        <div className="absolute inset-x-0 top-full z-40 h-[calc(100svh-6.5rem)] overflow-y-auto border-t border-ink/20 bg-paper lg:hidden">
          <nav className="mx-auto max-w-6xl px-5 py-8" aria-label="Mobile">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
              Table of contents
            </p>
            <ul className="mt-4">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-ink/15">
                  <Link
                    href={item.href}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="wonk font-display text-3xl font-semibold text-ink">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-vermilion">{item.index}</span>
                  </Link>
                </li>
              ))}
              <li className="border-b border-ink/15">
                <Link href="/education" className="flex items-baseline justify-between py-5">
                  <span className="wonk font-display text-3xl font-semibold text-ink">Education</span>
                  <span className="font-mono text-xs text-vermilion">07</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="flex items-baseline justify-between py-5">
                  <span className="wonk font-display text-3xl font-semibold text-ink">What I Do</span>
                  <span className="font-mono text-xs text-vermilion">08</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
