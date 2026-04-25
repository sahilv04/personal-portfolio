import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const links = [
  ['About', '/about'],
  ['Experience', '/experience'],
  ['Work', '/work'],
  ['Skills', '/skills'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4" aria-label="Main Navigation">
        <Link href="/" className="text-lg font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          {siteConfig.brandLabel}
        </Link>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="rounded px-2 py-1 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
