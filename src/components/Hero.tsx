import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen lg:min-h-[120vh] flex flex-col justify-center px-6 relative overflow-hidden bg-bg-light dark:bg-bg-dark"
    >
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]">
        <div className="absolute top-0 left-[5%] w-px h-full bg-ink-light dark:bg-ink-dark" />
        <div className="absolute top-0 left-[25%] w-px h-full bg-ink-light dark:bg-ink-dark" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-ink-light dark:bg-ink-dark" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-ink-light dark:bg-ink-dark" />
        <div className="absolute top-0 left-[95%] w-px h-full bg-ink-light dark:bg-ink-dark" />
        
        <div className="absolute top-[20%] left-0 w-full h-px bg-ink-light dark:bg-ink-dark" />
        <div className="absolute top-[40%] left-0 w-full h-px bg-ink-light dark:bg-ink-dark" />
        <div className="absolute top-[60%] left-0 w-full h-px bg-ink-light dark:bg-ink-dark" />
        <div className="absolute top-[80%] left-0 w-full h-px bg-ink-light dark:bg-ink-dark" />
      </div>

      {/* Hero-specific Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.08] mix-blend-overlay grain" />

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-24 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography */}
          <motion.div 
            style={{ y: textY }}
            className="lg:col-span-8 relative z-20"
          >
            <Reveal>
              <div className="flex items-center gap-6 mb-12 lg:mb-16">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 1, ease: "circOut" }}
                  className="h-[1px] bg-accent-light dark:bg-accent-dark" 
                />
                <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.7em] font-sans font-black opacity-40">
                  Visual Identity / Digital Design
                </span>
              </div>
            </Reveal>
            
            <div className="relative">
              <h1 className="text-[clamp(3rem,9vw,10rem)] font-serif leading-[0.85] tracking-tighter text-ink-light dark:text-ink-dark select-none">
                <span className="reveal-text block">
                  <span className="animate-slam" style={{ animationDelay: '0.1s' }}>AURA</span>
                </span>
                <span className="italic font-light text-accent-light dark:text-accent-dark lg:pl-[0.05em] relative reveal-text block">
                  <span className="animate-slam" style={{ animationDelay: '0.3s' }}>STUDIO</span>
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-[1px] lg:h-[2px] bg-accent-light/20 dark:bg-accent-dark/20 origin-left"
                  />
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-12 lg:gap-20 mt-16 lg:mt-24">
              <Reveal delay={0.4}>
                <div className="max-w-[280px] lg:max-w-xs">
                  <p className="text-[11px] lg:text-xs font-sans leading-relaxed opacity-50 uppercase tracking-[0.25em] mb-8">
                    Crafting immersive visual narratives for the next generation of visionary brands and cultural pioneers.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-widest opacity-30 font-bold">Focus</span>
                      <span className="text-[11px] font-serif italic opacity-80">High-End Branding</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-widest opacity-30 font-bold">Availability</span>
                      <span className="text-[11px] font-serif italic opacity-80">Q3 2026</span>
                    </div>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.6}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <a 
                    href="#work"
                    className="flex items-center gap-8 text-[11px] uppercase tracking-[0.6em] font-display font-black text-ink-light dark:text-ink-dark"
                  >
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-border-subtle flex items-center justify-center transition-all duration-700 ease-expo overflow-hidden group-hover:border-accent-light dark:group-hover:border-accent-dark">
                      <motion.div 
                        className="absolute inset-0 bg-accent-light dark:bg-accent-dark translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                      />
                      <ArrowDownRight size={32} strokeWidth={1} className="relative z-10 group-hover:text-bg-light dark:group-hover:text-bg-dark transition-colors duration-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="group-hover:translate-x-2 transition-transform duration-500">Explore</span>
                      <span className="opacity-40 font-serif italic lowercase tracking-normal group-hover:translate-x-2 transition-transform duration-500 delay-75">portfolio</span>
                    </div>
                  </a>
                </motion.div>
              </Reveal>
            </div>
          </motion.div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <motion.div 
              style={{ y: y1, rotate, scale }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto z-10"
            >
              <motion.div
                style={{ x: smoothMouseX, y: smoothMouseY }}
                className="w-full h-full overflow-hidden shadow-[0_60px_100px_-30px_rgba(0,0,0,0.4)] group relative"
              >
                <motion.img 
                  initial={{ scale: 1.4, filter: 'blur(10px)' }}
                  animate={{ scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop" 
                  alt="Studio Aesthetic"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-expo"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent-light/5 dark:bg-accent-dark/5 mix-blend-overlay pointer-events-none" />
                
                {/* Image Overlay Info */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-black/20 via-transparent to-black/60">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest text-white/80">Studio View</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/80">01 / 04</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-white/60">Location</span>
                      <span className="text-xs font-serif italic text-white">London, UK</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <ArrowDownRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Floating Philosophy Card */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -left-4 lg:-left-8 bottom-8 lg:bottom-16 w-56 h-56 bg-white/90 dark:bg-black/90 backdrop-blur-2xl p-6 hidden md:block border border-border-subtle shadow-2xl z-20"
            >
              <div className="w-full h-full border border-accent-light/10 dark:border-accent-dark/10 flex flex-col justify-between p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.4em] opacity-30 font-display font-black">Manifesto</span>
                  <div className="w-6 h-[1px] bg-accent-light dark:bg-accent-dark" />
                </div>
                <p className="text-[12px] font-serif italic leading-relaxed text-ink-light dark:text-ink-dark">
                  "We believe that true luxury lies in the <span className="font-display not-italic font-bold tracking-tighter">unseen details</span>."
                </p>
                <span className="text-[8px] uppercase tracking-widest opacity-20 font-display">Aura Studio © 2026</span>
              </div>
            </motion.div>

            {/* Decorative Circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -top-20 w-40 h-40 border border-accent-light/10 dark:border-accent-dark/10 rounded-full hidden lg:flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-8"
      >
        <div className="relative h-20 w-px bg-ink-light/10 dark:bg-ink-dark/10 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-light dark:bg-accent-dark"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] uppercase tracking-[0.6em] font-sans opacity-40 vertical-rl rotate-180">
            Scroll
          </span>
          <span className="text-[9px] uppercase tracking-[0.6em] font-sans opacity-20 vertical-rl rotate-180">
            Discover
          </span>
        </div>
      </motion.div>

      {/* Large Background Initial */}
      <motion.div 
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 0.015, x: 0 }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-[15%] top-[0%] text-[70vw] font-serif italic pointer-events-none select-none text-ink-light dark:text-ink-dark"
      >
        A
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-border-subtle/40 hidden lg:block" />
      <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-border-subtle/40 hidden lg:block" />
      <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-border-subtle/40 hidden lg:block" />
    </section>
  );
}
