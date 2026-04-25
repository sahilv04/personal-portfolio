import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-100">Sahil Verma</h2>
          <p className="mt-2 max-w-lg text-sm text-slate-300">
            Technical Lead · Full Stack Developer · Cloud & Frontend Specialist.
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-slate-300">Connect</p>
          <div className="mt-2 flex gap-4 md:justify-end">
            <Link href={siteConfig.github} aria-label="GitHub profile" className="text-cyan-300 hover:text-cyan-200">
              GitHub
            </Link>
            <Link href={siteConfig.linkedin} aria-label="LinkedIn profile" className="text-cyan-300 hover:text-cyan-200">
              LinkedIn
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
