"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// パーティクルシステム
function Particles({ count = 5000 }) {
  const points = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorPalette = [
      { r: 0, g: 0.96, b: 1 }, // Cyan
      { r: 1, g: 0, b: 1 }, // Magenta
      { r: 1, g: 1, b: 0 }, // Yellow
      { r: 0.5, g: 0, b: 1 }, // Purple
    ];

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    return [positions, colors];
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX - window.innerWidth / 2) * 0.001,
        y: (event.clientY - window.innerHeight / 2) * 0.001,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!points.current) return;
    points.current.rotation.x += 0.0005 + mousePosition.current.y * 0.01;
    points.current.rotation.y += 0.0005 + mousePosition.current.x * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// 幾何学オブジェクト
interface FloatingShapeProps {
  geometry: THREE.BufferGeometry;
  color: string;
  position: [number, number, number];
  rotationSpeed: { x: number; y: number; z: number };
}

function FloatingShape({ geometry, color, position, rotationSpeed }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = useRef(position[1]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += rotationSpeed.x;
    meshRef.current.rotation.y += rotationSpeed.y;
    meshRef.current.rotation.z += rotationSpeed.z;
    meshRef.current.position.y =
      initialY.current + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function Shapes() {
  const shapes = useMemo(
    () => [
      {
        geometry: new THREE.TorusGeometry(10, 3, 16, 100),
        color: "#00f5ff",
        position: [-30, 10, -30] as [number, number, number],
        rotationSpeed: { x: 0.005, y: 0.01, z: 0 },
      },
      {
        geometry: new THREE.OctahedronGeometry(8),
        color: "#ff00ff",
        position: [35, -15, -20] as [number, number, number],
        rotationSpeed: { x: 0.01, y: 0.005, z: 0.005 },
      },
      {
        geometry: new THREE.IcosahedronGeometry(6),
        color: "#ffff00",
        position: [-25, -20, -40] as [number, number, number],
        rotationSpeed: { x: 0.008, y: 0.008, z: 0 },
      },
      {
        geometry: new THREE.DodecahedronGeometry(5),
        color: "#00ff88",
        position: [20, 25, -35] as [number, number, number],
        rotationSpeed: { x: 0.006, y: 0.006, z: 0.006 },
      },
    ],
    []
  );

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  );
}

// スクロール連動カメラ
function ScrollCamera() {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    camera.position.z = 30 + scrollY * 0.01;
    camera.position.x = scrollY * -0.002;
    camera.rotation.y = scrollY * -0.0002;
  });

  return null;
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <Particles />
        <Shapes />
        <ScrollCamera />
      </Canvas>
    </div>
  );
}
