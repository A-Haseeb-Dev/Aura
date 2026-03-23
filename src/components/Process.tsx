import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep into your brand’s DNA, market position, and future aspirations to find the core narrative.'
  },
  {
    title: 'Strategy',
    description: 'Defining the visual and verbal roadmap that will guide every creative decision moving forward.'
  },
  {
    title: 'Creation',
    description: 'Where concepts take shape. We iterate through typography, color, and form until the identity feels inevitable.'
  },
  {
    title: 'Refinement',
    description: 'Polishing every detail to ensure the system is robust, scalable, and visually impeccable.'
  }
];

export default function Process() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <span className="text-sm uppercase tracking-[0.3em] font-sans opacity-60 mb-4 block">The Method</span>
            <h2 className="text-4xl font-serif italic">A disciplined approach to creative chaos.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-light dark:bg-bg-dark p-12 group hover:bg-surface-subtle transition-colors"
            >
              <span className="text-xs font-bold opacity-30 mb-12 block">STEP 0{i + 1}</span>
              <h3 className="text-xl font-display font-bold mb-4 group-hover:translate-x-2 transition-transform">{step.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
