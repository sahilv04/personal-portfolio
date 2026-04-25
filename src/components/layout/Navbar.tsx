import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const links = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/work', label: 'Work' },
  { href: '/skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <Link href="/" className="text-lg font-bold text-cyan-200">
          {siteConfig.brand}
        </Link>
        <ul className="flex flex-wrap items-center gap-2 text-sm md:gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded px-2 py-1 text-slate-200 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
