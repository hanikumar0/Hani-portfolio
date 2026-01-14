import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Float,
    PerspectiveCamera,
    Environment,
    ContactShadows,
    PresentationControls,
    Torus
} from '@react-three/drei';

const TechCore = () => {
    const outerRef = useRef();
    const innerRef = useRef();
    const ringRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (outerRef.current) {
            outerRef.current.rotation.x = Math.cos(t / 4) / 2;
            outerRef.current.rotation.y = t * 0.2;
            outerRef.current.rotation.z = Math.sin(t / 4) / 2;
        }
        if (innerRef.current) {
            innerRef.current.rotation.y = -t * 0.5;
            innerRef.current.rotation.z = t * 0.1;
        }
        if (ringRef.current) {
            ringRef.current.rotation.x = t * 0.1;
            ringRef.current.rotation.y = t * 0.1;
        }
    });

    return (
        <group position={[0, -0.5, 0]}>
            {/* Central Core Structure */}
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                {/* Outer Wireframe Shield */}
                <mesh ref={outerRef}>
                    <icosahedronGeometry args={[1.4, 1]} />
                    <meshStandardMaterial
                        color="#7d2ae8"
                        roughness={0.1}
                        metalness={1}
                        wireframe
                        wireframeLinewidth={2}
                    />
                </mesh>

                {/* Inner Power Source */}
                <mesh ref={innerRef}>
                    <dodecahedronGeometry args={[0.8]} />
                    <meshStandardMaterial
                        color="#00c4cc"
                        roughness={0.2}
                        metalness={1}
                        emissive="#00c4cc"
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </Float>

            {/* Orbiting Data Rings */}
            <group ref={ringRef}>
                <Torus args={[2.2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#ff66c4" emissive="#ff66c4" emissiveIntensity={2} toneMapped={false} />
                </Torus>
                <Torus args={[2.5, 0.02, 16, 100]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
                    <meshStandardMaterial color="#00c4cc" emissive="#00c4cc" emissiveIntensity={2} toneMapped={false} />
                </Torus>
            </group>

            {/* Floating Particles */}
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[-2, 2, -1]}>
                    <octahedronGeometry args={[0.2]} />
                    <meshStandardMaterial color="#ffc400" transparent opacity={0.8} />
                </mesh>
                <mesh position={[2, -1, 1]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#ff66c4" transparent opacity={0.8} />
                </mesh>
                <mesh position={[0, 2.5, 0]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="#00c4cc" transparent opacity={0.8} />
                </mesh>
            </Float>
        </group>
    );
};

export const Desk3D = () => {
    return (
        <div className="w-full h-full min-h-[500px] cursor-grab active:cursor-grabbing">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#7d2ae8" />

                <PresentationControls
                    global
                    rotation={[0, 0, 0]}
                    polar={[-0.4, 0.4]}
                    azimuth={[-0.4, 0.4]}
                    config={{ mass: 2, tension: 400 }}
                    snap={{ mass: 4, tension: 400 }}
                >
                    <TechCore />
                </PresentationControls>

                <ContactShadows
                    position={[0, -2.5, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2.5}
                    far={2}
                    color="#7d2ae8"
                />
            </Canvas>
        </div>
    );
};
