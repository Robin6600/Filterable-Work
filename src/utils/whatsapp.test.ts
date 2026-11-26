import test from 'node:test';
import assert from 'node:assert/strict';
import {
  WHATSAPP_NUMBER,
  buildPackageBookingMessage,
  buildQuickContactMessage,
  buildSpecialDemandMessage,
  buildWhatsAppUrl,
  filterGalleryItems,
  filterPackagesByTab,
  sortPackagesLowestToHighest,
  validateContactForm,
} from './whatsapp';
import type { GalleryItem, PackageItem, SpecialDemandItem } from '../types';

const samplePackages: PackageItem[] = [
  {
    id: 'growth-accelerator',
    group: 'monthly',
    tierOrder: 2,
    priceBdt: 25000,
    name: { bn: 'গ্রোথ অ্যাক্সিলারেটর', en: 'Growth Accelerator' },
    subtitle: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
    priceDisplay: { bn: '২৫,০০০ টাকা', en: '25,000 BDT' },
    billingCycle: { bn: 'প্রতি মাস', en: 'per month' },
    idealFor: { bn: 'ব্যবসা বৃদ্ধির জন্য', en: 'Growing businesses' },
    deliverables: { bn: ['১৫টি রিলস'], en: ['15 Reels'] },
  },
  {
    id: 'foundation',
    group: 'monthly',
    tierOrder: 1,
    priceBdt: 15000,
    name: { bn: 'ফাউন্ডেশন গ্রোথ', en: 'Foundation Growth' },
    subtitle: { bn: 'মাসিক শুরু', en: 'Entry Monthly' },
    priceDisplay: { bn: '১৫,০০০ টাকা', en: '15,000 BDT' },
    billingCycle: { bn: 'প্রতি মাস', en: 'per month' },
    idealFor: { bn: 'শুরুর জন্য', en: 'Starting out' },
    deliverables: { bn: ['৮টি রিলস'], en: ['8 Reels'] },
  },
];

const sampleDemands: SpecialDemandItem[] = [
  {
    id: 'drone',
    code: '02',
    title: { bn: 'ড্রোন / এরিয়াল শুটিং', en: 'Drone / Aerial Cinematography' },
    summary: { bn: 'এরিয়াল শুট', en: 'Aerial shoot' },
    pricingBasis: { bn: 'আলাদা চার্জ', en: 'Separate charge' },
    scopeFactors: { bn: ['লোকেশন'], en: ['Location'] },
  },
];

const sampleGallery: GalleryItem[] = [
  {
    id: 'g1',
    category: 'corporate-real-estate',
    image: '/img1.jpg',
    title: { bn: 'রিয়েল এস্টেট', en: 'Real Estate Film' },
    sectorLabel: { bn: 'রিয়েল এস্টেট', en: 'Real Estate' },
    format: { bn: 'ডকুমেন্টারি', en: 'Documentary' },
    outcome: { bn: 'বুকিং বৃদ্ধি', en: 'Increased inquiries' },
    description: { bn: 'বিবরণ', en: 'Description' },
  },
  {
    id: 'g2',
    category: 'healthcare-education',
    image: '/img2.jpg',
    title: { bn: 'হসপিটাল ফিল্ম', en: 'Hospital Film' },
    sectorLabel: { bn: 'হেলথকেয়ার', en: 'Healthcare' },
    format: { bn: 'ব্র্যান্ড ফিল্ম', en: 'Brand Film' },
    outcome: { bn: 'আস্থা বৃদ্ধি', en: 'Higher trust' },
    description: { bn: 'বিবরণ', en: 'Description' },
  },
];

test('buildWhatsAppUrl uses exact agency number and encodes text', () => {
  assert.equal(buildWhatsAppUrl(), `https://wa.me/${WHATSAPP_NUMBER}`);
  const withMsg = buildWhatsAppUrl('Hello Groth Forge');
  assert.equal(withMsg, 'https://wa.me/8801764713206?text=Hello%20Groth%20Forge');
});

test('buildPackageBookingMessage generates localized message with package name and price', () => {
  const pkg = samplePackages[0];
  const bnMsg = buildPackageBookingMessage(pkg, 'bn');
  assert.match(bnMsg, /গ্রোথ অ্যাক্সিলারেটর/);
  assert.match(bnMsg, /২৫,০০০ টাকা/);

  const enMsg = buildPackageBookingMessage(pkg, 'en');
  assert.match(enMsg, /Growth Accelerator/);
  assert.match(enMsg, /25,000 BDT/);
});

test('buildSpecialDemandMessage includes selected add-ons and optional project note', () => {
  const enMsg = buildSpecialDemandMessage(sampleDemands, 'en', 'Pabna Town Hall launch');
  assert.match(enMsg, /1\. Drone \/ Aerial Cinematography/);
  assert.match(enMsg, /Pabna Town Hall launch/);

  const bnMsg = buildSpecialDemandMessage(sampleDemands, 'bn', 'পাবনা সদর');
  assert.match(bnMsg, /১\.|1\./);
  assert.match(bnMsg, /ড্রোন \/ এরিয়াল শুটিং/);
  assert.match(bnMsg, /পাবনা সদর/);
});

test('sortPackagesLowestToHighest orders packages ascending by BDT price', () => {
  const sorted = sortPackagesLowestToHighest(samplePackages);
  assert.equal(sorted[0].priceBdt, 15000);
  assert.equal(sorted[1].priceBdt, 25000);
});

test('filterPackagesByTab returns requested package groups', () => {
  const onlyMonthly = filterPackagesByTab([], samplePackages, 'monthly');
  assert.equal(onlyMonthly.shortTerm.length, 0);
  assert.equal(onlyMonthly.monthly.length, 2);
  assert.equal(onlyMonthly.monthly[0].priceBdt, 15000);
});

test('filterGalleryItems filters by category and preserves all on "all"', () => {
  assert.equal(filterGalleryItems(sampleGallery, 'all').length, 2);
  assert.equal(filterGalleryItems(sampleGallery, 'corporate-real-estate').length, 1);
  assert.equal(filterGalleryItems(sampleGallery, 'retail-fashion-hospitality').length, 0);
});

test('validateContactForm catches invalid/empty inputs and passes valid BD numbers', () => {
  const invalid = validateContactForm(
    { businessName: '', phone: '123', sector: '', packageInterest: '', message: 'hi' },
    'en'
  );
  assert.ok(invalid.businessName);
  assert.ok(invalid.phone);
  assert.ok(invalid.sector);
  assert.ok(invalid.message);

  const valid = validateContactForm(
    {
      businessName: 'Pabna Retail House',
      phone: '01764713206',
      sector: 'Retail & Fashion',
      packageInterest: 'Growth Accelerator',
      message: 'We need monthly reels and festive campaign shoots.',
    },
    'en'
  );
  assert.deepEqual(valid, {});

  const formatted = buildQuickContactMessage(
    {
      businessName: 'Pabna Retail House',
      phone: '01764713206',
      sector: 'Retail & Fashion',
      packageInterest: 'Growth Accelerator',
      message: 'We need monthly reels.',
    },
    'en'
  );
  assert.match(formatted, /Pabna Retail House/);
  assert.match(formatted, /01764713206/);
});

test('formatCountForLang formats Bengali numerals cleanly', async () => {
  const { formatCountForLang } = await import('./whatsapp');
  assert.equal(formatCountForLang(0, 'bn'), '০');
  assert.equal(formatCountForLang(24, 'bn'), '২৪');
  assert.equal(formatCountForLang(24, 'en'), '24');
});

test('getPackagesForTab sorts combined packages strictly lowest to highest', async () => {
  const { getPackagesForTab } = await import('./whatsapp');
  const shortPkg: PackageItem = {
    ...samplePackages[0],
    id: 'starter-trial',
    group: 'short-term',
    priceBdt: 8500,
    priceDisplay: { bn: '৮,৫০০ টাকা', en: '8,500 BDT' },
  };
  const all = getPackagesForTab([shortPkg], samplePackages, 'all');
  assert.deepEqual(
    all.map((p) => p.priceBdt),
    [8500, 15000, 25000]
  );

  const combinedMsg = buildSpecialDemandMessage(
    sampleDemands,
    'en',
    'Showroom launch',
    samplePackages[0]
  );
  assert.match(combinedMsg, /Growth Accelerator/);
  assert.match(combinedMsg, /Drone \/ Aerial Cinematography/);
  assert.match(combinedMsg, /Showroom launch/);
});


