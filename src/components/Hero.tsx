'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Download, Sparkles, Code, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial-glow">
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>AVAILABLE FOR NEW PROJECTS & ROLES</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
              Crafting <span className="text-gradient-primary">Digital Products</span> & Animated Experiences
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-white">{PERSONAL_INFO.name}</span>. {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-semibold text-base hover:from-indigo-500 hover:to-purple-500 transition-all shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center gap-2 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl glass-card text-gray-200 font-semibold text-base hover:text-white hover:border-indigo-500/40 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 pt-4 border-t border-white/10"
          >
            <span className="text-xs text-gray-400 font-mono">CONNECT:</span>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: PERSONAL_INFO.github, label: "GitHub" },
                { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: PERSONAL_INFO.twitter, label: "Twitter" },
                { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-indigo-400 hover:bg-white/10 hover:border-indigo-500/40 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Animated Visual Card / Interactive Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Outer Glow Ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-30 blur-xl animate-pulse" />

            {/* Terminal Container */}
            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/15 p-6 space-y-6">
              
              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>architect-session.ts</span>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-3 text-gray-300 leading-relaxed">
                <div className="text-gray-500">// Initialize Developer Profile</div>
                <div>
                  <span className="text-purple-400">const</span> <span className="text-cyan-300">architect</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">name:</span> <span className="text-emerald-300">&quot;Huzaifa Abdul Qadir&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">stack:</span> [<span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>, <span className="text-emerald-300">&quot;Node&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">animationEngine:</span> <span className="text-emerald-300">&quot;Framer Motion&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">status:</span> <span className="text-amber-300">&quot;Ready for Impact 🚀&quot;</span>
                </div>
                <div>{'}'};</div>

                <div className="pt-2 text-indigo-400 flex items-center gap-2">
                  <span>❯</span>
                  <span className="text-gray-200">architect.deployApp(&apos;production&apos;);</span>
                  <span className="w-2 h-4 bg-indigo-400 inline-block animate-pulse" />
                </div>
              </div>

              {/* Floating Interactive Micro-badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" />
                  <span>Next.js 14 App Router</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI & LLM Integration</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
