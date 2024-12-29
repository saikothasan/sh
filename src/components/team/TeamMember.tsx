import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { type TeamMemberType } from '../../types';

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group perspective"
    >
      <div className="relative transform transition-transform duration-500 group-hover:rotate-y-180">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-white text-center">{member.name}</h3>
          <p className="text-secondary text-center mb-4">{member.role}</p>
          <div className="flex justify-center space-x-4">
            <Mail className="text-gray-300 hover:text-secondary cursor-pointer" size={20} />
            <Github className="text-gray-300 hover:text-secondary cursor-pointer" size={20} />
            <Linkedin className="text-gray-300 hover:text-secondary cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}