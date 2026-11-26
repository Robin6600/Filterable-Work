import type { BilingualText, Language } from '../types';
import { buildWhatsAppUrl } from './whatsapp';

export interface ConsultationFormData {
  name: string;
  email: string;
  projectType: string;
}

export interface ConsultationFormErrors {
  name?: string;
  email?: string;
  projectType?: string;
}

export interface ConsultationLeadRecord extends ConsultationFormData {
  id: string;
  submittedAt: string;
}

export interface ProjectTypeOption {
  value: string;
  label: BilingualText;
}

export const CONSULTATION_STORAGE_KEY = 'gf-consultation-leads';

export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [
  {
    value: 'monthly-growth',
    label: {
      bn: 'মাসিক ভিডিও ও বিজনেস গ্রোথ প্যাকেজ',
      en: 'Monthly Video & Growth Retainer',
    },
  },
  {
    value: 'starter-trial',
    label: {
      bn: 'স্টার্টার ট্রায়াল (১৫ দিন / ৮,৫০০ টাকা)',
      en: 'Starter Trial (15 Days / 8,500 BDT)',
    },
  },
  {
    value: 'grand-launch',
    label: {
      bn: 'গ্র্যান্ড লঞ্চ / ব্র্যান্ড ফিল্ম',
      en: 'Grand Launch / Brand Film',
    },
  },
  {
    value: 'seasonal-campaign',
    label: {
      bn: 'সিজনাল / ঈদ ও অ্যাডমিশন ক্যাম্পেইন',
      en: 'Seasonal / Eid & Admission Campaign',
    },
  },
  {
    value: 'documentary-drone',
    label: {
      bn: 'ডকুমেন্টারি / ড্রোন / কর্পোরেট শুট',
      en: 'Documentary / Drone / Corporate Shoot',
    },
  },
  {
    value: 'custom-advisory',
    label: {
      bn: 'কাস্টম প্রজেক্ট / এখনো নিশ্চিত নই',
      en: 'Custom Project / Not Sure Yet',
    },
  },
];

export const CONSULTATION_COPY = {
  triggerBtn: {
    bn: 'ফ্রি কনসালটেশন নিন',
    en: 'Request Free Consultation',
  },
  eyebrow: {
    bn: 'ফ্রি প্রোডাকশন কনসালটেশন',
    en: 'Complimentary Production Consultation',
  },
  title: {
    bn: 'আপনার ব্যবসার জন্য ফ্রি কনসালটেশন বুক করুন',
    en: 'Request a Free Consultation',
  },
  subtitle: {
    bn: 'আপনার নাম, ইমেইল ও প্রজেক্টের ধরন দিন—Groth Forge টিম দ্রুত আপনার জন্য সেরা পরিকল্পনা ও বাজেট পরামর্শ নিয়ে যোগাযোগ করবে।',
    en: 'Share your name, email, and project type. The Groth Forge team will reach out with a tailored production roadmap and clear budget scope.',
  },
  closeAriaLabel: {
    bn: 'কনসালটেশন ফর্ম বন্ধ করুন',
    en: 'Close consultation modal',
  },
  fields: {
    name: {
      label: { bn: 'আপনার পূর্ণ নাম *', en: 'Full Name *' },
      placeholder: { bn: 'যেমন: আরিফ হোসেন', en: 'e.g., Tanvir Ahmed' },
    },
    email: {
      label: { bn: 'ইমেইল ঠিকানা *', en: 'Email Address *' },
      placeholder: { bn: 'you@business.com', en: 'you@business.com' },
    },
    projectType: {
      label: { bn: 'প্রজেক্টের ধরন *', en: 'Project Type *' },
      placeholder: { bn: 'প্রজেক্টের ধরন নির্বাচন করুন', en: 'Select a project type' },
    },
  },
  submitBtn: {
    bn: 'কনসালটেশন অনুরোধ পাঠান',
    en: 'Submit Consultation Request',
  },
  cancelBtn: {
    bn: 'বাতিল করুন',
    en: 'Cancel',
  },
  noteFooter: {
    bn: 'কোনো বাধ্যবাধকতা নেই · সাধারণত ১ কর্মদিবসের মধ্যে উত্তর দেওয়া হয়।',
    en: 'No obligation · Typical response within 1 business day.',
  },
  success: {
    heading: {
      bn: 'আপনার ফ্রি কনসালটেশন অনুরোধ গ্রহণ করা হয়েছে',
      en: 'Consultation Request Received',
    },
    body: {
      bn: 'ধন্যবাদ! Groth Forge টিম আপনার প্রজেক্টের বিবরণ দেখে শীঘ্রই ইমেইলে যোগাযোগ করবে। চাইলে এখনই WhatsApp-এও সরাসরি কথা বলতে পারেন।',
      en: 'Thank you. The Groth Forge team has recorded your inquiry and will follow up by email shortly. You can also continue directly on WhatsApp if you prefer an immediate reply.',
    },
    refLabel: { bn: 'রেফারেন্স নম্বর', en: 'Reference ID' },
    nameLabel: { bn: 'নাম', en: 'Name' },
    emailLabel: { bn: 'ইমেইল', en: 'Email' },
    projectLabel: { bn: 'প্রজেক্টের ধরন', en: 'Project Type' },
    whatsappBtn: {
      bn: 'WhatsApp-এ দ্রুত কথা বলুন',
      en: 'Continue on WhatsApp',
    },
    newRequestBtn: {
      bn: 'আরেকটি অনুরোধ পাঠান',
      en: 'Submit Another Request',
    },
    doneBtn: {
      bn: 'সম্পন্ন',
      en: 'Done',
    },
  },
};

export function validateConsultationForm(
  data: ConsultationFormData,
  lang: Language
): ConsultationFormErrors {
  const errors: ConsultationFormErrors = {};
  const trimmedName = data.name.trim();
  const trimmedEmail = data.email.trim();
  const trimmedProjectType = data.projectType.trim();

  if (trimmedName.length < 2) {
    errors.name =
      lang === 'bn'
        ? 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন (কমপক্ষে ২ অক্ষর)।'
        : 'Please enter your full name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(trimmedEmail)) {
    errors.email =
      lang === 'bn'
        ? 'অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা দিন।'
        : 'Please enter a valid email address.';
  }

  if (!trimmedProjectType) {
    errors.projectType =
      lang === 'bn'
        ? 'অনুগ্রহ করে একটি প্রজেক্টের ধরন নির্বাচন করুন।'
        : 'Please select a project type.';
  }

  return errors;
}

export function getProjectTypeLabel(value: string, lang: Language): string {
  const match = PROJECT_TYPE_OPTIONS.find((opt) => opt.value === value);
  return match ? match.label[lang] : value;
}

export function createConsultationLeadRecord(
  data: ConsultationFormData,
  sequenceNumber = 1
): ConsultationLeadRecord {
  const code = String(1000 + sequenceNumber);
  return {
    id: `GF-${code}`,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    projectType: data.projectType.trim(),
    submittedAt: new Date().toISOString(),
  };
}

export function buildConsultationWhatsAppUrl(
  lead: ConsultationLeadRecord,
  lang: Language
): string {
  const projectLabel = getProjectTypeLabel(lead.projectType, lang);

  if (lang === 'bn') {
    return buildWhatsAppUrl(
      [
        'আসসালামু আলাইকুম Groth Forge,',
        `আমি ওয়েবসাইটে ফ্রি কনসালটেশন অনুরোধ পাঠিয়েছি (রেফারেন্স: ${lead.id})।`,
        `নাম: ${lead.name}`,
        `ইমেইল: ${lead.email}`,
        `প্রজেক্টের ধরন: ${projectLabel}`,
        'সময়সূচি ও পরবর্তী ধাপ নিয়ে কথা বলার জন্য অনুরোধ করছি।',
      ].join('\n')
    );
  }

  return buildWhatsAppUrl(
    [
      'Hello Groth Forge,',
      `I just submitted a Free Consultation request on your website (Ref: ${lead.id}).`,
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Project Type: ${projectLabel}`,
      'Looking forward to discussing scope and next steps.',
    ].join('\n')
  );
}
