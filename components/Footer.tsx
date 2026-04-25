import Link from "next/link";
import { personal } from "@/content/personal";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-ink">{personal.name}</p>
            <p className="mt-2 max-w-xs text-sm text-ink-dim">{personal.role}.</p>
            <p className="mt-1 max-w-xs text-sm text-ink-muted">{personal.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Explore</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li><Link className="text-ink-dim hover:text-ink" href="/about">About</Link></li>
              <li><Link className="text-ink-dim hover:text-ink" href="/experience">Experience</Link></li>
              <li><Link className="text-ink-dim hover:text-ink" href="/education">Education</Link></li>
              <li><Link className="text-ink-dim hover:text-ink" href="/projects">Projects</Link></li>
              <li><Link className="text-ink-dim hover:text-ink" href="/skills">Skills</Link></li>
              <li><Link className="text-ink-dim hover:text-ink" href="/services">Services</Link></li>
              <li><Link className="text-ink-dim hover:text-ink" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Elsewhere</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>
                <a className="text-ink-dim hover:text-ink" href={personal.socials.github} target="_blank" rel="noreferrer noopener">GitHub</a>
              </li>
              <li>
                <a className="text-ink-dim hover:text-ink" href={personal.socials.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
              </li>
              <li>
                <a className="text-ink-dim hover:text-ink" href={personal.socials.twitter} target="_blank" rel="noreferrer noopener">X / Twitter</a>
              </li>
              <li>
                <a className="text-ink-dim hover:text-ink" href={personal.socials.email}>{personal.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-6 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} {personal.name}.</p>
        </div>
      </div>
    </footer>
  );
}
