import React, { useState, useEffect } from 'react';
import { translations } from '../../translations';
import { useLanguage } from '../languageContext/laguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <h2 id="hero-title" className={`hero__title fade-in ${visible ? 'visible' : ''}`}>
          {t.title}
        </h2>

        <p
          className={`hero__text fade-in ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          {t.text}
        </p>
      </div>
    </section>
  );
};

export default Hero;
