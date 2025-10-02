import React from 'react';
import './ServiceCard.css';

export interface ServiceCardProps {
  title: string;
  iconSrc: string;
  points?: string[];
  onClick?: () => void;
  ctaLabel?: string;
  onCta?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  iconSrc,
  points,
  onClick,
  ctaLabel,
  onCta,
}) => {
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`service-card${onClick ? ' service-card--clickable' : ''}`}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : -1}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={title}
    >
      <div className="service-card__header">
        <span
          className="service-card__icon-mask"
          style={{ ['--icon' as unknown as string]: `url(${iconSrc})` }}
          aria-hidden="true"
        />
        <h3 className="service-card__title">{title}</h3>
      </div>

      {points?.length ? (
        <ul className="service-card__list">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      ) : null}

      {ctaLabel && (
        <button
          type="button"
          className="service-card__cta"
          onClick={(e) => {
            e.stopPropagation();
            onCta?.();
          }}
        >
          {ctaLabel}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
