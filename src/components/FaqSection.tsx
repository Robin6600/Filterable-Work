import { useState } from 'react';
import { MessageCircle, Minus, Plus } from 'lucide-react';
import type { Language } from '../types';
import { t } from '../data/content';
import {
  FAQ_CATEGORIES,
  FAQ_COPY,
  FAQ_ITEMS,
  buildFaqWhatsAppUrl,
  filterFaqItems,
  formatFaqIndex,
  type FaqCategory,
} from '../utils/faq';

interface FaqSectionProps {
  lang: Language;
}

export function FaqSection({ lang }: FaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all');
  const [openItemId, setOpenItemId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const visibleItems = filterFaqItems(FAQ_ITEMS, activeCategory);

  const handleCategoryChange = (nextCategory: FaqCategory) => {
    setActiveCategory(nextCategory);
    const nextVisible = filterFaqItems(FAQ_ITEMS, nextCategory);
    if (!nextVisible.some((item) => item.id === openItemId)) {
      setOpenItemId(nextVisible[0]?.id ?? null);
    }
  };

  const handleToggleItem = (itemId: string) => {
    setOpenItemId((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-16 border-b border-black/8 dark:border-white/8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Editorial Column: Heading, Topic Filter & Direct Help */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
              {t(FAQ_COPY.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-balance text-[#111827] dark:text-[#F9FAFB]">
              {t(FAQ_COPY.heading, lang)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
              {t(FAQ_COPY.subtitle, lang)}
            </p>

            {/* Interactive Topic Filter Tabs */}
            <div
              role="tablist"
              aria-label={t(FAQ_COPY.filterAriaLabel, lang)}
              className="mt-8 grid w-full max-w-md grid-cols-2 gap-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-[#F1EFEA] dark:bg-[#131822] p-1.5"
            >
              {FAQ_CATEGORIES.map((category) => {
                const isSelected = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`rounded-md px-3 py-2 text-center text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                      isSelected
                        ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                        : 'text-[#4B5563] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white'
                    }`}
                  >
                    {t(category.label, lang)}
                  </button>
                );
              })}
            </div>

            {/* Quiet Direct Question Escalation */}
            <div className="mt-10 border-t border-black/10 dark:border-white/10 pt-7">
              <p className="text-sm font-bold text-[#111827] dark:text-[#F9FAFB]">
                {t(FAQ_COPY.helperPrompt, lang)}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                {t(FAQ_COPY.helperSubtext, lang)}
              </p>
              <a
                href={buildFaqWhatsAppUrl(lang, activeCategory)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="faq-whatsapp-cta"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#10B981] hover:bg-[#059669] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t(FAQ_COPY.whatsappCta, lang)}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hairline-Divided Editorial Accordion */}
          <div className="lg:col-span-7">
            <div
              data-testid="faq-list"
              className="divide-y divide-black/10 dark:divide-white/10 border-t border-b border-black/10 dark:border-white/10"
            >
              {visibleItems.map((item, idx) => {
                const isOpen = openItemId === item.id;
                const buttonId = `faq-trigger-${item.id}`;
                const panelId = `faq-panel-${item.id}`;

                return (
                  <div key={item.id} className="py-5 sm:py-6">
                    <h3 className="m-0">
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => handleToggleItem(item.id)}
                        className="group flex w-full items-start justify-between gap-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                      >
                        <div className="flex items-start gap-4 sm:gap-5">
                          <span className="mt-0.5 tabular-nums text-sm font-bold text-[#8C6D11] dark:text-[#D4AF37] shrink-0">
                            {formatFaqIndex(idx, lang)}
                          </span>
                          <div>
                            <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                              {t(item.categoryLabel, lang)}
                            </p>
                            <span className="mt-1 block text-base sm:text-lg font-bold leading-snug text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#8C6D11] dark:group-hover:text-[#D4AF37] transition-colors duration-150">
                              {t(item.question, lang)}
                            </span>
                          </div>
                        </div>

                        <span
                          aria-hidden="true"
                          className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-colors duration-150 ${
                            isOpen
                              ? 'border-[#D4AF37] bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                              : 'border-black/12 dark:border-white/15 bg-white dark:bg-[#131822] text-[#4B5563] dark:text-[#D1D5DB] group-hover:border-[#D4AF37]'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </span>
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="mt-4 pl-9 sm:pl-11 pr-2 sm:pr-10"
                      >
                        <p className="text-sm sm:text-base leading-relaxed text-[#4B5563] dark:text-[#CBD5E1]">
                          {t(item.answer, lang)}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
