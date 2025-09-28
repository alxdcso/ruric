import React, { useState, useEffect } from 'react';
import './Services.css';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';
import ServiceCard from '../ServiceCard/ServiceCard';
import SkeletonCard from '../Skeleton/SkeletonCard';

type ServiceItem = {
  title: string;
  iconSrc: string;
  points?: string[];
};

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const items = t.items as ServiceItem[];

  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <h2 id="services-title" className="services__title">
        {t.title}
      </h2>

      <div className="services__underline" aria-hidden="true" />

      <div className="services__grid">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          : items.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              iconSrc={service.iconSrc}
              points={service.points}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;