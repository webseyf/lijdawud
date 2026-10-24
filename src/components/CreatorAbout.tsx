import React from 'react';
import type { Language } from '../types';
import { I18N, CREATOR_BIO, CREATOR_INFO } from '../data/creatorData';
import { Sparkles, Video, ArrowUpRight, MessageSquare } from 'lucide-react';

interface CreatorAboutProps {
  currentLang: Language;
  onSendBriefClick: () => void;
}

export const CreatorAbout: React.FC<CreatorAboutProps> = ({
  currentLang,
  onSendBriefClick,
}) => {
  const t = I18N[currentLang];

  return (
    <section id="about" className="container" style={{ paddingBottom: '60px' }}>
      <div className="section-header-wrap">
        <div className="section-top-line">
          <span className="eyebrow">
            <Sparkles size={14} />
            {t.about.eyebrow}
          </span>
          <span className="section-index">05 / About</span>
        </div>
        <h2 className="section-title">{t.about.title}</h2>
      </div>

      <div className="about-grid">
        {/* Left Column: Editorial Bio & Themes */}
        <div>
          {CREATOR_BIO.bioParagraphs[currentLang].map((paragraph, idx) => (
            <p key={idx} className="about-bio-text">
              {paragraph}
            </p>
          ))}

          {/* Core Content Themes */}
          <div style={{ marginTop: '28px' }}>
            <h3 style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '14px' }}>
              {t.about.themesHeading}
            </h3>
            <div className="about-themes-grid">
              {CREATOR_BIO.coreThemes[currentLang].map((theme, idx) => (
                <div key={idx} className="theme-pill-card">
                  <Video size={16} />
                  <span>{theme}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Official Creator Profile Card with uploaded photo */}
        <div>
          <div className="about-sidebar-card">
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 16px',
                  border: '2px solid var(--gold-primary)',
                  boxShadow: '0 0 20px rgba(230, 167, 60, 0.25)',
                }}
              >
                <img
                  src={CREATOR_INFO.heroImage}
                  alt={CREATOR_INFO.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--ink-primary)' }}>
                {CREATOR_INFO.name}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--gold-light)' }}>
                {CREATOR_INFO.amharicName} • {CREATOR_INFO.primaryCategory}
              </p>
            </div>

            <div className="about-sidebar-title">{t.about.officialChannelsHeading}</div>

            <div className="about-channel-list">
              <a
                href={CREATOR_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-channel-item"
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>TikTok Official</div>
                  <div style={{ fontSize: '11px', color: 'var(--ink-muted)' }}>{CREATOR_INFO.handle}</div>
                </div>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={CREATOR_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-channel-item"
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>YouTube Channel</div>
                  <div style={{ fontSize: '11px', color: 'var(--ink-muted)' }}>@Lijdawud23</div>
                </div>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={CREATOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-channel-item"
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>Instagram</div>
                  <div style={{ fontSize: '11px', color: 'var(--ink-muted)' }}>@lijdawud</div>
                </div>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={onSendBriefClick}
            >
              <span>{t.about.connectBtn}</span>
              <MessageSquare size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
