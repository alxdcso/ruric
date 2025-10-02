import React, { useEffect, useRef } from 'react';
import './About.css';
import { team } from '../../images/about/index';
import { translations } from '../../translations';
import { useLanguage } from '../languageContext/laguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const parts = Array.from(el.querySelectorAll<HTMLElement>('.about__animate'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    parts.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about" aria-labelledby="about-title">
      <div className="about__container">
        <div className="about__left">
          <div className="about__line about__animate" aria-hidden="true" />
          <div className="about__textwrap about__animate">
            <h2 id="about-title" className="about__title">
              {t.title}
            </h2>
            <p className="about__text">{t.text}</p>
          </div>
        </div>

        <div className="about__right about__animate">
          <img src={team} alt="Echipa noastră" className="about__image" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default About;
