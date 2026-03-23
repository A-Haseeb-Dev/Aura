import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-sm uppercase tracking-[0.3em] font-sans opacity-60 mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-serif italic">How I help brands grow.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 lg:p-12 border border-border-subtle hover:border-accent-light dark:hover:border-accent-dark transition-colors group"
            >
              <span className="text-3xl lg:text-4xl font-serif italic opacity-20 group-hover:opacity-100 transition-opacity mb-8 block">
                0{i + 1}
              </span>
              <h3 className="text-xl lg:text-2xl font-display font-bold mb-6">{service.title}</h3>
              <p className="text-sm lg:text-base opacity-60 mb-8 leading-relaxed">{service.description}</p>
              <div className="pt-8 border-t border-border-subtle">
                <span className="text-[10px] lg:text-xs uppercase tracking-widest font-bold opacity-40 block mb-2">Outcome</span>
                <p className="text-xs lg:text-sm italic">{service.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
