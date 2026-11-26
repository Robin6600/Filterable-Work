import { useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Language } from '../types';
import { t } from '../data/content';
import {
  TESTIMONIALS,
  TESTIMONIALS_COPY,
  formatSlideCounter,
  getNextTestimonialIndex,
  getPrevTestimonialIndex,
} from '../utils/testimonials';
import { formatCountForLang } from '../utils/whatsapp';

interface TestimonialsSectionProps {
  lang: Language;
}

export function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const activeItem = TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => getPrevTestimonialIndex(prev, total));
  };

  const handleNext = () => {
    setActiveIndex((prev) => getNextTestimonialIndex(prev, total));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-16 border-b border-black/8 dark:border-white/8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Header + Carousel Counter & Prev/Next Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
              {t(TESTIMONIALS_COPY.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-balance text-[#111827] dark:text-[#F9FAFB]">
              {t(TESTIMONIALS_COPY.heading, lang)}
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
              {t(TESTIMONIALS_COPY.subtitle, lang)}
            </p>
          </div>

          <div className="flex items-center gap-4 self-start lg:self-auto shrink-0">
            <span
              data-testid="testimonial-counter"
              aria-live="polite"
              className="tabular-nums text-sm font-bold text-[#6B7280] dark:text-[#9CA3AF]"
            >
              {formatSlideCounter(activeIndex, total, lang)}
            </span>

            <div className="inline-flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={t(TESTIMONIALS_COPY.prevLabel, lang)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/12 dark:border-white/15 bg-white dark:bg-[#131822] text-[#111827] dark:text-[#F3F4F6] hover:border-[#D4AF37] hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={t(TESTIMONIALS_COPY.nextLabel, lang)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/12 dark:border-white/15 bg-white dark:bg-[#131822] text-[#111827] dark:text-[#F3F4F6] hover:border-[#D4AF37] hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Editorial Carousel Stage */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={t(TESTIMONIALS_COPY.carouselAriaLabel, lang)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="mt-10 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
        >
          <div
            data-testid="testimonial-active-slide"
            aria-live="polite"
            className="grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Quote & Client Attribution (8 Columns) */}
            <div className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              <div>
                {/* Unboxed Metadata with Typographic Separator */}
                <p className="text-xs sm:text-sm font-medium text-[#8C6D11] dark:text-[#D4AF37]">
                  <span>{t(activeItem.sector, lang)}</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span className="text-[#6B7280] dark:text-[#9CA3AF]">
                    {t(activeItem.packageUsed, lang)}
                  </span>
                </p>

                <Quote
                  className="mt-6 h-7 w-7 text-[#D4AF37]/60"
                  aria-hidden="true"
                />

                <blockquote className="mt-4 text-lg sm:text-2xl font-medium leading-relaxed tracking-tight text-[#111827] dark:text-[#F9FAFB]">
                  “{t(activeItem.quote, lang)}”
                </blockquote>
              </div>

              {/* Client Attribution */}
              <div className="mt-8 flex items-center gap-4 border-t border-black/8 dark:border-white/8 pt-6">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#F8F7F4] dark:bg-[#0B0E14] font-en text-sm font-bold tracking-wider text-[#8C6D11] dark:text-[#D4AF37]"
                >
                  {activeItem.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg font-bold text-[#111827] dark:text-[#F9FAFB]">
                    {t(activeItem.clientName, lang)}
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF]">
                    <span className="font-semibold text-[#1F2937] dark:text-[#D1D5DB]">
                      {t(activeItem.role, lang)}
                    </span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span>{t(activeItem.businessName, lang)}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Measured Business Impact Column (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/8 dark:border-white/8 bg-[#F8F7F4]/70 dark:bg-[#0E131D] p-6 sm:p-10">
              <div>
                <p className="text-xs font-semibold text-[#059669] dark:text-[#10B981]">
                  {t(TESTIMONIALS_COPY.impactLabel, lang)}
                </p>
                <p className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums text-[#111827] dark:text-[#F9FAFB]">
                  {t(activeItem.impactMetric, lang)}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
                  {t(activeItem.impactTimeframe, lang)}
                </p>
              </div>

              <div className="mt-8 border-t border-black/8 dark:border-white/8 pt-5">
                <p className="text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                  {t(activeItem.impactNote, lang)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Client Story Selector Bar */}
        <div
          role="tablist"
          aria-label={t(TESTIMONIALS_COPY.selectorAriaLabel, lang)}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
        >
          {TESTIMONIALS.map((item, idx) => {
            const isSelected = idx === activeIndex;
            const numLabel =
              lang === 'en'
                ? String(idx + 1).padStart(2, '0')
                : String(idx + 1)
                    .padStart(2, '0')
                    .split('')
                    .map((d) => formatCountForLang(Number(d), 'bn'))
                    .join('');

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col items-start rounded-lg border px-4 py-3.5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${
                  isSelected
                    ? 'border-[#D4AF37] bg-white dark:bg-[#131822]'
                    : 'border-black/8 dark:border-white/8 bg-transparent hover:border-black/20 dark:hover:border-white/20'
                }`}
              >
                <span
                  className={`tabular-nums text-xs font-bold ${
                    isSelected
                      ? 'text-[#8C6D11] dark:text-[#D4AF37]'
                      : 'text-[#6B7280] dark:text-[#9CA3AF]'
                  }`}
                >
                  {numLabel}
                </span>
                <span
                  className={`mt-1 line-clamp-1 text-sm font-bold ${
                    isSelected
                      ? 'text-[#111827] dark:text-[#F9FAFB]'
                      : 'text-[#4B5563] dark:text-[#9CA3AF]'
                  }`}
                >
                  {t(item.businessName, lang)}
                </span>
                <span className="mt-0.5 line-clamp-1 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  {t(item.sector, lang)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
