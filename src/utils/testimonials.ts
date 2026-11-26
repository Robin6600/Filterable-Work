import type { BilingualText, Language } from '../types';
import { formatCountForLang } from './whatsapp';

export interface TestimonialItem {
  id: string;
  initials: string;
  clientName: BilingualText;
  role: BilingualText;
  businessName: BilingualText;
  sector: BilingualText;
  packageUsed: BilingualText;
  quote: BilingualText;
  impactMetric: BilingualText;
  impactTimeframe: BilingualText;
  impactNote: BilingualText;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'padma-green-valley',
    initials: 'TA',
    clientName: {
      bn: 'মোঃ তানভীর আহমেদ',
      en: 'Md. Tanvir Ahmed',
    },
    role: {
      bn: 'ব্যবস্থাপনা পরিচালক',
      en: 'Managing Director',
    },
    businessName: {
      bn: 'পদ্মা গ্রিন ভ্যালি ডেভেলপার্স, পাবনা',
      en: 'Padma Green Valley Developers, Pabna',
    },
    sector: {
      bn: 'রিয়েল এস্টেট ও হাউজিং',
      en: 'Real Estate & Housing',
    },
    packageUsed: {
      bn: 'মার্কেট ডমিনেন্স',
      en: 'Market Dominance',
    },
    quote: {
      bn: 'আগে ফেসবুকে সাধারণ পোস্ট দিয়ে শুধু অপ্রাসঙ্গিক কমেন্ট পেতাম। Groth Forge আমাদের প্রজেক্টের বাস্তব উন্নয়ন, রাস্তাঘাট ও ড্রোন ডকুমেন্টারি এত পরিষ্কারভাবে উপস্থাপন করেছে যে প্রবাসী ও স্থানীয় ক্রেতারা ভিডিও দেখেই সরাসরি সাইট ভিজিটের জন্য WhatsApp করছেন।',
      en: 'Before working with Groth Forge, our social posts mostly brought casual comments with little buyer intent. Their project documentaries and aerial site updates presented our real progress so credibly that both local and expatriate buyers now message us directly to schedule site visits.',
    },
    impactMetric: {
      bn: '+৩.২× সাইট ভিজিট ইনকোয়ারি',
      en: '+3.2× Qualified Site Visits',
    },
    impactTimeframe: {
      bn: 'প্রথম ৯০ দিনে',
      en: 'Within first 90 days',
    },
    impactNote: {
      bn: 'কোনো চটকদার প্রতিশ্রুতি নয়—স্বচ্ছ ডকুমেন্টারি ও নিয়মিত আপডেটে ক্রেতার আস্থা তৈরি হয়েছে।',
      en: 'Grounded progress films and consistent reels replaced buyer skepticism with direct inquiries.',
    },
  },
  {
    id: 'city-life-diagnostic',
    initials: 'FY',
    clientName: {
      bn: 'ডা. ফারহানা ইয়াসমিন',
      en: 'Dr. Farhana Yasmin',
    },
    role: {
      bn: 'পরিচালক (অপারেশনস)',
      en: 'Director of Operations',
    },
    businessName: {
      bn: 'সিটি লাইফ ডায়াগনস্টিক অ্যান্ড কনসালটেশন, পাবনা',
      en: 'City Life Diagnostic & Consultation, Pabna',
    },
    sector: {
      bn: 'হেলথকেয়ার ও ডায়াগনস্টিক',
      en: 'Healthcare & Diagnostics',
    },
    packageUsed: {
      bn: 'গ্রোথ অ্যাক্সিলারেটর',
      en: 'Growth Accelerator',
    },
    quote: {
      bn: 'হেলথকেয়ার সেক্টরে শালীনতা ও বিশ্বাসযোগ্যতা সবচেয়ে বড় বিষয়। Groth Forge-এর টিম আমাদের রোগীদের কোনো অসুবিধা না করেই আধুনিক ল্যাব ও টেস্ট প্রক্রিয়ার তথ্যবহুল ভিডিও তৈরি করেছে—প্রতিটি শুট শিডিউল ও ডেলিভারি ছিল একদম সময়মতো।',
      en: 'In healthcare, dignity and credibility come first. The Groth Forge crew filmed our diagnostic labs and patient guidance series without disrupting clinical flow—every script, shoot date, and delivery arrived exactly as promised.',
    },
    impactMetric: {
      bn: '২.৪× অ্যাপয়েন্টমেন্ট কল বৃদ্ধি',
      en: '2.4× Direct Appointment Calls',
    },
    impactTimeframe: {
      bn: '৪ মাসে ধারাবাহিক প্রবৃদ্ধি',
      en: 'Sustained over 4 months',
    },
    impactNote: {
      bn: 'পরিষ্কার পেশেন্ট-গাইড রিলস দেখে নতুন রোগীরা আস্থার সাথে হটলাইনে যোগাযোগ করছেন।',
      en: 'Clear patient-guide reels helped first-time families trust the facility before calling.',
    },
  },
  {
    id: 'heritage-timber-living',
    initials: 'RI',
    clientName: {
      bn: 'রফিকুল ইসলাম চৌধুরী',
      en: 'Rafiqul Islam Chowdhury',
    },
    role: {
      bn: 'স্বত্বাধিকারী',
      en: 'Proprietor',
    },
    businessName: {
      bn: 'হেরিটেজ টিম্বার অ্যান্ড লিভিং শোরুম',
      en: 'Heritage Timber & Living Showroom',
    },
    sector: {
      bn: 'ফ্ল্যাগশিপ ফার্নিচার শোরুম',
      en: 'Flagship Furniture Showroom',
    },
    packageUsed: {
      bn: 'গ্রোথ অ্যাক্সিলারেটর',
      en: 'Growth Accelerator',
    },
    quote: {
      bn: 'আগে ভাবতাম নিজস্ব ক্যামেরাম্যান ও এডিটর না রাখলে ভালো ভিডিও সম্ভব নয়। Groth Forge আমাদের শোরুমের কাঠের ফিনিশিং ও ডিজাইন সিনেমাটিক আলোয় তুলে ধরেছে—এতে মাসে বড় অঙ্কের স্টাফ খরচ যেমন বেঁচেছে, তেমনি শোরুমে সরাসরি ক্রেতা বেড়েছে।',
      en: 'We used to think consistent showroom videos required hiring a full in-house camera and editing staff. Groth Forge captured our wood craftsmanship with warm cinematic lighting—saving heavy monthly overhead while steadily increasing showroom walk-ins.',
    },
    impactMetric: {
      bn: '৭০,০০০+ টাকা মাসিক টিম সাশ্রয়',
      en: '70,000+ BDT Monthly Savings',
    },
    impactTimeframe: {
      bn: 'ইন-হাউস টিম ছাড়াই পূর্ণ প্রোডাকশন',
      en: 'Full studio output, zero payroll overhead',
    },
    impactNote: {
      bn: 'নিয়মিত প্রোডাক্ট রিলস দেখে গ্রাহকরা নির্দিষ্ট মডেলের ছবি নিয়ে সরাসরি শোরুমে আসছেন।',
      en: 'Customers now walk in showing specific furniture reels from the monthly series.',
    },
  },
  {
    id: 'pabna-merit-scholars',
    initials: 'KH',
    clientName: {
      bn: 'অধ্যক্ষ কামরুল হাসান',
      en: 'Principal Kamrul Hasan',
    },
    role: {
      bn: 'প্রতিষ্ঠাতা অধ্যক্ষ',
      en: 'Principal',
    },
    businessName: {
      bn: 'পাবনা মেরিট স্কলার্স ও ক্যাডেট একাডেমি',
      en: 'Pabna Merit Scholars & Cadet Academy',
    },
    sector: {
      bn: 'শিক্ষা ও ক্যাডেট একাডেমি',
      en: 'Education & Cadet Academy',
    },
    packageUsed: {
      bn: 'সিজনাল / ঈদ ও অ্যাডমিশন বুস্ট',
      en: 'Seasonal / Eid & Admission Boost',
    },
    quote: {
      bn: 'ভর্তি মৌসুমে অভিভাবকদের মন জয় করতে হলে শৃঙ্খলা ও শিক্ষার পরিবেশ চোখে দেখাতে হয়। ৩০ দিনের অ্যাডমিশন বুস্ট ক্যাম্পেইনে Groth Forge যে ক্যাম্পাস ফিল্ম ও রিলস বানিয়েছে, তা দেখে দূর-দূরান্ত থেকে অভিভাবকরা ক্যাম্পাস পরিদর্শনে এসেছেন।',
      en: 'Winning parents’ confidence during admission season requires showing real campus discipline and teaching standards. The campaign film and reels produced under the 30-day Admission Boost brought families from across the district to tour our campus.',
    },
    impactMetric: {
      bn: '+৬৫% ভর্তি মৌসুমে ক্যাম্পাস ভিজিট',
      en: '+65% Parent Campus Visits',
    },
    impactTimeframe: {
      bn: '৩০ দিনের ভর্তি ক্যাম্পেইনে',
      en: 'During 30-day admission sprint',
    },
    impactNote: {
      bn: 'লিখিত শিডিউল ও নির্দিষ্ট বাজেটের ভেতরেই পুরো ভর্তি মৌসুমের কনটেন্ট সম্পন্ন হয়েছে।',
      en: 'Complete intake campaign delivered on schedule under one clear fixed budget.',
    },
  },
  {
    id: 'ichamati-lounge',
    initials: 'SM',
    clientName: {
      bn: 'সাব্বির মাহমুদ',
      en: 'Sabbir Mahmud',
    },
    role: {
      bn: 'ম্যানেজিং পার্টনার',
      en: 'Managing Partner',
    },
    businessName: {
      bn: 'ইছামতী লাউঞ্জ অ্যান্ড ফ্যামিলি ডাইনিং',
      en: 'Ichamati Lounge & Family Dining',
    },
    sector: {
      bn: 'রেস্টুরেন্ট ও হসপিটালিটি',
      en: 'Restaurant & Hospitality',
    },
    packageUsed: {
      bn: 'ফাউন্ডেশন গ্রোথ',
      en: 'Foundation Growth',
    },
    quote: {
      bn: 'আমরা শুরু করেছিলাম ৮,৫০০ টাকার স্টার্টার ট্রায়াল দিয়ে, শুধু মান যাচাই করার জন্য। প্রথম ৪টি রিলসেই সন্ধ্যার ফ্যামিলি ডাইনিংয়ে এত ভালো সাড়া পেয়েছি যে আমরা সাথে সাথেই মাসিক ফাউন্ডেশন গ্রোথ প্যাকেজে যুক্ত হয়ে যাই।',
      en: 'We started with the 8,500 BDT Starter Trial simply to test the quality. The response to those first four ambience and food reels was so immediate for evening family dining that we upgraded straight into the monthly Foundation Growth retainer.',
    },
    impactMetric: {
      bn: '৮৫%+ উইকেন্ড টেবিল অকুপেন্সি',
      en: '85%+ Weekend Table Occupancy',
    },
    impactTimeframe: {
      bn: 'স্টার্টার ট্রায়াল থেকে মাসিক চুক্তিতে',
      en: 'Upgraded from Trial to Monthly',
    },
    impactNote: {
      bn: 'স্বল্প বাজেটের টেস্ট রান থেকেই স্পষ্ট ফলাফল দেখে দীর্ঘমেয়াদি সিদ্ধান্ত নেওয়া সহজ হয়েছে।',
      en: 'Low-risk trial run proved clear ROI before committing to an ongoing monthly plan.',
    },
  },
];

export const TESTIMONIALS_COPY = {
  eyebrow: {
    bn: 'ক্লায়েন্টদের বাস্তব অভিজ্ঞতা',
    en: 'Client Perspectives',
  },
  heading: {
    bn: 'যারা Groth Forge-এর সাথে কাজ করে ব্যবসায়িক আস্থা ও সাড়া পেয়েছেন',
    en: 'What Business Owners Say About Working with Groth Forge',
  },
  subtitle: {
    bn: 'রিয়েল এস্টেট, হেলথকেয়ার, শোরুম, শিক্ষা ও রেস্টুরেন্ট—বিভিন্ন খাতের উদ্যোক্তা ও পরিচালকদের সরাসরি অভিজ্ঞতা।',
    en: 'Direct feedback from managing directors, clinicians, showroom owners, and educators across Pabna’s key industries.',
  },
  carouselAriaLabel: {
    bn: 'ক্লায়েন্ট মতামত ক্যারোসেল',
    en: 'Client testimonials carousel',
  },
  prevLabel: {
    bn: 'পূর্ববর্তী মতামত দেখুন',
    en: 'Previous testimonial',
  },
  nextLabel: {
    bn: 'পরবর্তী মতামত দেখুন',
    en: 'Next testimonial',
  },
  impactLabel: {
    bn: 'ব্যবসায়িক প্রভাব',
    en: 'Measured Business Impact',
  },
  selectorAriaLabel: {
    bn: 'যেকোনো ক্লায়েন্টের অভিজ্ঞতা বেছে নিন',
    en: 'Select a client testimonial',
  },
};

export function getNextTestimonialIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current + 1) % total;
}

export function getPrevTestimonialIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current - 1 + total) % total;
}

export function formatSlideCounter(
  indexZeroBased: number,
  total: number,
  lang: Language
): string {
  const currentPadded = String(indexZeroBased + 1).padStart(2, '0');
  const totalPadded = String(total).padStart(2, '0');

  if (lang === 'en') {
    return `${currentPadded} / ${totalPadded}`;
  }

  const bnCurrent = currentPadded
    .split('')
    .map((d) => formatCountForLang(Number(d), 'bn'))
    .join('');
  const bnTotal = totalPadded
    .split('')
    .map((d) => formatCountForLang(Number(d), 'bn'))
    .join('');
  return `${bnCurrent} / ${bnTotal}`;
}
