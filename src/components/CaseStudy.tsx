import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudy({ project, onClose }: CaseStudyProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-bg-light dark:bg-bg-dark overflow-y-auto"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onClose}
          className="fixed top-4 right-4 lg:top-8 lg:right-8 z-[110] p-3 lg:p-4 rounded-full bg-ink-light text-bg-light dark:bg-ink-dark dark:text-bg-dark hover:scale-110 transition-transform shadow-lg"
        >
          <X size={20} className="lg:w-6 lg:h-6" />
        </motion.button>

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 lg:mb-24">
            <div className="lg:col-span-7">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] lg:text-sm uppercase tracking-widest opacity-50 mb-4 block"
              >
                {project.category} — {project.year}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif italic mb-8"
              >
                {project.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl opacity-70 leading-relaxed max-w-2xl"
              >
                {project.description}
              </motion.p>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] lg:text-xs uppercase tracking-widest font-bold mb-3 opacity-40">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 border border-neutral-500/20 text-[10px] lg:text-xs rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-video overflow-hidden"
            >
              <img 
                src={project.images[0]} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                alt="Case study main"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <h3 className="text-xl lg:text-2xl font-serif italic mb-6">The Problem</h3>
                <p className="text-sm lg:text-base opacity-70 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-serif italic mb-6">The Process</h3>
                <p className="text-sm lg:text-base opacity-70 leading-relaxed">{project.process}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <img src={project.images[1]} className="w-full aspect-square object-cover" referrerPolicy="no-referrer" alt="Case study detail 1" />
              <img src={project.images[2]} className="w-full aspect-square object-cover" referrerPolicy="no-referrer" alt="Case study detail 2" />
            </div>

            <div className="py-16 lg:py-24 border-t border-neutral-500/10 text-center">
              <h3 className="text-2xl lg:text-3xl font-serif italic mb-6">The Outcome</h3>
              <p className="text-lg lg:text-xl opacity-70 max-w-3xl mx-auto mb-12">{project.outcome}</p>
              <button 
                onClick={onClose}
                className="inline-flex items-center gap-4 text-xs lg:text-sm uppercase tracking-widest font-bold group"
              >
                Back to Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
