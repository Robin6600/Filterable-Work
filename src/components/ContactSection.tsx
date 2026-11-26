import { useState, type FormEvent } from 'react';
import { Check, Clock, Copy, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { ContactFormData, ContactFormErrors, Language } from '../types';
import {
  MONTHLY_PACKAGES,
  SHORT_TERM_PACKAGES,
  UI_COPY,
  t,
} from '../data/content';
import {
  DISPLAY_PHONE_INTL,
  DISPLAY_PHONE_LOCAL,
  buildQuickContactMessage,
  buildWhatsAppUrl,
  sortPackagesLowestToHighest,
  validateContactForm,
} from '../utils/whatsapp';

interface ContactSectionProps {
  lang: Language;
}

const INITIAL_FORM: ContactFormData = {
  businessName: '',
  phone: '',
  sector: '',
  packageInterest: '',
  message: '',
};

export function ContactSection({ lang }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const allPackages = sortPackagesLowestToHighest([
    ...SHORT_TERM_PACKAGES,
    ...MONTHLY_PACKAGES,
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData, lang);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const formatted = buildQuickContactMessage(formData, lang);
    setSubmittedMessage(formatted);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const directChatMsg =
    lang === 'bn'
      ? 'আসসালামু আলাইকুম Groth Forge, আমি আমাদের ব্যবসার জন্য ভিডিও প্রোডাকশন সম্পর্কে কথা বলতে চাই।'
      : 'Hello Groth Forge, I would like to discuss video production and growth services for our business.';

  return (
    <section id="contact" className="scroll-mt-16 py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Agency Contact Info */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-semibold text-[#8C6D11] dark:text-[#D4AF37]">
              {t(UI_COPY.contact.eyebrow, lang)}
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
              {t(UI_COPY.contact.heading, lang)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
              {t(UI_COPY.contact.subtitle, lang)}
            </p>

            <div className="mt-8 space-y-6 border-t border-black/10 dark:border-white/10 pt-8">
              <div className="flex items-start gap-3.5">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-[#8C6D11] dark:text-[#D4AF37]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                    {t(UI_COPY.contact.phoneLabel, lang)}
                  </p>
                  <p className="mt-1 font-en tabular-nums text-lg font-bold text-[#111827] dark:text-[#F9FAFB]">
                    {DISPLAY_PHONE_LOCAL}
                  </p>
                  <p className="font-en tabular-nums text-sm text-[#4B5563] dark:text-[#9CA3AF]">
                    {DISPLAY_PHONE_INTL}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-[#8C6D11] dark:text-[#D4AF37]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                    {t(UI_COPY.contact.locationLabel, lang)}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#111827] dark:text-[#F9FAFB]">
                    {t(UI_COPY.contact.locationValue, lang)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock
                  className="mt-1 h-5 w-5 shrink-0 text-[#8C6D11] dark:text-[#D4AF37]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                    {t(UI_COPY.contact.responseLabel, lang)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                    {t(UI_COPY.contact.responseValue, lang)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl(directChatMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#10B981] hover:bg-[#059669] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t(UI_COPY.contact.directWhatsappBtn, lang)}</span>
              </a>
              <a
                href={`tel:${DISPLAY_PHONE_INTL.replace(/\s|-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/15 dark:border-white/15 bg-white dark:bg-[#131822] hover:border-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#111827] dark:text-[#F3F4F6] transition-colors duration-150 whitespace-nowrap"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#8C6D11] dark:text-[#D4AF37]" aria-hidden="true" />
                <span className="tabular-nums">{t(UI_COPY.contact.directCallBtn, lang)}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Quick-Message Form */}
          <div className="lg:col-span-7 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#131822] p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl font-bold text-[#111827] dark:text-[#F9FAFB]">
              {t(UI_COPY.contact.formTitle, lang)}
            </h3>

            {submittedMessage ? (
              <div
                data-testid="contact-confirmation"
                className="mt-6 space-y-5"
              >
                <div className="rounded-lg border border-[#10B981]/45 bg-[#10B981]/8 p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#059669] dark:text-[#10B981]">
                    <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t(UI_COPY.contact.confirmedHeading, lang)}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-[#374151] dark:text-[#D1D5DB]">
                    {t(UI_COPY.contact.confirmedSubtext, lang)}
                  </p>
                </div>

                <pre className="whitespace-pre-wrap rounded-lg border border-black/10 dark:border-white/10 bg-[#F8F7F4] dark:bg-[#0B0E14] p-4 text-sm leading-relaxed text-[#111827] dark:text-[#F3F4F6] font-sans">
                  {submittedMessage}
                </pre>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppUrl(submittedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-launch-whatsapp"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#10B981] hover:bg-[#059669] px-5 py-3 text-sm font-semibold text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t(UI_COPY.contact.launchWhatsappNow, lang)}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-lg border border-black/15 dark:border-white/15 px-4 py-3 text-sm font-semibold text-[#111827] dark:text-[#F3F4F6] hover:border-[#D4AF37] transition-colors"
                  >
                    <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {copied
                        ? t(UI_COPY.contact.copiedMessage, lang)
                        : t(UI_COPY.contact.copyMessage, lang)}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmittedMessage(null)}
                    className="px-3 py-3 text-sm font-semibold text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors"
                  >
                    {t(UI_COPY.contact.editForm, lang)}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="gf-business-name"
                      className="block text-sm font-semibold text-[#1F2937] dark:text-[#E5E7EB]"
                    >
                      {t(UI_COPY.contact.fields.businessName.label, lang)}
                    </label>
                    <input
                      id="gf-business-name"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, businessName: e.target.value }));
                        if (errors.businessName) {
                          setErrors((prev) => ({ ...prev, businessName: undefined }));
                        }
                      }}
                      placeholder={t(UI_COPY.contact.fields.businessName.placeholder, lang)}
                      aria-invalid={Boolean(errors.businessName)}
                      className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-[#F8F7F4] dark:bg-[#0B0E14] px-4 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] placeholder:text-[#9CA3AF] focus:border-[#D4AF37] focus:outline-none"
                    />
                    {errors.businessName && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                        {errors.businessName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="gf-phone"
                      className="block text-sm font-semibold text-[#1F2937] dark:text-[#E5E7EB]"
                    >
                      {t(UI_COPY.contact.fields.phone.label, lang)}
                    </label>
                    <input
                      id="gf-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) {
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                        }
                      }}
                      placeholder={t(UI_COPY.contact.fields.phone.placeholder, lang)}
                      aria-invalid={Boolean(errors.phone)}
                      className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-[#F8F7F4] dark:bg-[#0B0E14] px-4 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] placeholder:text-[#9CA3AF] focus:border-[#D4AF37] focus:outline-none"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="gf-sector"
                      className="block text-sm font-semibold text-[#1F2937] dark:text-[#E5E7EB]"
                    >
                      {t(UI_COPY.contact.fields.sector.label, lang)}
                    </label>
                    <select
                      id="gf-sector"
                      value={formData.sector}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, sector: e.target.value }));
                        if (errors.sector) {
                          setErrors((prev) => ({ ...prev, sector: undefined }));
                        }
                      }}
                      aria-invalid={Boolean(errors.sector)}
                      className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-[#F8F7F4] dark:bg-[#0B0E14] px-4 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="">
                        {t(UI_COPY.contact.fields.sector.placeholder, lang)}
                      </option>
                      {UI_COPY.contact.fields.sector.options.map((opt) => (
                        <option key={opt.value} value={t(opt, lang)}>
                          {t(opt, lang)}
                        </option>
                      ))}
                    </select>
                    {errors.sector && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                        {errors.sector}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="gf-package"
                      className="block text-sm font-semibold text-[#1F2937] dark:text-[#E5E7EB]"
                    >
                      {t(UI_COPY.contact.fields.packageInterest.label, lang)}
                    </label>
                    <select
                      id="gf-package"
                      value={formData.packageInterest}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, packageInterest: e.target.value }))
                      }
                      className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-[#F8F7F4] dark:bg-[#0B0E14] px-4 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="">
                        {t(UI_COPY.contact.fields.packageInterest.placeholder, lang)}
                      </option>
                      {allPackages.map((pkg) => {
                        const label = `${t(pkg.name, lang)} — ${t(pkg.priceDisplay, lang)}`;
                        return (
                          <option key={pkg.id} value={label}>
                            {label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="gf-message"
                    className="block text-sm font-semibold text-[#1F2937] dark:text-[#E5E7EB]"
                  >
                    {t(UI_COPY.contact.fields.message.label, lang)}
                  </label>
                  <textarea
                    id="gf-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) {
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    placeholder={t(UI_COPY.contact.fields.message.placeholder, lang)}
                    aria-invalid={Boolean(errors.message)}
                    className="mt-1.5 w-full rounded-lg border border-black/15 dark:border-white/15 bg-[#F8F7F4] dark:bg-[#0B0E14] px-4 py-2.5 text-sm text-[#111827] dark:text-[#F3F4F6] placeholder:text-[#9CA3AF] focus:border-[#D4AF37] focus:outline-none"
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#D4AF37] hover:bg-[#C39D28] px-6 py-3 text-sm font-bold text-[#0B0E14] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t(UI_COPY.contact.submitBtn, lang)}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
