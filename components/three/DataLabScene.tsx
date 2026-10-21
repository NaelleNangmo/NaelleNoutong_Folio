"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

interface FlowNode {
  position: [number, number, number];
  color: string;
  scale: number;
}

const nodes: FlowNode[] = [
  { position: [-4, 1.5, 0], color: "#72E6FF", scale: 1 },
  { position: [-2, -0.5, 0.5], color: "#72E6FF", scale: 0.8 },
  { position: [0, 1.2, -0.3], color: "#A78BFA", scale: 1.1 },
  { position: [2, -0.3, 0.4], color: "#A78BFA", scale: 0.9 },
  { position: [4, 1.0, 0], color: "#72E6FF", scale: 1 },
];

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
];

function FlowNodeMesh({ node, index }: { node: FlowNode; index: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = node.position[1] + Math.sin(t * 0.8 + index) * 0.15;
    const pulse = 1 + Math.sin(t * 1.5 + index * 0.5) * 0.1;
    ref.current.scale.setScalar(node.scale * pulse);
  });

  return (
    <mesh ref={ref} position={node.position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color={node.color}
        emissive={node.color}
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

function FlowLines() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const mat = (child as THREE.Mesh).material as THREE.Material & { opacity: number };
      mat.opacity = 0.2 + Math.abs(Math.sin(t * 1.2 + i * 0.8)) * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      {connections.map(([from, to], i) => {
        const points = useMemo(
          () => {
            const start = new THREE.Vector3(...nodes[from].position);
            const end = new THREE.Vector3(...nodes[to].position);
            const mid = start.clone().lerp(end, 0.5);
            mid.z += 0.8;
            const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
            return curve.getPoints(50);
          },
          [from, to]
        );
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <primitive
            key={i}
            object={new THREE.Line(
              geometry,
              new THREE.LineBasicMaterial({
                color: i % 2 === 0 ? "#72E6FF" : "#A78BFA",
                transparent: true,
                opacity: 0.4,
              })
            )}
          />
        );
      })}
    </group>
  );
}

function DataParticles({ count = 300 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.03;
    const posAttr = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const x = posAttr.array[i * 3] as number;
      posAttr.array[i * 3 + 1] += Math.sin(t + x) * 0.002;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#F3F5FF" size={0.02} sizeAttenuation depthWrite={false} opacity={0.3} />
    </Points>
  );
}

export default function DataLabScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#72E6FF" />
      <pointLight position={[-5, -3, 2]} intensity={0.4} color="#A78BFA" />

      {nodes.map((node, i) => (
        <FlowNodeMesh key={i} node={node} index={i} />
      ))}
      <FlowLines />
      <DataParticles count={200} />
    </Canvas>
  );
}
