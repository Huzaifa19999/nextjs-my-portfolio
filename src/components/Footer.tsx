'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Code2, Heart, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070a] py-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-bold text-white block">{PERSONAL_INFO.name}</span>
            <span className="text-xs text-gray-500 font-mono">Senior Software Engineer</span>
          </div>
        </div>

        {/* Middle: Socials */}
        <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <span>•</span>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <span>•</span>
          <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-400 font-mono flex items-center gap-1">
            Built with Next.js & <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" /> © 2026
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel text-gray-400 hover:text-white hover:border-indigo-500/40 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
