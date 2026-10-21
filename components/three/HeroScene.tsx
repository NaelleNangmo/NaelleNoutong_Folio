"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, Torus, Points, PointMaterial, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function CrystalCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <Icosahedron ref={meshRef} args={[1.4, 1]}>
        <MeshDistortMaterial
          color="#72E6FF"
          emissive="#0a1929"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.9}
          distort={0.25}
          speed={1.5}
          wireframe={false}
          flatShading
        />
      </Icosahedron>
      <Icosahedron args={[1.45, 1]}>
        <meshBasicMaterial color="#72E6FF" wireframe transparent opacity={0.15} />
      </Icosahedron>
    </Float>
  );
}

function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.05;
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = t * (0.1 + i * 0.03);
      child.rotation.y = t * (0.08 + i * 0.02);
    });
  });

  const rings = [
    { radius: 2.2, tube: 0.012, color: "#72E6FF", opacity: 0.5 },
    { radius: 2.8, tube: 0.01, color: "#A78BFA", opacity: 0.4 },
    { radius: 3.4, tube: 0.008, color: "#72E6FF", opacity: 0.25 },
  ];

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <Torus
          key={i}
          args={[ring.radius, ring.tube, 16, 100]}
          rotation={[Math.PI / 2 + i * 0.4, i * 0.3, 0]}
        >
          <meshBasicMaterial color={ring.color} transparent opacity={ring.opacity} />
        </Torus>
      ))}
    </group>
  );
}

function OrbitalNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const angle = t * (0.3 + i * 0.1) + i * (Math.PI * 2 / 5);
      const radius = 2.2 + i * 0.3;
      child.position.x = Math.cos(angle) * radius;
      child.position.y = Math.sin(angle) * radius * 0.6;
      child.position.z = Math.sin(angle * 0.5) * 1.5;
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#72E6FF" : "#A78BFA"} />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField({ count = 800 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = t * 0.01;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#72E6FF"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function MouseInteraction() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 1.0 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#72E6FF" />
      <pointLight position={[-5, -3, 2]} intensity={0.5} color="#A78BFA" />
      <pointLight position={[0, 0, 3]} intensity={0.3} color="#F3F5FF" />

      <CrystalCore />
      <OrbitalRings />
      <OrbitalNodes />
      <ParticleField count={600} />
      <MouseInteraction />
    </Canvas>
  );
}
