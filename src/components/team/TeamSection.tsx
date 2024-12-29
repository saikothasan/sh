import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import { type TeamMemberType } from '../../types';

const teamMembers: TeamMemberType[] = [
  {
    id: 1,
    name: 'Alex Chen',
    role: '3D Art Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    bio: 'Leading our creative vision with over 10 years of 3D design experience.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    bio: 'Pushing the boundaries of what's possible in 3D web technologies.',
  },
  {
    id: 3,
    name: 'Marcus Rodriguez',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Creating intuitive and beautiful interfaces for our 3D experiences.',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-primary/95">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the creative minds behind NULLBITE's innovative 3D solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}