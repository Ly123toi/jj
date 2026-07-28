import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Mail, Phone, Linkedin, MapPin, Download, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  onOpenCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onOpenCV,
}) => {
  const t = translations.contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contacts" className="py-24 bg-[#1C1A19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E6D7C3] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E6D7C3]"></span>
            {t.heading[currentLang]}
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-title font-bold text-white">
            {t.heading[currentLang]}
          </h2>
          <p className="text-sm sm:text-base text-[#D0C8BD]">
            {t.subheading[currentLang]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#252220] max-w-sm w-full aspect-3/4">
              <img
                src="/ChatGPT Image Jun 29, 2026, 10_54_02 AM.png"
                alt="Khanh Ly Vu Contact Portrait"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column: Contact info & Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-[#EAE0D2] text-[#1C1A19] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#D0C8BD] uppercase tracking-wider block">
                    {t.emailLabel[currentLang]}
                  </span>
                  <a
                    href="mailto:Snow.teddy.1998@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#EAE0D2] transition-colors break-all"
                  >
                    Snow.teddy.1998@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-[#EAE0D2] text-[#1C1A19] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#D0C8BD] uppercase tracking-wider block">
                    {t.phoneLabel[currentLang]}
                  </span>
                  <a
                    href="tel:+393520099239"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#EAE0D2] transition-colors"
                  >
                    +393520099239
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-[#EAE0D2] text-[#1C1A19] shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#D0C8BD] uppercase tracking-wider block">
                    {t.linkedInLabel[currentLang]}
                  </span>
                  <a
                    href="https://www.linkedin.com/in/khanhlyvu1506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#EAE0D2] transition-colors truncate block"
                  >
                    www.linkedin.com/in/khanhlyvu1506
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-[#EAE0D2] text-[#1C1A19] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#D0C8BD] uppercase tracking-wider block">
                    {t.locationLabel[currentLang]}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {t.locationValue[currentLang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="flex justify-start">
              <button
                onClick={onOpenCV}
                className="px-6 py-3 rounded-xl bg-[#EAE0D2] hover:bg-[#F2ECE3] text-[#1C1A19] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <Download className="w-4 h-4 text-[#63513C]" />
                <span>{t.downloadCV[currentLang]}</span>
              </button>
            </div>

            {/* Interactive Form */}
            <form onSubmit={handleSubmit} className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-[#D0C8BD] uppercase tracking-wider block mb-1">
                    {t.formName[currentLang]}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/30 border border-white/15 text-white text-xs focus:outline-none focus:border-[#EAE0D2] transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#D0C8BD] uppercase tracking-wider block mb-1">
                    {t.formEmail[currentLang]}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/30 border border-white/15 text-white text-xs focus:outline-none focus:border-[#EAE0D2] transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#D0C8BD] uppercase tracking-wider block mb-1">
                  {t.formMessage[currentLang]}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/30 border border-white/15 text-white text-xs focus:outline-none focus:border-[#EAE0D2] transition-colors resize-none"
                  placeholder="How can we collaborate on media research or content strategy?"
                ></textarea>
              </div>

              {isSubmitted && (
                <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.successMsg[currentLang]}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#EAE0D2] hover:bg-[#F2ECE3] text-[#1C1A19] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#63513C]" />
                <span>{t.sendBtn[currentLang]}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
