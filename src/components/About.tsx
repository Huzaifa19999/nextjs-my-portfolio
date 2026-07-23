'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { Layers, Zap, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

const HIGHLIGHT_CARDS = [
  {
    icon: Layers,
    title: "Full-Stack Architecture",
    description: "Designing scalable end-to-end architectures using Next.js 14, Node.js, GraphQL, PostgreSQL, and cloud edge infrastructure."
  },
  {
    icon: Sparkles,
    title: "Motion & UX Design",
    description: "Building ultra-fluid user interfaces with Framer Motion, micro-interactions, dark mode aesthetics, and glassmorphic elements."
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description: "Optimizing Core Web Vitals, dynamic server-side rendering, bundle splitting, and edge caching for sub-second page loads."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090e]">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering <span className="text-gradient-primary">Excellence</span> & Modern Visuals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg font-light leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-indigo-500/40"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gradient-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HIGHLIGHT_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="glass-card rounded-2xl p-8 space-y-4 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
