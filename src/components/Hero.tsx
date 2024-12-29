import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import HeroModel from './3d/HeroModel';
import LoadingSpinner from './LoadingSpinner';

export default function Hero() {
  return (
    <section id="home" className="h-screen relative bg-[#1A1F3C] overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <HeroModel />
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            NULLBITE
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-[#00B4D8] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital Reality Through 3D Design
          </motion.p>
          <motion.button
            className="bg-[#00B4D8] text-white px-8 py-3 rounded-full hover:bg-[#00B4D8]/80 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore Our Work
          </motion.button>
        </div>
      </div>
    </section>
  );
}