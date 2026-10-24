import React from 'react';
import type { Language } from '../types';
import { I18N, PACKAGES } from '../data/creatorData';
import { PackageCard } from './PackageCard';
import { Sparkles, HelpCircle, FileText } from 'lucide-react';

interface PackageSectionProps {
  currentLang: Language;
  onSelectPackage: (packageId: string) => void;
}

export const PackageSection: React.FC<PackageSectionProps> = ({
  currentLang,
  onSelectPackage,
}) => {
  const t = I18N[currentLang];

  return (
    <section id="packages" className="container" style={{ paddingBottom: '70px' }}>
      <div className="section-header-wrap">
        <div className="section-top-line">
          <span className="eyebrow">
            <Sparkles size={14} />
            {t.packages.eyebrow}
          </span>
          <span className="section-index">03 / Services</span>
        </div>
        <h2 className="section-title">{t.packages.title}</h2>
        <p className="section-subtitle">{t.packages.subtitle}</p>
      </div>

      {/* Grid of Advertising Packages */}
      <div className="packages-grid">
        {PACKAGES.map((pkg) => (
          <PackageCard
            key={pkg.id}
            adPackage={pkg}
            currentLang={currentLang}
            onSelectPackage={onSelectPackage}
          />
        ))}
      </div>

      {/* Commercial Terms & Custom Inquiry Footer Note */}
      <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '18px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '13px',
            color: 'var(--ink-secondary)',
          }}
        >
          <HelpCircle size={18} style={{ color: 'var(--gold-light)', flexShrink: 0 }} />
          <span>{t.packages.customNeedsNote}</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '12px',
            color: 'var(--ink-muted)',
            padding: '0 8px',
          }}
        >
          <FileText size={15} style={{ flexShrink: 0 }} />
          <span>{t.packages.termsDisclaimer}</span>
        </div>
      </div>
    </section>
  );
};
