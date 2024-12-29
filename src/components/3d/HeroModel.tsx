import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function HeroModel() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#00B4D8"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}