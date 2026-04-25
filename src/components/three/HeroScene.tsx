'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }} aria-label="Decorative 3D cloud-network visual">
      <ambientLight intensity={1.2} />
      <pointLight position={[5, 5, 5]} color="#22d3ee" intensity={25} />
      <Float speed={1.3} rotationIntensity={1.2} floatIntensity={1.5}>
        <Icosahedron args={[1, 1]}>
          <MeshDistortMaterial color="#8b5cf6" distort={0.4} speed={1.5} roughness={0.2} />
        </Icosahedron>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
