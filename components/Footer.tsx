import Link from "next/link";
import { personal } from "@/content/personal";
import TrackedLink from "@/components/analytics/TrackedLink";

const INDEX = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "What I Do" },
  { href: "/education", label: "Education" },
  { href: "/articles", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: personal.socials.github, label: "GitHub", event: "social_github" },
  { href: personal.socials.linkedin, label: "LinkedIn", event: "social_linkedin" },
  { href: personal.socials.twitter, label: "X / Twitter", event: "social_twitter" },
  { href: personal.socials.blog, label: "Medium", event: "social_medium" },
  { href: personal.socials.instagram, label: "Instagram", event: "social_instagram" },
];

export default function Footer() {
  return (
    <footer className="double-rule mt-0 bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="wonk font-display text-4xl font-bold leading-none text-ink md:text-5xl">
              Sahil&nbsp;Verma<span className="text-vermilion">.</span>
            </p>
            <p className="mt-4 max-w-sm italic leading-relaxed text-ink-soft">
              {personal.short}
            </p>
            <TrackedLink
              href={personal.socials.email}
              event="contact_click"
              eventParams={{ method: "email", location: "footer" }}
              className="mt-6 inline-block font-mono text-sm text-ink underline decoration-vermilion decoration-2 underline-offset-4 hover:text-vermilion"
            >
              {personal.email}
            </TrackedLink>
          </div>

          <nav aria-label="Footer index">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">Index</p>
            <ul className="mt-4 grid gap-2.5">
              {INDEX.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-2 text-sm text-ink-soft hover:text-ink"
                  >
                    <span className="font-mono text-[10px] text-ink-faint group-hover:text-vermilion">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">Elsewhere</p>
            <ul className="mt-4 grid gap-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <TrackedLink
                    href={s.href}
                    event={s.event}
                    eventParams={{ location: "footer" }}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-ink-soft hover:text-ink"
                  >
                    {s.label} ↗
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dotted-rule mt-14 pt-6">
          <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} {personal.name} · {personal.location}</p>
            <p>Set in Fraunces &amp; IBM Plex Mono · Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
