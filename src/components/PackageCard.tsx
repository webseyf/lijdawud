import React from 'react';
import type { AdPackage, Language } from '../types';
import { I18N } from '../data/creatorData';
import { Check, Clock, RefreshCw, ArrowUpRight } from 'lucide-react';

interface PackageCardProps {
  adPackage: AdPackage;
  currentLang: Language;
  onSelectPackage: (packageId: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  adPackage,
  currentLang,
  onSelectPackage,
}) => {
  const t = I18N[currentLang];

  return (
    <div className={`package-card ${adPackage.isFeatured ? 'featured' : ''}`}>
      {adPackage.isFeatured && (
        <div className="package-featured-flag">
          {adPackage.badge ? adPackage.badge[currentLang] : 'Recommended'}
        </div>
      )}

      {adPackage.badge && !adPackage.isFeatured && (
        <span className="package-badge">{adPackage.badge[currentLang]}</span>
      )}

      <h3 className="package-name">{adPackage.name[currentLang]}</h3>

      <div className="package-price-wrap">
        <div className="package-price">{adPackage.pricing[currentLang]}</div>
        <div className="package-price-sub">{adPackage.pricingSubtext[currentLang]}</div>
      </div>

      <p className="package-desc">{adPackage.description[currentLang]}</p>

      {/* Deliverables Checklist */}
      <div className="package-features-label">{t.packages.deliverablesHeading}</div>
      <ul className="package-features-list">
        {adPackage.deliverables[currentLang].map((item, idx) => (
          <li key={idx}>
            <Check size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Turnaround & Revisions Metadata */}
      <div className="package-meta-row">
        <div className="package-meta-item">
          <Clock size={14} style={{ color: 'var(--gold-light)' }} />
          <span>{adPackage.turnaroundTime[currentLang]}</span>
        </div>
        <div className="package-meta-item">
          <RefreshCw size={14} style={{ color: 'var(--gold-light)' }} />
          <span>{adPackage.revisionRounds[currentLang]}</span>
        </div>
      </div>

      {/* Booking CTA Button */}
      <button
        type="button"
        className={`btn ${adPackage.isFeatured ? 'btn-primary' : 'btn-outline-gold'} package-select-btn`}
        onClick={() => onSelectPackage(adPackage.id)}
      >
        <span>{t.packages.selectPackageBtn}</span>
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
};
