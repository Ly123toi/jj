import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreClick,
  onContactClick,
}) => {
  const t = translations.hero;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A1817] text-white py-20">
      {/* Background Image with Ambient Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background image.png"
          alt="Khanh Ly Vu background"
          className="w-full h-full object-cover object-top opacity-70 filter contrast-105 saturate-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141211] via-[#141211]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-transparent to-[#141211]/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest text-[#E6D7C3] uppercase">
            {t.badge[currentLang]}
          </div>

          {/* Main Name Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif-title font-bold tracking-tight text-white leading-none">
            {t.name}
          </h1>

          {/* Tags */}
          <p className="text-lg sm:text-xl font-medium text-[#EAE0D2] tracking-wide">
            {t.tags[currentLang]}
          </p>

          {/* Bio Description */}
          <p className="text-sm sm:text-base text-[#D0C8BD] leading-relaxed max-w-xl">
            {t.description[currentLang]}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="px-6 py-3 rounded-lg bg-[#EAE0D2] hover:bg-[#F2ECE3] text-[#1A1817] font-semibold text-sm transition-all duration-200 shadow-md flex items-center gap-2 group"
            >
              <span>{t.exploreBtn[currentLang]}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/15 text-white border border-white/25 font-semibold text-sm backdrop-blur-xs transition-all duration-200"
            >
              {t.contactBtn[currentLang]}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-6">
            <a
              href="https://www.linkedin.com/in/khanhlyvu1506"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all border border-white/10"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all border border-white/10"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:Snow.teddy.1998@gmail.com"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all border border-white/10"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
