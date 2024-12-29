import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingModel from './3d/FloatingModel';
import LoadingSpinner from './LoadingSpinner';

const projects = [
  {
    id: 1,
    title: 'Virtual Showroom',
    description: 'Interactive 3D product visualization',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Architectural Visualization',
    description: 'Photorealistic 3D architectural renders',
    image: 'https://images.unsplash.com/photo-1631641551473-fbe46919289a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Game Assets',
    description: 'High-quality 3D game assets and characters',
    image: 'https://images.unsplash.com/photo-1614066591895-5f8f2f59c8ee?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative h-full">
                    <Canvas>
                      <Suspense fallback={null}>
                        <FloatingModel position={[0, 0, 0]} />
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                      </Suspense>
                    </Canvas>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}