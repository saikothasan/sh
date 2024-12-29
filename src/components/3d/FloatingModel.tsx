import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, MeshWobbleMaterial } from '@react-three/drei';

export default function FloatingModel({ position = [0, 0, 0], color = '#00B4D8' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.getElapsedTime()) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={position}
      scale={[0.5, 0.5, 0.5]}
    >
      <MeshWobbleMaterial
        color={color}
        factor={0.4}
        speed={2}
        metalness={0.8}
        roughness={0.2}
      />
    </Box>
  );
}