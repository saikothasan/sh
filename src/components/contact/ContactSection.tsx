import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}