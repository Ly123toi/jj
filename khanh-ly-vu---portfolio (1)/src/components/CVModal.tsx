import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Globe, GraduationCap, Briefcase, Award } from 'lucide-react';

interface CVModalProps {
  currentLang: Language;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ currentLang, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-4xl w-full bg-[#FAF8F5] text-[#2C2A29] rounded-2xl shadow-2xl border border-[#E5DACD] overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F5EFE6] border-b border-[#E0D7CB] shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#8C7355] uppercase tracking-wider">
              Curriculum Vitae — Khanh Ly Vu ({currentLang})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-[#D5C7B3] hover:bg-[#FAF8F5] text-[#2C2A29] text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-[#8C7355]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#EAE0D2] text-[#4A4542] transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 flex-1 bg-white print:p-0">
          {/* Header Block */}
          <div className="border-b border-[#EAE3D9] pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#1A1A1A]">
                Khanh Ly Vu
              </h1>
              <p className="text-sm font-semibold text-[#8C7355] uppercase tracking-widest mt-1">
                {translations.hero.badge[currentLang]}
              </p>
            </div>

            <div className="space-y-1 text-xs text-[#5C5550]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8C7355]" />
                <span>Snow.teddy.1998@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8C7355]" />
                <span>+39 352 009 9239</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-[#8C7355]" />
                <span>linkedin.com/in/khanhlyvu1506</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8C7355]" />
                <span>{translations.contact.locationValue[currentLang]}</span>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#8C7355] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8C7355]"></span> Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#3D3A38] leading-relaxed">
              {translations.hero.description[currentLang]}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#8C7355] flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education History
            </h2>
            <div className="space-y-3 pl-2 border-l-2 border-[#EAE3D9]">
              {translations.aboutDetailed.educationItems.map((item, idx) => (
                <div key={idx} className="pl-3 space-y-0.5">
                  <div className="flex justify-between items-center text-xs font-bold text-[#1A1A1A]">
                    <span>{item.desc[currentLang]}</span>
                    <span className="text-[#8C7355]">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Scholarships */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#8C7355] flex items-center gap-2">
              <Award className="w-4 h-4" /> Honors & Academic Achievements
            </h2>
            <div className="grid grid-cols-1 gap-2 text-xs text-[#3D3A38]">
              {translations.aboutDetailed.honors.map((h, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EAE3D9]">
                  • {h[currentLang]}
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies & Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#8C7355] flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {translations.aboutDetailed.skillsBars.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EAE3D9]">
                  <span className="font-bold block text-[#1A1A1A]">{s.name[currentLang]}</span>
                  <span className="text-[10px] text-[#8C7355] font-semibold">{s.percent}% Proficiency</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#8C7355] flex items-center gap-2">
              <Globe className="w-4 h-4" /> Languages
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-[#2C2A29]">
              {translations.aboutDetailed.languagesList[currentLang].map((l, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-[#EAE0D2]/60 border border-[#D5C7B3]">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
