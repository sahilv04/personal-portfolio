import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sahil Verma. Built with Next.js static generation.</p>
        <div className="flex gap-4">
          <a href={siteConfig.github} aria-label="GitHub" className="hover:text-cyan-300">GitHub</a>
          <a href={siteConfig.linkedin} aria-label="LinkedIn" className="hover:text-cyan-300">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="hover:text-cyan-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
