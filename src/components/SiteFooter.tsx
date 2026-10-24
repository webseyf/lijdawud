import React from 'react';
import type { Language } from '../types';
import { I18N, CREATOR_INFO } from '../data/creatorData';
import { Globe, ArrowUp } from 'lucide-react';

interface SiteFooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const t = I18N[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-col-about">
            <div className="footer-brand-title">
              {CREATOR_INFO.name} <span style={{ color: 'var(--gold-light)' }}>({CREATOR_INFO.amharicName})</span>
            </div>
            <p className="footer-brand-desc">{t.footer.tagline}</p>
            <div style={{ fontSize: '12px', color: 'var(--ink-muted)' }}>
              Addis Ababa, Ethiopia • Digital Entertainment & Brand Storytelling
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="footer-col-title">{t.footer.navigationHeading}</div>
            <ul className="footer-nav-list">
              <li>
                <a href="#hero">{t.nav.home}</a>
              </li>
              <li>
                <a href="#work">{t.nav.work}</a>
              </li>
              <li>
                <a href="#packages">{t.nav.packages}</a>
              </li>
              <li>
                <a href="#process">{t.nav.process}</a>
              </li>
              <li>
                <a href="#about">{t.nav.about}</a>
              </li>
              <li>
                <a href="#contact">{t.nav.bookCta}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Commercial Rights */}
          <div>
            <div className="footer-col-title">{t.footer.legalHeading}</div>
            <p style={{ fontSize: '13px', color: 'var(--ink-muted)', lineHeight: '1.65', marginBottom: '16px' }}>
              {t.footer.rightsText}
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ padding: '8px 14px', fontSize: '12px' }}
              onClick={() => onLanguageChange(currentLang === 'en' ? 'am' : 'en')}
            >
              <Globe size={14} />
              <span>{t.footer.changeLanguage}</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} {CREATOR_INFO.name}. {t.footer.copyright}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--ink-muted)',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
