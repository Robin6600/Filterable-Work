export type Language = 'bn' | 'en';
export type Theme = 'dark' | 'light';

export type PackageGroup = 'short-term' | 'monthly';
export type PackageFilterTab = 'all' | 'short-term' | 'monthly';

export interface BilingualText {
  bn: string;
  en: string;
}

export interface PackageItem {
  id: string;
  group: PackageGroup;
  tierOrder: number;
  priceBdt: number;
  name: BilingualText;
  subtitle: BilingualText;
  priceDisplay: BilingualText;
  billingCycle: BilingualText;
  idealFor: BilingualText;
  highlight?: 'popular' | 'flagship';
  highlightLabel?: BilingualText;
  deliverables: {
    bn: string[];
    en: string[];
  };
}

export interface SpecialDemandItem {
  id: string;
  code: string;
  title: BilingualText;
  summary: BilingualText;
  pricingBasis: BilingualText;
  scopeFactors: {
    bn: string[];
    en: string[];
  };
}

export type GalleryCategory =
  | 'all'
  | 'corporate-real-estate'
  | 'healthcare-education'
  | 'retail-fashion-hospitality';

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, 'all'>;
  image: string;
  title: BilingualText;
  sectorLabel: BilingualText;
  format: BilingualText;
  outcome: BilingualText;
  description: BilingualText;
}

export interface ContactFormData {
  businessName: string;
  phone: string;
  sector: string;
  packageInterest: string;
  message: string;
}

export interface ContactFormErrors {
  businessName?: string;
  phone?: string;
  sector?: string;
  message?: string;
}
