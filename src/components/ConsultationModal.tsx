import { useEffect, useState, type FormEvent } from 'react';
import { Calendar, Check, MessageCircle, X } from 'lucide-react';
import type { Language } from '../types';
import { t } from '../data/content';
import {
  CONSULTATION_COPY,
  CONSULTATION_STORAGE_KEY,
  PROJECT_TYPE_OPTIONS,
  buildConsultationWhatsAppUrl,
  createConsultationLeadRecord,
  getProjectTypeLabel,
  validateConsultationForm,
  type ConsultationFormData,
  type ConsultationFormErrors,
  type ConsultationLeadRecord,
} from '../utils/consultation';

interface ConsultationModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

const EMPTY_FORM: ConsultationFormData = {
  name: '',
  email: '',
  projectType: '',
};

function loadStoredLeads(): ConsultationLeadRecord[] {
  try {
    const raw = localStorage.getItem(CONSULTATION_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function ConsultationModal({ isOpen, lang, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState<ConsultationFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<ConsultationFormErrors>({});
  const [submittedLead, setSubmittedLead] = useState<ConsultationLeadRecord | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateConsultationForm(formData, lang);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const existingLeads = loadStoredLeads();
    const newRecord = createConsultationLeadRecord(formData, existingLeads.length + 1);

    try {
      localStorage.setItem(
        CONSULTATION_STORAGE_KEY,
        JSON.stringify([newRecord, ...existingLeads])
      );
    } catch {
      // Ignore storage quota or private mode restrictions
    }

    setSubmittedLead(newRecord);
    setFormData(EMPTY_FORM);
  };

  const handleReset = () => {
    setSubmittedLead(null);
    setErrors({});
    setFormData(EMPTY_FORM);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-black/15 dark:border-white/15 bg-[#F8F7F4] dark:bg-[#131822] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-black/8 dark:border-white/10 px-6 py-5 sm:px-8 sm:py-6">
          <div>
            <p className="text-xs font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
              {t(CONSULTATION_COPY.eyebrow, lang)}
            </p>
            <h2
              id="consultation-modal-title"
              className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]"
            >
              {submittedLead
                ? t(CONSULTATION_COPY.success.heading, lang)
                : t(CONSULTATION_COPY.title, lang)}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t(CONSULTATION_COPY.closeAriaLabel, lang)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/10 dark:border-white/12 bg-white dark:bg-[#0B0E14] text-[#4B5563] dark:text-[#D1D5DB] hover:border-[#D4AF37] hover:text-[#111827] dark:hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 sm:px-8 sm:py-7">
          {submittedLead ? (
            <div data-testid="consultation-confirmation" className="space-y-6">
              <div className="rounded-lg border border-[#10B981]/40 bg-[#10B981]/8 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#059669] dark:text-[#10B981]">
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {t(CONSULTATION_COPY.success.refLabel, lang)}:{' '}
                    <span className="font-en tabular-nums">{submittedLead.id}</span>
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#374151] dark:text-[#D1D5DB]">
                  {t(CONSULTATION_COPY.success.body, lang)}
                </p>
              </div>

              <dl className="divide-y divide-black/8 dark:divide-white/8 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0B0E14] px-4">
                <div className="flex items-center justify-between gap-4 py-3 text-sm">
                  <dt className="font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                    {t(CONSULTATION_COPY.success.nameLabel, lang)}
                  </dt>
                  <dd className="font-semibold text-[#111827] dark:text-[#F9FAFB] text-right">
                    {submittedLead.name}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3 text-sm">
                  <dt className="font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                    {t(CONSULTATION_COPY.success.emailLabel, lang)}
                  </dt>
                  <dd className="font-en font-semibold text-[#111827] dark:text-[#F9FAFB] text-right">
                    {submittedLead.email}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3 text-sm">
                  <dt className="font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                    {t(CONSULTATION_COPY.success.projectLabel, lang)}
                  </dt>
                  <dd className="font-semibold text-[#8C6D11] dark:text-[#D4AF37] text-right">
                    {getProjectTypeLabel(submittedLead.projectType, lang)}
                  </dd>
                </div>
              </dl>

              <div className="space-y-3 pt-1">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={buildConsultationWhatsAppUrl(submittedLead, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="consultation-whatsapp-followup"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#10B981] hover:bg-[#059669] px-5 py-2.5 text-sm font-semibold text-white transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t(CONSULTATION_COPY.success.whatsappBtn, lang)}</span>
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg border border-black/15 dark:border-white/15 bg-white dark:bg-[#0B0E14] px-5 py-2.5 text-sm font-semibold text-[#111827] dark:text-[#F3F4F6] hover:border-[#D4AF37] transition-colors whitespace-nowrap"
                  >
                    {t(CONSULTATION_COPY.success.doneBtn, lang)}
                  </button>
                </div>

                <div className="flex justify-center pt-1">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white underline underline-offset-4 transition-colors"
                  >
                    {t(CONSULTATION_COPY.success.newRequestBtn, lang)}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <p className="text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                {t(CONSULTATION_COPY.subtitle, lang)}
              </p>

              <div>
                <label
                  htmlFor="gf-consult-name"
                  className="block text-sm font-semibold text-[#1F2937] dark:text-[#E5E7EB]"
                >
                  {t(CONSULTATION_COPY.fields.name.label, lang)}
                </label>
                <input
                  id="gf-consult-name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                    if (errors.name) {
                      setErrors((prev) => ({ ...prev, name: undefined }));
                    }
                  }}
                  placeholder={t(CONSULTATION_COPY.fields.name.placeholder, lang)}
                  aria-invalid={Boolean(errors.name)}
                  className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-white dark:bg-[#0B0E14] px-4 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] placeholder:text-[#9CA3AF] focus:border-[#D4AF37] focus:outline-none"
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="gf-consult-email"
                  className="block text-sm font-semibold text-[#1F2937] dark:text-[#E5E7EB]"
                >
                  {t(CONSULTATION_COPY.fields.email.label, lang)}
                </label>
                <input
                  id="gf-consult-email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    if (errors.email) {
                      setErrors((prev) => ({ ...prev, email: undefined }));
                    }
                  }}
                  placeholder={t(CONSULTATION_COPY.fields.email.placeholder, lang)}
                  aria-invalid={Boolean(errors.email)}
                  className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-white dark:bg-[#0B0E14] px-4 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] placeholder:text-[#9CA3AF] focus:border-[#D4AF37] focus:outline-none"
                />
                {errors.email && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="gf-consult-project-type"
                  className="block text-sm font-semibold text-[#1F2937] dark:text-[#E5E7EB]"
                >
                  {t(CONSULTATION_COPY.fields.projectType.label, lang)}
                </label>
                <select
                  id="gf-consult-project-type"
                  value={formData.projectType}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, projectType: e.target.value }));
                    if (errors.projectType) {
                      setErrors((prev) => ({ ...prev, projectType: undefined }));
                    }
                  }}
                  aria-invalid={Boolean(errors.projectType)}
                  className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-white dark:bg-[#0B0E14] px-4 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="">
                    {t(CONSULTATION_COPY.fields.projectType.placeholder, lang)}
                  </option>
                  {PROJECT_TYPE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {t(opt.label, lang)}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div className="space-y-4 border-t border-black/8 dark:border-white/10 pt-5">
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  {t(CONSULTATION_COPY.noteFooter, lang)}
                </p>

                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg border border-black/15 dark:border-white/15 bg-white dark:bg-[#0B0E14] px-4 py-2.5 text-sm font-semibold text-[#111827] dark:text-[#F3F4F6] hover:border-[#D4AF37] transition-colors whitespace-nowrap"
                  >
                    {t(CONSULTATION_COPY.cancelBtn, lang)}
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] hover:bg-[#C39D28] px-5 py-2.5 text-sm font-bold text-[#0B0E14] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                  >
                    <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t(CONSULTATION_COPY.submitBtn, lang)}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
