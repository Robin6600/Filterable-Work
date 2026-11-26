import { MessageCircle } from 'lucide-react';
import type { Language } from '../types';
import { UI_COPY, t } from '../data/content';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  lang: Language;
}

export function FloatingWhatsApp({ lang }: FloatingWhatsAppProps) {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t(UI_COPY.footer.floatingLabel, lang)} — 01764713206`}
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 inline-flex h-12 sm:h-13 items-center gap-2 rounded-full bg-[#10B981] hover:bg-[#059669] px-4 sm:px-5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">
        {t(UI_COPY.footer.floatingLabel, lang)}
      </span>
    </a>
  );
}
