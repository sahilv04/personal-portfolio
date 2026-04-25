import { services } from "@/content/services";
import Reveal from "@/components/ui/Reveal";

export default function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.06}>
          <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-white/20">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent/40 via-accent-hot/30 to-accent-ice/40 text-sm font-semibold text-white">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-lg text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">{s.blurb}</p>
            <ul className="mt-4 grid gap-1.5 text-sm text-ink-dim">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
