import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { translations } from '../data/translations';
import { projectItems } from '../data/projectsData';
import { FolderGit2 } from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentLang }) => {
  const [activeInstitution, setActiveInstitution] = useState<'hanoi' | 'wroclaw' | 'padova'>('hanoi');
  const t = translations.projects;

  const filteredProjects = projectItems.filter(
    (proj) => proj.institution === activeInstitution
  );

  return (
    <section id="projects" className="py-24 bg-[#F5F0EB] text-[#2C2A29] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#8C7355] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#8C7355]"></span>
            {t.heading[currentLang]}
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#1A1A1A]">
            {t.heading[currentLang]}
          </h2>
          <p className="text-sm sm:text-base text-[#6B635B]">
            {t.subheading[currentLang]}
          </p>
        </div>

        {/* Institution Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-[#E0D7CB] pb-4">
          <button
            onClick={() => setActiveInstitution('hanoi')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
              activeInstitution === 'hanoi'
                ? 'bg-[#EAE0D2] text-[#1A1A1A] border border-[#D5C7B3] shadow-xs'
                : 'text-[#6B635B] hover:bg-[#EFE8DC]'
            }`}
          >
            {t.tabs.hanoi[currentLang]}
          </button>
          <button
            onClick={() => setActiveInstitution('wroclaw')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
              activeInstitution === 'wroclaw'
                ? 'bg-[#EAE0D2] text-[#1A1A1A] border border-[#D5C7B3] shadow-xs'
                : 'text-[#6B635B] hover:bg-[#EFE8DC]'
            }`}
          >
            {t.tabs.wroclaw[currentLang]}
          </button>
          <button
            onClick={() => setActiveInstitution('padova')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
              activeInstitution === 'padova'
                ? 'bg-[#EAE0D2] text-[#1A1A1A] border border-[#D5C7B3] shadow-xs'
                : 'text-[#6B635B] hover:bg-[#EFE8DC]'
            }`}
          >
            {t.tabs.padova[currentLang]}
          </button>
        </div>

        {/* Projects Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FAF8F5] rounded-2xl border border-[#E5DACD] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="aspect-square overflow-hidden bg-[#EFE8DC] relative">
                <img
                  src={proj.image}
                  alt={proj.title[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#1A1817]/80 text-[#E6D7C3] backdrop-blur-xs text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {proj.type[currentLang]}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#8C7355] transition-colors leading-snug">
                    {proj.title[currentLang]}
                  </h3>
                  {proj.description && (
                    <p className="text-xs text-[#6B635B] leading-relaxed mt-2 line-clamp-3">
                      {proj.description[currentLang]}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-[#EAE3D9] flex items-center justify-between text-[11px] font-semibold text-[#8C7355]">
                  <span className="flex items-center gap-1">
                    <FolderGit2 className="w-3.5 h-3.5" /> Academic Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
