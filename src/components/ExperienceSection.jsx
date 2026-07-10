import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { experiences, education, achievements } from '../data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-white dark:bg-zinc-900 py-20 border-t border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14 text-center">
          <div className="text-xs uppercase tracking-[4px] text-cyan-700 dark:text-cyan-300">MY JOURNEY</div>
          <h2 className="text-5xl font-semibold tracking-tighter mt-3">Experience & Education</h2>
        </div>

        <div className="space-y-16">
          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <Calendar className="text-cyan-700 dark:text-cyan-300" size={28} /> Education
            </h3>
            <div className="space-y-5">
              {education.map(exp => (
                <div key={exp.title} className="flex flex-col md:flex-row gap-8 md:gap-16 p-9 rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-[#080b12]">
                  <div className="md:w-2/5 flex-shrink-0">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="font-medium text-sm tracking-wider text-cyan-700 dark:text-cyan-300">{exp.type.toUpperCase()}</div>
                    </div>
                    <div className="text-2xl font-semibold tracking-tight leading-none">{exp.title}</div>
                    <div className="text-slate-500 mt-1.5">{exp.organization}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-slate-400 mb-3 font-medium">{exp.period}</div>
                    <p className="text-slate-600 dark:text-slate-300 text-[15px] mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map(h => <div key={h} className="px-5 py-px rounded-full border text-xs text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700">{h}</div>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <Award className="text-amber-600 dark:text-amber-300" size={28} /> Experience & Certifications
            </h3>
            <div className="space-y-5">
              {experiences.map(exp => (
                <div key={exp.credentialId || exp.title} className="flex flex-col md:flex-row gap-8 md:gap-16 p-9 rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-[#080b12]">
                  <div className="md:w-2/5 flex-shrink-0">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="font-medium text-sm tracking-wider text-amber-600 dark:text-amber-300">{exp.type.toUpperCase()}</div>
                    </div>
                    <div className="text-2xl font-semibold tracking-tight leading-none">{exp.title}</div>
                    <div className="text-slate-500 mt-1.5">{exp.organization}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-slate-400 mb-3 font-medium">{exp.period}</div>
                    <p className="text-slate-600 dark:text-slate-300 text-[15px] mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map(h => <div key={h} className="px-5 py-px rounded-full border text-xs text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700">{h}</div>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-14 pt-14 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-9">
            <div className="text-sm text-cyan-700 dark:text-cyan-300 font-medium">KEY HIGHLIGHTS</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map(ach => (
              <div key={ach.label} className="bg-gradient-to-b from-zinc-900 to-black rounded-3xl p-9 text-center text-white">
                <div className="font-mono text-6xl font-bold tracking-tighter text-cyan-300">{ach.number}</div>
                <div className="text-sm tracking-wider text-white/70 mt-3 font-medium">{ach.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
