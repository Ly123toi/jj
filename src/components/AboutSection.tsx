import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  onMoreAboutClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onMoreAboutClick,
}) => {
  const t = translations.aboutShort;

  return (
    <section id="about" className="py-24 bg-[#FAF8F5] text-[#2C2A29] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Signature */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#8C7355] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#8C7355]"></span>
              {t.badge[currentLang]}
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif-title font-bold tracking-tight text-[#1A1A1A]">
              {t.heading[currentLang]}
            </h2>

            <p className="text-sm sm:text-base text-[#4A4542] leading-relaxed">
              {t.text[currentLang]}
            </p>

            {/* Signature */}
            <div className="pt-2">
              <span className="font-signature text-4xl text-[#1A1A1A]">Khanh Ly Vu</span>
            </div>
          </div>

          {/* Center Column: Photo */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E0D7CB] bg-[#EFE8DC] aspect-3/4 max-w-xs w-full group">
              <img
                src="/photo.png"
                alt="Khanh Ly Vu working"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column: Key Career Milestones */}
          <div className="lg:col-span-4 space-y-8">
            {t.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-[#DCD2C4] space-y-1.5 group">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#FAF8F5] border-2 border-[#8C7355] group-hover:bg-[#8C7355] transition-colors"></div>
                <span className="text-xs font-bold text-[#8C7355] tracking-wider block">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-[#1A1A1A]">
                  {item.title[currentLang]}
                </h3>
                <p className="text-xs text-[#5C5550] leading-normal">
                  {item.desc[currentLang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed About Trigger Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={onMoreAboutClick}
            className="px-8 py-3.5 rounded-xl bg-[#EAE0D2] hover:bg-[#DFD3C1] text-[#2C2A29] font-semibold text-sm border border-[#D5C7B3] transition-all shadow-xs hover:shadow-md flex items-center gap-2 group"
          >
            <span>{t.moreBtn[currentLang]}</span>
            <ArrowUpRight className="w-4 h-4 text-[#63513C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
