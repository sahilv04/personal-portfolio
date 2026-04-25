import { ReactNode } from 'react';

export function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(10,20,40,0.35)] backdrop-blur ${className}`}
    >
      {children}
    </article>
  );
}
