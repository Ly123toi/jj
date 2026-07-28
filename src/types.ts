export type Language = 'ENG' | 'IT' | 'VN';

export interface TranslationText {
  ENG: string;
  IT: string;
  VN: string;
}

export interface PortfolioSubcategory {
  id: string;
  title: TranslationText;
  description: TranslationText;
  image: string;
  bullets: TranslationText[];
  fullFileContent?: {
    title: TranslationText;
    subtitle: TranslationText;
    overview: TranslationText;
    details: TranslationText[];
    outcomes: TranslationText[];
  };
}

export interface PortfolioCategory {
  id: string;
  title: TranslationText;
  subcategories: PortfolioSubcategory[];
}

export interface ResearchItem {
  id: string;
  category: 'thesis' | 'media' | 'university';
  categoryLabel: TranslationText;
  title: TranslationText;
  subtitle?: TranslationText;
  image: string;
  bullets: TranslationText[];
  abstract: TranslationText;
}

export interface ProjectItem {
  id: string;
  institution: 'hanoi' | 'wroclaw' | 'padova';
  institutionName: TranslationText;
  type: TranslationText;
  title: TranslationText;
  description?: TranslationText;
  image: string;
}

export interface CertificateItem {
  id: string;
  title: TranslationText;
  issuer: string;
  image?: string;
}

export interface ArtworkItem {
  id: string;
  title: TranslationText;
  category: string;
  image: string;
}
