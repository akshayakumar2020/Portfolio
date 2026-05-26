import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-12 gap-x-12 items-center">
        <div className="md:col-span-7">
          <div className="uppercase tracking-[3px] text-xs font-medium text-cyan-700 dark:text-cyan-300 mb-4">INTRODUCTION</div>
          <h2 className="text-5xl font-semibold tracking-tighter mb-8">About Me</h2>

          <div className="prose prose-lg text-slate-600 dark:text-slate-300 max-w-[46ch]">
            <p>I'm a dedicated Java Backend Developer from Kanpur with a deep passion for building reliable, high-performance backend systems. As a fresher, I've focused intensely on mastering Spring Boot, RESTful architecture, and database optimization.</p>
            <p className="mt-4">My approach combines strong problem-solving skills with a love for writing clean, maintainable code. I'm always excited to learn new technologies and contribute to impactful products.</p>
          </div>
        </div>

        <div className="md:col-span-5 mt-10 md:mt-0">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-9 border border-zinc-200 dark:border-zinc-800 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <User className="text-cyan-700 dark:text-cyan-300" size={26} />
              <div className="font-semibold text-xl">My Mission</div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">To build high-performance backend systems that deliver seamless digital experiences while continuously growing as a software engineer and contributing to impactful products.</p>

            <div className="mt-7 pt-7 border-t flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <div><span className="font-medium">Interests:</span> System Design, Microservices, Open Source</div>
              <div><span className="font-medium">Goals:</span> Become a Skilled Software Engineer and Backend Architect</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
