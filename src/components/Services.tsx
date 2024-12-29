import React from 'react';
import { motion } from 'framer-motion';
import { Cube, Palette, Globe, Code, Layers, Camera } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: '3D Modeling',
    description: 'Custom 3D models with attention to detail and precision',
    icon: Cube,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces with seamless user experiences',
    icon: Palette,
  },
  {
    id: 3,
    title: 'Web3 Development',
    description: 'Next-gen web applications with 3D capabilities',
    icon: Globe,
  },
  {
    id: 4,
    title: 'Custom Solutions',
    description: 'Tailored 3D solutions for your specific needs',
    icon: Code,
  },
  {
    id: 5,
    title: 'Animation',
    description: 'Stunning 3D animations that bring ideas to life',
    icon: Layers,
  },
  {
    id: 6,
    title: 'Virtual Tours',
    description: 'Immersive virtual experiences for any space',
    icon: Camera,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-primary/95">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white">Our Services</h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            We bring your ideas to life through cutting-edge 3D design and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}