'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function CoreObject() {
  const meshRef = useRef<Mesh>(null);
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[1.35, 1]}>
        <meshStandardMaterial color="#7dd3fc" emissive="#8b5cf6" emissiveIntensity={0.5} wireframe />
      </Icosahedron>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 2]} intensity={1.2} />
        <Stars radius={30} depth={12} count={1200} factor={2} fade speed={0.3} />
        <CoreObject />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
