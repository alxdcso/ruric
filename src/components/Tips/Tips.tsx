import React, { useEffect, useRef } from 'react';
import './Tips.css';
import brake from '../../images/tips/brake.jpg';
import oil from '../../images/tips/oil.jpg';
import battery from '../../images/tips/battery.jpg';
import tire from '../../images/tips/tire.jpg';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';

const Tips: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].tips;

  const IMAGES = [brake, oil, battery, tire];
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rootEl = gridRef.current;
    if (!rootEl) return;

    const cards = Array.from(rootEl.querySelectorAll<HTMLElement>('.tip-card'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target); // animăm o singură dată
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => io.observe(card));

    return () => io.disconnect();
  }, []);

  return (
    <section className="tips" id="tips" aria-labelledby="tips-title">
      <h2 id="tips-title" className="tips__title">
        {t.title}
      </h2>
      <div className="tips__grid" role="list" ref={gridRef}>
        {t.items.map((tip, idx) => (
          <article
            key={idx}
            className="tip-card"
            role="listitem"
            aria-label={tip.title}
            style={{ ['--bg' as unknown as string]: `url(${IMAGES[idx]})` }}
          >
            <div className="tip-card__body">
              <h3 className="tip-card__title">{tip.title}</h3>
              <p className="tip-card__desc">{tip.description}</p>
            </div>
            {tip.alt && <span className="sr-only">{tip.alt}</span>}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tips;