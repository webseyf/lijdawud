import React, { useState } from 'react';
import type { Language } from '../types';
import { I18N, TIKTOK_VIDEOS } from '../data/creatorData';
import { Sparkles, ExternalLink, Play, RefreshCw } from 'lucide-react';

interface TikTokPortfolioProps {
  currentLang: Language;
}

export const TikTokPortfolio: React.FC<TikTokPortfolioProps> = ({ currentLang }) => {
  const t = I18N[currentLang];
  // Auto-play / load the first video by default, others load on click to prevent TikTok rate limit
  const [activeVideos, setActiveVideos] = useState<Record<string, boolean>>({
    '7694227362493271316': true,
  });

  const toggleVideo = (videoId: string) => {
    setActiveVideos((prev) => ({
      ...prev,
      [videoId]: true,
    }));
  };

  return (
    <section id="work" className="container" style={{ paddingBottom: '70px' }}>
      <div className="section-header-wrap">
        <div className="section-top-line">
          <span className="eyebrow">
            <Sparkles size={14} />
            {t.portfolio.eyebrow}
          </span>
          <span className="section-index">02 / TikTok Videos</span>
        </div>
        <h2 className="section-title">{t.portfolio.title}</h2>
        <p className="section-subtitle">{t.portfolio.subtitle}</p>
      </div>

      {/* Grid of TikTok Videos */}
      <div className="tiktok-video-grid">
        {TIKTOK_VIDEOS.map((vid, idx) => {
          const isPlaying = !!activeVideos[vid.videoId];

          return (
            <div key={vid.id} className="tiktok-card-frame">
              <div className="tiktok-iframe-wrap">
                {isPlaying ? (
                  <iframe
                    src={`https://www.tiktok.com/player/v1/${vid.videoId}?embed_from=oembed&music_info=1&description=1`}
                    title={`Lij Dawud TikTok Video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="tiktok-iframe"
                    loading="lazy"
                  />
                ) : (
                  /* High performance facade: prevents TikTok overload protection */
                  <div
                    className="tiktok-play-facade"
                    onClick={() => toggleVideo(vid.videoId)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggleVideo(vid.videoId);
                      }
                    }}
                    title="Click to play TikTok video"
                  >
                    <div className="tiktok-facade-poster">
                      <img
                        src="/images/lij_hero_portrait.png"
                        alt="Lij Dawud Video"
                        className="tiktok-facade-img"
                      />
                    </div>
                    <div className="tiktok-facade-overlay">
                      <div className="tiktok-facade-play-btn">
                        <Play size={24} fill="#0c0d0e" style={{ marginLeft: '4px' }} />
                      </div>
                      <span className="tiktok-facade-prompt">
                        {currentLang === 'en' ? 'Click to Play Video' : 'ቪዲዮውን ለማጫወት ይጫኑ'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="tiktok-card-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Play size={13} style={{ color: 'var(--gold-primary)' }} />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-primary)' }}>
                    TikTok #{idx + 1}
                  </span>
                  {isPlaying && (
                    <button
                      type="button"
                      onClick={() => toggleVideo(vid.videoId)}
                      className="tiktok-reload-btn"
                      title="Reload player"
                    >
                      <RefreshCw size={12} />
                    </button>
                  )}
                </div>

                <a
                  href={vid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tiktok-direct-link"
                  title="Open directly in TikTok"
                >
                  <span>{t.portfolio.openTikTokBtn}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
