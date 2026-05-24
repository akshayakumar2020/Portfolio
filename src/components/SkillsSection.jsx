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
    <section id="skills" className="bg-slate-900 dark:bg-black py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[4px] font-medium text-blue-400 mb-3">EXPERTISE</div>
          <h2 className="text-5xl font-semibold tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Backend */}
          <div className="bg-slate-800/60 backdrop-blur rounded-3xl p-9 border border-white/10">
            <div className="flex items-center gap-4 mb-9">
              <div className="p-3 bg-blue-600/10 rounded-2xl"><Code2 size={26} className="text-blue-400" /></div>
              <div>
                <div className="font-semibold text-2xl">Backend</div>
                <div className="text-blue-400 text-sm">Core Development</div>
              </div>
            </div>
            <div className="space-y-5">
              {skills.backend.map((skill, idx) => (
                <div key={idx} className="skill-card flex items-center justify-between bg-slate-900/60 px-6 py-4 rounded-2xl hover:bg-slate-900/80">
                  <div className="flex items-center gap-4 text-xl">
                    {renderSkillIcon(skill)}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="bg-slate-800/60 backdrop-blur rounded-3xl p-9 border border-white/10">
            <div className="flex items-center gap-4 mb-9">
              <div className="p-3 bg-emerald-600/10 rounded-2xl"><Database size={26} className="text-emerald-400" /></div>
              <div>
                <div className="font-semibold text-2xl">Database</div>
                <div className="text-emerald-400 text-sm">Data Management</div>
              </div>
            </div>
            <div className="space-y-5">
              {skills.database.map((skill, idx) => (
                <div key={idx} className="skill-card flex items-center justify-between bg-slate-900/60 px-6 py-4 rounded-2xl hover:bg-slate-900/80">
                  <div className="flex items-center gap-4 text-xl">
                    {renderSkillIcon(skill)}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-slate-800/60 backdrop-blur rounded-3xl p-9 border border-white/10">
            <div className="flex items-center gap-4 mb-9">
              <div className="p-3 bg-violet-600/10 rounded-2xl"><Award size={26} className="text-violet-400" /></div>
              <div>
                <div className="font-semibold text-2xl">Tools & DevOps</div>
                <div className="text-violet-400 text-sm">Productivity</div>
              </div>
            </div>
            <div className="space-y-5">
              {skills.tools.map((skill, idx) => (
                <div key={idx} className="skill-card flex items-center justify-between bg-slate-900/60 px-6 py-4 rounded-2xl hover:bg-slate-900/80">
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
