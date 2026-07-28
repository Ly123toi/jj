import React, { useState } from 'react';
import { Language, PortfolioSubcategory } from '../types';
import { translations } from '../data/translations';
import { portfolioCategories } from '../data/portfolioData';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface PortfolioSectionProps {
  currentLang: Language;
  onSelectSubcategory: (item: PortfolioSubcategory) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  currentLang,
  onSelectSubcategory,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('content');
  const t = translations.portfolio;

  const activeCategory =
    portfolioCategories.find((cat) => cat.id === activeCategoryId) || portfolioCategories[0];

  return (
    <section id="portfolio" className="py-24 bg-[#F5F0EB] text-[#2C2A29] border-b border-[#EAE3D9]">
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

        {/* Category Navigation Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-[#E0D7CB] pb-4">
          {portfolioCategories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-[#EAE0D2] text-[#1A1A1A] border border-[#D5C7B3] shadow-xs'
                    : 'bg-transparent text-[#6B635B] hover:bg-[#EFE8DC] hover:text-[#1A1A1A]'
                }`}
              >
                {cat.title[currentLang]}
              </button>
            );
          })}
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeCategory.subcategories.map((sub) => (
            <div
              key={sub.id}
              className="bg-[#FAF8F5] rounded-2xl border border-[#E5DACD] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#EFE8DC]">
                <img
                  src={sub.image}
                  alt={sub.title[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#8C7355] transition-colors">
                      {sub.title[currentLang]}
                    </h3>
                    <p className="text-xs text-[#8C7355] font-semibold mt-0.5">
                      {sub.description[currentLang]}
                    </p>
                  </div>

                  {/* Bullet items */}
                  <ul className="space-y-2 pt-2 border-t border-[#EAE3D9]">
                    {sub.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[#3D3A38] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#8C7355] shrink-0" />
                        <span>{bullet[currentLang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Full File Action Button */}
                <button
                  onClick={() => onSelectSubcategory(sub)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#EAE0D2] hover:bg-[#DFD3C1] text-[#2C2A29] text-xs font-semibold border border-[#D5C7B3] transition-all flex items-center justify-center gap-2 shadow-2xs group/btn"
                >
                  <FileText className="w-3.5 h-3.5 text-[#63513C]" />
                  <span>{t.viewFullFileBtn[currentLang]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#63513C] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
