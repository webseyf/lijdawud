import React from 'react';
import type { Language } from '../types';
import { I18N, CREATOR_INFO } from '../data/creatorData';
import { ArrowUpRight, ChevronRight, Globe } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onClose: () => void;
  onBookClick: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  currentLang,
  onLanguageChange,
  onClose,
  onBookClick,
}) => {
  const t = I18N[currentLang];

  // Close when pressing Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (hash: string) => {
    onClose();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`mobile-drawer ${isOpen ? 'open' : ''}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Mobile Navigation"
    >
      <div className="mobile-links">
        <a
          href="#hero"
          className="mobile-nav-item"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
        >
          <span>{t.nav.home}</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#work"
          className="mobile-nav-item"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#work');
          }}
        >
          <span>{t.nav.work}</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#packages"
          className="mobile-nav-item"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#packages');
          }}
        >
          <span>{t.nav.packages}</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#process"
          className="mobile-nav-item"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#process');
          }}
        >
          <span>{t.nav.process}</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#about"
          className="mobile-nav-item"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#about');
          }}
        >
          <span>{t.nav.about}</span>
          <ChevronRight size={18} />
        </a>
        <a
          href="#contact"
          className="mobile-nav-item"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#contact');
          }}
        >
          <span>{t.nav.contact}</span>
          <ChevronRight size={18} />
        </a>
      </div>

      <div className="mobile-footer">
        {/* Language selector in drawer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid var(--rule-subtle)' }}>
          <span style={{ fontSize: '13px', color: 'var(--ink-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={16} /> Language / ቋንቋ
          </span>
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
              onClick={() => onLanguageChange('en')}
            >
              English
            </button>
            <button
              type="button"
              className={`lang-btn ${currentLang === 'am' ? 'active' : ''}`}
              onClick={() => onLanguageChange('am')}
            >
              አማርኛ
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%', padding: '16px' }}
          onClick={() => {
            onClose();
            onBookClick();
          }}
        >
          <span>{t.nav.bookCta}</span>
          <ArrowUpRight size={18} />
        </button>

        <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--ink-muted)', marginTop: '8px' }}>
          Official TikTok: {CREATOR_INFO.handle}
        </div>
      </div>
    </div>
  );
};
