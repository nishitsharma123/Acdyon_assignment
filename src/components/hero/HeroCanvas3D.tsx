'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function KnowledgeMesh() {
  const meshRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate node positions for constellation effect
  const [nodes] = useState(() => {
    const temp: [number, number, number][] = [];
    const count = 38;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.2 + (Math.random() - 0.5) * 0.6;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      temp.push([x, y, z]);
    }
    return temp;
  });

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Wireframe Core */}
      <mesh>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Outer Constellation Points */}
      {nodes.map((pos, idx) => (
        <group key={idx} position={pos}>
          <Sphere args={[idx % 4 === 0 ? 0.07 : 0.04, 8, 8]}>
            <meshBasicMaterial
              color={idx % 5 === 0 ? '#10b981' : idx % 3 === 0 ? '#38bdf8' : '#e4e4e7'}
            />
          </Sphere>
        </group>
      ))}
    </group>
  );
}

export function HeroCanvas3D() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    // WebGL check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-zinc-950/40 rounded-2xl border border-white/5 animate-pulse" />;
  }

  if (!hasWebGL) {
    // 2D SVG Fallback
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-950/60 rounded-2xl border border-white/10 p-8">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-sky-500/20 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-4 rounded-full border border-dashed border-emerald-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="w-24 h-24 rounded-full bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
            <span className="text-xs font-mono text-sky-400">Knowledge Core</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-2xl bg-zinc-950/50 border border-white/10 overflow-hidden shadow-2xl group">
      
      {/* Background radial glow */}
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
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
          <KnowledgeMesh />
        </Float>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Canvas Interaction Hint */}
      <div className="absolute bottom-4 right-4 z-10 text-[10px] font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded border border-white/5 pointer-events-none">
        Interactive • Drag to Rotate
      </div>
    </div>
  );
}
