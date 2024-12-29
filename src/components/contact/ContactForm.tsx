import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-white"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-white"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="message" className="block text-white mb-2">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-white"
            required
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-secondary/80 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Send Message</span>
          <Send size={18} />
        </motion.button>
      </div>
    </form>
  );
}