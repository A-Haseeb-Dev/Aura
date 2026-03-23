import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen lg:min-h-[140vh] flex flex-col justify-center px-6 relative overflow-hidden bg-bg-light dark:bg-bg-dark"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-32 lg:pt-48">
          <div className="lg:col-span-8 relative z-20">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <span className="w-12 h-[1px] bg-accent-light dark:bg-accent-dark" />
                <span className="text-[11px] uppercase tracking-[0.6em] font-sans font-bold opacity-60">
                  Aura Studio / London / 2026
                </span>
              </div>
            </Reveal>
            
            <div className="relative mb-16">
              <h1 className="text-[18vw] lg:text-[14vw] font-serif leading-[0.82] tracking-tighter text-ink-light dark:text-ink-dark animate-slam">
                AURA <br />
                <span className="italic font-light text-accent-light dark:text-accent-dark pl-[0.2em]">DESIGN</span> <br />
                STUDIO
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                className="absolute -bottom-4 left-0 h-[2px] bg-accent-light/30 dark:bg-accent-dark/30"
              />
            </div>

            <div className="flex flex-col md:flex-row items-start gap-16 mt-16">
              <Reveal delay={0.4}>
                <div className="max-w-sm">
                  <p className="text-xs font-sans leading-loose opacity-60 uppercase tracking-[0.2em] mb-6">
                    A boutique creative practice crafting immersive visual identities for the next generation of visionary brands.
                  </p>
                  <div className="flex gap-8 items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Services</span>
                      <span className="text-[11px] font-serif italic">Branding, Digital, Strategy</span>
                    </div>
                    <div className="w-px h-8 bg-border-subtle" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Location</span>
                      <span className="text-[11px] font-serif italic">Remote / London</span>
                    </div>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.6}>
                <motion.div 
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href="#work"
                    className="group flex items-center gap-8 text-[11px] uppercase tracking-[0.5em] font-sans font-black text-ink-light dark:text-ink-dark"
                  >
                    <span className="w-20 h-20 rounded-full border border-border-subtle flex items-center justify-center group-hover:bg-ink-light group-hover:text-bg-light dark:group-hover:bg-ink-dark dark:group-hover:text-bg-dark transition-all duration-700 ease-expo relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-accent-light dark:bg-accent-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                      />
                      <ArrowDownRight size={32} strokeWidth={1} className="relative z-10" />
                    </span>
                    Explore <br /> Selected Work
                  </a>
                </motion.div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-4 relative mt-32 lg:mt-0">
            <motion.div 
              style={{ y: y1, rotate, scale }}
              className="relative aspect-[3/4] w-full max-w-md ml-auto overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] group"
            >
              <motion.img 
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop" 
                alt="Studio Aesthetic"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-light/10 dark:bg-accent-dark/5 mix-blend-overlay" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[8px] uppercase tracking-widest text-white mix-blend-difference">Aura Studio © 2026</span>
                <span className="text-[8px] uppercase tracking-widest text-white mix-blend-difference">London, UK</span>
              </div>
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute -left-16 bottom-24 w-56 h-56 bg-bg-light dark:bg-bg-dark p-8 hidden lg:block border border-border-subtle shadow-xl"
            >
              <div className="w-full h-full border border-accent-light/20 dark:border-accent-dark/20 flex flex-col justify-between p-6">
                <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-bold">Philosophy</span>
                <p className="text-[13px] font-serif italic leading-relaxed">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <div className="w-8 h-[1px] bg-accent-light dark:bg-accent-dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-6 flex items-center gap-6"
      >
        <div className="w-px h-16 bg-ink-light/20 dark:bg-ink-dark/20" />
        <span className="text-[9px] uppercase tracking-[0.6em] font-sans opacity-40 vertical-rl rotate-180">
          Scroll to discover
        </span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.02, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -right-[10%] top-[5%] text-[60vw] font-serif italic pointer-events-none select-none text-ink-light dark:text-ink-dark"
      >
        A
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-px h-[60%] bg-border-subtle/30" />
        <div className="absolute top-[20%] right-[5%] w-px h-[60%] bg-border-subtle/30" />
      </div>
    </section>
  );
}
