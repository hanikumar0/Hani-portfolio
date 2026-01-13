import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const DesktopTerminal = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.y = Math.sin(t / 4) / 8;
        meshRef.current.rotation.x = Math.cos(t / 4) / 8;
    });

    return (
        <group ref={meshRef}>
            {/* Table Surface */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[4, 0.1, 2]} />
                <meshStandardMaterial color="#2d2a44" roughness={0.1} metalness={0.8} />
            </mesh>

            {/* Monitor Stand */}
            <mesh position={[0, -0.2, -0.5]}>
                <boxGeometry args={[0.3, 0.6, 0.1]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Monitor Screen */}
            <mesh position={[0, 0.5, -0.5]}>
                <boxGeometry args={[2.5, 1.4, 0.1]} />
                <meshStandardMaterial color="#000000" />
                {/* Border */}
                <mesh position={[0, 0, 0.06]}>
                    <boxGeometry args={[2.3, 1.2, 0.01]} />
                    <meshStandardMaterial color="#7d2ae8" emissive="#7d2ae8" emissiveIntensity={0.5} />
                </mesh>
            </mesh>

            {/* Stylized Laptop (Open) */}
            <group position={[1.2, -0.4, 0.2]} rotation={[0, -0.4, 0]}>
                <mesh>
                    <boxGeometry args={[1, 0.05, 0.7]} />
                    <meshStandardMaterial color="#1f1f1f" />
                </mesh>
                <mesh position={[0, 0.35, -0.35]} rotation={[-Math.PI / 3, 0, 0]}>
                    <boxGeometry args={[1, 0.05, 0.7]} />
                    <meshStandardMaterial color="#1a1a1a" />
                    <mesh position={[0, 0, 0.03]}>
                        <boxGeometry args={[0.9, 0.6, 0.01]} />
                        <meshStandardMaterial color="#00c4cc" emissive="#00c4cc" emissiveIntensity={0.2} />
                    </mesh>
                </mesh>
            </group>

            {/* Floating Abstract Shapes for "Tech" feel */}
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[-1.5, 0.8, 0.5]}>
                    <octahedronGeometry args={[0.2]} />
                    <meshStandardMaterial color="#ff66c4" emissive="#ff66c4" emissiveIntensity={0.5} />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[1.8, 0.5, -0.8]}>
                    <torusGeometry args={[0.15, 0.05, 16, 32]} />
                    <meshStandardMaterial color="#7d2ae8" />
                </mesh>
            </Float>

            <mesh position={[-0.8, -0.2, 0.3]} rotation={[0, 0.3, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
                <meshStandardMaterial color="#ffffff" roughness={0.1} />
            </mesh>
        </group>
    );
};

export const Desk3D = () => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 40 }}>
                <PerspectiveCamera makeDefault position={[0, 1, 6]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} color="#7d2ae8" intensity={1} />
                <pointLight position={[5, 5, 5]} color="#00c4cc" intensity={0.5} />

                <DesktopTerminal />

                <ContactShadows
                    position={[0, -0.8, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2.4}
                    far={0.8}
                />

                {/* Subtle motion background */}
                <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
                    <mesh position={[0, 0, -10]}>
                        <sphereGeometry args={[20, 32, 32]} />
                        <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                    </mesh>
                </Float>
            </Canvas>
        </div>
    );
};
