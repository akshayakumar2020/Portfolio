import React from 'react';
import { X, GitBranch, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ selectedProject, closeProject }) => {
  return (
    <AnimatePresence>
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-[80] flex items-center justify-center p-4" onClick={closeProject}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ ease: [0.23, 1, 0.32, 1] }}
            onClick={e => e.stopPropagation()} 
            className="bg-white dark:bg-slate-900 max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-80">
              <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
              
              <button onClick={closeProject} className="absolute top-6 right-6 text-white bg-black/60 hover:bg-black/90 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <X size={16} /> Close
              </button>
              
              <div className="absolute bottom-0 left-0 p-9 text-white">
                <div className="uppercase tracking-[3px] text-xs text-blue-400">{selectedProject.category}</div>
                <div className="font-semibold text-5xl tracking-[-1.5px] mt-1.5 mb-1">{selectedProject.name}</div>
              </div>
            </div>

            <div className="p-10">
              <p className="text-xl text-slate-700 dark:text-slate-300 max-w-prose">{selectedProject.description}</p>
              
              <div className="mt-10">
                <div className="text-sm font-semibold tracking-widest text-blue-600 mb-4">TECHNOLOGIES USED</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <div key={i} className="px-5 py-1 rounded-full border text-sm dark:border-slate-700">{tech}</div>
                  ))}
                </div>
              </div>

              <div className="mt-9">
                <div className="text-sm font-semibold tracking-widest text-blue-600 mb-4">KEY FEATURES</div>
                <ul className="space-y-3 text-[15px]">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300"><span className="text-blue-500 mt-1">→</span> {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-10 mt-10 border-t">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-3 py-4 border border-slate-900 dark:border-white hover:bg-black hover:text-white rounded-2xl text-sm font-semibold transition-all">
                  <GitBranch size={19} /> VIEW ON GITHUB
                </a>
                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-3 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-semibold transition-all">
                  LIVE DEMO <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
