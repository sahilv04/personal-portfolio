import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function GlassCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur',
        className,
      )}
    >
      {children}
    </article>
  );
}
