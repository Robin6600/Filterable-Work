import { useEffect, useState } from 'react';
import type { Language, Theme } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProcessAndRulesSection } from './components/ProcessAndRulesSection';
import { PackagesSection } from './components/PackagesSection';
import { GrowthRoiEstimator } from './components/GrowthRoiEstimator';
import { SpecialDemandsSection } from './components/SpecialDemandsSection';
import { GalleryAndClientsSection } from './components/GalleryAndClientsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('gf-lang');
    if (saved === 'en' || saved === 'bn') {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions
  }
  return 'bn';
}

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('gf-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions
  }
  return 'dark';
}

export default function App() {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('gf-lang', lang);
    } catch {
      // Ignore storage access restrictions
    }
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('gf-theme', theme);
    } catch {
      // Ignore storage access restrictions
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen bg-[#F8F7F4] text-[#111827] dark:bg-[#0B0E14] dark:text-[#F3F4F6] transition-colors duration-200 ${
        lang === 'bn' ? 'font-bn' : 'font-en'
      }`}
    >
      <Navbar
        lang={lang}
        theme={theme}
        onLanguageChange={setLang}
        onThemeToggle={handleToggleTheme}
      />

      <main>
        <HeroSection
          lang={lang}
          onRequestConsultation={() => setIsConsultationOpen(true)}
        />
        <ProcessAndRulesSection lang={lang} />
        <PackagesSection lang={lang} />
        <GrowthRoiEstimator lang={lang} />
        <SpecialDemandsSection lang={lang} />
        <GalleryAndClientsSection lang={lang} />
        <TestimonialsSection lang={lang} />
        <FaqSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        lang={lang}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
