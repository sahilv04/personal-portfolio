import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80svh] place-items-center px-4 pt-24">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="relative max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">404</p>
        <h1 className="mt-3 font-display text-5xl text-ink md:text-7xl">Page off the map.</h1>
        <p className="mt-4 text-ink-dim">
          The page you're looking for doesn't exist — or moved while no one was watching.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Link href="/projects" className="self-center text-sm text-ink-dim hover:text-ink">
            See projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
