import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import type { Language } from '../types';
import {
  ROI_INVESTMENT_TIERS,
  ROI_SECTORS,
  buildRoiPlanWhatsAppUrl,
  calculateGrowthProjection,
  type ConsistencyHorizon,
  type InvestmentTierBdt,
  type RoiSectorId,
} from '../utils/roiEstimator';
import { formatCountForLang } from '../utils/whatsapp';

interface GrowthRoiEstimatorProps {
  lang: Language;
}

const COPY = {
  eyebrow: {
    bn: 'ইন্টারঅ্যাক্টিভ গ্রোথ ROI এস্টিমেটর',
    en: 'Interactive Growth ROI Estimator',
  },
  heading: {
    bn: 'আপনার সেক্টর ও মাসিক বাজেট অনুযায়ী সম্ভাব্য ফলাফল আগেই দেখুন',
    en: 'Project Your Monthly Reach, Inquiries & In-House Cost Savings',
  },
  subtitle: {
    bn: 'নিচে আপনার ব্যবসার ধরন এবং Groth Forge-এর মাসিক প্যাকেজ নির্বাচন করুন—দেখুন ধারাবাহিক সিনেমাটিক কনটেন্ট কীভাবে আপনার ব্যবসার রিচ, ক্রেতা অনুসন্ধান ও টিম খরচ সাশ্রয় করে।',
    en: 'Select your business sector and monthly investment level to see realistic regional growth projections and how much you save compared to hiring an in-house creative team.',
  },
  step1Label: {
    bn: '০১. আপনার ব্যবসার সেক্টর নির্বাচন করুন',
    en: '01. Select Your Business Sector',
  },
  step2Label: {
    bn: '০২. মাসিক ইনভেস্টমেন্ট লেভেল (প্যাকেজ)',
    en: '02. Monthly Investment Level',
  },
  step3Label: {
    bn: '০৩. ধারাবাহিকতার সময়কাল',
    en: '03. Consistency Horizon',
  },
  horizons: [
    { value: 1 as ConsistencyHorizon, bn: '১ম মাস (শুরু)', en: 'Month 1 (Launch)' },
    { value: 3 as ConsistencyHorizon, bn: '৩ মাস (স্থায়ী গতি)', en: '3 Months (Momentum)' },
    { value: 6 as ConsistencyHorizon, bn: '৬ মাস (বাজারে শীর্ষ আস্থা)', en: '6 Months (Authority)' },
  ],
  outputHeader: {
    bn: 'সম্ভাব্য মাসিক গ্রোথ প্রজেকশন',
    en: 'Projected Monthly Growth Snapshot',
  },
  reachLabel: {
    bn: 'সম্ভাব্য মাসিক সোশ্যাল রিচ',
    en: 'Estimated Monthly Social Reach',
  },
  reachUnit: {
    bn: 'টার্গেটেড আঞ্চলিক দর্শক / মাস',
    en: 'targeted regional viewers / month',
  },
  inquiriesLabel: {
    bn: 'সম্ভাব্য মাসিক কাস্টমার ইনকোয়ারি',
    en: 'Projected Monthly Inquiries',
  },
  deliverablesLabel: {
    bn: 'মাসিক প্রোডাকশন আউটপুট',
    en: 'Monthly Production Deliverables',
  },
  savingsLabel: {
    bn: 'ইন-হাউস টিম খরচের তুলনায় সাশ্রয়',
    en: 'Saved vs. In-House Creative Team',
  },
  savingsNote: {
    bn: 'নিজস্ব ক্যামেরাম্যান, এডিটর, ডিজাইনার ও গিয়ারের আনুমানিক ~৯৫,০০০ টাকা/মাস খরচের তুলনায়',
    en: 'Compared against ~95,000 BDT/mo typical in-house videographer, editor, designer & gear cost',
  },
  insightLabel: {
    bn: 'সেক্টর গ্রোথ নোট',
    en: 'Sector Growth Insight',
  },
  disclaimer: {
    bn: '* আঞ্চলিক ক্যাম্পেইনের অভিজ্ঞতা ও নিয়মিত প্রকাশনার ভিত্তিতে আনুমানিক প্রজেকশন। প্রকৃত ফলাফল আপনার অফার, প্রোডাক্টের চাহিদা ও রেসপন্স গতির ওপর নির্ভর করে।',
    en: '* Realistic regional projections based on consistent monthly publishing. Actual outcomes depend on offer strength, product demand, and sales response speed.',
  },
  ctaButton: {
    bn: 'এই গ্রোথ প্ল্যানটি WhatsApp-এ আলোচনা করুন',
    en: 'Discuss This Growth Plan on WhatsApp',
  },
};

export function GrowthRoiEstimator({ lang }: GrowthRoiEstimatorProps) {
  const [sectorId, setSectorId] = useState<RoiSectorId>('showroom-furniture');
  const [investmentBdt, setInvestmentBdt] = useState<InvestmentTierBdt>(25000);
  const [horizon, setHorizon] = useState<ConsistencyHorizon>(3);

  const projection = calculateGrowthProjection(
    sectorId,
    investmentBdt,
    horizon,
    lang
  );
  const whatsappHref = buildRoiPlanWhatsAppUrl(projection, lang);

  // Visual bar ratios for comparative clarity across tiers
  const reachBarPercent = Math.min(
    100,
    Math.round((projection.monthlyReachMaxK / 550) * 100)
  );
  const inquiryBarPercent = Math.min(
    100,
    Math.round((projection.monthlyInquiriesMax / 950) * 100)
  );

  return (
    <section
      id="roi-estimator"
      aria-labelledby="roi-estimator-heading"
      className="scroll-mt-16 border-b border-black/8 dark:border-white/8 py-18 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
            {COPY.eyebrow[lang]}
          </p>
          <h2
            id="roi-estimator-heading"
            className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]"
          >
            {COPY.heading[lang]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
            {COPY.subtitle[lang]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Interactive Controls */}
          <div className="lg:col-span-6 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822] p-6 sm:p-8 flex flex-col justify-between space-y-8">
            {/* Step 1: Business Sector Selector */}
            <div>
              <p className="text-sm font-bold text-[#111827] dark:text-[#F9FAFB]">
                {COPY.step1Label[lang]}
              </p>
              <div
                role="radiogroup"
                aria-label={COPY.step1Label[lang]}
                className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              >
                {ROI_SECTORS.map((sector) => {
                  const selected = sector.id === sectorId;
                  return (
                    <button
                      key={sector.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setSectorId(sector.id)}
                      className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                        selected
                          ? 'border-[#D4AF37] bg-[#D4AF37]/12 text-[#111827] dark:bg-[#D4AF37]/15 dark:text-white'
                          : 'border-black/10 dark:border-white/10 bg-[#F8F7F4] dark:bg-[#0B0E14] text-[#4B5563] dark:text-[#9CA3AF] hover:border-[#D4AF37]/50 hover:text-[#111827] dark:hover:text-white'
                      }`}
                    >
                      {sector.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Monthly Investment Level */}
            <div>
              <p className="text-sm font-bold text-[#111827] dark:text-[#F9FAFB]">
                {COPY.step2Label[lang]}
              </p>
              <div
                role="radiogroup"
                aria-label={COPY.step2Label[lang]}
                className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              >
                {ROI_INVESTMENT_TIERS.map((tier) => {
                  const selected = tier.amountBdt === investmentBdt;
                  return (
                    <button
                      key={tier.packageId}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setInvestmentBdt(tier.amountBdt)}
                      className={`rounded-lg border px-4 py-3.5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                        selected
                          ? 'border-[#10B981] bg-[#10B981]/10 dark:bg-[#10B981]/15'
                          : 'border-black/10 dark:border-white/10 bg-[#F8F7F4] dark:bg-[#0B0E14] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <span className="block tabular-nums text-base font-extrabold text-[#111827] dark:text-white">
                        {tier.priceLabel[lang]}
                      </span>
                      <span className="mt-0.5 block text-xs font-medium text-[#4B5563] dark:text-[#9CA3AF]">
                        {tier.packageName[lang]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Consistency Horizon */}
            <div>
              <p className="text-sm font-bold text-[#111827] dark:text-[#F9FAFB]">
                {COPY.step3Label[lang]}
              </p>
              <div
                role="radiogroup"
                aria-label={COPY.step3Label[lang]}
                className="mt-3 inline-flex w-full flex-wrap sm:flex-nowrap gap-1.5 rounded-lg bg-[#F1EFEA] dark:bg-[#0B0E14] p-1"
              >
                {COPY.horizons.map((h) => {
                  const selected = h.value === horizon;
                  return (
                    <button
                      key={h.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setHorizon(h.value)}
                      className={`flex-1 rounded-md px-3 py-2 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                        selected
                          ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                          : 'text-[#4B5563] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white'
                      }`}
                    >
                      {h[lang]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Projected ROI & Financial Justification */}
          <div
            data-testid="roi-projection-panel"
            className="lg:col-span-6 rounded-xl border border-[#D4AF37]/40 bg-white dark:bg-[#131822] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
                    {COPY.outputHeader[lang]}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[#111827] dark:text-[#F9FAFB]">
                    {projection.tier.packageName[lang]}
                    <span className="mx-2 text-[#6B7280]" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-base font-semibold text-[#4B5563] dark:text-[#9CA3AF]">
                      {projection.sector.label[lang]}
                    </span>
                  </h3>
                </div>
                <span className="tabular-nums text-sm font-bold text-[#059669] dark:text-[#10B981]">
                  {projection.tier.priceLabel[lang]}
                </span>
              </div>

              {/* Primary Projected KPI Pair */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-lg border border-black/8 dark:border-white/8 bg-[#F8F7F4] dark:bg-[#0B0E14] p-5">
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                    {COPY.reachLabel[lang]}
                  </p>
                  <p
                    data-testid="roi-reach-value"
                    className="mt-2 tabular-nums text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-white"
                  >
                    {projection.reachDisplay}
                  </p>
                  <p className="mt-1 text-xs text-[#4B5563] dark:text-[#9CA3AF]">
                    {COPY.reachUnit[lang]}
                  </p>
                  <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-black/8 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#D4AF37] transition-all duration-300"
                      style={{ width: `${Math.max(14, reachBarPercent)}%` }}
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-black/8 dark:border-white/8 bg-[#F8F7F4] dark:bg-[#0B0E14] p-5">
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                    {COPY.inquiriesLabel[lang]}
                  </p>
                  <p
                    data-testid="roi-inquiries-value"
                    className="mt-2 tabular-nums text-2xl sm:text-3xl font-extrabold text-[#059669] dark:text-[#10B981]"
                  >
                    {projection.inquiriesDisplay}
                  </p>
                  <p className="mt-1 text-xs text-[#4B5563] dark:text-[#9CA3AF]">
                    {projection.sector.inquiryUnit[lang]}
                  </p>
                  <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-black/8 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#10B981] transition-all duration-300"
                      style={{ width: `${Math.max(16, inquiryBarPercent)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Deliverables + Cost Savings Justification */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-black/8 dark:border-white/8 pt-5">
                <div>
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                    {COPY.deliverablesLabel[lang]}
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-[#111827] dark:text-[#F3F4F6]">
                    {projection.tier.assetsSummary[lang]}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                    {COPY.savingsLabel[lang]}
                  </p>
                  <p
                    data-testid="roi-savings-value"
                    className="mt-1.5 tabular-nums text-sm font-bold text-[#8C6D11] dark:text-[#D4AF37]"
                  >
                    {projection.savingsDisplay} ({projection.savingsPercentDisplay})
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B7280] dark:text-[#9CA3AF]">
                    {COPY.savingsNote[lang]}
                  </p>
                </div>
              </div>

              {/* Sector Insight */}
              <div className="mt-5 border-t border-black/8 dark:border-white/8 pt-4">
                <p className="text-xs font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
                  {COPY.insightLabel[lang]}
                  <span className="mx-1.5 text-[#6B7280]" aria-hidden="true">
                    ·
                  </span>
                  <span className="tabular-nums text-[#6B7280] dark:text-[#9CA3AF]">
                    {lang === 'bn'
                      ? `${formatCountForLang(horizon, 'bn')} মাসের লক্ষ্য`
                      : `${horizon}-Month View`}
                  </span>
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#374151] dark:text-[#D1D5DB]">
                  {projection.sector.insight[lang]}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-2 space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="roi-whatsapp-cta"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#10B981] hover:bg-[#059669] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{COPY.ctaButton[lang]}</span>
              </a>
              <p className="text-xs leading-relaxed text-[#6B7280] dark:text-[#9CA3AF]">
                {COPY.disclaimer[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
