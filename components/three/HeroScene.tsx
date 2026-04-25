"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { Group, Mesh } from "three";

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduce(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduce;
}

function Knot({ reduce }: { reduce: boolean }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current || reduce) return;
    ref.current.rotation.x += dt * 0.18;
    ref.current.rotation.y += dt * 0.24;
  });
  return (
    <Float floatIntensity={1.2} speed={1.4} rotationIntensity={0.4}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.0, 0.32, 220, 32]} />
        <MeshDistortMaterial
          color="#7c5cff"
          emissive="#3a1f8f"
          emissiveIntensity={0.45}
          metalness={0.7}
          roughness={0.18}
          distort={0.32}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

function OrbitingShards({ reduce }: { reduce: boolean }) {
  const group = useRef<Group>(null);
  const shards = useMemo(
    () =>
      new Array(8).fill(0).map((_, i) => ({
        angle: (i / 8) * Math.PI * 2,
        radius: 2.4 + (i % 3) * 0.18,
        size: 0.16 + ((i * 13) % 5) * 0.04,
      })),
    []
  );
  useFrame((_, dt) => {
    if (!group.current || reduce) return;
    group.current.rotation.y += dt * 0.12;
    group.current.rotation.x += dt * 0.04;
  });
  return (
    <group ref={group}>
      {shards.map((s, i) => (
        <Icosahedron
          key={i}
          args={[s.size, 0]}
          position={[Math.cos(s.angle) * s.radius, Math.sin(s.angle) * 0.6, Math.sin(s.angle) * s.radius]}
        >
          <meshStandardMaterial
            color={i % 2 === 0 ? "#5cf2ff" : "#ff5cd6"}
            emissive={i % 2 === 0 ? "#0c4a4f" : "#4a0c3a"}
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.2}
          />
        </Icosahedron>
      ))}
    </group>
  );
}

export default function HeroScene() {
  const reduce = usePrefersReducedMotion();
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} color="#fff" />
      <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#7c5cff" />
      <Stars radius={50} depth={30} count={1400} factor={3} saturation={0} fade speed={0.6} />
      <Knot reduce={reduce} />
      <OrbitingShards reduce={reduce} />
    </Canvas>
  );
}
