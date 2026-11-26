import type { BilingualText, Language } from '../types';
import { buildWhatsAppUrl, formatCountForLang } from './whatsapp';

export type FaqCategory = 'all' | 'production' | 'logistics' | 'payment';

export interface FaqItem {
  id: string;
  category: Exclude<FaqCategory, 'all'>;
  categoryLabel: BilingualText;
  question: BilingualText;
  answer: BilingualText;
}

export interface FaqCategoryOption {
  id: FaqCategory;
  label: BilingualText;
}

export const FAQ_CATEGORIES: FaqCategoryOption[] = [
  { id: 'all', label: { bn: 'সব প্রশ্ন', en: 'All Topics' } },
  { id: 'production', label: { bn: 'সময় ও ডেলিভারি', en: 'Production Time' } },
  { id: 'logistics', label: { bn: 'শুটিং ও লজিস্টিকস', en: 'Shoot Logistics' } },
  { id: 'payment', label: { bn: 'পেমেন্ট ও নিয়ম', en: 'Payment Terms' } },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'delivery-timeline',
    category: 'production',
    categoryLabel: { bn: 'সময় ও ডেলিভারি', en: 'Production Time' },
    question: {
      bn: 'বুকিং করার কত দিনের মধ্যে আমরা চূড়ান্ত ভিডিও ও ডিজাইন হাতে পাব?',
      en: 'How long does it take from booking to receiving finished videos?',
    },
    answer: {
      bn: 'স্টার্টার ট্রায়াল (১৫ দিন) প্যাকেজে শুটিং শেষ হওয়ার ৩–৫ কর্মদিবসের মধ্যেই প্রথম দিকের রিলস ডেলিভারি শুরু হয় এবং ১৫ দিনের মধ্যে সম্পূর্ণ প্যাকেজ শেষ করা হয়। মাসিক প্যাকেজগুলোতে নির্ধারিত কনটেন্ট ক্যালেন্ডার অনুযায়ী প্রতি সপ্তাহে নিয়মিত ভিডিও ও ডিজাইন দেওয়া হয়, যাতে আপনার পেজ কখনো নিষ্ক্রিয় না থাকে। ব্র্যান্ড ফিল্ম বা ডকুমেন্টারির ক্ষেত্রে স্ক্রিপ্ট ও লোকেশন ভেদে সাধারণত ৭–১২ কর্মদিবস সময় লাগে।',
      en: 'For the 15-day Starter Trial, initial reels are delivered within 3–5 working days after the shoot and the entire batch finishes inside 15 days. Monthly retainer clients follow a structured content calendar with steady weekly deliveries so your channels stay active. Full Brand Films and documentaries typically take 7–12 working days depending on script depth and locations.',
    },
  },
  {
    id: 'script-revisions',
    category: 'production',
    categoryLabel: { bn: 'সময় ও ডেলিভারি', en: 'Production Time' },
    question: {
      bn: 'স্ক্রিপ্ট অনুমোদন এবং ভিডিও এডিটিং রিভিশন কীভাবে সম্পন্ন হয়?',
      en: 'How do script approval and edit revisions work?',
    },
    answer: {
      bn: 'শুটিংয়ে যাওয়ার আগেই আমাদের টিম সহজ ভাষায় স্ক্রিপ্ট ও কনসেপ্ট আপনার সাথে শেয়ার করে অনুমোদন নেয়। এডিটিংয়ের প্রথম ড্রাফট দেওয়ার পর অনুমোদিত স্ক্রিপ্টের ভেতরে যেকোনো প্রয়োজনীয় পরিবর্তন (যেমন—টেক্সট, ভয়েস, কালার বা পেসিং ঠিক করা) দ্রুততার সাথে ২৪–৪৮ ঘণ্টার মধ্যে সম্পন্ন করে চূড়ান্ত হাই-রেজোলিউশন ফাইল দেওয়া হয়।',
      en: 'Before filming, our team shares a clear script and shot outline for your sign-off. Once the first cut is ready, any required adjustments within the approved script—such as text overlays, pacing, color balance, or audio tweaks—are turned around within 24–48 hours before final high-resolution delivery.',
    },
  },
  {
    id: 'urgent-seasonal-campaigns',
    category: 'production',
    categoryLabel: { bn: 'সময় ও ডেলিভারি', en: 'Production Time' },
    question: {
      bn: 'ঈদ, শোরুম উদ্বোধন বা ভর্তি মৌসুমের জন্য জরুরি ক্যাম্পেইন কতদিন আগে বুক করা উচিত?',
      en: 'How early should we book for Eid, showroom launches, or admission seasons?',
    },
    answer: {
      bn: 'সিজনাল ক্যাম্পেইন বা গ্র্যান্ড ওপেনিংয়ের অন্তত ৭–১০ দিন আগে বুকিং নিশ্চিত করলে আমরা শুটিং স্লট, স্ক্রিপ্ট ও রিলিজ টাইমলাইন নিখুঁতভাবে সাজাতে পারি। তবে জরুরি প্রয়োজনে বিশেষ ইভেন্ট বা একই দিনে হাইলাইট রিলস ডেলিভারির সুবিধাও স্পেশাল ডিমান্ড চার্জের মাধ্যমে ব্যবস্থা করা যায়।',
      en: 'Booking at least 7–10 days ahead locks in priority shoot dates, script planning, and a smooth release schedule for festive peaks or admission intakes. If you have an urgent opening or event, same-day highlight reels and rapid turnarounds can also be arranged under Special Demand charges.',
    },
  },
  {
    id: 'equipment-and-crew',
    category: 'logistics',
    categoryLabel: { bn: 'শুটিং ও লজিস্টিকস', en: 'Shoot Logistics' },
    question: {
      bn: 'শুটিংয়ের জন্য আমাদের কি নিজস্ব ক্যামেরা, লাইট বা স্টুডিও থাকতে হবে?',
      en: 'Do we need our own camera gear, lighting, or studio space?',
    },
    answer: {
      bn: 'একেবারেই না। Groth Forge নিজস্ব সিনেমা ক্যামেরা, প্রফেশনাল লাইটিং, পরিষ্কার অডিও সেটআপ, স্ক্রিপ্টরাইটার, এডিটর ও ডিজাইনারসহ সম্পূর্ণ প্রোডাকশন টিম নিয়ে সরাসরি আপনার শোরুম, হসপিটাল, ক্যাম্পাস, প্রজেক্ট সাইট বা দোকানে গিয়ে শুট করে। আপনার কোনো ইন-হাউস স্টাফ বা যন্ত্রপাতি কেনার ঝামেলা নেই।',
      en: 'Not at all. Groth Forge brings our complete cinema camera kit, professional lighting, audio gear, scriptwriters, editors, and designers straight to your showroom, project site, hospital, campus, or shop—eliminating any need for in-house equipment or payroll.',
    },
  },
  {
    id: 'pabna-and-outstation',
    category: 'logistics',
    categoryLabel: { bn: 'শুটিং ও লজিস্টিকস', en: 'Shoot Logistics' },
    question: {
      bn: 'Groth Forge কি শুধু পাবনা সদরেই কাজ করে, নাকি আশেপাশের উপজেলা ও জেলাতেও শুট করে?',
      en: 'Does Groth Forge shoot only in Pabna Sadar, or outside Pabna too?',
    },
    answer: {
      bn: 'আমাদের মূল প্রোডাকশন অফিস পাবনা সদরে (পাবনা-৬৬০০), তবে আমরা পাবনার সকল উপজেলা এবং আশেপাশের জেলাগুলোতেও নিয়মিত শুটিং করি। পাবনা সদরের ভেতরের স্ট্যান্ডার্ড শুট প্যাকেজের মধ্যেই থাকে; আর দূরের লোকেশন বা বিশেষ আউটস্টেশন প্রজেক্টের ক্ষেত্রে যাতায়াত ও লজিস্টিকস খরচ কাজ শুরুর আগেই পরিষ্কারভাবে জানিয়ে দেওয়া হয়।',
      en: 'Our production base is in Pabna Sadar (Pabna-6600), and our crew regularly shoots across all upazilas of Pabna as well as neighboring districts. Standard shoots within Pabna Sadar are included in our packages, while outstation travel or multi-day site logistics are quoted transparently upfront before confirmation.',
    },
  },
  {
    id: 'business-operations-disruption',
    category: 'logistics',
    categoryLabel: { bn: 'শুটিং ও লজিস্টিকস', en: 'Shoot Logistics' },
    question: {
      bn: 'শুটিং চলাকালীন আমাদের কাস্টমার, রোগী বা প্রতিষ্ঠানের স্বাভাবিক কাজে কি কোনো ব্যাঘাত ঘটবে?',
      en: 'Will filming disrupt our daily customers, patients, or staff operations?',
    },
    answer: {
      bn: 'মোটেও না। আমাদের টিম আপনার ব্যবসার ব্যস্ত সময় বিবেচনা করে শুটিং শিডিউল তৈরি করে—যেমন শোরুম বা রেস্টুরেন্টের জন্য সকালের শান্ত সময়, হসপিটালের জন্য রোগীদের অসুবিধা না করে নির্দিষ্ট জোন এবং স্কুল-কলেজের জন্য নির্ধারিত ক্লাস বা ক্যাম্পাস সময়। ফলে প্রতিষ্ঠানের স্বাভাবিক কার্যক্রমে কোনো বিঘ্ন ঘটে না।',
      en: 'Never. We plan every shoot around your quietest operating windows and designated zones—such as early morning for showrooms and restaurants, controlled clinical areas for hospitals, or scheduled campus hours for schools—so your guests, patients, and staff carry on smoothly.',
    },
  },
  {
    id: 'payment-structure-receipt',
    category: 'payment',
    categoryLabel: { bn: 'পেমেন্ট ও নিয়ম', en: 'Payment Terms' },
    question: {
      bn: 'পেমেন্ট পদ্ধতি কী এবং আমরা কি লিখিত চুক্তি ও মানি রিসিপ্ট পাব?',
      en: 'What are the payment terms, and do we receive an official receipt?',
    },
    answer: {
      bn: 'আমাদের পেমেন্ট নীতিমালা সম্পূর্ণ স্বচ্ছ: কাজ বা চুক্তি চূড়ান্ত করার সময় ৫০% অগ্রিম এবং মাসিক প্যাকেজের অবশিষ্ট ৫০% প্রতি মাসের ৫ তারিখের মধ্যে (অথবা এককালীন প্রজেক্টে ডেলিভারির সময়) পরিশোধযোগ্য। প্রতিটি পেমেন্টের বিপরীতে Groth Forge-এর পক্ষ থেকে লিখিত ডিল কনফার্মেশন এবং অফিসিয়াল মানি রিসিপ্ট প্রদান করা হয়।',
      en: 'Our payment policy is straightforward: 50% advance upon deal confirmation and the remaining 50% by the 5th of each month for monthly retainers (or upon completion for one-time projects). Every client receives written deal confirmation and an official Groth Forge money receipt for each payment.',
    },
  },
  {
    id: 'special-demand-charges',
    category: 'payment',
    categoryLabel: { bn: 'পেমেন্ট ও নিয়ম', en: 'Payment Terms' },
    question: {
      bn: 'ড্রোন শুট, প্রেজেন্টার বা ডকুমেন্টারি ফিল্ম কি প্যাকেজের ভেতরে, নাকি আলাদা চার্জ?',
      en: 'Are drone shoots, presenters, or documentaries included, or billed separately?',
    },
    answer: {
      bn: 'প্রতিটি প্যাকেজে উল্লেখিত রিলস, ব্র্যান্ড স্টোরি ভিডিও ও গ্রাফিক ডিজাইন নির্ধারিত মূল্যের মধ্যেই সম্পূর্ণ অন্তর্ভুক্ত—কোনো লুকানো খরচ নেই। তবে বিশেষ চাহিদা যেমন ড্রোন / এরিয়াল শুটিং, অন-ক্যামেরা প্রেজেন্টার বা হোস্ট বুকিং, পূর্ণাঙ্গ কর্পোরেট ডকুমেন্টারি কিংবা গ্র্যান্ড ওপেনিং ইভেন্ট কভারেজের জন্য আলাদা স্পেশাল ডিমান্ড চার্জ প্রযোজ্য, যা শুট শুরুর আগেই লিখিতভাবে নিশ্চিত করা হয়।',
      en: 'All listed reels, brand story videos, and graphic designs inside your chosen package are fully included at the published BDT rate with zero hidden fees. Specialized add-ons—including Drone/Aerial cinematography, On-Camera Presenters/Hosts, full Corporate Documentaries, or multi-camera Grand Opening event coverage—carry transparent separate Special Demand charges agreed upon in writing before production begins.',
    },
  },
];

export const FAQ_COPY = {
  eyebrow: {
    bn: 'সাধারণ প্রশ্ন ও উত্তর',
    en: 'Frequently Asked Questions',
  },
  heading: {
    bn: 'সময়, শুটিং ও পেমেন্ট নিয়ে সবচেয়ে সাধারণ প্রশ্নগুলোর স্পষ্ট উত্তর',
    en: 'Clear Answers on Production Time, Shoots & Payment Terms',
  },
  subtitle: {
    bn: 'কাজ শুরু করার আগেই যেন প্রতিটি ধাপ আপনার কাছে একদম পরিষ্কার থাকে—সেই লক্ষ্যেই আমাদের সবচেয়ে বেশি জানতে চাওয়া বিষয়গুলো এখানে সাজানো হয়েছে।',
    en: 'Every timeline, on-site shoot detail, and payment rule laid out clearly upfront so your team can move forward with complete confidence.',
  },
  filterAriaLabel: {
    bn: 'প্রশ্নের বিষয় অনুযায়ী ফিল্টার',
    en: 'Filter FAQ topics',
  },
  helperPrompt: {
    bn: 'আপনার প্রতিষ্ঠানের জন্য আলাদা কোনো প্রশ্ন আছে?',
    en: 'Have a specific question about your project or location?',
  },
  helperSubtext: {
    bn: 'সরাসরি আমাদের প্রোডাকশন টিমের সাথে কথা বলুন—কোনো বাধ্যবাধকতা ছাড়াই স্পষ্ট ধারণা নিন।',
    en: 'Message our production desk directly for a clear, no-obligation answer.',
  },
  whatsappCta: {
    bn: 'WhatsApp-এ প্রশ্ন করুন',
    en: 'Ask on WhatsApp',
  },
};

export function filterFaqItems(items: FaqItem[], category: FaqCategory): FaqItem[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export function formatFaqIndex(indexZeroBased: number, lang: Language): string {
  const padded = String(indexZeroBased + 1).padStart(2, '0');
  if (lang === 'en') {
    return `${padded}.`;
  }
  return `${formatCountForLang(Number(padded[0]), 'bn')}${formatCountForLang(
    Number(padded[1]),
    'bn'
  )}.`;
}

export function buildFaqWhatsAppUrl(lang: Language, activeCategory: FaqCategory): string {
  const categoryObj = FAQ_CATEGORIES.find((cat) => cat.id === activeCategory);
  const topicText = categoryObj ? categoryObj.label[lang] : '';

  if (lang === 'bn') {
    const lines = [
      'আসসালামু আলাইকুম Groth Forge,',
      activeCategory !== 'all'
        ? `আমি আপনাদের "${topicText}" বিষয়ে একটি প্রশ্ন করতে চাই।`
        : 'আমি আপনাদের ভিডিও প্রোডাকশন সময়, শুটিং প্রক্রিয়া ও পেমেন্ট নিয়ম সম্পর্কে একটি প্রশ্ন করতে চাই।',
    ];
    return buildWhatsAppUrl(lines.join('\n'));
  }

  const lines = [
    'Hello Groth Forge,',
    activeCategory !== 'all'
      ? `I have a quick question regarding ${topicText} for our upcoming project.`
      : 'I have a quick question regarding production timelines, shoot logistics, and payment terms.',
  ];
  return buildWhatsAppUrl(lines.join('\n'));
}
