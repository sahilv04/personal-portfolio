import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section className="!py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-10 md:p-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent-ice/20 blur-3xl" aria-hidden />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Let's build</p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
              Have a product, idea or engineering challenge to solve?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-ink-dim md:text-lg">
              Happy to help with React, Angular, Node.js, Cloud and Opensource development. Message me on any platform — I reply within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href="/contact">Start a conversation →</Button>
            <Button href="/projects" variant="outline">See projects</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
