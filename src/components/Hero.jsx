import React from 'react';
import { MapPin, ArrowRight, Code2 } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 pt-12 pb-8">
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm">
            <MapPin size={15} /> Kanpur, Uttar Pradesh, India
          </div>
          
          <div>
            <h1 className="text-7xl md:text-[92px] leading-[0.92] font-semibold tracking-tighter mb-3">
              Akshaya Kumar
            </h1>
            <div className="text-3xl md:text-4xl font-light tracking-tight text-blue-400">
              Java Backend Developer
            </div>
          </div>

          <p className="max-w-lg text-xl text-slate-300 mt-2 leading-relaxed">
            Passionate fresher building scalable, secure backend systems with Spring Boot and modern Java technologies. 
            Focused on clean architecture and solving real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-3 px-9 py-4 rounded-2xl bg-white text-slate-950 font-semibold text-sm tracking-wide hover:bg-blue-50 active:scale-[0.985] transition-all duration-200 shadow-xl"
            >
              VIEW PROJECTS <ArrowRight className="group-hover:translate-x-0.5 transition" size={17} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 px-9 py-4 rounded-2xl border border-white/30 text-sm font-medium hover:bg-white/10 active:scale-[0.985] transition-all"
            >
              CONTACT ME
            </button>
          </div>

          <div className="pt-10 flex items-center gap-8 text-sm text-slate-400">
            <div>Available for full-time roles • Remote or On-site</div>
          </div>
        </div>
      </div>

      {/* Subtle 3D Hero Visual / Decorative Element */}
      <div className="absolute right-12 bottom-16 hidden lg:block opacity-60">
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-500/10 rounded-[4rem] animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-8 border border-white/20 rounded-[3rem]"></div>
          <div className="absolute inset-[52px] bg-blue-600/20 rounded-3xl flex items-center justify-center">
            <Code2 size={82} className="text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
