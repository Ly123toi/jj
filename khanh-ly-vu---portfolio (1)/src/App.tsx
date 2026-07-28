import React, { useState, useEffect } from 'react';
import { Language, PortfolioSubcategory, ResearchItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AboutDetailedView } from './components/AboutDetailedView';
import { PortfolioSection } from './components/PortfolioSection';
import { ResearchSection } from './components/ResearchSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ContactSection } from './components/ContactSection';
import { DetailModal } from './components/DetailModal';
import { CVModal } from './components/CVModal';
import { ArrowUp, X } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ENG');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioSubcategory | null>(null);
  const [selectedResearchItem, setSelectedResearchItem] = useState<ResearchItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'portfolio', 'research', 'projects', 'publications', 'contacts'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans-body selection:bg-[#E6D7C3] selection:text-[#1A1A1A]">
      {/* Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenCV={() => setIsCVModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onExploreClick={() => scrollToSection('portfolio')}
          onContactClick={() => scrollToSection('contacts')}
        />

        {/* Short Executive About Section */}
        <AboutSection
          currentLang={currentLang}
          onMoreAboutClick={() => setIsAboutModalOpen(true)}
        />

        {/* Portfolio Showcase */}
        <PortfolioSection
          currentLang={currentLang}
          onSelectSubcategory={(sub) => setSelectedPortfolioItem(sub)}
        />

        {/* Academic Research Section */}
        <ResearchSection
          currentLang={currentLang}
          onSelectResearch={(res) => setSelectedResearchItem(res)}
        />

        {/* University Projects Section */}
        <ProjectsSection currentLang={currentLang} />

        {/* Publications Section */}
        <PublicationsSection currentLang={currentLang} />

        {/* Contact Section */}
        <ContactSection
          currentLang={currentLang}
          onOpenCV={() => setIsCVModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <footer className="bg-[#121110] text-[#A39B92] py-12 border-t border-white/10 text-xs text-center space-y-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-medium">
            © {new Date().getFullYear()} <span className="text-white font-bold">Khanh Ly Vu</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[#A39B92]">
            <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#EAE0D2] text-[#1C1A19] shadow-lg border border-[#D5C7B3] hover:bg-[#F2ECE3] transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* MODAL 1: Full Detailed About View Modal */}
      {isAboutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-6xl w-full">
            <AboutDetailedView
              currentLang={currentLang}
              isModal={true}
              onClose={() => setIsAboutModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* MODAL 2: Full Case Study / Research Abstract Modal */}
      <DetailModal
        currentLang={currentLang}
        portfolioSubcategory={selectedPortfolioItem}
        researchItem={selectedResearchItem}
        onClose={() => {
          setSelectedPortfolioItem(null);
          setSelectedResearchItem(null);
        }}
      />

      {/* MODAL 3: Download / Printable CV Modal */}
      {isCVModalOpen && (
        <CVModal
          currentLang={currentLang}
          onClose={() => setIsCVModalOpen(false)}
        />
      )}
    </div>
  );
}
