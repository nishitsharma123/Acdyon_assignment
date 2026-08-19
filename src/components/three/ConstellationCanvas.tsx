'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

function KnowledgeMesh({ isReducedMotion }: { isReducedMotion: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  // Generate node positions for interconnected research constellation
  const [nodes] = useState(() => {
    const temp: [number, number, number][] = [];
    const count = 32;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.1 + (Math.random() - 0.5) * 0.5;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      temp.push([x, y, z]);
    }
    return temp;
  });

  // Filament connections between nearest nodes
  const [lines] = useState(() => {
    const pairs: [ [number, number, number], [number, number, number] ][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dz = nodes[i][2] - nodes[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.6) {
          pairs.push([nodes[i], nodes[j]]);
        }
      }
    }
    return pairs.slice(0, 24); // Limit for lightweight GPU rendering
  });

  useFrame((state, delta) => {
    if (!meshRef.current || isReducedMotion) return;

    // Smooth subtle mouse parallax interpolation
    const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    if (!isTouch) {
      targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, state.pointer.x * 0.35, 0.05);
      targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, -state.pointer.y * 0.25, 0.05);
    }

    // Natural slow auto-rotation
    meshRef.current.rotation.y += delta * 0.12 + (targetRotation.current.y - meshRef.current.rotation.y) * 0.04;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08 + (targetRotation.current.x - meshRef.current.rotation.x) * 0.04;
  });

  return (
    <group ref={meshRef}>
      {/* Central Knowledge Core Mesh */}
      <mesh>
        <icosahedronGeometry args={[1.75, 2]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.16} />
      </mesh>

      {/* Core Inner Sphere */}
      <mesh>
        <sphereGeometry args={[0.65, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.28} />
      </mesh>

      {/* Connecting Filament Lines */}
      {lines.map((pair, idx) => (
        <Line
          key={idx}
          points={pair}
          color="#38bdf8"
          lineWidth={0.8}
          transparent
          opacity={0.25}
        />
      ))}

      {/* Node Spheres */}
      {nodes.map((pos, idx) => (
        <group key={idx} position={pos}>
          <Sphere args={[idx % 4 === 0 ? 0.065 : 0.038, 8, 8]}>
            <meshBasicMaterial
              color={idx % 5 === 0 ? '#10b981' : idx % 3 === 0 ? '#38bdf8' : '#e4e4e7'}
            />
          </Sphere>
        </group>
      ))}
    </group>
  );
}

export function ConstellationCanvas() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // WebGL support check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-zinc-950/40 rounded-2xl border border-white/5 animate-pulse" />;
  }

  // 2D WebGL Fallback
  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-950/60 rounded-2xl border border-white/10 p-8">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
            <span className="text-xs font-mono text-sky-400">Knowledge Core</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-2xl bg-zinc-950/50 border border-white/10 overflow-hidden shadow-2xl group">
      
      {/* Background Radial Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950/30 via-zinc-950/80 to-zinc-950 pointer-events-none" />

      {/* Live Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
        <span>3D Knowledge Constellation</span>
      </div>

      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        {isReducedMotion ? (
          <KnowledgeMesh isReducedMotion={true} />
        ) : (
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
            <KnowledgeMesh isReducedMotion={false} />
          </Float>
        )}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!isReducedMotion}
          autoRotateSpeed={0.7}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Interactive Hint */}
      <div className="absolute bottom-4 right-4 z-10 text-[10px] font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded border border-white/5 pointer-events-none hidden sm:block">
        Parallax Active • Drag to Rotate
      </div>

    </div>
  );
}
