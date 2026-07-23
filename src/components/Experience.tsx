'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const items = EXPERIENCES.filter((exp) => exp.type === activeTab);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-radial-glow">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATHWAY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Experience & <span className="text-gradient-primary">Education Timeline</span>
          </motion.h2>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'work'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                : 'glass-panel text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Briefcase className="w-4 h-4" /> Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                : 'glass-panel text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Education
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b0e17] border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/50 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Card Content Container */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 hover:border-indigo-500/40">
                      
                      {/* Role & Company */}
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-mono mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                        <p className="text-sm text-cyan-300 font-semibold flex items-center gap-1.5">
                          <span>{item.company}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 font-normal flex items-center gap-1 text-xs">
                            <MapPin className="w-3 h-3" /> {item.location}
                          </span>
                        </p>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 text-sm text-gray-300 font-light">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-indigo-400 mt-1">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Skills Pills */}
                      <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/10">
                        {item.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-300 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
