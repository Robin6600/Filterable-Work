import { useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import type { Language, PackageFilterTab, PackageItem } from '../types';
import { MONTHLY_PACKAGES, SHORT_TERM_PACKAGES, UI_COPY, t } from '../data/content';
import {
  buildPackageBookingMessage,
  buildWhatsAppUrl,
  formatCountForLang,
  getPackagesForTab,
} from '../utils/whatsapp';

interface PackagesSectionProps {
  lang: Language;
}

interface PackageCardProps {
  pkg: PackageItem;
  rank: number;
  lang: Language;
}

function PackageCard({ pkg, rank, lang }: PackageCardProps) {
  const isPopular = pkg.highlight === 'popular';
  const isFlagship = pkg.highlight === 'flagship';
  const whatsappUrl = buildWhatsAppUrl(buildPackageBookingMessage(pkg, lang));

  const cardSurface = isPopular
    ? 'border-[#D4AF37] bg-white dark:bg-[#131822]'
    : isFlagship
      ? 'border-[#10B981]/55 bg-white dark:bg-[#131822]'
      : 'border-black/10 dark:border-white/10 bg-white dark:bg-[#131822] hover:border-[#D4AF37]/50';

  const groupLabel =
    pkg.group === 'monthly'
      ? t(UI_COPY.packages.groupBadges.monthly, lang)
      : t(UI_COPY.packages.groupBadges.shortTerm, lang);

  const rankLabel =
    lang === 'bn'
      ? `০${formatCountForLang(rank, 'bn')}`
      : `0${rank}`;

  return (
    <article
      data-testid={`package-card-${pkg.id}`}
      className={`flex h-full flex-col justify-between rounded-xl border p-6 sm:p-7 transition-all duration-150 hover:-translate-y-0.5 ${cardSurface}`}
    >
      <div>
        {/* Clean Unboxed Kicker Line (Zero Pills) */}
        <div className="flex items-center justify-between gap-2 text-xs font-semibold">
          <span
            className={
              isPopular
                ? 'text-[#8C6D11] dark:text-[#D4AF37]'
                : isFlagship
                  ? 'text-[#059669] dark:text-[#10B981]'
                  : 'text-[#6B7280] dark:text-[#9CA3AF]'
            }
          >
            {pkg.highlightLabel ? t(pkg.highlightLabel, lang) : groupLabel}
          </span>
          <span className="tabular-nums text-[#6B7280] dark:text-[#9CA3AF]">
            {rankLabel}
          </span>
        </div>

        {/* Aligned Title & Subtitle Block */}
        <div className="mt-2.5 md:min-h-[88px]">
          <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-[#111827] dark:text-[#F9FAFB]">
            {t(pkg.name, lang)}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm leading-snug text-[#4B5563] dark:text-[#9CA3AF]">
            {t(pkg.subtitle, lang)}
          </p>
        </div>

        {/* Price Block with Tabular Numerals */}
        <div className="mt-4 border-y border-black/8 dark:border-white/8 py-4">
          <p className="tabular-nums text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] dark:text-white">
            {t(pkg.priceDisplay, lang)}
          </p>
          <p className="mt-1 text-xs font-medium text-[#8C6D11] dark:text-[#D4AF37]">
            {t(pkg.billingCycle, lang)}
          </p>
        </div>

        {/* Who This Fits Best */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
            {t(UI_COPY.packages.bestForLabel, lang)}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[#374151] dark:text-[#D1D5DB]">
            {t(pkg.idealFor, lang)}
          </p>
        </div>

        {/* Deliverables */}
        <div className="mt-5">
          <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
            {t(UI_COPY.packages.deliverablesLabel, lang)}
          </p>
          <ul className="mt-3 space-y-2.5">
            {pkg.deliverables[lang].map((line, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm leading-snug text-[#1F2937] dark:text-[#E5E7EB]"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#059669] dark:text-[#10B981]"
                  aria-hidden="true"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Book on WhatsApp CTA */}
      <div className="mt-7 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t(UI_COPY.packages.bookCta, lang)} — ${t(pkg.name, lang)}`}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isPopular
              ? 'bg-[#D4AF37] text-[#0B0E14] hover:bg-[#C39D28] focus-visible:outline-[#D4AF37]'
              : isFlagship
                ? 'bg-[#10B981] text-white hover:bg-[#059669] focus-visible:outline-[#10B981]'
                : 'bg-[#111827] text-white hover:bg-[#1F2937] dark:bg-white/10 dark:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#0B0E14] focus-visible:outline-[#D4AF37]'
          }`}
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{t(UI_COPY.packages.bookCta, lang)}</span>
        </a>
      </div>
    </article>
  );
}

export function PackagesSection({ lang }: PackagesSectionProps) {
  const [activeTab, setActiveTab] = useState<PackageFilterTab>('all');

  const visiblePackages = getPackagesForTab(
    SHORT_TERM_PACKAGES,
    MONTHLY_PACKAGES,
    activeTab
  );

  const tabs: { id: PackageFilterTab; label: string }[] = [
    { id: 'all', label: t(UI_COPY.packages.tabs.all, lang) },
    { id: 'monthly', label: t(UI_COPY.packages.tabs.monthly, lang) },
    { id: 'short-term', label: t(UI_COPY.packages.tabs.shortTerm, lang) },
  ];

  return (
    <section
      id="packages"
      className="scroll-mt-16 border-b border-black/8 dark:border-white/8 py-18 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
              {t(UI_COPY.packages.eyebrow, lang)}
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
              {t(UI_COPY.packages.heading, lang)}
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
              {t(UI_COPY.packages.subtitle, lang)}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Package Category Filter"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-black/10 dark:border-white/10 bg-[#F1EFEA] dark:bg-[#131822] p-1 self-start lg:self-auto"
          >
            {tabs.map((tab) => {
              const selected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-md px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                    selected
                      ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                      : 'text-[#4B5563] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Unified Lowest-to-Highest Package Grid */}
        <div
          data-testid="packages-grid"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visiblePackages.map((pkg, idx) => (
            <PackageCard key={pkg.id} pkg={pkg} rank={idx + 1} lang={lang} />
          ))}
        </div>

        {/* Payment Policy Reminder */}
        <p className="mt-10 text-sm font-medium text-[#4B5563] dark:text-[#9CA3AF]">
          {t(UI_COPY.packages.paymentFootNote, lang)}
        </p>
      </div>
    </section>
  );
}
