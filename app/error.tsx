"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="relative grid min-h-[80svh] place-items-center px-4 pt-24">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="relative max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">Something broke</p>
        <h1 className="mt-3 font-display text-5xl text-ink md:text-6xl">
          A small turbulence.
        </h1>
        <p className="mt-4 text-ink-dim">
          An unexpected error occurred. Try again — and if it keeps happening, get in touch.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button href="/" variant="ghost">Go home</Button>
        </div>
      </div>
    </section>
  );
}
