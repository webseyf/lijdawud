import React from 'react';
import type { Language } from '../types';
import { I18N, PROCESS_STEPS } from '../data/creatorData';
import { Sparkles } from 'lucide-react';

interface CollaborationProcessProps {
  currentLang: Language;
}

export const CollaborationProcess: React.FC<CollaborationProcessProps> = ({ currentLang }) => {
  const t = I18N[currentLang];

  return (
    <section id="process" className="container" style={{ paddingBottom: '60px' }}>
      <div className="section-header-wrap">
        <div className="section-top-line">
          <span className="eyebrow">
            <Sparkles size={14} />
            {t.process.eyebrow}
          </span>
          <span className="section-index">04 / Workflow</span>
        </div>
        <h2 className="section-title">{t.process.title}</h2>
        <p className="section-subtitle">{t.process.subtitle}</p>
      </div>

      <div className="process-grid">
        {PROCESS_STEPS.map((step) => (
          <div key={step.step} className="process-card">
            <div className="process-step-num">{step.step}</div>
            <h3 className="process-step-title">{step.title[currentLang]}</h3>
            <p className="process-step-desc">{step.description[currentLang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
