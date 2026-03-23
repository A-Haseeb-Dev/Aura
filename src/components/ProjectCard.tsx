import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const isLarge = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group cursor-pointer ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px] mb-6">
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs uppercase tracking-widest opacity-50 mb-2 block">
            {project.category} / {project.year}
          </span>
          <h3 className="text-2xl font-serif italic">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
