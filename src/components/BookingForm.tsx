import React, { useState, useEffect } from 'react';
import type { BookingFormData, Language, SubmissionResult } from '../types';
import { I18N, PACKAGES } from '../data/creatorData';
import {
  Send,
  CheckCircle,
  Copy,
  Sparkles,
  AlertCircle,
  Check,
} from 'lucide-react';

interface BookingFormProps {
  currentLang: Language;
  selectedPackageId: string;
  onClearSelectedPackage: () => void;
  onShowToast: (message: string) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  currentLang,
  selectedPackageId,
  onClearSelectedPackage,
  onShowToast,
}) => {
  const t = I18N[currentLang];

  const initialFormState: BookingFormData = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '+251 ',
    productOrService: '',
    packageType: selectedPackageId || 'brand-integration',
    campaignObjective: 'brand_awareness',
    budgetRange: 'standard',
    preferredTimeline: '',
    preferredContact: 'email',
    socialOrWebsite: '',
    campaignBrief: '',
  };

  const [formData, setFormData] = useState<BookingFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync when selectedPackageId changes from external click
  useEffect(() => {
    if (selectedPackageId) {
      setFormData((prev) => ({ ...prev, packageType: selectedPackageId }));
    }
  }, [selectedPackageId]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = currentLang === 'en' ? 'Full name is required' : 'ሙሉ ስምዎን ያስገቡ';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = currentLang === 'en' ? 'Company or brand name is required' : 'የድርጅት ወይም ብራንድ ስም ያስገቡ';
    }

    if (!formData.email.trim()) {
      newErrors.email = currentLang === 'en' ? 'Email address is required' : 'የኢሜይል አድራሻዎን ያስገቡ';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = currentLang === 'en' ? 'Please enter a valid email address' : 'ትክክለኛ የኢሜይል አድራሻ ያስገቡ';
    }

    if (!formData.phone.trim() || formData.phone.trim() === '+251') {
      newErrors.phone = currentLang === 'en' ? 'Valid phone number is required' : 'ስልክ ቁጥርዎን ያስገቡ';
    }

    if (!formData.productOrService.trim()) {
      newErrors.productOrService =
        currentLang === 'en' ? 'Product or service to promote is required' : 'የሚያስተዋውቁትን ምርት ወይም አገልግሎት ይጥቀሱ';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      onShowToast(
        currentLang === 'en'
          ? 'Please complete the highlighted required fields.'
          : 'እባክዎ የተጠየቁትን ዋና መረጃዎች በትክክል ይሙሉ'
      );
      return;
    }

    setIsSubmitting(true);

    // Realistic API submission simulation
    setTimeout(() => {
      const generatedRef = `LD-${Math.floor(100000 + Math.random() * 900000)}`;
      const result: SubmissionResult = {
        success: true,
        referenceNumber: generatedRef,
        timestamp: new Date().toISOString(),
        data: { ...formData },
      };

      setSubmissionResult(result);
      setIsSubmitting(false);

      // Save to localStorage inquiry backup
      try {
        const stored = JSON.parse(localStorage.getItem('lij_dawud_inquiries') || '[]');
        stored.push(result);
        localStorage.setItem('lij_dawud_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.error('Storage note', err);
      }

      onShowToast(
        currentLang === 'en'
          ? `Inquiry ${generatedRef} registered successfully!`
          : `የስራ ጥያቄዎ በመለያ ቁጥር ${generatedRef} ተመዝግቧል!`
      );
    }, 900);
  };

  const handleCopySummary = () => {
    if (!submissionResult) return;
    const summaryText = `[Lij Dawud Media Kit Inquiry]\nReference: ${submissionResult.referenceNumber}\nName: ${submissionResult.data.fullName}\nBrand: ${submissionResult.data.companyName}\nEmail: ${submissionResult.data.email}\nPhone: ${submissionResult.data.phone}\nPackage: ${submissionResult.data.packageType}\nProduct: ${submissionResult.data.productOrService}\nBrief: ${submissionResult.data.campaignBrief || 'N/A'}`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      onShowToast(currentLang === 'en' ? 'Summary copied to clipboard!' : 'የጥያቄው ማጠቃለያ ተቀድቷል!');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleResetForm = () => {
    setFormData(initialFormState);
    setSubmissionResult(null);
    onClearSelectedPackage();
  };

  return (
    <section id="contact" className="container booking-section">
      <div className="section-header-wrap">
        <div className="section-top-line">
          <span className="eyebrow">
            <Sparkles size={14} />
            {t.booking.eyebrow}
          </span>
          <span className="section-index">06 / Book Collaboration</span>
        </div>
        <h2 className="section-title">{t.booking.title}</h2>
        <p className="section-subtitle">{t.booking.subtitle}</p>
      </div>

      <div className="booking-form-card">
        {submissionResult ? (
          /* ================= SUCCESS CONFIRMATION STATE ================= */
          <div className="booking-success-box">
            <div className="success-icon-ring">
              <CheckCircle size={40} />
            </div>

            <h3 className="success-title">{t.booking.successTitle}</h3>
            <p className="success-message">{t.booking.successSubtitle}</p>

            <div className="success-ref-card">
              <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
                {t.booking.refNumberLabel}
              </div>
              <div className="success-ref-code">{submissionResult.referenceNumber}</div>

              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--rule-subtle)' }}>
                <div style={{ fontSize: '13px', color: 'var(--ink-primary)', fontWeight: 600, marginBottom: '4px' }}>
                  {submissionResult.data.companyName} — {submissionResult.data.fullName}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ink-secondary)' }}>
                  {submissionResult.data.productOrService} • {submissionResult.data.email}
                </div>
              </div>
            </div>

            {/* Next Steps List */}
            <div
              style={{
                maxWidth: '560px',
                margin: '0 auto 32px',
                textAlign: 'left',
                background: 'var(--bg-tertiary)',
                padding: '20px 24px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--rule-subtle)',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                {t.booking.nextStepsHeading}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: 'var(--ink-secondary)' }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <Check size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                  <span>{t.booking.nextStep1}</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <Check size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                  <span>{t.booking.nextStep2}</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <Check size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                  <span>{t.booking.nextStep3}</span>
                </li>
              </ul>
            </div>

            {/* Success Action Buttons */}
            <div className="success-actions-row">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCopySummary}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : t.booking.copySummaryBtn}</span>
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleResetForm}
              >
                <span>{t.booking.submitAnotherBtn}</span>
              </button>
            </div>
          </div>
        ) : (
          /* ================= ACTIVE INQUIRY FORM ================= */
          <form onSubmit={handleSubmit} noValidate>
            {/* Row 1: Name and Company */}
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  {t.booking.fullNameLabel}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  placeholder={t.booking.fullNamePlaceholder}
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                {errors.fullName && (
                  <div className="form-field-error">
                    <AlertCircle size={13} />
                    <span>{errors.fullName}</span>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="companyName" className="form-label">
                  {t.booking.companyLabel}
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-input"
                  placeholder={t.booking.companyPlaceholder}
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
                {errors.companyName && (
                  <div className="form-field-error">
                    <AlertCircle size={13} />
                    <span>{errors.companyName}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Row 2: Email and Phone */}
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t.booking.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder={t.booking.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="form-field-error">
                    <AlertCircle size={13} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  {t.booking.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder={t.booking.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && (
                  <div className="form-field-error">
                    <AlertCircle size={13} />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Row 3: Product to Promote and Desired Package */}
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="productOrService" className="form-label">
                  {t.booking.productLabel}
                </label>
                <input
                  type="text"
                  id="productOrService"
                  name="productOrService"
                  className="form-input"
                  placeholder={t.booking.productPlaceholder}
                  value={formData.productOrService}
                  onChange={handleChange}
                  required
                />
                {errors.productOrService && (
                  <div className="form-field-error">
                    <AlertCircle size={13} />
                    <span>{errors.productOrService}</span>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="packageType" className="form-label">
                  {t.booking.packageLabel}
                </label>
                <select
                  id="packageType"
                  name="packageType"
                  className="form-select"
                  value={formData.packageType}
                  onChange={handleChange}
                >
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name[currentLang]} ({pkg.pricing[currentLang]})
                    </option>
                  ))}
                  <option value="custom">
                    {currentLang === 'en' ? 'Custom Collaboration / Other' : 'ልዩ ጥምረት / ሌላ'}
                  </option>
                </select>
              </div>
            </div>

            {/* Row 4: Campaign Objective & Estimated Budget */}
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="campaignObjective" className="form-label">
                  {t.booking.objectiveLabel}
                </label>
                <select
                  id="campaignObjective"
                  name="campaignObjective"
                  className="form-select"
                  value={formData.campaignObjective}
                  onChange={handleChange}
                >
                  <option value="brand_awareness">
                    {currentLang === 'en' ? 'Brand Awareness & Reach' : 'የብራንድ ተደራሽነትን ማሳደግ'}
                  </option>
                  <option value="product_launch">
                    {currentLang === 'en' ? 'New Product / App Launch' : 'አዲስ ምርት ወይም አፕሊኬሽን ማስተዋወቅ'}
                  </option>
                  <option value="sales_conversions">
                    {currentLang === 'en' ? 'Drive Online Sales & Store Visits' : 'ሽያጭና የደንበኛ ቁጥርን መጨመር'}
                  </option>
                  <option value="event_promotion">
                    {currentLang === 'en' ? 'Live Event & Festival Promotion' : 'የቀጥታ ዝግጅት ወይም ፌስቲቫል ማስተዋወቅ'}
                  </option>
                  <option value="app_install">
                    {currentLang === 'en' ? 'App Downloads & Digital Signups' : 'የአፕሊኬሽን ማውረድና ምዝገባ'}
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budgetRange" className="form-label">
                  {t.booking.budgetLabel}
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  className="form-select"
                  value={formData.budgetRange}
                  onChange={handleChange}
                >
                  <option value="quote_only">
                    {currentLang === 'en' ? 'Quote Required / To Be Agreed' : 'ዋጋ በስምምነት የሚወሰን'}
                  </option>
                  <option value="tier_standard">
                    {currentLang === 'en' ? 'Standard Single Post Budget' : 'ለአንድ ቪዲዮ የተመደበ መደበኛ በጀት'}
                  </option>
                  <option value="tier_multi">
                    {currentLang === 'en' ? 'Multi-Post Campaign Budget' : 'ለተከታታይ ቪዲዮዎች የተመደበ በጀት'}
                  </option>
                  <option value="tier_large">
                    {currentLang === 'en' ? 'Full 360° / Strategic Ambassador Budget' : 'ለትልቅ ዘመቻ የተመደበ ሰፊ በጀት'}
                  </option>
                </select>
              </div>
            </div>

            {/* Row 5: Preferred Timeline & Communication Channel */}
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="preferredTimeline" className="form-label">
                  {t.booking.timelineLabel}
                </label>
                <input
                  type="text"
                  id="preferredTimeline"
                  name="preferredTimeline"
                  className="form-input"
                  placeholder={t.booking.timelinePlaceholder}
                  value={formData.preferredTimeline}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredContact" className="form-label">
                  {t.booking.contactMethodLabel}
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  className="form-select"
                  value={formData.preferredContact}
                  onChange={handleChange}
                >
                  <option value="email">
                    {currentLang === 'en' ? 'Email (Fastest for proposals)' : 'ኢሜይል (ለስምምነት ፈጣን)'}
                  </option>
                  <option value="telegram">
                    {currentLang === 'en' ? 'Telegram' : 'ቴሌግራም'}
                  </option>
                  <option value="whatsapp">
                    {currentLang === 'en' ? 'WhatsApp' : 'ዋትስአፕ'}
                  </option>
                  <option value="phone">
                    {currentLang === 'en' ? 'Direct Phone Call' : 'በስልክ ጥሪ'}
                  </option>
                </select>
              </div>
            </div>

            {/* Optional Website Link */}
            <div className="form-group">
              <label htmlFor="socialOrWebsite" className="form-label">
                {t.booking.websiteLabel}
              </label>
              <input
                type="text"
                id="socialOrWebsite"
                name="socialOrWebsite"
                className="form-input"
                placeholder={t.booking.websitePlaceholder}
                value={formData.socialOrWebsite}
                onChange={handleChange}
              />
            </div>

            {/* Brief / Additional Details */}
            <div className="form-group">
              <label htmlFor="campaignBrief" className="form-label">
                {t.booking.briefLabel}
              </label>
              <textarea
                id="campaignBrief"
                name="campaignBrief"
                className="form-textarea"
                placeholder={t.booking.briefPlaceholder}
                value={formData.campaignBrief}
                onChange={handleChange}
              />
            </div>

            {/* Privacy notice */}
            <p className="form-disclaimer">{t.booking.privacyNotice}</p>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', padding: '16px' }}
              disabled={isSubmitting}
            >
              <Send size={18} />
              <span>{isSubmitting ? t.booking.submittingBtn : t.booking.submitBtn}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
