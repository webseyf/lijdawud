import React from 'react';
import type { Language } from '../types';
import { I18N, CREATOR_INFO } from '../data/creatorData';
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onWorkWithLijClick: () => void;
  onExploreWorkClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onWorkWithLijClick,
  onExploreWorkClick,
}) => {
  const t = I18N[currentLang];

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Column: Editorial Headline & Messaging */}
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={14} />
              {t.hero.eyebrow}
            </div>

            <h1 className="hero-title">
              {t.hero.headlineStart}
              <em>{t.hero.headlineHighlight}.</em>
            </h1>

            <p className="hero-description">{t.hero.tagline}</p>

            {/* Direct Conversion Calls to Action */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onWorkWithLijClick}
                id="hero-primary-cta"
              >
                <span>{t.hero.primaryBtn}</span>
                <ArrowUpRight size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onExploreWorkClick}
                id="hero-secondary-cta"
              >
                <span>{t.hero.secondaryBtn}</span>
                <ArrowDown size={16} />
              </button>
            </div>

            {/* Social Channel Links */}
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 600, marginBottom: '8px' }}>
                {currentLang === 'en' ? 'Verified Social Channels' : 'ኦፊሴላዊ የማህበራዊ ገጾች'}
              </div>
              <div className="social-pills-row">
                <a
                  href={CREATOR_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="Lij Dawud on TikTok"
                >
                  <span className="dot-active" />
                  <strong>TikTok</strong>: {CREATOR_INFO.handle}
                </a>

                <a
                  href={CREATOR_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="Lij Dawud on YouTube"
                >
                  <span>YouTube: @Lijdawud23</span>
                </a>

                <a
                  href={CREATOR_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="Lij Dawud on Instagram"
                >
                  <span>Instagram: @lijdawud</span>
                </a>
              </div>
            </div>

            {/* Location & Verification Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px', fontSize: '12px', color: 'var(--ink-muted)' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--accent-emerald)' }} />
              <span>{t.hero.verifiedNotice}</span>
            </div>
          </div>

          {/* Hero Right Column: Editorial Visual Composition */}
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={CREATOR_INFO.heroImage}
                alt="Lij Dawud — Ethiopian Digital Content Creator and Comedian"
                className="hero-photo"
                loading="eager"
                width="440"
                height="586"
              />

              {/* Verified Badge Over Image */}
              <div className="hero-frame-badge">
                <div>
                  <div className="hero-badge-title">
                    {CREATOR_INFO.name} ({CREATOR_INFO.amharicName})
                  </div>
                  <div className="hero-badge-sub">
                    {currentLang === 'en' ? CREATOR_INFO.location : CREATOR_INFO.amharicLocation}
                  </div>
                </div>
                <span className="badge badge-verified">
                  <CheckCircle2 size={12} />
                  {currentLang === 'en' ? 'Verified Creator' : 'ይፋዊ ፈጣሪ'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
