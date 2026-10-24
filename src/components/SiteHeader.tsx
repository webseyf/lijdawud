import React from 'react';
import type { Language } from '../types';
import { I18N } from '../data/creatorData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface SiteHeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onBookClick: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  currentLang,
  onLanguageChange,
  mobileMenuOpen,
  onToggleMobileMenu,
  onBookClick,
}) => {
  const t = I18N[currentLang];
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Brand Wordmark */}
        <a href="#hero" className="brand-logo" aria-label="Lij Dawud Home">
          <div className="brand-name">
            Lij Dawud <span className="brand-amharic">(ልጅ ዳውድ)</span>
          </div>
          <span className="brand-tagline">Creator Media Kit</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu-desktop" aria-label="Main Navigation">
          <a href="#work" className="nav-link">
            {t.nav.work}
          </a>
          <a href="#packages" className="nav-link">
            {t.nav.packages}
          </a>
          <a href="#process" className="nav-link">
            {t.nav.process}
          </a>
          <a href="#about" className="nav-link">
            {t.nav.about}
          </a>
          <a href="#contact" className="nav-link">
            {t.nav.contact}
          </a>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          {/* Language Switcher */}
          <div className="lang-switcher" role="group" aria-label="Language Selector">
            <button
              type="button"
              className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
              onClick={() => onLanguageChange('en')}
              title="English"
              aria-pressed={currentLang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${currentLang === 'am' ? 'active' : ''}`}
              onClick={() => onLanguageChange('am')}
              title="አማርኛ (Amharic)"
              aria-pressed={currentLang === 'am'}
            >
              አማ
            </button>
          </div>

          {/* Primary CTA */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={onBookClick}
            id="nav-booking-cta"
          >
            <span>{t.nav.bookCta}</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={onToggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};
