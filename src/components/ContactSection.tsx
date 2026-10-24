import React from 'react';
import type { Language } from '../types';
import { I18N, CREATOR_INFO } from '../data/creatorData';
import { MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = I18N[currentLang];

  return (
    <section className="container">
      <div className="contact-callout">
        <div className="contact-info-block">
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2 className="contact-hed">{t.contact.title}</h2>
          <p className="contact-sub">{t.contact.subtitle}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '12px', color: 'var(--ink-muted)' }}>
            <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
            <span>{t.contact.verifiedDisclaimer}</span>
          </div>
        </div>

        <div className="contact-buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenBooking}
          >
            <MessageSquare size={16} />
            <span>{t.contact.bookBtn}</span>
          </button>

          <a
            href={CREATOR_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>{t.contact.tiktokBtn}</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
