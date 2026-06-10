import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";
import { personal } from "@/content/personal";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, pageSchema } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About Sahil Verma — Technical Lead at Webmob Software Solutions and Full Stack Engineer (ex-Infosys, London) specialising in React, Angular, Node.js, Cloud and Opensource development.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
      <JsonLd data={pageSchema({ type: "ProfilePage", name: `About ${personal.name}`, description: personal.summary, path: "/about" })} />
      <Section
        index="01"
        relief="torus"
        titleAs="h1"
        eyebrow="About Sahil Verma"
        title="A passionate full stack engineer building end-to-end products."
        description={personal.summary}
      >
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <article className="dropcap max-w-none space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                I&apos;m <strong className="text-ink">{personal.name}</strong>, a {personal.role.toLowerCase()} based in {personal.location}.
                I love engineering — the problem-solving, the craft, and the long arc of building products that real people rely on.
              </p>
              <p>
                Today I&apos;m back at <strong className="text-ink">Webmob Software Solutions</strong> as a Technical Lead, owning frontend architecture,
                code review and delivery for enterprise-grade product engagements. The work moves between hands-on coding, sprint cadence,
                client conversations and the everyday discipline that keeps a team shipping.
              </p>
              <p>
                Before this I spent a few years at <strong className="text-ink">Infosys</strong> as a Specialist Programmer, leading a team of
                around five engineers — including a multi-year on-site engagement in London delivering for UK clients. Same time zone,
                same room when it mattered. Before that, my first stint at Webmob (2019–2021) was where I learned how much engineering
                culture is shaped at the hiring table. And earlier, <strong className="text-ink">OATI</strong> — where I worked on the core
                Deal Entry product team, shipping enterprise software for the power sector.
              </p>
              <p>
                I&apos;m an <strong className="text-ink">AWS Certified Cloud Practitioner</strong>, <strong className="text-ink">Solutions Architect Associate</strong> and{" "}
                <strong className="text-ink">AI Practitioner</strong>, and I lean into both ends of the stack: React and Angular on the frontend,
                Node.js on the backend, plus cloud and opensource work.
              </p>
              <p className="italic">
                Outside of work I write — long-form essays focused on fundamental empowerment, lessons that try to shift how a reader thinks at the core,
                not just at the surface. If something here resonates, get in touch — I reply within 24 hours.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="relative border border-ink/30 bg-paper-card p-6 shadow-offset md:p-7">
              <span aria-hidden className="tape -top-3 left-8 rotate-[-4deg]" />
              <figure className="rotate-[1.4deg] border border-ink/25 bg-paper p-2.5 pb-3">
                <Image
                  src="/sahil-verma.webp"
                  alt={`${personal.name} — ${personal.role}, based in ${personal.location}`}
                  width={897}
                  height={1200}
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="h-auto w-full border border-ink/15 object-cover grayscale-[30%]"
                />
                <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                  fig. 02 — subject, in the wild
                </figcaption>
              </figure>

              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">Snapshot</p>
              <dl className="dotted-rule mt-3 grid gap-2.5 pt-4 text-sm">
                {[
                  ["Role", personal.role],
                  ["Company", "Webmob Software Solutions"],
                  ["Based in", personal.location],
                ].map(([dt, dd]) => (
                  <div key={dt} className="flex justify-between gap-4">
                    <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">{dt}</dt>
                    <dd className="text-right text-ink">{dd}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4">
                  <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Email</dt>
                  <dd className="text-right">
                    <a className="text-ink underline decoration-vermilion decoration-2 underline-offset-4 hover:text-vermilion" href={personal.socials.email}>
                      {personal.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">Focus areas</p>
              <ul className="dotted-rule mt-3 grid gap-2 pt-4 text-sm text-ink-soft">
                {[
                  "React & Angular frontend development",
                  "Node.js services & REST APIs",
                  "Cloud engineering on AWS",
                  "Opensource development",
                  "Technical leadership & scrum delivery",
                ].map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span aria-hidden className="text-vermilion">▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">Certifications</p>
              <ul className="dotted-rule mt-3 grid gap-2 pt-4 text-sm text-ink-soft">
                <li>AWS Certified Cloud Practitioner</li>
                <li>AWS Solutions Architect — Associate</li>
                <li>AWS Certified AI Practitioner</li>
              </ul>
              <span className="stamp absolute -bottom-4 right-6 rotate-[5deg] text-[10px] text-cobalt">
                Verified
              </span>
            </aside>
          </Reveal>
        </div>
      </Section>
      <CTA />
    </>
  );
}
