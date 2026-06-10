import Link from "next/link";
import Button from "@/components/ui/Button";
import InkSculpture from "@/components/three/InkSculptureLoader";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[75svh] place-items-center overflow-hidden px-5">
      <div
        aria-hidden
        className="halftone absolute inset-0 opacity-15 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <InkSculpture
        variant="icosa"
        color="#211D14"
        className="absolute inset-0 opacity-25"
      />
      <div className="relative max-w-xl text-center">
        <span className="stamp rotate-[-6deg] text-xs text-vermilion">Lost in the archive</span>
        <h1 className="wonk mt-8 font-display text-7xl font-black text-ink md:text-9xl">404</h1>
        <p className="mt-4 text-lg italic text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist — or moved while no one was watching.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Back home</Button>
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft underline decoration-vermilion decoration-2 underline-offset-4 hover:text-ink"
          >
            See projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
