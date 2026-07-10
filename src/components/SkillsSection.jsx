import React from 'react';
import { Code2, Database, Award } from 'lucide-react';
import { skills } from '../data/portfolioData';

const renderSkillIcon = (skill) => {
  if (skill.icon?.startsWith('/')) {
    return <img src={skill.icon} alt={`${skill.name} logo`} className="h-7 w-7 rounded-lg object-contain" />;
  }

  return <span>{skill.icon}</span>;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white dark:bg-black py-20 text-zinc-950 dark:text-white border-y border-zinc-200 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[4px] font-medium text-cyan-700 dark:text-cyan-300 mb-3">EXPERTISE</div>
          <h2 className="text-5xl font-semibold tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Backend */}
          <div className="bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur rounded-3xl p-9 border border-zinc-200 dark:border-white/10 shadow-lg dark:shadow-none">
            <div className="flex items-center gap-4 mb-9">
              <div className="p-3 bg-cyan-500/10 rounded-2xl"><Code2 size={26} className="text-cyan-700 dark:text-cyan-300" /></div>
              <div>
                <div className="font-semibold text-2xl">Backend</div>
                <div className="text-cyan-700 dark:text-cyan-300 text-sm">Core Development</div>
              </div>
            </div>
            <div className="space-y-5">
              {skills.backend.map(skill => (
                <div key={skill.name} className="skill-card flex items-center justify-between bg-white dark:bg-black/30 px-6 py-4 rounded-2xl hover:bg-cyan-50 dark:hover:bg-cyan-950/35 border border-zinc-100 dark:border-transparent">
                  <div className="flex items-center gap-4 text-xl">
                    {renderSkillIcon(skill)}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur rounded-3xl p-9 border border-zinc-200 dark:border-white/10 shadow-lg dark:shadow-none">
            <div className="flex items-center gap-4 mb-9">
              <div className="p-3 bg-emerald-600/10 rounded-2xl"><Database size={26} className="text-emerald-400" /></div>
              <div>
                <div className="font-semibold text-2xl">Database</div>
                <div className="text-emerald-400 text-sm">Data Management</div>
              </div>
            </div>
            <div className="space-y-5">
              {skills.database.map(skill => (
                <div key={skill.name} className="skill-card flex items-center justify-between bg-white dark:bg-black/30 px-6 py-4 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-950/35 border border-zinc-100 dark:border-transparent">
                  <div className="flex items-center gap-4 text-xl">
                    {renderSkillIcon(skill)}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur rounded-3xl p-9 border border-zinc-200 dark:border-white/10 shadow-lg dark:shadow-none">
            <div className="flex items-center gap-4 mb-9">
              <div className="p-3 bg-amber-500/10 rounded-2xl"><Award size={26} className="text-amber-600 dark:text-amber-300" /></div>
              <div>
                <div className="font-semibold text-2xl">Tools & DevOps</div>
                <div className="text-amber-600 dark:text-amber-300 text-sm">Productivity</div>
              </div>
            </div>
            <div className="space-y-5">
              {skills.tools.map(skill => (
                <div key={skill.name} className="skill-card flex items-center justify-between bg-white dark:bg-black/30 px-6 py-4 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/35 border border-zinc-100 dark:border-transparent">
                  <div className="flex items-center gap-4 text-xl">
                    {renderSkillIcon(skill)}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
