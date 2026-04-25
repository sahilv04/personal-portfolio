"use client";

import { useEffect, useRef } from "react";

const TRAIL_COUNT = 14;
const FOLLOW = 0.18;

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip on touch / coarse pointers and on reduced-motion preference.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const target = { x: w / 2, y: h / 2 };
    const trail = Array.from({ length: TRAIL_COUNT }, () => ({ x: w / 2, y: h / 2 }));
    let visible = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      visible = true;
    };
    const onLeave = () => {
      visible = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      // Update trail — each node lerps toward the previous one.
      let prev = target;
      for (const node of trail) {
        node.x += (prev.x - node.x) * FOLLOW;
        node.y += (prev.y - node.y) * FOLLOW;
        prev = node;
      }

      ctx.clearRect(0, 0, w, h);

      if (visible) {
        for (let i = 0; i < trail.length; i++) {
          const node = trail[i];
          const t = 1 - i / trail.length;
          const radius = 1.2 + t * 4.5;
          const alpha = 0.55 * t;

          const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 4);
          grad.addColorStop(0, `rgba(124, 92, 255, ${alpha})`);
          grad.addColorStop(0.5, `rgba(92, 242, 255, ${alpha * 0.45})`);
          grad.addColorStop(1, "rgba(124, 92, 255, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen"
    />
  );
}
