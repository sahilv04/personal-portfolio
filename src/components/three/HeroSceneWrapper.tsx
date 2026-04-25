'use client';

import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

export function HeroSceneWrapper() {
  return (
    <div className="h-[320px] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-violet-950/20">
      <HeroScene />
      <p className="sr-only">Decorative 3D visualization representing cloud-enabled full-stack engineering.</p>
    </div>
  );
}
