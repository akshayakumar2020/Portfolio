import React from 'react';
import { MapPin, ArrowRight, Code2, FileText } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-white via-cyan-50 to-emerald-50 dark:from-zinc-950 dark:via-slate-950 dark:to-teal-950 text-zinc-950 dark:text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 pt-12 pb-8">
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-cyan-100 dark:border-white/20 text-sm text-zinc-700 dark:text-white">
            <MapPin size={15} /> Kanpur, Uttar Pradesh, India
          </div>
          
          <div>
            <h1 className="text-7xl md:text-[92px] leading-[0.92] font-semibold tracking-tighter mb-3">
              Akshaya Kumar
            </h1>
            <div className="text-3xl md:text-4xl font-light tracking-tight text-cyan-700 dark:text-cyan-300">
              Java Backend Developer
            </div>
          </div>

          <p className="max-w-lg text-xl text-zinc-600 dark:text-slate-300 mt-2 leading-relaxed">
            Passionate fresher building scalable, secure backend systems with Spring Boot and modern Java technologies. 
            Focused on clean architecture and solving real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-3 px-9 py-4 rounded-2xl bg-cyan-700 text-white dark:bg-white dark:text-zinc-950 font-semibold text-sm tracking-wide hover:bg-cyan-800 dark:hover:bg-cyan-50 active:scale-[0.985] transition-all duration-200 shadow-xl shadow-cyan-900/15 cursor-pointer"
            >
              VIEW PROJECTS <ArrowRight className="group-hover:translate-x-0.5 transition" size={17} />
            </button>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-9 py-4 rounded-2xl border border-cyan-200 dark:border-white/30 text-sm font-semibold text-zinc-800 dark:text-white hover:bg-cyan-50 dark:hover:bg-white/10 active:scale-[0.985] transition-all hover:border-cyan-300 dark:hover:border-cyan-500/50 cursor-pointer"
            >
              <FileText size={17} className="text-cyan-700 dark:text-cyan-400" /> RESUME
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 px-9 py-4 rounded-2xl border border-cyan-200 dark:border-white/30 text-sm font-medium text-zinc-800 dark:text-white hover:bg-white/70 dark:hover:bg-white/10 active:scale-[0.985] transition-all cursor-pointer"
            >
              CONTACT ME
            </button>
          </div>

          <div className="pt-10 flex items-center gap-8 text-sm text-zinc-500 dark:text-slate-400">
            <div>Available for full-time roles - Remote or On-site</div>
          </div>
        </div>
      </div>

      <div className="absolute right-12 bottom-16 hidden lg:block opacity-70">
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-emerald-400/15 rounded-[4rem] animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-8 border border-cyan-200 dark:border-white/20 rounded-[3rem]"></div>
          <div className="absolute inset-[52px] bg-white/70 dark:bg-cyan-500/15 rounded-3xl flex items-center justify-center shadow-xl dark:shadow-none">
            <Code2 size={82} className="text-cyan-700/60 dark:text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
