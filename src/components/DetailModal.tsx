import React from 'react';
import { Language, PortfolioSubcategory, ResearchItem } from '../types';
import { X, CheckCircle2, FileText, BookOpen, Award, ArrowUpRight } from 'lucide-react';

interface DetailModalProps {
  currentLang: Language;
  portfolioSubcategory?: PortfolioSubcategory | null;
  researchItem?: ResearchItem | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  currentLang,
  portfolioSubcategory,
  researchItem,
  onClose,
}) => {
  if (!portfolioSubcategory && !researchItem) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative max-w-3xl w-full bg-[#FAF8F5] text-[#2C2A29] rounded-2xl shadow-2xl border border-[#E5DACD] overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F5EFE6] border-b border-[#E0D7CB] shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8C7355] uppercase tracking-wider">
            {portfolioSubcategory ? (
              <>
                <FileText className="w-4 h-4" />
                <span>Full Portfolio Case Study</span>
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4" />
                <span>Research Abstract & Methodology</span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EAE0D2] text-[#4A4542] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Portfolio Case Study View */}
          {portfolioSubcategory && (
            <div className="space-y-6">
              <div className="aspect-16/9 rounded-xl overflow-hidden bg-[#EFE8DC]">
                <img
                  src={portfolioSubcategory.image}
                  alt={portfolioSubcategory.title[currentLang]}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-bold text-[#8C7355] uppercase tracking-widest block">
                  {portfolioSubcategory.description[currentLang]}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#1A1A1A] mt-1">
                  {portfolioSubcategory.fullFileContent?.title[currentLang] || portfolioSubcategory.title[currentLang]}
                </h3>
                <p className="text-xs text-[#6B635B] font-semibold mt-1">
                  {portfolioSubcategory.fullFileContent?.subtitle[currentLang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFE6] border border-[#E8DFC0]/80 space-y-2">
                <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                  Executive Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#4A4542] leading-relaxed">
                  {portfolioSubcategory.fullFileContent?.overview[currentLang]}
                </p>
              </div>

              {/* Implementation Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#8C7355] uppercase tracking-wider">
                  Key Deliverables & Execution
                </h4>
                <div className="space-y-2.5">
                  {portfolioSubcategory.fullFileContent?.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E5DACD]">
                      <CheckCircle2 className="w-4 h-4 text-[#8C7355] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#2C2A29] leading-relaxed">
                        {detail[currentLang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              {portfolioSubcategory.fullFileContent?.outcomes && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-[#8C7355] uppercase tracking-wider">
                    Measurable Results & Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {portfolioSubcategory.fullFileContent.outcomes.map((out, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#EAE0D2]/50 border border-[#D5C7B3] flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#8C7355] shrink-0" />
                        <span className="text-xs font-bold text-[#1A1A1A]">
                          {out[currentLang]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Research Abstract View */}
          {researchItem && (
            <div className="space-y-6">
              <div className="aspect-16/9 rounded-xl overflow-hidden bg-[#EFE8DC]">
                <img
                  src={researchItem.image}
                  alt={researchItem.title[currentLang]}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-bold text-[#8C7355] uppercase tracking-widest block">
                  {researchItem.categoryLabel[currentLang]}
                </span>
                <h3 className="text-2xl font-serif-title font-bold text-[#1A1A1A] mt-1">
                  {researchItem.title[currentLang]}
                </h3>
              </div>

              <div className="p-5 rounded-xl bg-[#F5EFE6] border border-[#E8DFC0]/80 space-y-3">
                <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                  Abstract Summary
                </h4>
                <p className="text-xs sm:text-sm text-[#3D3A38] leading-relaxed">
                  {researchItem.abstract[currentLang]}
                </p>
              </div>

              {/* Key Theories & Frameworks */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#8C7355] uppercase tracking-wider">
                  Theoretical Framework & Focus Areas
                </h4>
                <div className="space-y-2">
                  {researchItem.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E5DACD]">
                      <CheckCircle2 className="w-4 h-4 text-[#8C7355]" />
                      <span className="text-xs font-semibold text-[#1A1A1A]">
                        {b[currentLang]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

{/* Modal Footer */}
<div className="px-6 py-4 bg-[#F5EFE6] border-t border-[#E0D7CB] flex justify-end shrink-0">
  <a
    href="https://drive.google.com/drive/folders/16N8MBFUJQpxqsiSC_SEUrZh-qswO42Wb"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-2 rounded-xl bg-[#EAE0D2] hover:bg-[#DFD3C1] text-[#2C2A29] font-bold text-xs uppercase tracking-wider border border-[#D5C7B3] transition-all inline-flex items-center gap-2"
  >
    View Portfolio Files
    <ArrowUpRight className="w-4 h-4" />
  </a>
</div>
      </div>
    </div>
  </div>
);
};
