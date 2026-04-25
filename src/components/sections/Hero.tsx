import { Button } from '@/components/ui/Button';
import { HeroSceneWrapper } from '@/components/three/HeroSceneWrapper';

export function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-100px)] items-center gap-10 py-14 lg:grid-cols-2" id="top">
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">Premium Portfolio</p>
        <h1 className="text-4xl font-bold leading-tight text-slate-100 md:text-6xl">
          Sahil Verma — Technical Lead and Full Stack Developer
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I build scalable, polished web products end-to-end, from immersive React frontends to reliable Node.js
          backends and cloud deployments.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/work">Explore Work</Button>
          <Button href="/experience" variant="outline">
            View Experience
          </Button>
          <Button href="/contact" variant="outline">
            Contact Me
          </Button>
          <Button href="#" variant="outline">
            Download Resume
          </Button>
        </div>
      </div>
      <div aria-hidden="true">
        <HeroSceneWrapper />
      </div>
    </section>
  );
}
