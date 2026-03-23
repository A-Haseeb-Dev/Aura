import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import CaseStudy from './components/CaseStudy';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Reveal from './components/Reveal';
import Preloader from './components/Preloader';
import { projects } from './data/content';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-accent-light selection:text-white dark:selection:bg-accent-dark">
      <Preloader />
      <div className="grain" />
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent-light dark:bg-accent-dark z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />

        {/* Featured Work Section */}
        <section id="work" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-xl">
                <Reveal>
                  <span className="text-sm uppercase tracking-[0.3em] font-sans opacity-60 mb-4 block">Selected Projects</span>
                </Reveal>
                <Reveal delay={0.3}>
                  <h2 className="text-4xl md:text-6xl font-serif italic">A collection of visual stories and brand evolutions.</h2>
                </Reveal>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-sm opacity-50 uppercase tracking-widest">Scroll to explore</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onClick={(p: Project) => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        </section>

        <Services />
        <Process />

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop" 
                  alt="Designer Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[20px] border-bg-light dark:border-bg-dark pointer-events-none" />
              </motion.div>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-sm uppercase tracking-[0.3em] font-sans opacity-60 mb-6 block">The Visionary</span>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
                  I believe design is the <span className="font-sans not-italic font-bold tracking-tighter">silent ambassador</span> of your brand.
                </h2>
              </Reveal>
              <div className="space-y-6 text-lg opacity-70 leading-relaxed max-w-2xl">
                <Reveal delay={0.4}>
                  <p>
                    With over a decade of experience in the creative industry, I've helped brands from startups to Fortune 500s find their unique voice in a crowded digital landscape.
                  </p>
                </Reveal>
                <Reveal delay={0.5}>
                  <p>
                    My approach is rooted in strategy and elevated by intuition. I don't just create visuals; I build emotional connections between brands and their audiences.
                  </p>
                </Reveal>
              </div>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-neutral-500/10 pt-12">
                <Reveal delay={0.6}>
                  <div>
                    <h4 className="text-2xl font-serif italic">120+</h4>
                    <p className="text-xs uppercase tracking-widest opacity-50">Projects Delivered</p>
                  </div>
                </Reveal>
                <Reveal delay={0.7}>
                  <div>
                    <h4 className="text-2xl font-serif italic">15+</h4>
                    <p className="text-xs uppercase tracking-widest opacity-50">Design Awards</p>
                  </div>
                </Reveal>
                <Reveal delay={0.8}>
                  <div>
                    <h4 className="text-2xl font-serif italic">10</h4>
                    <p className="text-xs uppercase tracking-widest opacity-50">Years Experience</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-12 px-6 border-t border-neutral-500/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold tracking-tighter">AURA.</div>
          <p className="text-xs uppercase tracking-widest opacity-40">
            © 2026 Aura Design Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Terms</a>
          </div>
        </div>
      </footer>

      <CaseStudy 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
