import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Newspaper, ExternalLink, FileSpreadsheet } from 'lucide-react';

interface PublicationsSectionProps {
  currentLang: Language;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ currentLang }) => {
  const t = translations.publications;

  const publicationsData = [
    {
      id: 'pub-1',
      title: {
        ENG: 'Digital Media and Disability Representation in European Social Networks',
        IT: 'Media digitali e rappresentazione della disabilità nei social network europei',
        VN: 'Truyền thông số và sự thể hiện của người khuyết tật trên mạng xã hội Châu Âu',
      },
      publisher: 'Journal of Media & Communication Studies (2025)',
      description: {
        ENG: 'Peer-reviewed research investigating self-advocacy and media frames across European Facebook digital communities.',
        IT: 'Ricerche peer-reviewed sull’auto-rappresentazione e i frame mediatici nelle comunità Facebook europee.',
        VN: 'Nghiên cứu phản biện về sự tự thể hiện và khuôn mẫu truyền thông trong các cộng đồng Facebook châu Âu.',
      },
    },
    {
      id: 'pub-2',
      title: {
        ENG: 'Inclusive Communication Frameworks for Digital Storytelling',
        IT: 'Framework di comunicazione inclusiva per lo storytelling digitale',
        VN: 'Khung truyền thông hòa nhập trong kể chuyện số',
      },
      publisher: 'Erasmus+ Academic Proceedings (2024)',
      description: {
        ENG: 'Handbook and methodological guidelines for localized content strategy and cross-cultural communication campaigns.',
        IT: 'Manuale e linee guida metodologiche per la strategia di contenuti localizzati e campagne interculturali.',
        VN: 'Cẩm nang và hướng dẫn phương pháp luận chiến lược nội dung bản địa hóa và truyền thông đa văn hóa.',
      },
    },
  ];

  return (
    <section id="publications" className="py-24 bg-[#FAF8F5] text-[#2C2A29] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
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

        {/* Publications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publicationsData.map((pub) => (
            <div
              key={pub.id}
              className="bg-[#F6F1EA] p-8 rounded-2xl border border-[#E5DACD] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#EAE0D2] text-[#8C7355]">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#8C7355] uppercase tracking-wider">
                    {pub.publisher}
                  </span>
                </div>

                <h3 className="text-xl font-serif-title font-bold text-[#1A1A1A] leading-snug">
                  {pub.title[currentLang]}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A4542] leading-relaxed">
                  {pub.description[currentLang]}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E0D7CB] flex items-center justify-between text-xs font-semibold text-[#8C7355]">
                <span className="flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4" /> Academic PDF
                </span>
                <span className="flex items-center gap-1 text-[#2C2A29] hover:text-[#8C7355] transition-colors cursor-pointer">
                  Read Article <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
