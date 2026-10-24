import React from 'react';
import type { Language } from '../types';
import { QUICK_STATS } from '../data/creatorData';
import { Video, Users, Zap, Clock } from 'lucide-react';

interface QuickMetricsProps {
  currentLang: Language;
}

export const QuickMetrics: React.FC<QuickMetricsProps> = ({ currentLang }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'channel':
        return <Video size={18} />;
      case 'audience':
        return <Users size={18} />;
      case 'content':
        return <Zap size={18} />;
      default:
        return <Clock size={18} />;
    }
  };

  return (
    <section className="container" style={{ paddingTop: '10px', paddingBottom: '30px' }}>
      <div className="quick-metrics-row">
        {QUICK_STATS.map((stat) => (
          <div key={stat.id} className="quick-metric-card">
            <div className="quick-metric-icon">{getIcon(stat.id)}</div>
            <div className="quick-metric-body">
              <span className="quick-metric-label">{stat.label[currentLang]}</span>
              <div className="quick-metric-val">{stat.value}</div>
              <span className="quick-metric-sub">{stat.sub[currentLang]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
