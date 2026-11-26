import type {
  GalleryCategory,
  GalleryItem,
  Language,
  PackageItem,
  SpecialDemandItem,
} from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_cinema_studio_1795703173974.jpg';

export const SHORT_TERM_PACKAGES: PackageItem[] = [
  {
    id: 'starter-trial',
    group: 'short-term',
    tierOrder: 1,
    priceBdt: 8500,
    name: {
      bn: 'স্টার্টার ট্রায়াল (১৫ দিন / টেস্ট রান)',
      en: 'Starter Trial (15 Days / Test Run)',
    },
    subtitle: {
      bn: 'সর্বনিম্ন এন্ট্রি · কোয়ালিটি যাচাইয়ের সেরা শুরু',
      en: 'Lowest Entry · Experience Our Production Quality',
    },
    priceDisplay: {
      bn: '৮,৫০০ টাকা',
      en: '8,500 BDT',
    },
    billingCycle: {
      bn: 'এককালীন · ১৫ দিন',
      en: 'One-time · 15 Days',
    },
    idealFor: {
      bn: 'যারা প্রথমবার Groth Forge-এর শুটিং, এডিটিং ও কনভার্সন মান সরাসরি যাচাই করতে চান।',
      en: 'Ideal for first-time clients testing Groth Forge production quality before committing monthly.',
    },
    deliverables: {
      bn: [
        '৪টি সিনেমাটিক রিলস / শর্টস ভিডিও',
        '৩টি প্রোডাক্ট বা অফার গ্রাফিক ডিজাইন',
        'সম্পূর্ণ স্ক্রিপ্ট, প্রফেশনাল শুট ও কালার গ্রেডিং অন্তর্ভুক্ত',
        'পাবলিশিংয়ের জন্য বেসিক ক্যাপশন ও ফরম্যাট গাইডলাইন',
      ],
      en: [
        '4 cinematic reels / shorts videos',
        '3 product or offer graphic designs',
        'Full script, professional shoot & color grading included',
        'Publishing format & caption guidance included',
      ],
    },
  },
  {
    id: 'grand-launch',
    group: 'short-term',
    tierOrder: 2,
    priceBdt: 20000,
    name: {
      bn: 'গ্র্যান্ড লঞ্চ / ব্র্যান্ড ফিল্ম',
      en: 'Grand Launch / Brand Film',
    },
    subtitle: {
      bn: 'প্রজেক্ট-ভিত্তিক · উদ্বোধন ও প্রিমিয়াম পরিচিতি',
      en: 'Project-Based · Openings & Flagship Launches',
    },
    priceDisplay: {
      bn: '২০,০০০ টাকা',
      en: '20,000 BDT',
    },
    billingCycle: {
      bn: 'এককালীন · প্রজেক্ট-ভিত্তিক',
      en: 'One-time · Project-Based',
    },
    idealFor: {
      bn: 'নতুন শোরুম, হসপিটাল, শিক্ষা প্রতিষ্ঠান বা রিয়েল এস্টেট প্রজেক্ট লঞ্চের জন্য আদর্শ।',
      en: 'Built for new showroom openings, campus launches, clinics, or flagship property reveals.',
    },
    deliverables: {
      bn: [
        '১টি সিনেমাটিক ডকুমেন্টারি / প্রোমো ফিল্ম (২–৩ মিনিট)',
        '৩টি টিজার রিলস + ইভেন্ট বা লঞ্চ হাইলাইটস',
        'সম্পূর্ণ স্ক্রিপ্টিং, প্রফেশনাল ভয়েসওভার ও সিনেমা কালার গ্রেডিং',
        'সোশ্যাল মিডিয়া ও ডিসপ্লে স্ক্রিনের জন্য হাই-রেজোলিউশন ডেলিভারি',
      ],
      en: [
        '1 cinematic documentary / promo film (2–3 mins)',
        '3 teaser reels + event or launch highlights',
        'Scriptwriting, professional voiceover & cinema color grading',
        'High-resolution masters ready for social feeds & displays',
      ],
    },
  },
  {
    id: 'seasonal-boost',
    group: 'short-term',
    tierOrder: 3,
    priceBdt: 30000,
    name: {
      bn: 'সিজনাল / ঈদ ও অ্যাডমিশন বুস্ট',
      en: 'Seasonal / Eid & Admission Boost',
    },
    subtitle: {
      bn: '৩০ দিনের হাই-ইম্প্যাক্ট ক্যাম্পেইন',
      en: '30-Day High-Converting Campaign Sprint',
    },
    priceDisplay: {
      bn: '৩০,০০০ টাকা',
      en: '30,000 BDT',
    },
    billingCycle: {
      bn: 'এককালীন · ৩০ দিন',
      en: 'One-time · 30 Days',
    },
    idealFor: {
      bn: 'ঈদ, পূজা, শোরুম সেলস পিক অথবা স্কুল ও ক্যাডেট একাডেমির ভর্তি মৌসুমের জন্য।',
      en: 'Designed for Eid/festive retail peaks or school, college, and cadet admission seasons.',
    },
    deliverables: {
      bn: [
        '১২টি হাই-কনভার্টিং প্রোমো রিলস / শর্টস',
        '১টি মেইন ক্যাম্পেইন ফিল্ম (১–২ মিনিট)',
        '১০টি অফার ও কাউন্টডাউন গ্রাফিক ডিজাইন',
        'ক্যাম্পেইন রিলিজ টাইমলাইন ও কাস্টমার ইনকোয়ারি ফোকাসড স্ক্রিপ্ট',
      ],
      en: [
        '12 high-converting promotional reels / shorts',
        '1 main campaign film (1–2 mins)',
        '10 offer & countdown graphic designs',
        'Campaign release timeline & inquiry-focused scripts',
      ],
    },
  },
];

export const MONTHLY_PACKAGES: PackageItem[] = [
  {
    id: 'foundation-growth',
    group: 'monthly',
    tierOrder: 1,
    priceBdt: 15000,
    name: {
      bn: 'ফাউন্ডেশন গ্রোথ',
      en: 'Foundation Growth',
    },
    subtitle: {
      bn: 'এন্ট্রি মান্থলি · নিয়মিত ব্র্যান্ড উপস্থিতি',
      en: 'Entry Monthly · Consistent Brand Presence',
    },
    priceDisplay: {
      bn: '১৫,০০০ টাকা',
      en: '15,000 BDT',
    },
    billingCycle: {
      bn: 'প্রতি মাস',
      en: 'per month',
    },
    idealFor: {
      bn: 'রিটেইল শপ, ফ্যাশন হাউস, রেস্টুরেন্ট, কোচিং সেন্টার ও ক্রমবর্ধমান স্থানীয় ব্যবসার জন্য।',
      en: 'Best for retail shops, fashion outlets, local restaurants, and growing service businesses.',
    },
    deliverables: {
      bn: [
        'প্রতি মাসে ৮টি সিনেমাটিক রিলস / শর্টস',
        '১টি ব্র্যান্ড স্টোরি ভিডিও (২–৩ মিনিট)',
        '৬টি গ্রাফিক / অফার ডিজাইন',
        'সম্পূর্ণ স্ক্রিপ্ট, শুট, এডিটিং ও কালার গ্রেডিং',
        'বেসিক সোশ্যাল গ্রোথ রোডম্যাপ',
      ],
      en: [
        '8 cinematic reels / shorts per month',
        '1 brand story video (2–3 mins)',
        '6 graphic / offer designs',
        'Full script, shoot, editing & color grading',
        'Basic social growth roadmap',
      ],
    },
  },
  {
    id: 'growth-accelerator',
    group: 'monthly',
    tierOrder: 2,
    priceBdt: 25000,
    name: {
      bn: 'গ্রোথ অ্যাক্সিলারেটর',
      en: 'Growth Accelerator',
    },
    subtitle: {
      bn: 'সবচেয়ে জনপ্রিয় · পারফরম্যান্স ও বাজেটের সেরা ভারসাম্য',
      en: 'Most Popular · Best Balance of Volume & ROI',
    },
    priceDisplay: {
      bn: '২৫,০০০ টাকা',
      en: '25,000 BDT',
    },
    billingCycle: {
      bn: 'প্রতি মাস',
      en: 'per month',
    },
    idealFor: {
      bn: 'প্রতিষ্ঠিত শোরুম, ডায়াগনস্টিক সেন্টার, স্কুল-কলেজ ও প্রতিযোগিতামূলক ব্র্যান্ডের জন্য।',
      en: 'Chosen by established showrooms, clinics, schools, and competitive regional brands.',
    },
    highlight: 'popular',
    highlightLabel: {
      bn: 'সবচেয়ে জনপ্রিয়',
      en: 'Most Popular',
    },
    deliverables: {
      bn: [
        'প্রতি মাসে ১৫টি হাই-কনভার্টিং সিনেমাটিক রিলস / শর্টস',
        '২টি ব্র্যান্ড / কাস্টমার সাকসেস স্টোরি ভিডিও',
        '১২টি গ্রাফিক ও ক্যাম্পেইন ডিজাইন',
        'মাসিক কনটেন্ট ক্যালেন্ডার ও পোস্টিং প্ল্যান',
        'সেক্টর-ভিত্তিক গ্রোথ স্ট্র্যাটেজি',
      ],
      en: [
        '15 high-converting cinematic reels / shorts per month',
        '2 brand / customer success story videos',
        '12 graphic & campaign designs',
        'Monthly content calendar & posting plan',
        'Sector-specific growth strategy',
      ],
    },
  },
  {
    id: 'market-dominance',
    group: 'monthly',
    tierOrder: 3,
    priceBdt: 40000,
    name: {
      bn: 'মার্কেট ডমিনেন্স',
      en: 'Market Dominance',
    },
    subtitle: {
      bn: 'হাই-ভলিউম গ্রোথ · বাজারে শীর্ষ অবস্থান',
      en: 'High-Volume Growth · Category Leadership',
    },
    priceDisplay: {
      bn: '৪০,০০০ টাকা',
      en: '40,000 BDT',
    },
    billingCycle: {
      bn: 'প্রতি মাস',
      en: 'per month',
    },
    idealFor: {
      bn: 'হসপিটাল, বড় শোরুম চেইন, হাউজিং কোম্পানি ও দ্রুত সম্প্রসারণশীল প্রতিষ্ঠানের জন্য।',
      en: 'Engineered for hospitals, large showrooms, housing projects, and scaling institutions.',
    },
    deliverables: {
      bn: [
        'প্রতি মাসে ২৫+ সিনেমাটিক রিলস / শর্টস',
        '৩টি ব্র্যান্ড ডকুমেন্টারি + ইভেন্ট / ক্যাম্পেইন কভারেজ',
        '২০টি গ্রাফিক ও অ্যাড ক্রিয়েটিভস',
        'পূর্ণাঙ্গ চ্যানেল গ্রোথ ও লিড কনভার্সন ফানেল',
        'প্রায়োরিটি শুট শিডিউলিং',
      ],
      en: [
        '25+ cinematic reels / shorts per month',
        '3 brand documentaries + event / campaign coverage',
        '20 graphic & ad creatives',
        'Full channel growth & lead conversion funnel',
        'Priority shoot scheduling',
      ],
    },
  },
  {
    id: 'brand-dominance-plus',
    group: 'monthly',
    tierOrder: 4,
    priceBdt: 60000,
    name: {
      bn: 'ব্র্যান্ড ডমিনেন্স প্লাস / ৩৬০° গ্রোথ',
      en: 'Brand Dominance Plus / 360° Growth',
    },
    subtitle: {
      bn: 'সর্বোচ্চ ফ্ল্যাগশিপ টিয়ার · কমপ্লিট ইন-হাউস বিকল্প',
      en: 'Highest Flagship Tier · Complete Creative Department',
    },
    priceDisplay: {
      bn: '৬০,০০০ টাকা',
      en: '60,000 BDT',
    },
    billingCycle: {
      bn: 'প্রতি মাস',
      en: 'per month',
    },
    idealFor: {
      bn: 'কর্পোরেট গ্রুপ, মাল্টি-ক্রোর রিয়েল এস্টেট ডেভেলপার, বৃহৎ হসপিটাল ও ফ্ল্যাগশিপ ব্র্যান্ড।',
      en: 'Built for multi-crore real estate developers, corporate groups, and market-leading flagships.',
    },
    highlight: 'flagship',
    highlightLabel: {
      bn: 'ফ্ল্যাগশিপ ৩৬০°',
      en: 'Flagship 360°',
    },
    deliverables: {
      bn: [
        'প্রতি মাসে ৩৫–৪০টি সিনেমাটিক রিলস / শর্টস',
        '৪টি পূর্ণাঙ্গ ব্র্যান্ড ডকুমেন্টারি / কাস্টমার স্টোরি',
        '২৫টি প্রিমিয়াম ক্যাম্পেইন গ্রাফিক ও ফেস্টিভ ব্যানার',
        'সম্পূর্ণ ইভেন্ট ও ক্যাম্পেইন কভারেজ',
        'ফুল পেজ / চ্যানেল গ্রোথ ম্যানেজমেন্ট ও মাসিক গ্রোথ অডিট রিপোর্ট',
      ],
      en: [
        '35–40 cinematic reels / shorts per month',
        '4 full brand documentaries / customer stories',
        '25 premium campaign graphics & festive banners',
        'Comprehensive event & campaign coverage',
        'Full page / channel growth management & monthly growth audit report',
      ],
    },
  },
];

export const SPECIAL_DEMANDS: SpecialDemandItem[] = [
  {
    id: 'documentary-corporate',
    code: '01',
    title: {
      bn: 'ডকুমেন্টারি ফিল্ম ও কর্পোরেট প্রোফাইল',
      en: 'Documentary Film & Corporate Profile',
    },
    summary: {
      bn: 'প্রতিষ্ঠানের ইতিহাস, অবকাঠামো, প্রজেক্ট প্রগ্রেস বা ইনভেস্টর-রেডি প্রামাণ্যচিত্র।',
      en: 'In-depth institutional documentary, project showcase, or investor-ready corporate profile.',
    },
    pricingBasis: {
      bn: 'আলাদা ডিমান্ড চার্জ · স্ক্রিপ্ট, শুট দিন ও দৈর্ঘ্য অনুযায়ী',
      en: 'Separate demand charge · Scoped by script depth, shoot days & runtime',
    },
    scopeFactors: {
      bn: [
        'রিসার্চ ও স্ক্রিপ্টের গভীরতা',
        'মোট শুটিং দিন ও লোকেশন সংখ্যা',
        'ইন্টারভিউ সেটআপ ও ফাইনাল রানটাইম',
      ],
      en: [
        'Research & script complexity',
        'Number of shoot days & sites',
        'Interview lighting setup & final runtime',
      ],
    },
  },
  {
    id: 'drone-aerial',
    code: '02',
    title: {
      bn: 'ড্রোন / এরিয়াল শুটিং',
      en: 'Drone / Aerial Cinematography',
    },
    summary: {
      bn: 'হাউজিং প্রজেক্ট, ক্যাম্পাস, রিসোর্ট বা বড় শোরুমের হাই-রেজোলিউশন এরিয়াল সিনেমাটোগ্রাফি।',
      en: 'High-resolution aerial cinematography for housing estates, campuses, resorts, and landmarks.',
    },
    pricingBasis: {
      bn: 'আলাদা ডিমান্ড চার্জ · লোকেশন, ফ্লাইট সময় ও অনুমতি সাপেক্ষে',
      en: 'Separate demand charge · Scoped by location, flight time & permissions',
    },
    scopeFactors: {
      bn: [
        'শুটিং লোকেশন ও দূরত্ব',
        'মোট ফ্লাইট সময় ও ব্যাটারি সেশন',
        'আবহাওয়া, নিরাপত্তা অনুমতি ও এরিয়াল কালার গ্রেডিং',
      ],
      en: [
        'Shoot location & travel distance',
        'Flight sessions & aerial coverage time',
        'Weather window, clearances & aerial grading',
      ],
    },
  },
  {
    id: 'presenter-host',
    code: '03',
    title: {
      bn: 'প্রেজেন্টার / অন-ক্যামেরা হোস্টসহ মিডিয়া শুট',
      en: 'Media Package with Presenter / On-Camera Host',
    },
    summary: {
      bn: 'প্রফেশনাল উপস্থাপক বা অন-ক্যামেরা হোস্টের মাধ্যমে প্রোডাক্ট, প্রজেক্ট বা সার্ভিসের প্রাণবন্ত উপস্থাপনা।',
      en: 'On-camera presenter or articulate host guiding viewers through your showroom, project, or offer.',
    },
    pricingBasis: {
      bn: 'আলাদা ডিমান্ড চার্জ · হোস্ট বুকিং, কনসেপ্ট ও সময় অনুযায়ী',
      en: 'Separate demand charge · Scoped by presenter booking, duration & concept',
    },
    scopeFactors: {
      bn: [
        'প্রেজেন্টার / মডেল বুকিং ফি',
        'শুটিং শিফট ও কনসেপ্ট পরিকল্পনা',
        'অডিও সেটআপ ও স্ক্রিপ্ট ডেলিভারি',
      ],
      en: [
        'Presenter / host talent booking',
        'Shoot duration & scripted segments',
        'Dedicated audio capture & direction',
      ],
    },
  },
  {
    id: 'event-addons',
    code: '04',
    title: {
      bn: 'স্পেশাল ইভেন্ট কভারেজ ও অতিরিক্ত রিলস / ডিজাইন',
      en: 'Special Event / Grand Opening Coverage & Extra Add-Ons',
    },
    summary: {
      bn: 'গ্র্যান্ড ওপেনিং, বার্ষিক সম্মেলন, ভর্তি মেলা বা প্যাকেজের বাইরে অতিরিক্ত রিলস ও গ্রাফিক ডিজাইন।',
      en: 'Grand openings, annual ceremonies, admission fairs, or extra reels & design units beyond package limits.',
    },
    pricingBasis: {
      bn: 'আলাদা ডিমান্ড চার্জ · প্রতি ইভেন্ট বা অ্যাড-অন ইউনিট অনুযায়ী',
      en: 'Separate demand charge · Priced per event or individual add-on unit',
    },
    scopeFactors: {
      bn: [
        'ইভেন্টের সময়কাল ও ক্যামেরা ইউনিট সংখ্যা',
        'একই দিনে রিলস ডেলিভারি বা স্ট্যান্ডার্ড এডিট',
        'অতিরিক্ত প্রতিটি রিলস বা ডিজাইনের ইউনিট রেট',
      ],
      en: [
        'Event duration & multi-camera crew size',
        'Same-day highlight edit vs standard turnaround',
        'Per-unit rate for extra reels or campaign graphics',
      ],
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'housing-aerial-film',
    category: 'corporate-real-estate',
    image: '/src/assets/images/work_real_estate_aerial_1795703173848.jpg',
    title: {
      bn: 'রেসিডেনশিয়াল হাউজিং প্রজেক্ট ডকুমেন্টারি',
      en: 'Residential Housing Masterplan Film',
    },
    sectorLabel: {
      bn: 'কর্পোরেট ও রিয়েল এস্টেট',
      en: 'Corporate & Real Estate',
    },
    format: {
      bn: 'এরিয়াল + প্রজেক্ট ডকুমেন্টারি',
      en: 'Aerial + Project Documentary',
    },
    outcome: {
      bn: 'ক্রেতা ও প্রবাসী বিনিয়োগকারীদের সরাসরি সাইট ভিজিট ইনকোয়ারি বৃদ্ধি',
      en: 'Built buyer confidence for local & expatriate site-visit inquiries',
    },
    description: {
      bn: 'প্লট ও ফ্ল্যাট প্রজেক্টের বাস্তব উন্নয়ন, যোগাযোগ ব্যবস্থা ও নিরাপদ পরিবেশ সিনেমাটিক ফ্রেমে উপস্থাপন করে ক্রেতার আস্থা তৈরি করা হয়েছে।',
      en: 'Captured real site progress, neighborhood access, and architectural scale to turn skeptical property browsers into qualified site visits.',
    },
  },
  {
    id: 'hospital-trust-film',
    category: 'healthcare-education',
    image: '/src/assets/images/work_healthcare_diagnostic_1795703175963.jpg',
    title: {
      bn: 'হসপিটাল ও ডায়াগনস্টিক ট্রাস্ট সিরিজ',
      en: 'Hospital & Diagnostic Trust Series',
    },
    sectorLabel: {
      bn: 'হেলথকেয়ার ও শিক্ষা',
      en: 'Healthcare & Education',
    },
    format: {
      bn: 'ব্র্যান্ড স্টোরি + পেশেন্ট গাইড রিলস',
      en: 'Brand Story + Patient Guide Reels',
    },
    outcome: {
      bn: 'আধুনিক ল্যাব, চিকিৎসক ও সেবার স্বচ্ছ উপস্থাপনায় রোগীর আস্থা বৃদ্ধি',
      en: 'Elevated patient trust through transparent diagnostics & care storytelling',
    },
    description: {
      bn: 'আধুনিক মেডিকেল ইকুইপমেন্ট, পরিচ্ছন্ন পরিবেশ ও বিশেষজ্ঞ সেবার স্পষ্ট ভিডিও কনটেন্টের মাধ্যমে সাধারণ মানুষের আস্থা ও অ্যাপয়েন্টমেন্ট বৃদ্ধি।',
      en: 'Showcased diagnostic accuracy, spotless clinical facilities, and calm patient care to drive direct appointment inquiries.',
    },
  },
  {
    id: 'cadet-campus-admission',
    category: 'healthcare-education',
    image: '/src/assets/images/work_education_campus_1795703174896.jpg',
    title: {
      bn: 'স্কুল ও ক্যাডেট একাডেমি অ্যাডমিশন ক্যাম্পেইন',
      en: 'School & Cadet Academy Admission Film',
    },
    sectorLabel: {
      bn: 'হেলথকেয়ার ও শিক্ষা',
      en: 'Healthcare & Education',
    },
    format: {
      bn: 'অ্যাডমিশন ক্যাম্পেইন ফিল্ম + রিলস',
      en: 'Admission Campaign Film + Reels',
    },
    outcome: {
      bn: 'ভর্তি মৌসুমে অভিভাবকদের সরাসরি ক্যাম্পাস ভিজিট ও ভর্তি অনুসন্ধান বৃদ্ধি',
      en: 'Drove parent campus tours & admission registrations during peak intake',
    },
    description: {
      bn: 'শৃঙ্খলা, শ্রেণিকক্ষের পরিবেশ, ফলাফল ও শিক্ষার্থীদের দৈনন্দিন অগ্রগতি তুলে ধরে অভিভাবকদের সিদ্ধান্ত গ্রহণ সহজ করা হয়েছে।',
      en: 'Highlighted campus discipline, teaching standards, and student outcomes so parents immediately recognized institutional credibility.',
    },
  },
  {
    id: 'furniture-showroom-reel',
    category: 'retail-fashion-hospitality',
    image: '/src/assets/images/work_furniture_showroom_1795703176173.jpg',
    title: {
      bn: 'লাক্সারি ফার্নিচার শোরুম কালেকশন শোকেস',
      en: 'Flagship Furniture Showroom Showcase',
    },
    sectorLabel: {
      bn: 'রিটেইল, ফ্যাশন ও হসপিটালিটি',
      en: 'Retail, Fashion & Hospitality',
    },
    format: {
      bn: 'সিনেমাটিক শোরুম রিলস সিরিজ',
      en: 'Cinematic Showroom Reels Series',
    },
    outcome: {
      bn: 'অনলাইন দর্শক থেকে সরাসরি শোরুম ভিজিট ও প্রিমিয়াম অর্ডার বৃদ্ধি',
      en: 'Converted online video viewers into high-intent showroom walk-ins',
    },
    description: {
      bn: 'কাঠের সূক্ষ্ম কারুকাজ, ফিনিশিং ও শোরুমের প্রিমিয়াম আলো-ছায়ায় প্রোডাক্ট তুলে ধরে দর্শকদের সরাসরি শোরুমে আসতে উদ্বুদ্ধ করা হয়েছে।',
      en: 'Used warm directional lighting and macro texture shots to present craftsmanship at flagship quality and accelerate showroom visits.',
    },
  },
  {
    id: 'riverview-resort-twilight',
    category: 'retail-fashion-hospitality',
    image: '/src/assets/images/work_resort_hospitality_1795703178614.jpg',
    title: {
      bn: 'রিভারভিউ রেস্টুরেন্ট ও রিসোর্ট এক্সপেরিয়েন্স',
      en: 'Riverside Restaurant & Resort Experience',
    },
    sectorLabel: {
      bn: 'রিটেইল, ফ্যাশন ও হসপিটালিটি',
      en: 'Retail, Fashion & Hospitality',
    },
    format: {
      bn: 'টোয়াইলাইট অ্যাম্বিয়েন্স ফিল্ম + রিলস',
      en: 'Twilight Ambience Film + Reels',
    },
    outcome: {
      bn: 'উইকেন্ড ফ্যামিলি ডাইনিং ও কর্পোরেট ইভেন্ট বুকিংয়ে উল্লেখযোগ্য সাড়া',
      en: 'Boosted weekend family dining tables & private event bookings',
    },
    description: {
      bn: 'সন্ধ্যার পরিবেশ, খাবার উপস্থাপনা ও নদীর পাড়ের প্রশান্তি সিনেমাটিক ভিজ্যুয়ালে তুলে ধরে পাবনা ও আশেপাশের অতিথিদের আকর্ষণ করা হয়েছে।',
      en: 'Captured golden-to-twilight dining ambiance and culinary presentation to position the destination for family and corporate bookings.',
    },
  },
  {
    id: 'fashion-retail-festive',
    category: 'corporate-real-estate',
    image: '/src/assets/images/work_fashion_retail_1795703178259.jpg',
    title: {
      bn: 'ফ্ল্যাগশিপ রিটেইল ও ব্র্যান্ড লঞ্চ ক্যাম্পেইন',
      en: 'Flagship Retail & Corporate Commercial Launch',
    },
    sectorLabel: {
      bn: 'কর্পোরেট ও রিয়েল এস্টেট',
      en: 'Corporate & Real Estate',
    },
    format: {
      bn: 'লঞ্চ প্রোমো + ফেস্টিভ অফার সিরিজ',
      en: 'Launch Promo + Festive Offer Series',
    },
    outcome: {
      bn: 'উদ্বোধন ও মৌসুমি অফারে দ্রুত পরিচিতি ও ইনবক্স অর্ডার বৃদ্ধি',
      en: 'Generated rapid regional awareness and direct message inquiries',
    },
    description: {
      bn: 'ব্র্যান্ডের প্রিমিয়াম কালেকশন ও কমার্শিয়াল স্পেসকে আধুনিক এডিটোরিয়াল ভিজ্যুয়ালে উপস্থাপন করে বাজারে শক্তিশালী অবস্থান তৈরি।',
      en: 'Combined editorial store cinematography with structured offer reels to position commercial retail spaces above local competitors.',
    },
  },
];

export const UI_COPY = {
  nav: {
    process: { bn: 'আস্থা ও প্রক্রিয়া', en: 'Trust & Process' },
    packages: { bn: 'প্যাকেজসমূহ', en: 'Packages' },
    specialDemands: { bn: 'আলাদা ডিমান্ড', en: 'Special Demands' },
    work: { bn: 'আমাদের কাজ', en: 'Work' },
    contact: { bn: 'যোগাযোগ', en: 'Contact' },
    whatsappCta: { bn: 'WhatsApp', en: 'WhatsApp' },
    switchToDark: { bn: 'ডার্ক মোড চালু করুন', en: 'Switch to Dark Mode' },
    switchToLight: { bn: 'লাইট মোড চালু করুন', en: 'Switch to Light Mode' },
    openMenu: { bn: 'মেনু খুলুন', en: 'Open navigation menu' },
    closeMenu: { bn: 'মেনু বন্ধ করুন', en: 'Close navigation menu' },
    mobileLangLabel: { bn: 'ভাষা পরিবর্তন করুন', en: 'Switch Language' },
    mobileThemeLabel: { bn: 'থিম পরিবর্তন করুন', en: 'Appearance' },
    darkModeText: { bn: 'ডার্ক মোড', en: 'Dark Mode' },
    lightModeText: { bn: 'লাইট মোড', en: 'Light Mode' },
  },
  hero: {
    kicker: {
      bn: 'পাবনা সদর, বাংলাদেশ · ভিডিও প্রোডাকশন ও বিজনেস গ্রোথ এজেন্সি',
      en: 'Pabna Sadar, Bangladesh · Video Production & Business Growth Agency',
    },
    headline: {
      bn: 'সিনেমাটিক ভিডিও দিয়ে আপনার ব্যবসার আস্থা, ক্রেতা ও বিক্রি বাড়ান।',
      en: 'Cinematic video production built for business trust and real customer inquiries.',
    },
    subcopy: {
      bn: 'Groth Forge শুধু ভিডিও এডিটিং করে না—বড় রিয়েল এস্টেট প্রজেক্ট, হসপিটাল, স্কুল-কলেজ ও শোরুম থেকে শুরু করে স্থানীয় দোকান, ফ্যাশন হাউস ও রেস্টুরেন্ট পর্যন্ত সবার জন্য আমরা এমন ভিডিও ও কনটেন্ট বানাই যা দেখে মানুষের বিশ্বাস তৈরি হয় এবং সরাসরি কল বা মেসেজ আসে।',
      en: 'Groth Forge goes far beyond video editing. From multi-crore developments, hospitals, schools, and flagship showrooms to local shops, fashion stores, and restaurants, our team builds trust-first films and reels that turn viewers into real inquiries and walk-ins.',
    },
    primaryCta: {
      bn: 'WhatsApp-এ কথা বলুন',
      en: 'Message on WhatsApp',
    },
    secondaryCta: {
      bn: 'প্যাকেজ ও মূল্য দেখুন',
      en: 'Explore Packages',
    },
    studioCaptionTitle: {
      bn: 'নিজস্ব টিম ছাড়াই পূর্ণাঙ্গ ভিডিও প্রোডাকশন ও গ্রোথ সাপোর্ট',
      en: 'Full Production & Growth Support Without In-House Team Overhead',
    },
    studioCaptionMeta: {
      bn: 'স্ক্রিপ্ট · সিনেমা শুট · কালার গ্রেডিং · বিজনেস গ্রোথ',
      en: 'Script · Cinema Shoot · Color Grading · Business Growth',
    },
    sectorsStrip: [
      {
        num: '01',
        title: { bn: 'বড় প্রজেক্ট ও কর্পোরেট', en: 'Major Projects & Corporate' },
        desc: {
          bn: 'কোটি টাকার হাউজিং ও কর্পোরেট প্রজেক্টের জন্য নির্ভরযোগ্য ডকুমেন্টারি ও এরিয়াল ভিডিও',
          en: 'Authoritative documentaries and aerial films for multi-crore developments',
        },
      },
      {
        num: '02',
        title: { bn: 'হসপিটাল ও শিক্ষা প্রতিষ্ঠান', en: 'Healthcare & Education' },
        desc: {
          bn: 'রোগী ও অভিভাবকদের আস্থা বাড়াতে পরিষ্কার ও তথ্যবহুল ব্র্যান্ড ফিল্ম',
          en: 'Transparent, credibility-driven films for hospitals, schools & cadet academies',
        },
      },
      {
        num: '03',
        title: { bn: 'শোরুম, দোকান ও ফ্যাশন', en: 'Showrooms, Shops & Retail' },
        desc: {
          bn: 'নিয়মিত প্রোডাক্ট রিলস, ঈদ-উৎসব ক্যাম্পেইন এবং সরাসরি শোরুম ভিজিট বৃদ্ধি',
          en: 'Consistent product reels, festive sprints & steady showroom walk-ins',
        },
      },
      {
        num: '04',
        title: { bn: 'রেস্টুরেন্ট, রিসোর্ট ও কোচিং', en: 'Restaurants, Resorts & Coaches' },
        desc: {
          bn: 'মাত্র ৮,৫০০ টাকার ট্রায়াল থেকে শুরু করে মাসিক গ্রোথ—প্রতিটি বাজেটের স্পষ্ট সমাধান',
          en: 'From an 8,500 BDT Starter Trial to full monthly retainers for any budget',
        },
      },
    ],
  },
  trust: {
    eyebrow: {
      bn: 'কেন ব্যবসায়ীরা Groth Forge-এ আস্থা রাখেন',
      en: 'Why Clients Trust Groth Forge',
    },
    heading: {
      bn: 'ভুয়া প্রতিশ্রুতি বা শুধু ভাইরাল হওয়ার চমক নয়—আমরা কাজ করি বাস্তব আস্থা ও পরিষ্কার নিয়মে',
      en: 'No Fake Viral Hype or Empty Promises—Just Clear Scope and Real Business Trust',
    },
    intro: {
      bn: 'অনেক ব্যবসায়ী আগে অনলাইন এজেন্সি বা ফ্রিল্যান্সারের সাথে কাজ করে সময়মতো ভিডিও না পাওয়া, লুকানো চার্জ বা ফলহীন কনটেন্টের খারাপ অভিজ্ঞতা পেয়েছেন। Groth Forge সেই অনিশ্চয়তা দূর করতে প্রতিটি ধাপে লিখিত ও স্বচ্ছ পদ্ধতি অনুসরণ করে।',
      en: 'Many business owners hesitate because of past disappointments—missed deadlines, hidden fees, or flashy videos that brought likes but zero customers. Groth Forge replaces guesswork with transparent rules, written scope, and zero in-house payroll burden.',
    },
    leftColLabel: {
      bn: 'সাধারণ খারাপ অভিজ্ঞতা (যা আমরা এড়িয়ে চলি)',
      en: 'Common Market Frustrations We Eliminate',
    },
    rightColLabel: {
      bn: 'Groth Forge-এর স্বচ্ছ কাজের মানদণ্ড',
      en: 'The Groth Forge Standard',
    },
    comparisons: [
      {
        num: '01.',
        problem: {
          bn: 'অবাস্তব "ভাইরাল" গ্যারান্টি দিয়ে ভিউয়ের পেছনে ছোটা, কিন্তু দোকানে বা ফোনে কোনো আসল ক্রেতা না আসা।',
          en: 'Chasing empty viral trends that attract random views instead of real local buyers and inquiries.',
        },
        solution: {
          bn: 'আপনার ব্যবসার আসল মান, সেবা ও বিশ্বাসযোগ্যতা তুলে ধরা—যাতে সঠিক ক্রেতারা সরাসরি কল বা WhatsApp করেন।',
          en: 'Trust-first storytelling focused on your real strengths so qualified buyers call, message, or visit.',
        },
      },
      {
        num: '02.',
        problem: {
          bn: 'কাজের মাঝপথে অস্পষ্ট চার্জ, দেরিতে ডেলিভারি বা কথা ও কাজের অমিল।',
          en: 'Surprise mid-project fees, missed shoot dates, and vague verbal agreements.',
        },
        solution: {
          bn: 'প্রতিটি প্যাকেজের মূল্য, সংখ্যা ও আলাদা ডিমান্ড চার্জ আগে থেকেই স্পষ্ট—সাথে লিখিত কনফার্মেশন ও মানি রিসিপ্ট।',
          en: 'Upfront package pricing, clear separate-demand terms, written deal confirmation, and official money receipts.',
        },
      },
      {
        num: '03.',
        problem: {
          bn: 'নিজস্ব ক্যামেরাম্যান, এডিটর, ডিজাইনার ও দামি ক্যামেরা রাখতে প্রতি মাসে লক্ষাধিক টাকা খরচ ও তদারকির চাপ।',
          en: 'Spending a heavy monthly payroll on in-house cameras, editors, designers, and daily supervision.',
        },
        solution: {
          bn: 'কোনো ইন-হাউস টিম ঝামেলা ছাড়াই Groth Forge-এর পুরো প্রোডাকশন টিম পাওয়া যায় আপনার বাজেট অনুযায়ী।',
          en: 'Get an entire script, shoot, edit, design, and growth team on demand with zero staffing overhead.',
        },
      },
    ],
  },
  process: {
    eyebrow: {
      bn: 'সব পর্যায়ের ব্যবসার গাইড ও কাজের ধাপ',
      en: 'Top-Down Client Guide & How We Work',
    },
    heading: {
      bn: 'বড় প্রজেক্ট থেকে ছোট দোকান—প্রতিটি ব্যবসার জন্য সহজ ও কার্যকর কাঠামো',
      en: 'Clear, Practical Video Growth—From Multi-Crore Projects to Local Shops',
    },
    intro: {
      bn: 'আপনি কোটি টাকার হাউজিং প্রজেক্ট পরিচালনা করুন কিংবা শহরের নতুন একটি ফ্যাশন শপ বা রেস্টুরেন্ট—আমাদের টিম আপনার ব্যবসার আকার ও ক্রেতার ধরন বুঝে কাজ সাজায়।',
      en: 'Whether you lead a multi-crore housing development, manage a hospital or school, or run a busy neighborhood shop, our process scales seamlessly to match your buyers and budget.',
    },
    sectorLensLabel: {
      bn: 'আপনার ব্যবসার ধরন বেছে নিন এবং দেখুন Groth Forge কীভাবে সাহায্য করে:',
      en: 'Choose your business scale to see how Groth Forge works for you:',
    },
    sectorLenses: [
      {
        id: 'enterprise',
        tab: { bn: 'বড় প্রজেক্ট ও কর্পোরেট', en: 'Major Projects & Corporate' },
        headline: {
          bn: 'বড় বিনিয়োগের সিদ্ধান্তে শক্তিশালী ও নির্ভরযোগ্য ব্র্যান্ড ইমেজ',
          en: 'Commanding credibility for multi-crore real estate & corporate buyers',
        },
        body: {
          bn: 'হাউজিং প্রজেক্ট, ডেভেলপার বা কর্পোরেট প্রতিষ্ঠানের ক্রেতারা চমক নয়, বাস্তব প্রমাণ ও ভরসা চান। আমরা প্রজেক্টের অগ্রগতি, লোকেশন, ডকুমেন্টারি ও এরিয়াল ভিজ্যুয়ালের মাধ্যমে দেশি ও প্রবাসী ক্রেতাদের সরাসরি সাইট ভিজিট ও বুকিংয়ে আগ্রহী করি।',
          en: 'High-ticket property and corporate clients verify credibility before committing. We produce grounded project documentaries, aerial progress films, and structured corporate series that drive serious site visits and inquiries.',
        },
        deliverableFocus: {
          bn: 'সেরা প্যাকেজ: মার্কেট ডমিনেন্স (৪০,০০০ টাকা) অথবা ব্র্যান্ড ডমিনেন্স প্লাস (৬০,০০০ টাকা)',
          en: 'Best Fit: Market Dominance (40,000 BDT/mo) or Brand Dominance Plus (60,000 BDT/mo)',
        },
      },
      {
        id: 'institutions',
        tab: { bn: 'প্রতিষ্ঠান, হেলথকেয়ার ও শিক্ষা', en: 'Institutions, Healthcare & Education' },
        headline: {
          bn: 'অভিভাবক ও রোগীদের আস্থা অর্জন করে নিয়মিত ভর্তি ও অ্যাপয়েন্টমেন্ট বৃদ্ধি',
          en: 'Steady admissions and patient trust for hospitals, schools & cadet academies',
        },
        body: {
          bn: 'হসপিটাল, ডায়াগনস্টিক সেন্টার, স্কুল, কলেজ ও ক্যাডেট একাডেমির জন্য সবচেয়ে বড় শক্তি হলো মানুষের বিশ্বাস। আমরা আধুনিক ল্যাব, অভিজ্ঞ শিক্ষক-চিকিৎসক, ক্যাম্পাসের শৃঙ্খলা ও সাফল্যের গল্প স্পষ্টভাবে তুলে ধরি।',
          en: 'Families choose hospitals and schools based on confidence and transparency. We capture clean facilities, specialist care, campus discipline, and real success stories—plus focused 30-day admission season sprints.',
        },
        deliverableFocus: {
          bn: 'সেরা প্যাকেজ: গ্রোথ অ্যাক্সিলারেটর (২৫,০০০ টাকা) অথবা সিজনাল বুস্ট (৩০,০০০ টাকা)',
          en: 'Best Fit: Growth Accelerator (25,000 BDT/mo) or Seasonal Boost (30,000 BDT one-time)',
        },
      },
      {
        id: 'local',
        tab: { bn: 'শোরুম, দোকান, রেস্টুরেন্ট ও সিজনাল', en: 'Showrooms, Shops, Restaurants & Seasonal' },
        headline: {
          bn: 'সহজ ও সাশ্রয়ী বাজেটে প্রিমিয়াম ভিডিও—যা দোকানে সরাসরি ক্রেতা আনে',
          en: 'Accessible, eye-catching reels that bring real walk-ins and orders',
        },
        body: {
          bn: 'ফার্নিচার শোরুম, ফ্যাশন হাউস, রিটেইল শপ, রেস্টুরেন্ট, রিসোর্ট বা কোচিং সেন্টার—আপনি মাত্র ৮,৫০০ টাকার ১৫ দিনের স্টার্টার ট্রায়াল দিয়ে আমাদের মান যাচাই করতে পারেন, তারপর প্রয়োজন অনুযায়ী মাসিক বা ঈদ-সিজনাল প্যাকেজে যেতে পারেন।',
          en: 'Furniture showrooms, clothing stores, restaurants, and coaching centers can start risk-free with our 8,500 BDT 15-day Starter Trial, launch a showroom with our 20,000 BDT Brand Film, or grow steadily at 15,000 BDT/month.',
        },
        deliverableFocus: {
          bn: 'সেরা প্যাকেজ: স্টার্টার ট্রায়াল (৮,৫০০ টাকা), ফাউন্ডেশন গ্রোথ (১৫,০০০ টাকা) বা গ্র্যান্ড লঞ্চ (২০,০০০ টাকা)',
          en: 'Best Fit: Starter Trial (8,500 BDT), Foundation Growth (15,000 BDT/mo), or Grand Launch (20,000 BDT)',
        },
      },
    ],
    steps: [
      {
        num: '01.',
        title: {
          bn: 'ব্যবসা ও ক্রেতা বিশ্লেষণ',
          en: 'Business & Customer Audit',
        },
        desc: {
          bn: 'আপনার পণ্য বা সেবা কারা কেনেন, তারা কী জানতে চান এবং বাজারে আপনার আসল শক্তি কী—তা প্রথমে পরিষ্কারভাবে বুঝে নেওয়া হয়।',
          en: 'We study your products, local or regional buyers, and key questions customers ask before deciding to buy.',
        },
      },
      {
        num: '02.',
        title: {
          bn: 'গল্প, স্ক্রিপ্ট ও গ্রোথ প্ল্যান',
          en: 'Story, Script & Growth Plan',
        },
        desc: {
          bn: 'শুটের আগেই সহজ ও বিশ্বাসযোগ্য স্ক্রিপ্ট, শুটিং পরিকল্পনা এবং কোন ভিডিও কখন প্রকাশ হবে তার পরিষ্কার প্ল্যান তৈরি করা হয়।',
          en: 'Before filming, we prepare clear, approved scripts, shoot schedules, and a focused monthly or campaign content roadmap.',
        },
      },
      {
        num: '03.',
        title: {
          bn: 'সিনেমাটিক শুট ও এডিটিং',
          en: 'Cinematic Shoot & Editing',
        },
        desc: {
          bn: 'প্রফেশনাল ক্যামেরা, সঠিক আলো, পরিষ্কার ভয়েস ও মানসম্মত কালার গ্রেডিংয়ের মাধ্যমে আপনার প্রতিষ্ঠানকে প্রিমিয়াম রূপে উপস্থাপন করা হয়।',
          en: 'Disciplined cinematography, crisp audio, refined editing, and cinema color grading make your brand stand out immediately.',
        },
      },
      {
        num: '04.',
        title: {
          bn: 'আস্থা তৈরি ও কাস্টমার ইনকোয়ারি',
          en: 'Trust Building & Customer Inquiries',
        },
        desc: {
          bn: 'ধারাবাহিক কনটেন্ট ও স্পষ্ট কল-টু-অ্যাকশনের মাধ্যমে দর্শকের আস্থা তৈরি হয় এবং তা সরাসরি কল, WhatsApp মেসেজ ও ভিজিটে রূপ নেয়।',
          en: 'Consistent publishing and clear calls-to-action build lasting brand trust that converts into calls, WhatsApp messages, and walk-ins.',
        },
      },
    ],
    rulesTitle: {
      bn: 'কাজের নিয়মাবলি ও পেমেন্ট নীতিমালা',
      en: 'Agency Rules & Payment Policy',
    },
    rulesSubtitle: {
      bn: 'কোনো ভুল বোঝাবুঝি ছাড়াই সুন্দর ও সময়মতো কাজ শেষ করতে আমরা নিচের সহজ ও স্বচ্ছ নিয়মগুলো মেনে চলি।',
      en: 'Simple, written rules keep every project transparent, on schedule, and stress-free for both sides.',
    },
    paymentHighlightTitle: {
      bn: 'স্পষ্ট পেমেন্ট নীতিমালা',
      en: 'Clear Payment Policy',
    },
    paymentRulePrimary: {
      bn: 'চুক্তি বা কাজ শুরুর সময় ৫০% অগ্রিম এবং প্রতি মাসের ৫ তারিখের মধ্যে অবশিষ্ট ৫০% পরিশোধযোগ্য।',
      en: '50% advance upon confirmation and remaining 50% payable by the 5th of each month.',
    },
    paymentRuleNote: {
      bn: 'প্রতিটি পেমেন্টের সাথে Groth Forge-এর অফিসিয়াল ডিল কনফার্মেশন ও বৈধ মানি রিসিপ্ট প্রদান করা হয়।',
      en: 'Every payment comes with an official Groth Forge deal confirmation and formal money receipt.',
    },
    workflowRules: [
      {
        num: '01.',
        title: { bn: 'অনুমোদিত স্ক্রিপ্ট ও নির্দিষ্ট শুট তারিখ', en: 'Approved Scripts & Confirmed Shoot Dates' },
        desc: {
          bn: 'শুটিংয়ের আগে স্ক্রিপ্ট ও তারিখ নিশ্চিত করা হয়, যাতে কাজের দিন কোনো ঝামেলা বা সময় নষ্ট না হয়।',
          en: 'Scripts and shoot dates are locked in advance so filming runs smoothly without confusion or wasted hours.',
        },
      },
      {
        num: '02.',
        title: { bn: 'স্পষ্ট ও দ্রুত রিভিশন সুবিধা', en: 'Transparent Revision Scope' },
        desc: {
          bn: 'অনুমোদিত স্ক্রিপ্টের ভেতরে প্রয়োজনীয় এডিট সংশোধন দ্রুত ও গুরুত্বের সাথে সম্পন্ন করা হয়।',
          en: 'Structured revision rounds within the approved script keep edits sharp and deliveries right on time.',
        },
      },
      {
        num: '03.',
        title: { bn: 'সময়মতো হাই-কোয়ালিটি ডেলিভারি', en: 'On-Time High-Resolution Delivery' },
        desc: {
          bn: 'প্রতিটি ভিডিও ও ডিজাইন ভালোভাবে যাচাই করে নির্ধারিত সময়ের মধ্যেই ব্যবহারের উপযোগী ফরম্যাটে দেওয়া হয়।',
          en: 'Every reel, film, and graphic goes through visual and audio quality checks before scheduled delivery.',
        },
      },
      {
        num: '04.',
        title: { bn: 'লিখিত কনফার্মেশন ও অফিসিয়াল রিসিপ্ট', en: 'Written Confirmation & Official Receipt' },
        desc: {
          bn: 'প্যাকেজের কাজ, সংখ্যা ও শর্ত লিখিতভাবে নিশ্চিত করা হয় এবং প্রতিটি পেমেন্টের মানি রিসিপ্ট দেওয়া হয়।',
          en: 'Exact deliverables and add-ons are confirmed in writing alongside official payment receipts for your records.',
        },
      },
    ],
  },
  packages: {
    eyebrow: {
      bn: 'স্বচ্ছ প্যাকেজ তালিকা · সর্বনিম্ন থেকে সর্বোচ্চ',
      en: 'Complete Packages · Ordered Lowest to Highest',
    },
    heading: {
      bn: 'সর্বনিম্ন ৮,৫০০ টাকা থেকে সর্বোচ্চ ৬০,০০০ টাকা—সবার জন্য স্পষ্ট প্যাকেজ',
      en: 'From 8,500 BDT Trial to 60,000 BDT Flagship—Clear Investment Tiers',
    },
    subtitle: {
      bn: 'ছোট ট্রায়াল দিয়ে শুরু করুন অথবা পূর্ণাঙ্গ মাসিক গ্রোথ নিন। সব প্যাকেজ কম বাজেট থেকে বড় বাজেট ক্রমানুসারে সাজানো হয়েছে—যেকোনোটি এক ক্লিকে WhatsApp-এ বুক করুন।',
      en: 'Browse every one-time, seasonal, and monthly growth package ordered clearly from lowest entry budget to highest flagship output—with direct WhatsApp booking on every card.',
    },
    tabs: {
      all: { bn: 'সব প্যাকেজ: কম থেকে বেশি (৭)', en: 'All Packages: Lowest to Highest (7)' },
      monthly: { bn: 'মাসিক গ্রোথ প্যাকেজ (৪)', en: 'Monthly Retainers (4)' },
      shortTerm: { bn: 'এককালীন ও সিজনাল (৩)', en: 'One-Time & Seasonal (3)' },
    },
    groupBadges: {
      shortTerm: { bn: 'এককালীন / ক্যাম্পেইন', en: 'One-Time / Campaign' },
      monthly: { bn: 'মাসিক গ্রোথ রিটেইনার', en: 'Monthly Retainer' },
    },
    bestForLabel: { bn: 'যাদের জন্য সবচেয়ে উপযুক্ত', en: 'Best For' },
    deliverablesLabel: { bn: 'প্যাকেজে যা যা থাকছে', en: 'Included Deliverables' },
    bookCta: { bn: 'WhatsApp-এ বুক করুন', en: 'Book on WhatsApp' },
    paymentFootNote: {
      bn: 'পেমেন্ট শর্ত: চুক্তি বা কাজ শুরুর সময় ৫০% অগ্রিম এবং প্রতি মাসের ৫ তারিখের মধ্যে অবশিষ্ট ৫০% পরিশোধযোগ্য।',
      en: 'Payment Policy: 50% advance upon confirmation / start of work, and remaining 50% payable by the 5th of each month.',
    },
  },
  specialDemands: {
    eyebrow: {
      bn: 'আলাদা ডিমান্ড অনুযায়ী চার্জ ও এস্টিমেটর',
      en: 'Special Demand Charges & Interactive Estimator',
    },
    heading: {
      bn: 'বিশেষ চাহিদা, অ্যাড-অন সার্ভিস ও কাস্টম বাজেট এস্টিমেটর',
      en: 'Special Production Demands & Interactive Package Estimator',
    },
    subtitle: {
      bn: 'স্ট্যান্ডার্ড প্যাকেজের বাইরে ডকুমেন্টারি ফিল্ম, ড্রোন শুটিং, অন-ক্যামেরা প্রেজেন্টার বা স্পেশাল ইভেন্ট কভারেজের ক্ষেত্রে কাজের পরিধি, সময়কাল, লোকেশন ও ট্যালেন্ট অনুযায়ী আলাদা ডিমান্ড চার্জ প্রযোজ্য হয়।',
      en: 'Specialized requests beyond standard packages carry transparent separate demand charges based on script depth, shoot duration, site location, and on-camera talent.',
    },
    tableHeaders: {
      service: { bn: 'স্পেশাল সার্ভিস ও বিবরণ', en: 'Special Demand Service' },
      factors: { bn: 'চার্জ নির্ধারণের ভিত্তি', en: 'Scope & Charge Factors' },
      status: { bn: 'চার্জের ধরন', en: 'Billing Basis' },
    },
    selectorTitle: {
      bn: 'প্যাকেজ ও স্পেশাল ডিমান্ড এস্টিমেটর',
      en: 'Interactive Package & Special Demand Estimator',
    },
    selectorSubtitle: {
      bn: 'চাইলে একটি মূল প্যাকেজ বেছে নিন এবং উপরের প্রয়োজনীয় স্পেশাল ডিমান্ডগুলোতে টিক দিন—এক ক্লিকে পুরো হিসাবসহ WhatsApp-এ কোটেশন পাঠান।',
      en: 'Optionally pair any base package with your checked special demands below to preview your scope and send a single complete inquiry to WhatsApp.',
    },
    basePackageLabel: {
      bn: 'মূল প্যাকেজ যুক্ত করুন (ঐচ্ছিক)',
      en: 'Pair with a Base Package (Optional)',
    },
    basePackageNone: {
      bn: 'শুধু স্পেশাল ডিমান্ড সার্ভিস (মূল প্যাকেজ ছাড়া)',
      en: 'Special Demand Services Only (No Base Package)',
    },
    summaryBaseLabel: { bn: 'নির্বাচিত মূল প্যাকেজ', en: 'Base Package' },
    summaryAddonsLabel: { bn: 'আলাদা ডিমান্ড অ্যাড-অন', en: 'Special Demands' },
    summarySeparateChargeNote: {
      bn: '+ আলাদা ডিমান্ড চার্জ (কাজের পরিধি অনুযায়ী WhatsApp-এ নির্ধারিত)',
      en: '+ Separate demand charge (quoted by scope on WhatsApp)',
    },
    selectedCount: {
      bn: 'টি স্পেশাল ডিমান্ড নির্বাচিত',
      en: 'special demands selected',
    },
    noteLabel: {
      bn: 'লোকেশন, সম্ভাব্য তারিখ বা বাড়তি বিবরণ (ঐচ্ছিক)',
      en: 'Shoot location, preferred date, or brief note (optional)',
    },
    notePlaceholder: {
      bn: 'যেমন: পাবনা শহরে নতুন শোরুম উদ্বোধন, ড্রোন ও প্রেজেন্টার প্রয়োজন...',
      en: 'e.g., New showroom grand opening in Pabna Sadar, need drone + host...',
    },
    emptyHint: {
      bn: 'কোটেশন পাঠাতে উপরে কমপক্ষে ১টি স্পেশাল ডিমান্ড অথবা একটি মূল প্যাকেজ নির্বাচন করুন।',
      en: 'Check at least 1 special demand above or choose a base package to prepare your WhatsApp inquiry.',
    },
    sendQuoteCta: {
      bn: 'WhatsApp-এ কাস্টম কোটেশন পাঠান',
      en: 'Send Custom Inquiry on WhatsApp',
    },
    clearSelection: {
      bn: 'সব মুছুন',
      en: 'Reset',
    },
  },
  gallery: {
    eyebrow: {
      bn: 'নির্বাচিত কাজের প্রদর্শনী',
      en: 'Selected Production Showcase',
    },
    heading: {
      bn: 'বিভিন্ন সেক্টরে আমাদের কাজের মান ও বাস্তব প্রভাব',
      en: 'Production Craft Across High-Trust Industries',
    },
    subtitle: {
      bn: 'ক্যাটাগরি অনুযায়ী আমাদের কাজের নমুনা দেখুন অথবা সম্পূর্ণ গুগল ড্রাইভ পোর্টফোলিও ফোল্ডারে সকল ভিডিও ব্রাউজ করুন।',
      en: 'Filter our showcase by industry or open the complete Google Drive portfolio folder to browse full-length films and reels.',
    },
    driveCta: {
      bn: 'সম্পূর্ণ পোর্টফোলিও ফোল্ডার দেখুন',
      en: 'View Full Portfolio Folder',
    },
    filters: [
      { id: 'all' as GalleryCategory, bn: 'সব কাজ', en: 'All' },
      {
        id: 'corporate-real-estate' as GalleryCategory,
        bn: 'কর্পোরেট ও রিয়েল এস্টেট',
        en: 'Corporate & Real Estate',
      },
      {
        id: 'healthcare-education' as GalleryCategory,
        bn: 'হেলথকেয়ার ও শিক্ষা',
        en: 'Healthcare & Education',
      },
      {
        id: 'retail-fashion-hospitality' as GalleryCategory,
        bn: 'রিটেইল, ফ্যাশন ও হসপিটালিটি',
        en: 'Retail, Fashion & Hospitality',
      },
    ],
    inspectLabel: { bn: 'বিস্তারিত দেখুন', en: 'View Details' },
    modalClose: { bn: 'বন্ধ করুন', en: 'Close' },
    modalOutcomeLabel: { bn: 'ব্যবসায়িক ফলাফল', en: 'Business Outcome' },
    modalBookSimilar: {
      bn: 'এমন কাজের জন্য WhatsApp করুন',
      en: 'Inquire Similar Production on WhatsApp',
    },
  },
  contact: {
    eyebrow: {
      bn: 'সরাসরি যোগাযোগ ও বুকিং',
      en: 'Direct WhatsApp & Official Contact',
    },
    heading: {
      bn: 'আপনার ব্যবসার পরবর্তী গ্রোথ যাত্রা শুরু করুন',
      en: 'Start Your Next Growth Campaign with Groth Forge',
    },
    subtitle: {
      bn: 'নিচের সহজ ফর্মটি পূরণ করে সরাসরি আমাদের WhatsApp-এ পাঠিয়ে দিন অথবা অফিসিয়াল নম্বরে কল করুন।',
      en: 'Fill out the quick-message form below to launch a pre-formatted brief straight to our WhatsApp desk, or call us directly.',
    },
    phoneLabel: { bn: 'অফিশিয়াল WhatsApp ও ফোন', en: 'Official WhatsApp & Phone' },
    locationLabel: { bn: 'অফিস লোকেশন', en: 'Agency Location' },
    locationValue: {
      bn: 'পাবনা সদর, পাবনা-৬৬০০, বাংলাদেশ',
      en: 'Pabna Sadar, Pabna-6600, Bangladesh',
    },
    responseLabel: { bn: 'কনসালটেশন সময়সূচি', en: 'Consultation & Scheduling' },
    responseValue: {
      bn: 'শনিবার – বৃহস্পতিবার · সকাল ১০টা – রাত ৯টা (WhatsApp সবসময় সক্রিয়)',
      en: 'Saturday – Thursday · 10:00 AM – 9:00 PM (WhatsApp inquiries always open)',
    },
    directWhatsappBtn: { bn: 'সরাসরি WhatsApp চ্যাট খুলুন', en: 'Open Direct WhatsApp Chat' },
    directCallBtn: { bn: 'কল করুন: 01764713206', en: 'Call 01764713206' },
    formTitle: { bn: 'WhatsApp কুইক-মেসেজ ফর্ম', en: 'Direct WhatsApp Quick-Message Form' },
    fields: {
      businessName: {
        label: { bn: 'প্রতিষ্ঠান বা ব্যবসার নাম *', en: 'Business / Organization Name *' },
        placeholder: {
          bn: 'যেমন: গ্রিন ভ্যালি হাউজিং / রয়্যাল ফ্যাশন হাউস',
          en: 'e.g., Barendra Developers / Royal Fashion House',
        },
      },
      phone: {
        label: { bn: 'মোবাইল / WhatsApp নম্বর *', en: 'Mobile / WhatsApp Number *' },
        placeholder: { bn: '017XXXXXXXX', en: '017XXXXXXXX' },
      },
      sector: {
        label: { bn: 'ব্যবসার সেক্টর *', en: 'Business Sector *' },
        placeholder: { bn: 'সেক্টর নির্বাচন করুন', en: 'Select your sector' },
        options: [
          { value: 'Real Estate & Housing', bn: 'রিয়েল এস্টেট ও হাউজিং', en: 'Real Estate & Housing' },
          { value: 'Corporate & Industrial', bn: 'কর্পোরেট ও ইন্ডাস্ট্রিয়াল', en: 'Corporate & Industrial' },
          { value: 'Hospital & Diagnostic', bn: 'হসপিটাল ও ডায়াগনস্টিক সেন্টার', en: 'Hospital & Diagnostic Center' },
          { value: 'School, College & Cadet Academy', bn: 'স্কুল, কলেজ ও ক্যাডেট একাডেমি', en: 'School, College & Cadet Academy' },
          { value: 'Furniture & Flagship Showroom', bn: 'ফার্নিচার ও ফ্ল্যাগশিপ শোরুম', en: 'Furniture & Flagship Showroom' },
          { value: 'Retail, Fashion & Local Shop', bn: 'রিটেইল, ফ্যাশন ও লোকাল শপ', en: 'Retail, Fashion & Local Shop' },
          { value: 'Restaurant & Resort', bn: 'রেস্টুরেন্ট ও রিসোর্ট', en: 'Restaurant & Resort' },
          { value: 'Other Business', bn: 'অন্যান্য ব্যবসা', en: 'Other Business' },
        ],
      },
      packageInterest: {
        label: { bn: 'আগ্রহের প্যাকেজ (ঐচ্ছিক)', en: 'Package / Interest (Optional)' },
        placeholder: { bn: 'প্যাকেজ বেছে নিন বা খালি রাখুন', en: 'Select a package or leave open' },
      },
      message: {
        label: { bn: 'আপনার প্রজেক্ট বা প্রয়োজনের সংক্ষিপ্ত বিবরণ *', en: 'Brief Project Details *' },
        placeholder: {
          bn: 'কী ধরনের ভিডিও, ক্যাম্পেইন বা মাসিক সার্ভিস খুঁজছেন তা সহজ ভাষায় লিখুন...',
          en: 'Share your goals, timeline, or type of videos/reels you need...',
        },
      },
    },
    submitBtn: { bn: 'WhatsApp মেসেজ প্রস্তুত ও পাঠান', en: 'Prepare & Send on WhatsApp' },
    confirmedHeading: {
      bn: 'আপনার WhatsApp বার্তা প্রস্তুত হয়েছে',
      en: 'Your WhatsApp Brief is Ready',
    },
    confirmedSubtext: {
      bn: 'নিচের বাটনে ক্লিক করে সরাসরি Groth Forge (01764713206)-এ বার্তাটি পাঠিয়ে দিন।',
      en: 'Click the button below to open this pre-filled message directly in WhatsApp with Groth Forge (01764713206).',
    },
    launchWhatsappNow: { bn: 'WhatsApp-এ এখনই পাঠান', en: 'Open in WhatsApp Now' },
    copyMessage: { bn: 'মেসেজ কপি করুন', en: 'Copy Message' },
    copiedMessage: { bn: 'কপি হয়েছে', en: 'Copied' },
    editForm: { bn: 'তথ্য পরিবর্তন করুন', en: 'Edit Details' },
  },
  footer: {
    tagline: {
      bn: 'পাবনা সদর, বাংলাদেশের একটি বিশ্বস্ত ভিডিও প্রোডাকশন ও বিজনেস গ্রোথ এজেন্সি।',
      en: 'Video Production & Business Growth Agency based in Pabna Sadar, Bangladesh.',
    },
    rights: {
      bn: '© ২০২৬ Groth Forge। সর্বস্বত্ব সংরক্ষিত।',
      en: '© 2026 Groth Forge. All rights reserved.',
    },
    floatingLabel: {
      bn: 'WhatsApp-এ কথা বলুন',
      en: 'Chat on WhatsApp',
    },
  },
};

export function t(obj: { bn: string; en: string }, lang: Language): string {
  return obj[lang];
}

