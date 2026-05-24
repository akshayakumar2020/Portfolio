import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectsSection = ({ handleTilt, resetTilt, openProject }) => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-[3px]">SELECTED WORK</div>
          <h2 className="text-6xl font-semibold tracking-tight mt-1">Featured Projects</h2>
        </div>
        <div className="hidden md:block text-sm text-slate-500">Hover cards for 3D tilt effect • Click to view details</div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card group tilt-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
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
              <div className="absolute top-4 right-4 px-4 py-1 text-xs rounded-full bg-black/70 text-white font-medium tracking-widest">{project.category}</div>
            </div>
            
            <div className="p-8">
              <div className="font-semibold text-3xl tracking-tight mb-3 group-hover:text-blue-600 transition-colors">{project.name}</div>
              <p className="text-slate-600 dark:text-slate-400 line-clamp-3 text-[15px] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{tech}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all">
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
