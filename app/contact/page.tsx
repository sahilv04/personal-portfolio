import Section from "@/components/ui/Section";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import Reveal from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, pageSchema, faqPageSchema } from "@/lib/jsonld";
import { contactFaqs } from "@/content/faq";
import { personal } from "@/content/personal";
import TrackedLink from "@/components/analytics/TrackedLink";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Sahil Verma — Technical Lead and Full Stack Engineer. Happy to talk React, Angular, Node.js, Cloud and Opensource engineering.",
  path: "/contact",
});

const ELSEWHERE = [
  { href: personal.socials.github, label: "GitHub", event: "social_github" },
  { href: personal.socials.linkedin, label: "LinkedIn", event: "social_linkedin" },
  { href: personal.socials.twitter, label: "X / Twitter", event: "social_twitter" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])} />
      <JsonLd data={pageSchema({ type: "ContactPage", name: `Contact ${personal.name}`, description: "Get in touch with Sahil Verma — Technical Lead and Full Stack Engineer.", path: "/contact" })} />
      <JsonLd data={faqPageSchema(contactFaqs)} />
      <Section
        index="06"
        relief="dodeca"
        titleAs="h1"
        eyebrow="Correspondence"
        title="Let's connect."
        description={personal.availability}
      >
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="relative border border-ink/30 bg-paper-card p-7 shadow-offset md:p-10">
              <span aria-hidden className="tape -top-3 left-10 rotate-[-3deg]" />
              <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
                Form 24-A — Letter to the engineer
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <div className="grid content-start gap-6">
            <Reveal delay={0.08}>
              <div className="border border-ink/25 bg-paper-card p-6 shadow-offset-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-vermilion">Direct</p>
                <p className="mt-3 text-sm italic text-ink-soft">Email is the fastest channel.</p>
                <TrackedLink
                  href={personal.socials.email}
                  event="contact_click"
                  eventParams={{ method: "email", location: "contact_aside" }}
                  className="mt-2 block font-mono text-sm text-ink underline decoration-vermilion decoration-2 underline-offset-4 hover:text-vermilion"
                >
                  {personal.email}
                </TrackedLink>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="border border-ink/25 bg-paper-card p-6 shadow-offset-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cobalt">Elsewhere</p>
                <ul className="mt-3 grid gap-2.5 text-sm">
                  {ELSEWHERE.map((s) => (
                    <li key={s.label}>
                      <TrackedLink
                        href={s.href}
                        event={s.event}
                        eventParams={{ location: "contact_aside" }}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-ink-soft hover:text-ink"
                      >
                        {s.label} ↗
                      </TrackedLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border border-ink/25 bg-paper-card p-6 shadow-offset-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal">What I work on</p>
                <ul className="mt-3 grid gap-2 text-sm text-ink-soft">
                  {[
                    "React, Angular and Node.js development",
                    "Cloud (AWS) and Opensource engineering",
                    "Technical leadership for ~5-engineer teams",
                  ].map((w) => (
                    <li key={w} className="flex gap-2.5">
                      <span aria-hidden className="text-vermilion">▸</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
      <Section index="06.b" eyebrow="FAQ" title="Quick questions before reaching out.">
        <FAQ items={contactFaqs} />
      </Section>
    </>
  );
}
