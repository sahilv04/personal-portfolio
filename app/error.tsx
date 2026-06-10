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
    <section className="grid min-h-[75svh] place-items-center px-5">
      <div className="max-w-xl text-center">
        <span className="stamp rotate-[4deg] text-xs text-ochre">Printing error</span>
        <h1 className="wonk mt-8 font-display text-5xl font-bold text-ink md:text-6xl">
          A smudge on the page.
        </h1>
        <p className="mt-4 text-lg italic text-ink-soft">
          An unexpected error occurred. Try again — and if it keeps happening, get in touch.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={reset}>Try again</Button>
          <Button href="/" variant="ghost">
            Go home
          </Button>
        </div>
      </div>
    </section>
  );
}
