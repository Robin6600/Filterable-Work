import type { Language } from '../types';
import { UI_COPY, t } from '../data/content';
import { DISPLAY_PHONE_INTL, DISPLAY_PHONE_LOCAL } from '../utils/whatsapp';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-[#F1EFEA] dark:bg-[#080A0F] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <a
              href="#top"
              className="font-en text-lg font-extrabold tracking-tight text-[#111827] dark:text-[#F3F4F6]"
            >
              Groth <span className="text-[#8C6D11] dark:text-[#D4AF37]">Forge</span>
            </a>
            <p className="mt-1.5 text-sm text-[#4B5563] dark:text-[#9CA3AF]">
              {t(UI_COPY.footer.tagline, lang)}
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#374151] dark:text-[#D1D5DB]"
          >
            <a href="#process" className="hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors">
              {t(UI_COPY.nav.process, lang)}
            </a>
            <a href="#packages" className="hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors">
              {t(UI_COPY.nav.packages, lang)}
            </a>
            <a href="#special-demands" className="hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors">
              {t(UI_COPY.nav.specialDemands, lang)}
            </a>
            <a href="#work" className="hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors">
              {t(UI_COPY.nav.work, lang)}
            </a>
            <a href="#faq" className="hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors">
              {lang === 'bn' ? 'প্রশ্নোত্তর' : 'FAQ'}
            </a>
            <a href="#contact" className="hover:text-[#8C6D11] dark:hover:text-[#D4AF37] transition-colors">
              {t(UI_COPY.nav.contact, lang)}
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-black/8 dark:border-white/8 pt-6 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF]">
          <p>{t(UI_COPY.footer.rights, lang)}</p>
          <p className="tabular-nums">
            <span>{t(UI_COPY.contact.locationValue, lang)}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span className="font-en">{DISPLAY_PHONE_LOCAL} ({DISPLAY_PHONE_INTL})</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
