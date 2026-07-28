import React, { useState } from 'react';
import { Language, ArtworkItem } from '../types';
import { translations } from '../data/translations';
import { artworkList } from '../data/artworkData';
import { CheckCircle2, Award, GraduationCap, Wrench, Heart, Palette, Sparkles, X, ChevronRight } from 'lucide-react';

interface AboutDetailedViewProps {
  currentLang: Language;
  onClose?: () => void;
  isModal?: boolean;
}

export const AboutDetailedView: React.FC<AboutDetailedViewProps> = ({
  currentLang,
  onClose,
  isModal = false,
}) => {
  const t = translations.aboutDetailed;
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);

  const containerClasses = isModal
    ? 'bg-[#FAF8F5] p-6 sm:p-10 rounded-2xl max-w-6xl mx-auto shadow-2xl overflow-y-auto max-h-[90vh]'
    : 'py-20 bg-[#FAF8F5] border-b border-[#EAE3D9]';

  return (
    <div className={containerClasses}>
      {/* Modal Close button if inside modal */}
      {isModal && onClose && (
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#EAE3D9]">
          <span className="text-xs font-bold tracking-widest text-[#8C7355] uppercase">
            {t.subtitle[currentLang]}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE8DC] text-[#4A4542] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#1A1A1A]">
          {t.title[currentLang]}
        </h2>
        <p className="text-base text-[#6B635B] italic font-serif">
          {t.subtitle[currentLang]}
        </p>
      </div>

      {/* 1. EDUCATION SECTION */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#E0D7CB]">
          <GraduationCap className="w-5 h-5 text-[#8C7355]" />
          <h3 className="text-sm font-bold tracking-widest text-[#8C7355] uppercase">
            {t.educationHeading[currentLang]}
          </h3>
        </div>

        {/* Education Timeline Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {t.educationItems.map((edu, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#DCD2C4] shadow-md bg-[#EFE8DC] group-hover:scale-105 transition-transform duration-300 flex items-center justify-center p-1">
                <img
                  src={[
                    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=300&q=80',
                    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=300&q=80',
                    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300&q=80',
                    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80',
                    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=300&q=80',
                  ][idx % 5]}
                  alt="Education institution"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xs font-bold text-[#8C7355] bg-[#EFE8DC] px-2.5 py-0.5 rounded-full">
                {edu.period}
              </span>
              <p className="text-xs text-[#2C2A29] font-medium leading-tight">
                {edu.desc[currentLang]}
              </p>
            </div>
          ))}
        </div>

        {/* Honors & Scholarships List */}
        <div className="bg-[#F4EFE6] rounded-2xl p-6 sm:p-8 border border-[#E8DFC0]/70 space-y-4">
          {t.honors.map((honor, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#8C7355] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#2C2A29] font-medium leading-relaxed">
                {honor[currentLang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. SKILLS & TOOLS SECTION */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#E0D7CB]">
          <Wrench className="w-5 h-5 text-[#8C7355]" />
          <h3 className="text-sm font-bold tracking-widest text-[#8C7355] uppercase">
            {t.skillsHeading[currentLang]}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Progress Bars */}
          <div className="space-y-6">
            {t.skillsBars.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#1A1A1A]">
                  <span>{skill.name[currentLang]}</span>
                  <span className="text-[#8C7355]">{skill.percent}%</span>
                </div>
                <div className="w-full h-2.5 bg-[#EAE0D2] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#8C7355] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages & Tools Checklists */}
          <div className="space-y-6">
            {/* Languages */}
            <div className="bg-[#FAF8F5] border border-[#E2D8C9] p-5 rounded-xl space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-[#8C7355] uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Languages
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#2C2A29]">
                {t.languagesList[currentLang].map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#EFE8DC]/60 px-3 py-1.5 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]"></span>
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools List */}
            <div className="space-y-3">
              {t.toolsList.map((tool, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7355] shrink-0 mt-1" />
                  <p className="text-xs text-[#3D3A38] leading-relaxed">
                    {tool[currentLang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. INTERESTS & HOBBIES SECTION */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#E0D7CB]">
          <Heart className="w-5 h-5 text-[#8C7355]" />
          <h3 className="text-sm font-bold tracking-widest text-[#8C7355] uppercase">
            {t.interestsHeading[currentLang]}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.interestCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 bg-[#F5EFE6] p-6 rounded-2xl border border-[#E5DACD]">
              {/* Dark Circular Badge */}
              <div className="w-24 h-24 rounded-full bg-[#1A1817] text-white flex items-center justify-center p-3 shadow-md border-2 border-[#8C7355]">
                <span className="text-xs font-bold leading-tight uppercase tracking-wider">
                  {cat.title[currentLang]}
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-2 text-left w-full pt-2">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2 text-xs text-[#2C2A29] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C7355] shrink-0" />
                    <span>{item[currentLang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 4. DEGREES & CERTIFICATES SECTION */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#E0D7CB]">
          <Award className="w-5 h-5 text-[#8C7355]" />
          <h3 className="text-sm font-bold tracking-widest text-[#8C7355] uppercase">
            {t.degreesHeading[currentLang]}
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {t.degreesList.map((deg, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-[#E5DACD] shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center space-y-3 group">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#DCD2C4] flex items-center justify-center p-2 group-hover:border-[#8C7355] transition-colors">
                <Award className="w-8 h-8 text-[#8C7355]" />
              </div>
              <h4 className="text-xs font-bold text-[#1A1A1A] leading-snug">
                {deg.title[currentLang]}
              </h4>
              <span className="text-[11px] text-[#8C7355] font-semibold">
                {deg.issuer}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. MY ARTWORK SECTION */}
      <div>
        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#E0D7CB]">
          <Palette className="w-5 h-5 text-[#8C7355]" />
          <h3 className="text-sm font-bold tracking-widest text-[#8C7355] uppercase">
            {t.artworkHeading[currentLang]}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworkList.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArtwork(art)}
              className="group relative rounded-xl overflow-hidden border border-[#E5DACD] bg-[#EFE8DC] aspect-square cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={art.image}
                alt={art.title[currentLang]}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-[#E6D7C3] uppercase tracking-widest">
                  {art.category}
                </span>
                <h4 className="text-sm font-bold">
                  {art.title[currentLang]}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artwork Lightbox Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#1A1817] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-2 bg-black flex items-center justify-center max-h-[75vh]">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title[currentLang]}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-6 bg-[#252321] flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-[#E6D7C3] uppercase tracking-widest">
                  {selectedArtwork.category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedArtwork.title[currentLang]}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
