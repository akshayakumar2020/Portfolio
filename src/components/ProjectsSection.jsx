import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectsSection = ({ handleTilt, resetTilt, openProject }) => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-[3px]">SELECTED WORK</div>
          <h2 className="text-6xl font-semibold tracking-tight mt-1">Featured Projects</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card group tilt-card bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            onMouseMove={(e) => {
              const card = e.currentTarget;
              handleTilt(e, card);
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              resetTilt(card);
            }}
            onClick={() => openProject(project)}
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            <div className="p-8">
              <div className="font-semibold text-3xl tracking-tight mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">{project.name}</div>
              <p className="text-slate-600 dark:text-slate-400 line-clamp-3 text-[15px] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-4 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/30 text-cyan-800 dark:text-cyan-200">{tech}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-cyan-700 dark:text-cyan-300 group-hover:gap-4 transition-all">
                EXPLORE PROJECT <ArrowRight size={17} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
