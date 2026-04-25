import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { personal } from "@/content/personal";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb } from "@/lib/jsonld";
import CTA from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About Sahil Verma — Specialist Programmer at Infosys (London) and Full Stack Engineer specialising in React, Angular, Node.js, Cloud and Opensource development.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
      <Section
        eyebrow="About Sahil Verma"
        title="A passionate full stack engineer building end-to-end products."
        description={personal.summary}
      >
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <article className="prose prose-invert max-w-none text-ink-dim">
              <p>
                I'm <strong className="text-ink">{personal.name}</strong>, a {personal.role.toLowerCase()} based in {personal.location}.
                I love engineering — the problem-solving, the craft, and the long arc of building products that real people rely on.
              </p>
              <p>
                Today I work at <strong className="text-ink">Infosys</strong> as a Specialist Programmer, leading a team of around five engineers
                building and maintaining enterprise-level, highly responsive applications. The work moves between architecture, hands-on coding,
                code review, and the everyday rhythm of a healthy scrum cadence.
              </p>
              <p>
                Before Infosys I was a <strong className="text-ink">Technical Lead at Webmob Software Solutions</strong> in Mohali, where I led a similar
                team across enterprise apps in the financial domain — and where I learned how much engineering culture is shaped at the hiring table.
                Earlier I worked at <strong className="text-ink">OATI</strong> on the core Deal Entry product team, shipping enterprise software for
                clients in the power sector.
              </p>
              <p>
                I'm an <strong className="text-ink">AWS Certified Cloud Practitioner</strong> and a <strong className="text-ink">Corda Certified Developer (R3)</strong>,
                and I lean into both ends of the stack: React and Angular on the frontend, Node.js on the backend, plus cloud and opensource work.
              </p>
              <p>
                Outside of work I write — long-form essays focused on fundamental empowerment, lessons that try to shift how a reader thinks at the core,
                not just at the surface. If something here resonates, get in touch — I reply within 24 hours.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Snapshot</p>
              <dl className="mt-4 grid gap-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Role</dt>
                  <dd className="text-right text-ink">{personal.role}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Company</dt>
                  <dd className="text-right text-ink">Infosys</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Location</dt>
                  <dd className="text-right text-ink">{personal.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Email</dt>
                  <dd className="text-right text-ink">
                    <a className="hover:underline" href={personal.socials.email}>{personal.email}</a>
                  </dd>
                </div>
              </dl>
              <div className="divider my-6" />
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Focus areas</p>
              <ul className="mt-3 grid gap-2 text-sm text-ink-dim">
                <li>React & Angular frontend development</li>
                <li>Node.js services & REST APIs</li>
                <li>Cloud engineering on AWS</li>
                <li>Corda / R3 distributed ledger work</li>
                <li>Opensource development</li>
                <li>Technical leadership & scrum delivery</li>
              </ul>
              <div className="divider my-6" />
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Certifications</p>
              <ul className="mt-3 grid gap-2 text-sm text-ink-dim">
                <li>AWS Certified Cloud Practitioner</li>
                <li>Corda Certified Developer (R3)</li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </Section>
      <CTA />
    </>
  );
}
