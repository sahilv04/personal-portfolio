import { Button } from '@/components/ui/Button';
import { HeroSceneWrapper } from '@/components/three/HeroSceneWrapper';

export function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 lg:grid-cols-2" id="top">
      <div>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
          Sahil Verma — Technical Lead and Full Stack Developer
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I build scalable, polished web products end-to-end, from immersive React frontends to reliable Node.js backends and cloud deployments.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/work">Explore Work</Button>
          <Button href="/experience">View Experience</Button>
          <Button href="/contact">Contact Me</Button>
          <Button href="#" className="border-violet-300/40 bg-violet-400/10 text-violet-200">Download Resume</Button>
        </div>
      </div>
      <HeroSceneWrapper />
    </section>
  );
}
