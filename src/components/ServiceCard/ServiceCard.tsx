// ServiceCard.tsx
import React from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  iconSrc: string;   // acum obligatoriu
  points?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, iconSrc, points }) => {
  return (
    <div className="service-card" role="article" tabIndex={0}>
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
    </div>
  );
};

export default ServiceCard;