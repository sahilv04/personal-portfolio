import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { degrees, certifications } from "@/content/education";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, pageSchema } from "@/lib/jsonld";
import CTA from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Education",
  description:
    "Education and certifications — B.Tech in Computer Engineering from Punjabi University, Patiala, plus AWS Certified Cloud Practitioner, Solutions Architect Associate and AI Practitioner, and Microsoft Azure Fundamentals.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Education", href: "/education" }])} />
      <JsonLd data={pageSchema({ type: "CollectionPage", name: "Education and certifications of Sahil Verma", description: "B.Tech in Computer Engineering, AWS and Azure certifications.", path: "/education" })} />
      <Section
        index="07"
        relief="dodeca"
        titleAs="h1"
        eyebrow="Education"
        title="Basic qualification and certifications."
        description="Degrees received and professional certifications that back the engineering work."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {degrees.map((d, i) => (
            <Reveal key={d.institution} delay={i * 0.06}>
              <article className="relative border border-ink/25 bg-paper-card p-7 shadow-offset-sm md:p-9">
                <span className="stamp absolute -top-3 right-6 rotate-[4deg] text-[10px] text-teal">
                  {d.period}
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-ink-faint">{d.location}</p>
                <h3 className="wonk mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">{d.institution}</h3>
                <p className="mt-2 text-lg italic text-ink-soft">{d.degree}</p>
                <ul className="dotted-rule mt-5 grid gap-2.5 pt-5 text-[15px] leading-relaxed text-ink-soft">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span aria-hidden className="mt-[3px] text-vermilion">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {d.url && (
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-ink-soft underline decoration-vermilion decoration-2 underline-offset-4 hover:text-ink"
                  >
                    Visit website ↗
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        index="08"
        eyebrow="Certifications"
        title="Professional certifications."
        description="AWS (Cloud Practitioner, Solutions Architect Associate, AI Practitioner), Microsoft Azure (Fundamentals, AI Fundamentals) and Infosys credentials."
      >
        <div className="grid gap-px overflow-hidden border border-ink/25 bg-ink/25 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={Math.min(i % 2, 1) * 0.05} className="h-full">
              <article className="flex h-full flex-col bg-paper-card p-7 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-vermilion">{c.issuer}</p>
                  <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}.</span>
                </div>
                <h3 className="wonk mt-3 font-display text-xl font-semibold leading-snug text-ink md:text-2xl">{c.name}</h3>
                {c.description && <p className="mt-3 text-[15px] italic leading-relaxed text-ink-soft">{c.description}</p>}
                <div className="mt-auto">
                  {(c.issued || c.expires) && (
                    <p className="dotted-rule mt-5 pt-4 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                      {c.issued && <span>Issued {c.issued}</span>}
                      {c.issued && c.expires && <span className="mx-2">·</span>}
                      {c.expires && <span>Expires {c.expires}</span>}
                    </p>
                  )}
                  {c.credentialId && (
                    <p className="mt-1.5 truncate font-mono text-[10px] text-ink-faint" title={c.credentialId}>
                      ID&nbsp;{c.credentialId}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
