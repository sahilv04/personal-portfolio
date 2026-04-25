import Section from "@/components/ui/Section";
import ContactForm from "@/components/sections/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb } from "@/lib/jsonld";
import { personal } from "@/content/personal";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Sahil Verma — Specialist Programmer and Full Stack Engineer. Happy to chat about React, Angular, Node.js, Cloud and Opensource development.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])} />
      <Section
        eyebrow="Contact"
        title="Tell me what you're building."
        description="I'm available on almost every social media — message me and I'll reply within 24 hours. Happy to help with React, Angular, Node.js, Cloud and Opensource development."
      >
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
            <ContactForm />
          </div>
          <aside className="grid content-start gap-4">
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Direct</p>
              <p className="mt-3 text-sm text-ink-dim">Email is the fastest channel.</p>
              <a className="mt-2 block text-base text-ink underline-offset-4 hover:underline" href={personal.socials.email}>
                {personal.email}
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Elsewhere</p>
              <ul className="mt-3 grid gap-2 text-sm">
                <li>
                  <a className="text-ink-dim hover:text-ink" href={personal.socials.github} target="_blank" rel="noreferrer noopener">GitHub →</a>
                </li>
                <li>
                  <a className="text-ink-dim hover:text-ink" href={personal.socials.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn →</a>
                </li>
                <li>
                  <a className="text-ink-dim hover:text-ink" href={personal.socials.twitter} target="_blank" rel="noreferrer noopener">X / Twitter →</a>
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Working with me</p>
              <ul className="mt-3 grid gap-2 text-sm text-ink-dim">
                <li>· React, Angular and Node.js development</li>
                <li>· Cloud (AWS) and Opensource projects</li>
                <li>· Replies within 24 hours, on almost every social platform</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
