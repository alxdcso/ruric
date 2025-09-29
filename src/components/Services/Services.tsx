import React, { useState, useEffect } from 'react';
import './Services.css';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';
import ServiceCard from '../ServiceCard/ServiceCard';
import SkeletonCard from '../Skeleton/SkeletonCard';
import ConsultModal from '../ConsultModal/ConsultModal';
import oilCar from 'images/services/car-oil.png'
import enginePiston from 'images/services/piston.png'
import temperature from 'images/services/car-cooler.png'
import checkEngine from 'images/services/check-engine.png'
import ac from 'images/services/ac.png'
import brake from 'images/services/brakes.png'
import electric from 'images/services/electric.png'
import suspension from 'images/services/car-suspension.png'
import dpf from 'images/services/dpf.png'
import key from 'images/services/car-key.png'
import safety from 'images/services/car-safety.png'
import tire from 'images/services/tire.png'


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
  carTire: tire
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
              iconSrc={iconMap[service.icon]}
              points={service.points}
              onClick={() => setModalOpen(true)}
            />
          ))}
      </div>
      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Services;