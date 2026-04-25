"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { Group, Mesh, Vector3 } from "three";

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

// Convert lat/lon (degrees) to a unit-sphere position.
function latLonToVec3(lat: number, lon: number, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const markers = [
  { name: "London", lat: 51.5074, lon: -0.1278, hot: true },
  { name: "Mohali", lat: 30.7046, lon: 76.7179, hot: true },
  { name: "Patiala", lat: 30.3398, lon: 76.3869, hot: false },
  { name: "New York", lat: 40.7128, lon: -74.006, hot: false },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503, hot: false },
  { name: "Singapore", lat: 1.3521, lon: 103.8198, hot: false },
  { name: "Sydney", lat: -33.8688, lon: 151.2093, hot: false },
  { name: "São Paulo", lat: -23.5505, lon: -46.6333, hot: false },
];

function Marker({ position, hot }: { position: Vector3; hot: boolean }) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const pulse = hot ? 1 + Math.sin(t * 2.4) * 0.25 : 1;
    ref.current.scale.setScalar(pulse);
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.022, 16, 16]} />
      <meshBasicMaterial color={hot ? "#ff5cd6" : "#5cf2ff"} toneMapped={false} />
    </mesh>
  );
}

function Globe({ reduce }: { reduce: boolean }) {
  const group = useRef<Group>(null);
  const positions = useMemo(
    () => markers.map((m) => ({ ...m, vec: latLonToVec3(m.lat, m.lon, 1.6) })),
    []
  );

  useFrame((_, dt) => {
    if (!group.current || reduce) return;
    group.current.rotation.y += dt * 0.12;
  });

  return (
    <group ref={group} rotation={[0.35, 0, 0]}>
      {/* Solid inner core for depth */}
      <mesh>
        <sphereGeometry args={[1.58, 64, 64]} />
        <meshStandardMaterial
          color="#0a0a1f"
          emissive="#1a0f4a"
          emissiveIntensity={0.4}
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>

      {/* Wireframe outer shell */}
      <mesh>
        <icosahedronGeometry args={[1.6, 4]} />
        <meshBasicMaterial
          color="#7c5cff"
          wireframe
          transparent
          opacity={0.35}
          toneMapped={false}
        />
      </mesh>

      {/* Subtle outer glow ring */}
      <mesh>
        <sphereGeometry args={[1.66, 48, 48]} />
        <meshBasicMaterial color="#5cf2ff" transparent opacity={0.05} />
      </mesh>

      {/* City markers */}
      {positions.map((m) => (
        <Marker key={m.name} position={m.vec} hot={m.hot} />
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
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 4]} intensity={1.0} color="#fff" />
      <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#7c5cff" />
      <Float floatIntensity={0.4} speed={0.8} rotationIntensity={0.1}>
        <Globe reduce={reduce} />
      </Float>
    </Canvas>
  );
}
