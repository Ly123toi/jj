import React, { useState } from 'react';
import { Language, ResearchItem } from '../types';
import { translations } from '../data/translations';
import { researchItems } from '../data/researchData';
import { CheckCircle2, BookOpen, ArrowRight } from 'lucide-react';

interface ResearchSectionProps {
  currentLang: Language;
  onSelectResearch: (item: ResearchItem) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({
  currentLang,
  onSelectResearch,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'thesis' | 'media' | 'university'>('all');
  const t = translations.research;

  const filteredItems =
    activeTab === 'all'
      ? researchItems
      : researchItems.filter((item) => item.category === activeTab);

  return (
    <section id="research" className="py-24 bg-[#FAF8F5] text-[#2C2A29] border-b border-[#EAE3D9]">
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

        {/* Research Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-[#E0D7CB] pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
              activeTab === 'all'
                ? 'bg-[#EAE0D2] text-[#1A1A1A] border border-[#D5C7B3]'
                : 'text-[#6B635B] hover:bg-[#EFE8DC]'
            }`}
          >
            All Research
          </button>
          <button
            onClick={() => setActiveTab('thesis')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
              activeTab === 'thesis'
                ? 'bg-[#EAE0D2] text-[#1A1A1A] border border-[#D5C7B3]'
                : 'text-[#6B635B] hover:bg-[#EFE8DC]'
            }`}
          >
            {t.tabs.thesis[currentLang]}
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
              activeTab === 'media'
                ? 'bg-[#EAE0D2] text-[#1A1A1A] border border-[#D5C7B3]'
                : 'text-[#6B635B] hover:bg-[#EFE8DC]'
            }`}
          >
            {t.tabs.media[currentLang]}
          </button>
          <button
            onClick={() => setActiveTab('university')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
              activeTab === 'university'
                ? 'bg-[#EAE0D2] text-[#1A1A1A] border border-[#D5C7B3]'
                : 'text-[#6B635B] hover:bg-[#EFE8DC]'
            }`}
          >
            {t.tabs.university[currentLang]}
          </button>
        </div>

        {/* Research Cards */}
        <div className="space-y-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#F6F1EA] rounded-2xl border border-[#E5DACD] overflow-hidden p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Thumbnail Image */}
              <div className="md:col-span-5 rounded-xl overflow-hidden aspect-4/3 bg-[#EFE8DC]">
                <img
                  src={item.image}
                  alt={item.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Research Details */}
              <div className="md:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#EAE0D2] text-[#8C7355] text-[11px] font-bold tracking-wider uppercase">
                    {item.categoryLabel[currentLang]}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-[#1A1A1A] leading-snug">
                    {item.title[currentLang]}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-[#8C7355] font-semibold">
                      {item.subtitle[currentLang]}
                    </p>
                  )}
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2 border-t border-[#E0D7CB]">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#3D3A38] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8C7355] shrink-0" />
                      <span>{bullet[currentLang]}</span>
                    </div>
                  ))}
                </div>

                {/* View Abstract Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectResearch(item)}
                    className="px-5 py-2.5 rounded-xl bg-[#EAE0D2] hover:bg-[#DFD3C1] text-[#2C2A29] text-xs font-semibold border border-[#D5C7B3] transition-all inline-flex items-center gap-2 group shadow-2xs"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#63513C]" />
                    <span>{t.viewAbstractBtn[currentLang]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#63513C] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
