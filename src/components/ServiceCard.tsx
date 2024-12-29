import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4">
        {React.createElement(service.icon, { className: 'text-white', size: 24 })}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-gray-300">{service.description}</p>
    </motion.div>
  );
}