import React, { useEffect, useRef, useCallback } from 'react';
import './ConsultModal.css';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const { language } = useLanguage();
  const t = translations[language];
  const c = t.consult;
  const phones = t.footer?.phones ?? [];

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const id = window.setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="cmodal__overlay"
      role="presentation"
      onMouseDown={handleOverlayClick}
    >
      <div
        className="cmodal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="cmodal__header">
          <div className="cmodal__wheel" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="wheel-svg" aria-hidden="true">
              <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                <line x1="50" y1="6" x2="50" y2="26" />
                <line x1="50" y1="74" x2="50" y2="94" />
                <line x1="6" y1="50" x2="26" y2="50" />
                <line x1="74" y1="50" x2="94" y2="50" />
                <line x1="18" y1="18" x2="32" y2="32" />
                <line x1="68" y1="68" x2="82" y2="82" />
                <line x1="18" y1="82" x2="32" y2="68" />
                <line x1="68" y1="32" x2="82" y2="18" />
              </g>
            </svg>
          </div>

          <h3 id="consult-title" className="cmodal__title">
            {c.title}
          </h3>

          <button className="cmodal__close" onClick={onClose} aria-label={c.close}>
            ✖
          </button>
        </div>

        <div className="cmodal__body">
          <p>{c.callUs}</p>
          {phones.length > 0 && (
            <div className="cmodal__phones">
              {phones.map((ph, i) => (
                <a key={i} href={`tel:${ph.replace(/\s+/g, '')}`}>
                  {ph}
                </a>
              ))}
            </div>
          )}
          <small className="cmodal__note">{c.availability}</small>
        </div>

        <div className="cmodal__actions">
          {phones[0] && (
            <button
              className="cmodal__btn cmodal__btn--primary"
              onClick={() => (window.location.href = `tel:${phones[0].replace(/\s+/g, '')}`)}
            >
              {c.callNow}
            </button>
          )}
          <button className="cmodal__btn" onClick={onClose}>
            {c.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultModal;
