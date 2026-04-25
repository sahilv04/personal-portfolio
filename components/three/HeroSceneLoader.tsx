"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <Glow />,
});

function Glow() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-72 w-72 animate-pulse-slow rounded-full bg-gradient-to-tr from-accent/40 via-accent-hot/30 to-accent-ice/40 blur-3xl" />
    </div>
  );
}

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(err: unknown) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("HeroScene failed, falling back to glow.", err);
    }
  }
  render() {
    if (this.state.failed) return <Glow />;
    return this.props.children;
  }
}

export default function HeroSceneLoader() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <SceneBoundary>
        <HeroScene />
      </SceneBoundary>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg/30 to-bg" />
    </div>
  );
}
