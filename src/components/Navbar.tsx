import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import type { Language, Theme } from '../types';
import { UI_COPY, t } from '../data/content';

interface NavbarProps {
  lang: Language;
  theme: Theme;
  onLanguageChange: (next: Language) => void;
  onThemeToggle: () => void;
}

export function Navbar({
  lang,
  theme,
  onLanguageChange,
  onThemeToggle,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#process', label: t(UI_COPY.nav.process, lang) },
    { href: '#packages', label: t(UI_COPY.nav.packages, lang) },
    { href: '#special-demands', label: t(UI_COPY.nav.specialDemands, lang) },
    { href: '#work', label: t(UI_COPY.nav.work, lang) },
    { href: '#contact', label: t(UI_COPY.nav.contact, lang) },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 dark:border-white/10 bg-[#F8F7F4]/92 dark:bg-[#0B0E14]/92 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-en text-lg sm:text-xl font-extrabold tracking-tight text-[#111827] dark:text-[#F3F4F6] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
        >
          Groth <span className="text-[#8C6D11] dark:text-[#D4AF37]">Forge</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#374151] dark:text-[#D1D5DB]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#111827] dark:hover:text-white underline-offset-8 hover:underline decoration-[#D4AF37] decoration-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher + Dark/Light Mode Toggle + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Instant Language Switcher (বাংলা | EN) */}
          <div
            role="group"
            aria-label="Language Switcher"
            className="inline-flex items-center rounded-lg border border-black/12 dark:border-white/15 bg-white dark:bg-[#131822] p-0.5"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('bn')}
              aria-pressed={lang === 'bn'}
              className={`font-bn rounded-md px-2.5 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                lang === 'bn'
                  ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                  : 'text-[#4B5563] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white'
              }`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={lang === 'en'}
              className={`font-en rounded-md px-2.5 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                lang === 'en'
                  ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                  : 'text-[#4B5563] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={
              theme === 'dark'
                ? t(UI_COPY.nav.switchToLight, lang)
                : t(UI_COPY.nav.switchToDark, lang)
            }
            title={
              theme === 'dark'
                ? t(UI_COPY.nav.switchToLight, lang)
                : t(UI_COPY.nav.switchToDark, lang)
            }
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-black/12 dark:border-white/15 bg-white dark:bg-[#131822] text-[#111827] dark:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-150 shrink-0 focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen
                ? t(UI_COPY.nav.closeMenu, lang)
                : t(UI_COPY.nav.openMenu, lang)
            }
            className="inline-flex lg:hidden h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-black/12 dark:border-white/15 bg-white dark:bg-[#131822] text-[#111827] dark:text-[#F3F4F6] hover:border-[#D4AF37] transition-colors duration-150 shrink-0 focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden border-t border-black/8 dark:border-white/10 bg-[#F8F7F4] dark:bg-[#0B0E14] px-4 py-4 space-y-4"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#111827] dark:text-[#F3F4F6] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 dark:border-white/10 pt-4 px-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                {t(UI_COPY.nav.mobileLangLabel, lang)}
              </span>
              <div className="inline-flex rounded-lg border border-black/12 dark:border-white/15 bg-white dark:bg-[#131822] p-0.5">
                <button
                  type="button"
                  onClick={() => onLanguageChange('bn')}
                  className={`font-bn rounded-md px-2.5 py-1 text-xs font-semibold ${
                    lang === 'bn'
                      ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                      : 'text-[#4B5563] dark:text-[#9CA3AF]'
                  }`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`font-en rounded-md px-2.5 py-1 text-xs font-semibold ${
                    lang === 'en'
                      ? 'bg-[#111827] text-white dark:bg-[#D4AF37] dark:text-[#0B0E14]'
                      : 'text-[#4B5563] dark:text-[#9CA3AF]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={onThemeToggle}
              className="inline-flex items-center gap-2 rounded-lg border border-black/12 dark:border-white/15 bg-white dark:bg-[#131822] px-3 py-1.5 text-xs font-semibold text-[#111827] dark:text-[#F3F4F6]"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
                  <span>{t(UI_COPY.nav.lightModeText, lang)}</span>
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5 text-[#8C6D11]" aria-hidden="true" />
                  <span>{t(UI_COPY.nav.darkModeText, lang)}</span>
                </>
              )}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
