'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, Sparkles, X, CheckCircle2, Layers } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend & 3D' },
  { id: 'mobile', label: 'Mobile' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-radial-glow">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED PORTFOLIO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Recent <span className="text-gradient-primary">Projects & Case Studies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg font-light"
          >
            Explore a curated selection of full-stack platforms, AI tools, and animated web applications.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white shadow-lg shadow-indigo-600/30'
                    : 'text-gray-400 hover:text-white glass-panel border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-transparent opacity-80" />
                    
                    {/* Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-indigo-600/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                    </h3>
                    <p className="text-xs text-indigo-300 font-mono">{project.subtitle}</p>
                    <p className="text-sm text-gray-300 line-clamp-2 font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="p-6 pt-0 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-xs text-gray-400 font-mono">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl glass-card rounded-2xl overflow-hidden border border-white/20 z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Header Banner */}
                <div className="relative h-64 sm:h-80 bg-gray-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d16] via-[#0a0d16]/50 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-md transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 space-y-1">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{selectedProject.category}</span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white">{selectedProject.title}</h3>
                    <p className="text-sm text-indigo-300 font-mono">{selectedProject.subtitle}</p>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Metric Ribbon if present */}
                  {selectedProject.metrics && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-semibold">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      <span>Metric: {selectedProject.metrics}</span>
                    </div>
                  )}

                  <p className="text-gray-200 text-base leading-relaxed font-light">
                    {selectedProject.longDescription}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">Key Highlights & Architecture</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-indigo-300 text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Interactive Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-gray-200 font-semibold text-sm flex items-center gap-2 border border-white/10 transition-all"
                    >
                      <Github className="w-4 h-4" /> View Source Code
                    </a>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
