"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Group } from "three";

export type SculptureVariant = "knot" | "icosa" | "torus" | "octa" | "dodeca";

type SculptureProps = {
  color?: string;
  /** Each page gets its own engraving — same ink, different plate. */
  variant?: SculptureVariant;
  paused?: boolean;
};

const GEOMETRIES: Record<SculptureVariant, React.ReactNode> = {
  knot: <torusKnotGeometry args={[1.05, 0.32, 140, 18, 2, 3]} />,
  icosa: <icosahedronGeometry args={[1.35, 1]} />,
  torus: <torusGeometry args={[1.15, 0.45, 14, 42]} />,
  octa: <octahedronGeometry args={[1.45, 1]} />,
  dodeca: <dodecahedronGeometry args={[1.35, 0]} />,
};

function Mesh({ color = "#211D14", variant = "knot", paused = false }: SculptureProps) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current || paused) return;
    // Slow drift plus a whisper of pointer parallax — engraving, not screensaver.
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += delta * 0.04;
    const { x, y } = state.pointer;
    group.current.position.x += (x * 0.18 - group.current.position.x) * 0.04;
    group.current.position.y += (y * 0.14 - group.current.position.y) * 0.04;
  });

  return (
    <group ref={group} rotation={[0.4, 0.6, 0]}>
      <mesh>
        {GEOMETRIES[variant]}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.32} />
      </mesh>
    </group>
  );
}

export default function InkSculpture({ color, variant, className }: SculptureProps & { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 4], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        frameloop={reduce ? "demand" : "always"}
      >
        <Mesh color={color} variant={variant} paused={!!reduce} />
      </Canvas>
    </div>
  );
}
