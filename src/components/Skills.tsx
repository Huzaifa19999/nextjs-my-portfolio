'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Terminal, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient-primary">Technology Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg font-light"
          >
            Comprehensive experience across modern frontend frameworks, cloud backend APIs, and AI integrations.
          </motion.p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((category, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40'
                    : 'glass-panel text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Skills List */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 sm:p-10 space-y-8 border border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-400" />
              <span>{SKILL_CATEGORIES[activeCategory].title}</span>
            </h3>
            <span className="text-xs text-gray-400 font-mono">Proficiency Benchmark</span>
          </div>

          <div className="space-y-6">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="space-y-2"
              >
                {/* Skill Name & Level Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-semibold text-white">{skill.name}</span>
                    <p className="text-xs text-gray-400 font-light mt-0.5">{skill.description}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar Container */}
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 + idx * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-md shadow-indigo-500/20"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra Tech Cloud */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Also Experienced With</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Docker", "Webpack", "Vite", "Zustand", "Redux Toolkit", "Prisma", "PostgreSQL", "Jest", "Cypress", "Stripe API", "Tailwind CSS v4", "Git", "Figma"].map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg glass-panel text-xs text-gray-300 font-mono border border-white/5 hover:border-indigo-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
