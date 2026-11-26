import { useState } from 'react';
import { ArrowDownRight, Film, MessageCircle } from 'lucide-react';
import type { Language } from '../types';
import { HERO_IMAGE, UI_COPY, t } from '../data/content';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface HeroSectionProps {
  lang: Language;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const heroWhatsAppMessage =
    lang === 'bn'
      ? 'আসসালামু আলাইকুম Groth Forge, আমি আমাদের ব্যবসার ভিডিও প্রোডাকশন ও গ্রোথ প্যাকেজ সম্পর্কে কথা বলতে চাই।'
      : 'Hello Groth Forge, I would like to discuss video production and business growth packages for our organization.';

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-black/8 dark:border-white/8"
    >
      {/* Subtle Ambient Architectural Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[760px] rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-16">
        {/* Asymmetric 2-Column Hero Split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8C6D11] dark:text-[#D4AF37]">
              {t(UI_COPY.hero.kicker, lang)}
            </p>

            <h1 className="mt-3.5 text-[clamp(2rem,3.35vw,3.15rem)] font-bold leading-[1.14] tracking-tight text-[#111827] dark:text-[#F9FAFB]">
              {t(UI_COPY.hero.headline, lang)}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
              {t(UI_COPY.hero.subcopy, lang)}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href={buildWhatsAppUrl(heroWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#10B981] hover:bg-[#059669] px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>{t(UI_COPY.hero.primaryCta, lang)}</span>
              </a>

              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/15 dark:border-white/18 bg-white/80 dark:bg-[#131822] hover:border-[#D4AF37] px-6 py-3.5 text-sm sm:text-base font-semibold text-[#111827] dark:text-[#F3F4F6] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <span>{t(UI_COPY.hero.secondaryCta, lang)}</span>
                <ArrowDownRight className="h-4 w-4 text-[#8C6D11] dark:text-[#D4AF37]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Dominant Cinema Visual Frame */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[280px] sm:min-h-[360px] lg:h-full overflow-hidden rounded-xl border border-black/10 dark:border-white/12 bg-[#131822]">
              {!imgFailed ? (
                <img
                  src={HERO_IMAGE}
                  alt={
                    lang === 'bn'
                      ? 'Groth Forge সিনেমাটিক ভিডিও প্রোডাকশন স্টুডিও সেট'
                      : 'Groth Forge cinematic video production studio set'
                  }
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[320px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#131822] via-[#1B2230] to-[#0B0E14] p-8 text-center">
                  <Film className="h-10 w-10 text-[#D4AF37]" aria-hidden="true" />
                  <p className="font-en text-lg font-bold text-white">Groth Forge Production</p>
                </div>
              )}

              {/* Measured Scrim for High-Contrast Editorial Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0E14]/92 via-[#0B0E14]/55 to-transparent p-6 sm:p-7">
                <p className="text-sm sm:text-base font-semibold text-white">
                  {t(UI_COPY.hero.studioCaptionTitle, lang)}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#D4AF37]">
                  {t(UI_COPY.hero.studioCaptionMeta, lang)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Sector Coverage Strip Below Hero Split */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-black/10 dark:border-white/10 pt-8 gap-8">
          {UI_COPY.hero.sectorsStrip.map((sector) => (
            <div key={sector.num} className="flex flex-col">
              <span className="font-en tabular-nums text-xs font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
                {sector.num}
              </span>
              <h2 className="mt-2 text-base font-bold text-[#111827] dark:text-[#F3F4F6]">
                {t(sector.title, lang)}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                {t(sector.desc, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
