import React from 'react';
import { Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-notice" role="status" aria-live="polite">
      <Sparkles size={16} style={{ color: 'var(--gold-primary)' }} />
      <span>{message}</span>
    </div>
  );
};
