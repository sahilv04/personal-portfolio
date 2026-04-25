import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { degrees, certifications } from "@/content/education";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, pageSchema } from "@/lib/jsonld";
import CTA from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Education",
  description:
    "Education and certifications — B.Tech in Computer Engineering from Punjabi University, Patiala, plus AWS Certified Cloud Practitioner and Corda Certified Developer (R3).",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Education", href: "/education" }])} />
      <JsonLd data={pageSchema({ type: "CollectionPage", name: "Education and certifications of Sahil Verma", description: "B.Tech in Computer Engineering, AWS, Azure and R3 Corda certifications.", path: "/education" })} />
      <Section
        eyebrow="Education"
        title="Basic qualification and certifications."
        description="Degrees received and professional certifications that back the engineering work."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {degrees.map((d, i) => (
            <Reveal key={d.institution} delay={i * 0.06}>
              <article className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">{d.period}</p>
                <h3 className="mt-3 font-display text-xl text-ink md:text-2xl">{d.institution}</h3>
                <p className="mt-1 text-sm text-ink-dim">{d.degree}</p>
                <p className="text-xs text-ink-muted">{d.location}</p>
                <ul className="mt-5 grid gap-2 text-sm text-ink-dim">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {d.url && (
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 inline-flex text-sm text-ink-dim underline-offset-4 hover:text-ink hover:underline"
                  >
                    Visit website →
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Certifications"
        title="Professional certifications."
        description="AWS (Cloud Practitioner, Solutions Architect Associate, AI Practitioner), Microsoft Azure (Fundamentals, AI Fundamentals), R3 Corda and Infosys credentials."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04}>
              <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">{c.issuer}</p>
                <h3 className="mt-3 font-display text-xl text-ink md:text-2xl">{c.name}</h3>
                {c.description && <p className="mt-3 text-sm text-ink-dim">{c.description}</p>}
                {(c.issued || c.expires) && (
                  <p className="mt-4 text-xs text-ink-muted">
                    {c.issued && <span>Issued {c.issued}</span>}
                    {c.issued && c.expires && <span className="mx-2 text-ink-muted/60">·</span>}
                    {c.expires && <span>Expires {c.expires}</span>}
                  </p>
                )}
                {c.credentialId && (
                  <p
                    className="mt-2 truncate font-mono text-[11px] text-ink-muted"
                    title={c.credentialId}
                  >
                    ID&nbsp;{c.credentialId}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
