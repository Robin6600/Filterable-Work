import { useState } from 'react';
import { ArrowUpRight, Film, FolderOpen, MessageCircle, X } from 'lucide-react';
import type { GalleryCategory, GalleryItem, Language } from '../types';
import { GALLERY_ITEMS, UI_COPY, t } from '../data/content';
import {
  PORTFOLIO_DRIVE_URL,
  buildShowcaseInquiryMessage,
  buildWhatsAppUrl,
  filterGalleryItems,
} from '../utils/whatsapp';

interface GalleryAndClientsSectionProps {
  lang: Language;
}

export function GalleryAndClientsSection({ lang }: GalleryAndClientsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleItems = filterGalleryItems(GALLERY_ITEMS, activeCategory);

  const markImageFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const isCompactFilteredGrid = visibleItems.length > 0 && visibleItems.length <= 2;

  return (
    <section
      id="work"
      className="scroll-mt-16 border-b border-black/8 dark:border-white/8 bg-[#F3F1EB]/60 dark:bg-[#0D111A] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Editorial Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
            {t(UI_COPY.gallery.eyebrow, lang)}
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-balance text-[#111827] dark:text-[#F9FAFB]">
            {t(UI_COPY.gallery.heading, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
            {t(UI_COPY.gallery.subtitle, lang)}
          </p>
        </div>

        {/* Centered Category Filter Tabs */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Work Gallery Categories"
            className="inline-flex flex-wrap justify-center gap-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#131822] p-1"
          >
            {UI_COPY.gallery.filters.map((filter) => {
              const isSelected = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`rounded-md px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                    isSelected
                      ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                      : 'text-[#4B5563] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white'
                  }`}
                >
                  {t(filter, lang)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Centered Showcase Cards Grid (adapts symmetrically when filtered to 2 items) */}
        <div
          data-testid="gallery-grid"
          className={`mt-10 sm:mt-12 grid grid-cols-1 gap-7 ${
            isCompactFilteredGrid
              ? 'mx-auto max-w-4xl md:grid-cols-2'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822] transition-colors duration-150 hover:border-[#D4AF37]/60"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181E2B]">
                {!failedImages[item.id] ? (
                  <img
                    src={item.image}
                    alt={t(item.title, lang)}
                    referrerPolicy="no-referrer"
                    onError={() => markImageFailed(item.id)}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#131822] to-[#1E2636] p-6 text-center">
                    <Film className="h-8 w-8 text-[#D4AF37]" aria-hidden="true" />
                    <span className="text-sm font-semibold text-white">
                      {t(item.title, lang)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Unboxed Metadata with Typographic Separator */}
                  <p className="text-xs font-medium text-[#8C6D11] dark:text-[#D4AF37]">
                    <span>{t(item.sectorLabel, lang)}</span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span className="text-[#6B7280] dark:text-[#9CA3AF]">
                      {t(item.format, lang)}
                    </span>
                  </p>

                  <h3 className="mt-2.5 text-lg font-bold tracking-tight text-balance text-[#111827] dark:text-[#F9FAFB]">
                    {t(item.title, lang)}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                    {t(item.outcome, lang)}
                  </p>
                </div>

                <div className="mt-6 border-t border-black/8 dark:border-white/8 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(item)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111827] dark:text-[#F3F4F6] hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                  >
                    <span>{t(UI_COPY.gallery.inspectLabel, lang)}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered Full Portfolio Folder Action */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <a
            href={PORTFOLIO_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#D4AF37]/65 bg-white dark:bg-[#131822] hover:bg-[#D4AF37] hover:text-[#0B0E14] dark:hover:bg-[#D4AF37] dark:hover:text-[#0B0E14] px-6 py-3.5 text-sm font-semibold text-[#111827] dark:text-[#F3F4F6] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
          >
            <FolderOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{t(UI_COPY.gallery.driveCta, lang)}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Accessible Showcase Inspection Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="showcase-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-xl border border-black/15 dark:border-white/15 bg-[#F8F7F4] dark:bg-[#131822] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-[#0B0E14]">
              {!failedImages[activeModalItem.id] ? (
                <img
                  src={activeModalItem.image}
                  alt={t(activeModalItem.title, lang)}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Film className="h-10 w-10 text-[#D4AF37]" aria-hidden="true" />
                </div>
              )}
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                aria-label={t(UI_COPY.gallery.modalClose, lang)}
                className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/70 text-white hover:bg-black transition-colors focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
                {t(activeModalItem.sectorLabel, lang)}
                <span className="mx-1.5" aria-hidden="true">·</span>
                <span className="text-[#6B7280] dark:text-[#9CA3AF]">
                  {t(activeModalItem.format, lang)}
                </span>
              </p>

              <h3
                id="showcase-modal-title"
                className="mt-2 text-2xl font-bold text-[#111827] dark:text-[#F9FAFB]"
              >
                {t(activeModalItem.title, lang)}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                {t(activeModalItem.description, lang)}
              </p>

              <div className="mt-5 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0B0E14] p-4">
                <p className="text-xs font-semibold text-[#059669] dark:text-[#10B981]">
                  {t(UI_COPY.gallery.modalOutcomeLabel, lang)}
                </p>
                <p className="mt-1 text-sm font-medium text-[#111827] dark:text-[#F3F4F6]">
                  {t(activeModalItem.outcome, lang)}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="rounded-lg border border-black/15 dark:border-white/15 px-4 py-2.5 text-sm font-semibold text-[#111827] dark:text-[#F3F4F6] hover:border-[#D4AF37] transition-colors"
                >
                  {t(UI_COPY.gallery.modalClose, lang)}
                </button>
                <a
                  href={buildWhatsAppUrl(
                    buildShowcaseInquiryMessage(activeModalItem, lang)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#10B981] hover:bg-[#059669] px-5 py-2.5 text-sm font-semibold text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{t(UI_COPY.gallery.modalBookSimilar, lang)}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
