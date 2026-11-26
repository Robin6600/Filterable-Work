import type { BilingualText, Language } from '../types';
import { buildWhatsAppUrl, formatCountForLang } from './whatsapp';

export type RoiSectorId =
  | 'real-estate'
  | 'healthcare-education'
  | 'showroom-furniture'
  | 'retail-fashion'
  | 'hospitality-local';

export type InvestmentTierBdt = 15000 | 25000 | 40000 | 60000;
export type ConsistencyHorizon = 1 | 3 | 6;

export interface RoiSectorConfig {
  id: RoiSectorId;
  label: BilingualText;
  inquiryUnit: BilingualText;
  reachMultiplier: number;
  inquiryBaseMin: number;
  inquiryBaseMax: number;
  insight: BilingualText;
}

export interface InvestmentTierConfig {
  amountBdt: InvestmentTierBdt;
  packageId: string;
  packageName: BilingualText;
  priceLabel: BilingualText;
  assetsSummary: BilingualText;
  reachMinK: number;
  reachMaxK: number;
  inquiryScale: number;
}

export interface RoiProjection {
  sector: RoiSectorConfig;
  tier: InvestmentTierConfig;
  horizon: ConsistencyHorizon;
  monthlyReachMinK: number;
  monthlyReachMaxK: number;
  monthlyInquiriesMin: number;
  monthlyInquiriesMax: number;
  inHouseBenchmarkBdt: number;
  monthlySavingsBdt: number;
  savingsPercent: number;
  reachDisplay: string;
  inquiriesDisplay: string;
  savingsDisplay: string;
  savingsPercentDisplay: string;
}

export const IN_HOUSE_MONTHLY_BENCHMARK_BDT = 95000;

export const ROI_SECTORS: RoiSectorConfig[] = [
  {
    id: 'real-estate',
    label: { bn: 'রিয়েল এস্টেট ও কর্পোরেট', en: 'Real Estate & Corporate' },
    inquiryUnit: { bn: 'সাইট ভিজিট ও কোয়ালিফাইড লিড / মাস', en: 'site visits & qualified leads / mo' },
    reachMultiplier: 0.9,
    inquiryBaseMin: 18,
    inquiryBaseMax: 34,
    insight: {
      bn: 'বড় বিনিয়োগের ক্রেতারা নিয়মিত প্রজেক্ট আপডেট ও ডকুমেন্টারি দেখে আস্থা পান—ফলে সরাসরি সাইট ভিজিট ও প্রবাসী ক্রেতার কল বাড়ে।',
      en: 'High-ticket property buyers rely on visible site progress and authoritative films before scheduling site visits or calls.',
    },
  },
  {
    id: 'healthcare-education',
    label: { bn: 'হসপিটাল, ডায়াগনস্টিক ও শিক্ষা', en: 'Healthcare & Education' },
    inquiryUnit: { bn: 'অ্যাপয়েন্টমেন্ট ও ভর্তি অনুসন্ধান / মাস', en: 'appointments & admission inquiries / mo' },
    reachMultiplier: 1.05,
    inquiryBaseMin: 40,
    inquiryBaseMax: 75,
    insight: {
      bn: 'পরিচ্ছন্ন ফ্যাসিলিটি, বিশেষজ্ঞ সেবা ও সাফল্যের গল্প নিয়মিত প্রকাশ করলে অভিভাবক ও রোগীদের সিদ্ধান্ত নেওয়া অনেক সহজ হয়।',
      en: 'Consistent facility tours, specialist introductions, and student outcomes earn family confidence before they ever step in.',
    },
  },
  {
    id: 'showroom-furniture',
    label: { bn: 'ফার্নিচার ও ফ্ল্যাগশিপ শোরুম', en: 'Furniture & Flagship Showrooms' },
    inquiryUnit: { bn: 'শোরুম ভিজিট ও ইনবক্স ইনকোয়ারি / মাস', en: 'showroom visits & inbox inquiries / mo' },
    reachMultiplier: 1.15,
    inquiryBaseMin: 55,
    inquiryBaseMax: 105,
    insight: {
      bn: 'প্রোডাক্টের ফিনিশিং, ডিজাইন ও অফার সিনেমাটিক রিলসে দেখালে অনলাইন দর্শক সরাসরি শোরুমে এসে কিনতে আগ্রহী হন।',
      en: 'Cinematic close-ups of craftsmanship and showroom offers bridge the gap between mobile scrolling and in-store purchases.',
    },
  },
  {
    id: 'retail-fashion',
    label: { bn: 'রিটেইল শপ ও ফ্যাশন হাউস', en: 'Retail Shops & Fashion Stores' },
    inquiryUnit: { bn: 'অর্ডার মেসেজ ও দোকানে ক্রেতা / মাস', en: 'order messages & store walk-ins / mo' },
    reachMultiplier: 1.25,
    inquiryBaseMin: 75,
    inquiryBaseMax: 140,
    insight: {
      bn: 'নতুন কালেকশন ও সিজনাল অফার নিয়মিত রিলস আকারে এলে স্থানীয় ক্রেতাদের কাছে আপনার দোকান সবসময় প্রথম পছন্দ থাকে।',
      en: 'Regular collection drops and crisp lookbook reels keep local shoppers messaging and visiting week after week.',
    },
  },
  {
    id: 'hospitality-local',
    label: { bn: 'রেস্টুরেন্ট, রিসোর্ট ও কোচিং', en: 'Restaurants, Resorts & Local Services' },
    inquiryUnit: { bn: 'বুকিং কল ও সরাসরি অতিথি / মাস', en: 'bookings, calls & direct visits / mo' },
    reachMultiplier: 1.3,
    inquiryBaseMin: 65,
    inquiryBaseMax: 125,
    insight: {
      bn: 'পরিবেশ, খাবারের উপস্থাপনা ও অতিথিদের অভিজ্ঞতা ভিজ্যুয়ালে তুলে ধরলে উইকেন্ড ও উৎসবের বুকিং দ্রুত বৃদ্ধি পায়।',
      en: 'Inviting twilight ambiance, culinary reels, and guest stories drive steady weekend tables and group bookings.',
    },
  },
];

export const ROI_INVESTMENT_TIERS: InvestmentTierConfig[] = [
  {
    amountBdt: 15000,
    packageId: 'foundation-growth',
    packageName: { bn: 'ফাউন্ডেশন গ্রোথ', en: 'Foundation Growth' },
    priceLabel: { bn: '১৫,০০০ টাকা / মাস', en: '15,000 BDT / mo' },
    assetsSummary: {
      bn: '৮টি রিলস · ১টি ব্র্যান্ড স্টোরি · ৬টি গ্রাফিক',
      en: '8 Reels · 1 Brand Story · 6 Graphics',
    },
    reachMinK: 25,
    reachMaxK: 45,
    inquiryScale: 1,
  },
  {
    amountBdt: 25000,
    packageId: 'growth-accelerator',
    packageName: { bn: 'গ্রোথ অ্যাক্সিলারেটর', en: 'Growth Accelerator' },
    priceLabel: { bn: '২৫,০০০ টাকা / মাস', en: '25,000 BDT / mo' },
    assetsSummary: {
      bn: '১৫টি রিলস · ২টি স্টোরি ভিডিও · ১২টি গ্রাফিক',
      en: '15 Reels · 2 Story Videos · 12 Graphics',
    },
    reachMinK: 55,
    reachMaxK: 95,
    inquiryScale: 1.85,
  },
  {
    amountBdt: 40000,
    packageId: 'market-dominance',
    packageName: { bn: 'মার্কেট ডমিনেন্স', en: 'Market Dominance' },
    priceLabel: { bn: '৪০,০০০ টাকা / মাস', en: '40,000 BDT / mo' },
    assetsSummary: {
      bn: '২৫+ রিলস · ৩টি ডকুমেন্টারি · ২০টি গ্রাফিক',
      en: '25+ Reels · 3 Documentaries · 20 Graphics',
    },
    reachMinK: 110,
    reachMaxK: 185,
    inquiryScale: 3.1,
  },
  {
    amountBdt: 60000,
    packageId: 'brand-dominance-plus',
    packageName: { bn: 'ব্র্যান্ড ডমিনেন্স প্লাস (৩৬০°)', en: 'Brand Dominance Plus (360°)' },
    priceLabel: { bn: '৬০,০০০ টাকা / মাস', en: '60,000 BDT / mo' },
    assetsSummary: {
      bn: '৩৫–৪০টি রিলস · ৪টি ডকুমেন্টারি · ২৫টি গ্রাফিক',
      en: '35–40 Reels · 4 Documentaries · 25 Graphics',
    },
    reachMinK: 180,
    reachMaxK: 310,
    inquiryScale: 4.5,
  },
];

const HORIZON_MULTIPLIER: Record<ConsistencyHorizon, number> = {
  1: 1,
  3: 1.35,
  6: 1.75,
};

function formatBdtWithCommas(amount: number, lang: Language): string {
  const formatted = amount.toLocaleString('en-US');
  if (lang === 'en') {
    return `${formatted} BDT`;
  }
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const bnStr = formatted.replace(/\d/g, (d) => bnDigits[Number(d)] ?? d);
  return `${bnStr} টাকা`;
}

function formatReachRange(minK: number, maxK: number, lang: Language): string {
  if (lang === 'bn') {
    return `${formatCountForLang(minK, 'bn')} হাজার – ${formatCountForLang(maxK, 'bn')} হাজার`;
  }
  return `${minK}K – ${maxK}K`;
}

export function calculateGrowthProjection(
  sectorId: RoiSectorId,
  investmentBdt: InvestmentTierBdt,
  horizon: ConsistencyHorizon,
  lang: Language
): RoiProjection {
  const sector =
    ROI_SECTORS.find((s) => s.id === sectorId) ?? ROI_SECTORS[0];
  const tier =
    ROI_INVESTMENT_TIERS.find((t) => t.amountBdt === investmentBdt) ??
    ROI_INVESTMENT_TIERS[1];

  const compound = HORIZON_MULTIPLIER[horizon];

  const monthlyReachMinK = Math.round(
    tier.reachMinK * sector.reachMultiplier * compound
  );
  const monthlyReachMaxK = Math.round(
    tier.reachMaxK * sector.reachMultiplier * compound
  );

  const monthlyInquiriesMin = Math.round(
    sector.inquiryBaseMin * tier.inquiryScale * compound
  );
  const monthlyInquiriesMax = Math.round(
    sector.inquiryBaseMax * tier.inquiryScale * compound
  );

  const monthlySavingsBdt = Math.max(
    0,
    IN_HOUSE_MONTHLY_BENCHMARK_BDT - tier.amountBdt
  );
  const savingsPercent = Math.round(
    (monthlySavingsBdt / IN_HOUSE_MONTHLY_BENCHMARK_BDT) * 100
  );

  const inquiriesDisplay =
    lang === 'bn'
      ? `${formatCountForLang(monthlyInquiriesMin, 'bn')} – ${formatCountForLang(monthlyInquiriesMax, 'bn')}`
      : `${monthlyInquiriesMin} – ${monthlyInquiriesMax}`;

  const savingsPercentDisplay =
    lang === 'bn'
      ? `${formatCountForLang(savingsPercent, 'bn')}%`
      : `${savingsPercent}%`;

  return {
    sector,
    tier,
    horizon,
    monthlyReachMinK,
    monthlyReachMaxK,
    monthlyInquiriesMin,
    monthlyInquiriesMax,
    inHouseBenchmarkBdt: IN_HOUSE_MONTHLY_BENCHMARK_BDT,
    monthlySavingsBdt,
    savingsPercent,
    reachDisplay: formatReachRange(monthlyReachMinK, monthlyReachMaxK, lang),
    inquiriesDisplay,
    savingsDisplay: formatBdtWithCommas(monthlySavingsBdt, lang),
    savingsPercentDisplay,
  };
}

export function buildRoiPlanWhatsAppUrl(
  projection: RoiProjection,
  lang: Language
): string {
  const horizonText =
    lang === 'bn'
      ? `${formatCountForLang(projection.horizon, 'bn')} মাস ধারাবাহিক গ্রোথ`
      : `${projection.horizon}-month consistency plan`;

  const message =
    lang === 'bn'
      ? [
          'আসসালামু আলাইকুম Groth Forge,',
          'আমি আপনাদের Growth ROI Estimator দেখে নিম্নলিখিত মাসিক পরিকল্পনাটি নিয়ে কথা বলতে চাই:',
          `ব্যবসার ধরন: ${projection.sector.label.bn}`,
          `মাসিক প্যাকেজ: ${projection.tier.packageName.bn} (${projection.tier.priceLabel.bn})`,
          `সময়কাল লক্ষ্য: ${horizonText}`,
          `প্রত্যাশিত মাসিক রিচ: ${projection.reachDisplay} | ইনকোয়ারি লক্ষ্য: ${projection.inquiriesDisplay}`,
          'দয়া করে শুরু করার প্রক্রিয়া ও শিডিউল জানান।',
        ].join('\n')
      : [
          'Hello Groth Forge,',
          'I used your Growth ROI Estimator and would like to discuss this monthly plan:',
          `Business Sector: ${projection.sector.label.en}`,
          `Monthly Package: ${projection.tier.packageName.en} (${projection.tier.priceLabel.en})`,
          `Target Horizon: ${horizonText}`,
          `Projected Monthly Reach: ${projection.reachDisplay} | Target Inquiries: ${projection.inquiriesDisplay}`,
          'Please share the onboarding process and available shoot dates.',
        ].join('\n');

  return buildWhatsAppUrl(message);
}
