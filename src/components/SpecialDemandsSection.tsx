import { useState } from 'react';
import { Check, MessageCircle, RotateCcw } from 'lucide-react';
import type { Language } from '../types';
import {
  MONTHLY_PACKAGES,
  SHORT_TERM_PACKAGES,
  SPECIAL_DEMANDS,
  UI_COPY,
  t,
} from '../data/content';
import {
  buildSpecialDemandMessage,
  buildWhatsAppUrl,
  formatCountForLang,
  sortPackagesLowestToHighest,
} from '../utils/whatsapp';

interface SpecialDemandsSectionProps {
  lang: Language;
}

export function SpecialDemandsSection({ lang }: SpecialDemandsSectionProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('');
  const [projectNote, setProjectNote] = useState('');

  const allPackages = sortPackagesLowestToHighest([
    ...SHORT_TERM_PACKAGES,
    ...MONTHLY_PACKAGES,
  ]);

  const toggleDemand = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = SPECIAL_DEMANDS.filter((item) =>
    selectedIds.includes(item.id)
  );
  const selectedPackage =
    allPackages.find((pkg) => pkg.id === selectedPackageId) ?? null;

  const canSendQuote = selectedItems.length > 0 || selectedPackage !== null;
  const customQuoteUrl = canSendQuote
    ? buildWhatsAppUrl(
        buildSpecialDemandMessage(selectedItems, lang, projectNote, selectedPackage)
      )
    : undefined;

  return (
    <section
      id="special-demands"
      className="scroll-mt-16 border-b border-black/8 dark:border-white/8 py-18 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
            {t(UI_COPY.specialDemands.eyebrow, lang)}
          </p>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
            {t(UI_COPY.specialDemands.heading, lang)}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
            {t(UI_COPY.specialDemands.subtitle, lang)}
          </p>
        </div>

        {/* Crystal-Clear Structured Demand Rate Scope Table */}
        <div className="mt-10 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822]">
          <div className="hidden md:grid md:grid-cols-12 border-b border-black/10 dark:border-white/10 bg-[#F1EFEA] dark:bg-[#181E2B] px-6 py-3.5 text-xs font-semibold text-[#4B5563] dark:text-[#9CA3AF]">
            <div className="col-span-5">
              {t(UI_COPY.specialDemands.tableHeaders.service, lang)}
            </div>
            <div className="col-span-4">
              {t(UI_COPY.specialDemands.tableHeaders.factors, lang)}
            </div>
            <div className="col-span-3 text-right">
              {t(UI_COPY.specialDemands.tableHeaders.status, lang)}
            </div>
          </div>

          <div className="divide-y divide-black/8 dark:divide-white/8">
            {SPECIAL_DEMANDS.map((item) => {
              const checked = selectedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-5 py-5 sm:px-6 transition-colors duration-150 ${
                    checked
                      ? 'bg-[#D4AF37]/8 dark:bg-[#D4AF37]/10'
                      : 'hover:bg-black/[0.015] dark:hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="md:col-span-5 flex items-start gap-3.5">
                    <input
                      id={`demand-${item.id}`}
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleDemand(item.id)}
                      className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-black/25 dark:border-white/30 accent-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                    />
                    <label
                      htmlFor={`demand-${item.id}`}
                      className="cursor-pointer select-none"
                    >
                      <span className="block text-base font-bold text-[#111827] dark:text-[#F9FAFB]">
                        <span className="font-en tabular-nums mr-2 text-sm text-[#8C6D11] dark:text-[#D4AF37]">
                          {item.code}.
                        </span>
                        {t(item.title, lang)}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                        {t(item.summary, lang)}
                      </span>
                    </label>
                  </div>

                  <div className="md:col-span-4 pl-8 md:pl-0">
                    <ul className="space-y-1.5 text-sm text-[#374151] dark:text-[#D1D5DB]">
                      {item.scopeFactors[lang].map((factor, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8C6D11] dark:text-[#D4AF37]"
                            aria-hidden="true"
                          />
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-3 pl-8 md:pl-0 flex items-start md:justify-end">
                    <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37] md:text-right">
                      {t(item.pricingBasis, lang)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Package & Special Demand Estimator */}
          <div className="border-t border-black/10 dark:border-white/10 bg-[#F8F7F4] dark:bg-[#0B0E14] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-[#F9FAFB]">
                    {t(UI_COPY.specialDemands.selectorTitle, lang)}
                  </h3>
                  <span
                    data-testid="selected-demands-count"
                    className="tabular-nums text-xs sm:text-sm font-semibold text-[#059669] dark:text-[#10B981]"
                  >
                    {formatCountForLang(selectedItems.length, lang)}{' '}
                    {t(UI_COPY.specialDemands.selectedCount, lang)}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                  {t(UI_COPY.specialDemands.selectorSubtitle, lang)}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="estimator-base-package"
                      className="block text-xs font-semibold text-[#374151] dark:text-[#D1D5DB]"
                    >
                      {t(UI_COPY.specialDemands.basePackageLabel, lang)}
                    </label>
                    <select
                      id="estimator-base-package"
                      value={selectedPackageId}
                      onChange={(e) => setSelectedPackageId(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-white dark:bg-[#131822] px-3.5 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="">
                        {t(UI_COPY.specialDemands.basePackageNone, lang)}
                      </option>
                      {allPackages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {t(pkg.name, lang)} — {t(pkg.priceDisplay, lang)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="special-demand-note"
                      className="block text-xs font-semibold text-[#374151] dark:text-[#D1D5DB]"
                    >
                      {t(UI_COPY.specialDemands.noteLabel, lang)}
                    </label>
                    <input
                      id="special-demand-note"
                      type="text"
                      value={projectNote}
                      onChange={(e) => setProjectNote(e.target.value)}
                      placeholder={t(UI_COPY.specialDemands.notePlaceholder, lang)}
                      className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-white dark:bg-[#131822] px-3.5 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] placeholder:text-[#9CA3AF] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Live Estimate Summary + WhatsApp Launch */}
              <div className="lg:col-span-5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822] p-5 space-y-4">
                {canSendQuote ? (
                  <div data-testid="estimator-summary" className="space-y-3">
                    {selectedPackage && (
                      <div className="flex items-baseline justify-between gap-3 border-b border-black/8 dark:border-white/8 pb-3">
                        <div>
                          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                            {t(UI_COPY.specialDemands.summaryBaseLabel, lang)}
                          </p>
                          <p className="text-sm font-bold text-[#111827] dark:text-[#F9FAFB]">
                            {t(selectedPackage.name, lang)}
                          </p>
                        </div>
                        <p className="tabular-nums text-base font-extrabold text-[#111827] dark:text-white shrink-0">
                          {t(selectedPackage.priceDisplay, lang)}
                        </p>
                      </div>
                    )}

                    {selectedItems.length > 0 && (
                      <div>
                        <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                          {t(UI_COPY.specialDemands.summaryAddonsLabel, lang)}
                        </p>
                        <ul className="mt-1.5 space-y-1 text-xs sm:text-sm font-medium text-[#1F2937] dark:text-[#E5E7EB]">
                          {selectedItems.map((item) => (
                            <li key={item.id}>· {t(item.title, lang)}</li>
                          ))}
                        </ul>
                        <p className="mt-2 text-xs font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
                          {t(UI_COPY.specialDemands.summarySeparateChargeNote, lang)}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedIds([]);
                          setSelectedPackageId('');
                          setProjectNote('');
                        }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#6B7280] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white transition-colors"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{t(UI_COPY.specialDemands.clearSelection, lang)}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm leading-relaxed text-[#6B7280] dark:text-[#9CA3AF]">
                    {t(UI_COPY.specialDemands.emptyHint, lang)}
                  </p>
                )}

                {customQuoteUrl ? (
                  <a
                    href={customQuoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="special-demand-whatsapp-cta"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#10B981] hover:bg-[#059669] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t(UI_COPY.specialDemands.sendQuoteCta, lang)}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-5 py-3 text-sm font-semibold text-[#6B7280] whitespace-nowrap"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t(UI_COPY.specialDemands.sendQuoteCta, lang)}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
