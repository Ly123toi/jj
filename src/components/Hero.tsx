import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A1817] text-white py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background image.png"
          alt="Khanh Ly Vu background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest text-[#E6D7C3] uppercase"
          >
            {t.badge[currentLang]}
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-serif-title font-bold tracking-tight text-white leading-none"
          >
            {t.name}
          </motion.h1>

          {/* Tags */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg sm:text-xl font-medium text-[#EAE0D2] tracking-wide"
          >
            {t.tags[currentLang]}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-sm sm:text-base text-[#D0C8BD] leading-relaxed max-w-xl"
          >
            {t.description[currentLang]}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={onExploreClick}
              className="px-6 py-3 rounded-lg bg-[#EAE0D2] hover:bg-[#F2ECE3] text-[#1A1817] font-semibold text-sm transition-all duration-200 shadow-md flex items-center gap-2 group"
            >
              <span>{t.exploreBtn[currentLang]}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/15 text-white border border-white/25 font-semibold text-sm backdrop-blur-md transition-all duration-200"
            >
              {t.contactBtn[currentLang]}
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center gap-3 pt-6"
          >
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
