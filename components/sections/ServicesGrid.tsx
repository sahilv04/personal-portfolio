import { services } from "@/content/services";
import Reveal from "@/components/ui/Reveal";

/** The practice's service list — numbered entries in a ruled catalogue. */
export default function ServicesGrid() {
  return (
    <div className="double-rule grid border-b border-ink/20 md:grid-cols-2">
      {services.map((service, i) => (
        <Reveal
          key={service.title}
          delay={Math.min(i % 2, 1) * 0.06}
          className={`border-b border-ink/15 md:[&:nth-last-child(-n+2)]:border-b-0 ${i % 2 === 0 ? "md:border-r md:border-r-ink/15" : ""} last:border-b-0`}
        >
          <article className="group h-full p-7 transition-colors hover:bg-paper-card md:p-9">
            <p className="font-mono text-xs tracking-[0.2em] text-vermilion">
              {String(i + 1).padStart(2, "0")}.
            </p>
            <h3 className="wonk mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
              {service.title}
            </h3>
            <p className="mt-3 max-w-md italic leading-relaxed text-ink-soft">{service.blurb}</p>
            <ul className="mt-5 grid gap-1.5 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="text-vermilion transition-transform duration-200 group-hover:translate-x-1">→</span>
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
