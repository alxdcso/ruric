import React, { useState, useEffect } from 'react';
import './Services.css';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';
import ServiceCard from '../ServiceCard/ServiceCard';
import SkeletonCard from '../Skeleton/SkeletonCard';
import ConsultModal from '../ConsultModal/ConsultModal';
import {
  ac,
  brake,
  checkEngine,
  dpf,
  electric,
  enginePiston,
  key,
  oilCar,
  safety,
  suspension,
  temperature,
  tire,
  horse,
} from 'images/services/index';

type ServiceItem = {
  title: string;
  icon: string;
  points?: string[];
};

const iconMap: Record<string, string> = {
  oil: oilCar,
  engine: enginePiston,
  check: checkEngine,
  airConditional: ac,
  carTemperature: temperature,
  carBrake: brake,
  carElectric: electric,
  carSuspension: suspension,
  dpf: dpf,
  carKey: key,
  carSafety: safety,
  carTire: tire,
  horsePower: horse,
};

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const items = t.items as ServiceItem[];

  const ctaText = language === 'ro' ? 'Află mai mult' : 'Узнать больше';

  const scrollToChiptuning = () => {
    const target = document.getElementById('chiptuning');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <h2 id="services-title" className="services__title">
        {t.title}
      </h2>

      <div className="services__underline" aria-hidden="true" />

      <div className="services__grid">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          : items.map((service) => {
              const isChiptuning =
                service.icon === 'horsePower' || service.title.toLowerCase().includes('chip');

              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  iconSrc={iconMap[service.icon]}
                  points={service.points}
                  onClick={() => setModalOpen(true)}
                  ctaLabel={isChiptuning ? ctaText : undefined}
                  onCta={isChiptuning ? scrollToChiptuning : undefined}
                />
              );
            })}
      </div>

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Services;
