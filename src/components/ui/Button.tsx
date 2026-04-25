import Link from 'next/link';
import { ReactNode } from 'react';


export function Button({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'outline' }) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300';
  const style =
    variant === 'primary'
      ? 'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:opacity-90'
      : 'border border-cyan-300/60 text-cyan-200 hover:bg-cyan-400/10';

  return (
    <Link href={href} className={`${base} ${style}`}>
      {children}
    </Link>
  );
}
