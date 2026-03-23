import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-surface-subtle">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] font-sans opacity-60 mb-4 block">Get in touch</span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Let’s build something <span className="font-sans not-italic font-bold tracking-tighter">meaningful</span>.</h2>
          
          <div className="space-y-8">
            <a href="mailto:hello@aura.studio" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center group-hover:bg-ink-light group-hover:text-bg-light dark:group-hover:bg-ink-dark dark:group-hover:text-bg-dark transition-all">
                <Mail size={20} />
              </div>
              <span className="text-xl font-sans">hello@aura.studio</span>
            </a>

            <div className="flex gap-6 pt-8">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center hover:bg-surface-subtle transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border-subtle py-4 focus:border-ink-light dark:focus:border-ink-dark outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-border-subtle py-4 focus:border-ink-light dark:focus:border-ink-dark outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest opacity-50">Message</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-border-subtle py-4 focus:border-ink-light dark:focus:border-ink-dark outline-none transition-colors resize-none" />
          </div>
          <button className="px-12 py-5 bg-ink-light text-bg-light dark:bg-ink-dark dark:text-bg-dark text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
