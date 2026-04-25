'use client';

import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[360px] w-full items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 text-slate-300">
      Loading immersive visual…
    </div>
  )
});

export function HeroSceneWrapper() {
  return (
    <>
      <HeroScene />
      <p className="mt-3 text-xs text-slate-400">Decorative visual: network-inspired 3D core object.</p>
    </>
  );
}
