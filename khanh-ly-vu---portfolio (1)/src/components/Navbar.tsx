import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ChevronDown, Globe, Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenCV: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenCV,
  activeSection,
}) => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = translations.nav;

  const languages: { code: Language; label: string }[] = [
    { code: 'ENG', label: 'ENG' },
    { code: 'IT', label: 'IT' },
    { code: 'VN', label: 'VN' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { id: 'home', label: t.home[currentLang] },
    { id: 'about', label: t.about[currentLang] },
    { id: 'portfolio', label: t.portfolio[currentLang] },
    { id: 'research', label: t.research[currentLang] },
    { id: 'projects', label: t.projects[currentLang] },
    { id: 'publications', label: t.publications[currentLang] },
    { id: 'contacts', label: t.contacts[currentLang] },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE3D9] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Signature Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group flex items-center gap-2 transition-colors"
        >
          <span className="font-signature text-3xl sm:text-4xl text-[#1A1A1A] group-hover:text-[#8C7355] transition-colors leading-none pt-1">
            Khanh Ly Vu
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-all duration-200 py-1.5 px-2 rounded-md ${
                  isActive
                    ? 'text-[#1A1A1A] font-semibold bg-[#EFE8DC]/80'
                    : 'text-[#5C5550] hover:text-[#1A1A1A] hover:bg-[#F2EDE4]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Language Selector & CV Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Custom Language Dropdown (exact match to PDF pages 1, 5-12, 37-40) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCD3C7] bg-[#FAF8F5] text-[#2C2A29] text-xs font-semibold hover:border-[#B5A490] hover:bg-[#F2ECE3] transition-all shadow-xs"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#8C7355]" />
              <span>{currentLang}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#8C7355] transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Selection Card Dropdown */}
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-[#E8DFC0]/60 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex flex-col gap-1">
                  {languages.map((lang) => {
                    const isSelected = currentLang === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#EFE5D8] text-[#1A1A1A] font-bold shadow-xs'
                            : 'text-[#4A4542] hover:bg-[#F7F3EE] hover:text-[#1A1A1A]'
                        }`}
                      >
                        <span>{lang.label}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]"></span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Download CV CTA Button */}
          <button
            onClick={onOpenCV}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#EAE0D2] hover:bg-[#DFD3C1] text-[#2C2A29] text-xs font-semibold border border-[#D5C7B3] transition-all shadow-xs hover:shadow-sm active:scale-98"
          >
            <Download className="w-3.5 h-3.5 text-[#63513C]" />
            <span>{t.downloadCV[currentLang]}</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2C2A29] hover:bg-[#F2ECE3] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE3D9] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-[#2C2A29] hover:bg-[#EFE8DC] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#EAE3D9]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#EAE0D2] text-[#2C2A29] text-xs font-semibold border border-[#D5C7B3]"
            >
              <Download className="w-4 h-4 text-[#63513C]" />
              <span>{t.downloadCV[currentLang]}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
