import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import type { Language } from '../types';
import { UI_COPY, t } from '../data/content';

interface ProcessAndRulesSectionProps {
  lang: Language;
}

export function ProcessAndRulesSection({ lang }: ProcessAndRulesSectionProps) {
  const [activeLensId, setActiveLensId] = useState<string>('enterprise');
  const activeLens =
    UI_COPY.process.sectorLenses.find((l) => l.id === activeLensId) ??
    UI_COPY.process.sectorLenses[0];

  return (
    <section
      id="process"
      className="scroll-mt-16 border-b border-black/8 dark:border-white/8 py-18 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust & Anti-Scam Clarity Block */}
        <div
          data-testid="trust-clarity-block"
          className="border-b border-black/10 dark:border-white/10 pb-16 sm:pb-20"
        >
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
              {t(UI_COPY.trust.eyebrow, lang)}
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
              {t(UI_COPY.trust.heading, lang)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
              {t(UI_COPY.trust.intro, lang)}
            </p>
          </div>

          <div className="mt-9 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822]">
            <div className="hidden md:grid md:grid-cols-12 border-b border-black/10 dark:border-white/10 bg-[#F1EFEA] dark:bg-[#181E2B] px-6 py-3.5 text-xs font-semibold">
              <div className="col-span-6 text-[#6B7280] dark:text-[#9CA3AF]">
                {t(UI_COPY.trust.leftColLabel, lang)}
              </div>
              <div className="col-span-6 text-[#059669] dark:text-[#10B981]">
                {t(UI_COPY.trust.rightColLabel, lang)}
              </div>
            </div>

            <div className="divide-y divide-black/8 dark:divide-white/8">
              {UI_COPY.trust.comparisons.map((row) => (
                <div
                  key={row.num}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 px-6 py-5"
                >
                  <div className="md:col-span-6">
                    <p className="md:hidden text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                      {t(UI_COPY.trust.leftColLabel, lang)}
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                      <span className="font-en tabular-nums mr-2 font-semibold text-[#6B7280] dark:text-[#6B7280]">
                        {row.num}
                      </span>{' '}
                      {t(row.problem, lang)}
                    </p>
                  </div>
                  <div className="md:col-span-6 md:border-l border-black/8 dark:border-white/8 md:pl-8">
                    <p className="md:hidden text-xs font-semibold text-[#059669] dark:text-[#10B981] mb-1">
                      {t(UI_COPY.trust.rightColLabel, lang)}
                    </p>
                    <p className="text-sm sm:text-base font-medium leading-relaxed text-[#111827] dark:text-[#F3F4F6]">
                      {t(row.solution, lang)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top-Down Client Guide Header */}
        <div className="mt-16 sm:mt-20 max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
            {t(UI_COPY.process.eyebrow, lang)}
          </p>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
            {t(UI_COPY.process.heading, lang)}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
            {t(UI_COPY.process.intro, lang)}
          </p>
        </div>

        {/* Interactive Sector Lens Tabs */}
        <div className="mt-10 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822] p-6 sm:p-8">
          <p className="text-sm font-medium text-[#4B5563] dark:text-[#9CA3AF]">
            {t(UI_COPY.process.sectorLensLabel, lang)}
          </p>

          <div
            role="tablist"
            aria-label="Business Sector Value Lens"
            className="mt-4 inline-flex flex-wrap gap-1.5 rounded-lg bg-[#F1EFEA] dark:bg-[#0B0E14] p-1"
          >
            {UI_COPY.process.sectorLenses.map((lens) => {
              const isSelected = lens.id === activeLens.id;
              return (
                <button
                  key={lens.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveLensId(lens.id)}
                  className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                    isSelected
                      ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                      : 'text-[#4B5563] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white'
                  }`}
                >
                  {t(lens.tab, lang)}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-t border-black/8 dark:border-white/8 pt-6">
            <div className="lg:col-span-7">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-[#F9FAFB]">
                {t(activeLens.headline, lang)}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                {t(activeLens.body, lang)}
              </p>
            </div>
            <div className="lg:col-span-5 lg:border-l border-black/8 dark:border-white/8 lg:pl-6">
              <p className="text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
                {t(activeLens.deliverableFocus, lang)}
              </p>
              <a
                href="#packages"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#111827] dark:text-white underline underline-offset-4 decoration-[#D4AF37] hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors"
              >
                {t(UI_COPY.hero.secondaryCta, lang)}
              </a>
            </div>
          </div>
        </div>

        {/* 4-Step Editorial Growth Process */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {UI_COPY.process.steps.map((step) => (
            <div
              key={step.num}
              className="border-t border-black/12 dark:border-white/12 pt-5"
            >
              <span className="font-en tabular-nums text-lg font-bold text-[#8C6D11] dark:text-[#D4AF37]">
                {step.num}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[#111827] dark:text-[#F9FAFB]">
                {t(step.title, lang)}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                {t(step.desc, lang)}
              </p>
            </div>
          ))}
        </div>

        {/* Agency Rules & Payment Policy Block */}
        <div className="mt-16 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
                  {t(UI_COPY.process.rulesTitle, lang)}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                  {t(UI_COPY.process.rulesSubtitle, lang)}
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-[#D4AF37]/45 bg-[#F8F7F4] dark:bg-[#0B0E14] p-5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t(UI_COPY.process.paymentHighlightTitle, lang)}</span>
                </div>
                <p className="mt-2.5 text-base font-bold leading-snug text-[#111827] dark:text-[#F9FAFB]">
                  {t(UI_COPY.process.paymentRulePrimary, lang)}
                </p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                  {t(UI_COPY.process.paymentRuleNote, lang)}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {UI_COPY.process.workflowRules.map((rule) => (
                <div
                  key={rule.num}
                  className="border-t border-black/10 dark:border-white/10 pt-4"
                >
                  <p className="text-sm font-bold text-[#111827] dark:text-[#F9FAFB]">
                    <span className="font-en tabular-nums mr-2 text-[#8C6D11] dark:text-[#D4AF37]">
                      {rule.num}
                    </span>{' '}
                    {t(rule.title, lang)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                    {t(rule.desc, lang)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
