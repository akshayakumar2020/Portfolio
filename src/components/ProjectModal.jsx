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
            className="bg-white dark:bg-zinc-900 max-w-3xl w-full max-h-[92vh] rounded-3xl overflow-y-auto shadow-2xl"
          >
            <div className="relative h-56 sm:h-64 md:h-72">
              <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
              
              <button onClick={closeProject} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-black/60 hover:bg-black/90 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <X size={16} /> Close
              </button>
              
              <div className="absolute bottom-0 left-0 p-5 sm:p-7 md:p-9 text-white">
                <div className="font-semibold text-3xl sm:text-4xl md:text-5xl mt-1.5 mb-1">{selectedProject.name}</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-prose">{selectedProject.description}</p>
              
              <div className="mt-7 md:mt-10">
                <div className="text-sm font-semibold tracking-widest text-cyan-700 dark:text-cyan-300 mb-4">TECHNOLOGIES USED</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <div key={i} className="px-4 sm:px-5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm">{tech}</div>
                  ))}
                </div>
              </div>

              <div className="mt-7 md:mt-9">
                <div className="text-sm font-semibold tracking-widest text-cyan-700 dark:text-cyan-300 mb-4">KEY FEATURES</div>
                <ul className="space-y-3 text-[15px]">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300"><span className="text-cyan-600 dark:text-cyan-300 mt-1">-&gt;</span> {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-7 md:pt-10 mt-7 md:mt-10 border-t">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="min-w-44 flex-1 flex justify-center items-center gap-3 py-4 border border-slate-900 dark:border-white hover:bg-black hover:text-white rounded-2xl text-sm font-semibold transition-all">
                  <GitBranch size={19} /> VIEW ON GITHUB
                </a>
                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="min-w-44 flex-1 flex justify-center items-center gap-3 py-4 bg-cyan-700 hover:bg-cyan-800 text-white rounded-2xl text-sm font-semibold transition-all">
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
