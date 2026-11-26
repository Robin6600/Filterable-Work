import type {
  ContactFormData,
  ContactFormErrors,
  GalleryCategory,
  GalleryItem,
  Language,
  PackageFilterTab,
  PackageItem,
  SpecialDemandItem,
} from '../types';

export const WHATSAPP_NUMBER = '8801764713206';
export const DISPLAY_PHONE_LOCAL = '01764713206';
export const DISPLAY_PHONE_INTL = '+880 1764-713206';
export const PORTFOLIO_DRIVE_URL =
  'https://drive.google.com/drive/folders/1jHfFgxy31bH779-mB2wUd5UalI0r3HBy';

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message || !message.trim()) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export function buildPackageBookingMessage(pkg: PackageItem, lang: Language): string {
  const packageName = pkg.name[lang];
  const priceText = `${pkg.priceDisplay[lang]} (${pkg.billingCycle[lang]})`;

  if (lang === 'bn') {
    return [
      'আসসালামু আলাইকুম Groth Forge,',
      `আমি "${packageName}" প্যাকেজটি (${priceText}) সম্পর্কে বিস্তারিত জানতে এবং বুকিং করতে চাই।`,
      'আমার প্রতিষ্ঠানের ধরন ও সময়সূচি নিয়ে কথা বলার জন্য অনুরোধ করছি।',
    ].join('\n');
  }

  return [
    'Hello Groth Forge,',
    `I would like to book and discuss the "${packageName}" package (${priceText}).`,
    'Please share the next steps to schedule a brief consultation for our business.',
  ].join('\n');
}

export function buildSpecialDemandMessage(
  selectedItems: SpecialDemandItem[],
  lang: Language,
  projectNote?: string,
  basePackage?: PackageItem | null
): string {
  const cleanNote = projectNote?.trim() ?? '';

  if (lang === 'bn') {
    const lines = ['আসসালামু আলাইকুম Groth Forge,'];
    if (basePackage) {
      lines.push(
        `নির্বাচিত মূল প্যাকেজ: ${basePackage.name.bn} (${basePackage.priceDisplay.bn} · ${basePackage.billingCycle.bn})`
      );
    }
    if (selectedItems.length > 0) {
      lines.push(
        'আলাদা ডিমান্ড / অ্যাড-অন সার্ভিস (আলাদা চার্জ প্রযোজ্য):',
        ...selectedItems.map(
          (item, idx) => `${formatCountForLang(idx + 1, 'bn')}. ${item.title.bn}`
        )
      );
    }
    if (cleanNote) {
      lines.push(`প্রজেক্টের বিবরণ / লোকেশন: ${cleanNote}`);
    }
    lines.push('দয়া করে সম্ভাব্য মোট বাজেট ও শুট শিডিউল সম্পর্কে বিস্তারিত জানান।');
    return lines.join('\n');
  }

  const lines = ['Hello Groth Forge,'];
  if (basePackage) {
    lines.push(
      `Selected Base Package: ${basePackage.name.en} (${basePackage.priceDisplay.en} · ${basePackage.billingCycle.en})`
    );
  }
  if (selectedItems.length > 0) {
    lines.push(
      'Special Demand / Add-on Services (separate demand charge):',
      ...selectedItems.map((item, idx) => `${idx + 1}. ${item.title.en}`)
    );
  }
  if (cleanNote) {
    lines.push(`Project details / location: ${cleanNote}`);
  }
  lines.push('Please share the estimated total scope and available shoot schedule.');
  return lines.join('\n');
}

export function buildShowcaseInquiryMessage(item: GalleryItem, lang: Language): string {
  if (lang === 'bn') {
    return [
      'আসসালামু আলাইকুম Groth Forge,',
      `আমি আপনাদের "${item.title.bn}" (${item.format.bn}) কাজটির মতো আমাদের প্রতিষ্ঠানের জন্য ভিডিও প্রোডাকশন করাতে চাই।`,
      'দয়া করে উপযুক্ত প্যাকেজ ও বাজেট সম্পর্কে জানান।',
    ].join('\n');
  }

  return [
    'Hello Groth Forge,',
    `I am interested in a production similar to "${item.title.en}" (${item.format.en}) for our business.`,
    'Please suggest the best package and timeline.',
  ].join('\n');
}

export function buildQuickContactMessage(data: ContactFormData, lang: Language): string {
  const name = data.businessName.trim();
  const phone = data.phone.trim();
  const sector = data.sector.trim();
  const interest = data.packageInterest.trim();
  const note = data.message.trim();

  if (lang === 'bn') {
    return [
      'আসসালামু আলাইকুম Groth Forge,',
      `প্রতিষ্ঠানের নাম: ${name}`,
      `মোবাইল নম্বর: ${phone}`,
      `ব্যবসার ধরন: ${sector}`,
      interest ? `আগ্রহের প্যাকেজ: ${interest}` : '',
      `বার্তা: ${note}`,
    ]
      .filter(Boolean)
      .join('\n');
  }

  return [
    'Hello Groth Forge,',
    `Business / Organization: ${name}`,
    `Phone / WhatsApp: ${phone}`,
    `Business Sector: ${sector}`,
    interest ? `Package / Interest: ${interest}` : '',
    `Project Brief: ${note}`,
  ]
    .filter(Boolean)
    .join('\n');
}

export function validateContactForm(
  data: ContactFormData,
  lang: Language
): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const businessName = data.businessName.trim();
  const phoneDigits = data.phone.replace(/[\s\-()]/g, '');
  const sector = data.sector.trim();
  const message = data.message.trim();

  if (businessName.length < 2) {
    errors.businessName =
      lang === 'bn'
        ? 'আপনার প্রতিষ্ঠান বা ব্যবসার নাম লিখুন।'
        : 'Please enter your business or organization name.';
  }

  const phoneValid = /^(\+?88)?01[3-9]\d{8}$/.test(phoneDigits) || /^\+?\d{10,15}$/.test(phoneDigits);
  if (!phoneValid) {
    errors.phone =
      lang === 'bn'
        ? 'সঠিক মোবাইল বা WhatsApp নম্বর দিন (যেমন: 017XXXXXXXX)।'
        : 'Please enter a valid mobile or WhatsApp number (e.g., 017XXXXXXXX).';
  }

  if (!sector) {
    errors.sector =
      lang === 'bn'
        ? 'ব্যবসার সেক্টর নির্বাচন করুন।'
        : 'Please select your business sector.';
  }

  if (message.length < 8) {
    errors.message =
      lang === 'bn'
        ? 'আপনার প্রয়োজন সম্পর্কে সংক্ষেপে লিখুন (কমপক্ষে ৮ অক্ষর)।'
        : 'Please share a brief note about your project (at least 8 characters).';
  }

  return errors;
}

export function sortPackagesLowestToHighest(packages: PackageItem[]): PackageItem[] {
  return [...packages].sort((a, b) => a.priceBdt - b.priceBdt);
}

export function getPackagesForTab(
  shortTerm: PackageItem[],
  monthly: PackageItem[],
  tab: PackageFilterTab
): PackageItem[] {
  if (tab === 'short-term') {
    return sortPackagesLowestToHighest(shortTerm);
  }
  if (tab === 'monthly') {
    return sortPackagesLowestToHighest(monthly);
  }
  return sortPackagesLowestToHighest([...shortTerm, ...monthly]);
}

export function filterPackagesByTab(
  shortTerm: PackageItem[],
  monthly: PackageItem[],
  tab: PackageFilterTab
): { shortTerm: PackageItem[]; monthly: PackageItem[] } {
  const sortedShort = sortPackagesLowestToHighest(shortTerm);
  const sortedMonthly = sortPackagesLowestToHighest(monthly);

  if (tab === 'short-term') {
    return { shortTerm: sortedShort, monthly: [] };
  }
  if (tab === 'monthly') {
    return { shortTerm: [], monthly: sortedMonthly };
  }
  return { shortTerm: sortedShort, monthly: sortedMonthly };
}

export function filterGalleryItems(
  items: GalleryItem[],
  category: GalleryCategory
): GalleryItem[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

const BENGALI_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function formatCountForLang(value: number, lang: Language): string {
  const str = String(value);
  if (lang === 'en') {
    return str;
  }
  return str.replace(/\d/g, (digit) => BENGALI_DIGITS[Number(digit)] ?? digit);
}


