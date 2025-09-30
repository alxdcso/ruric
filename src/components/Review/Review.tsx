import React, { useEffect, useRef } from 'react';
import './Review.css';
import { translations } from '../../translations';
import { useLanguage } from '../languageContext/laguageContext';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const Reviews: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].reviews;

  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>('.review-card'));

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      cards.forEach((c) => c.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <h2 id="reviews-title" className="reviews__title">
        {t.title}
      </h2>

      <div className="reviews__grid" ref={gridRef} role="list">
        {t.items.map((review, idx) => (
          <article key={idx} className="review-card" role="listitem" aria-label={review.name}>
            <div className="review-card__avatar" aria-hidden="true">
              {getInitials(review.name)}
            </div>
            <h3 className="review-card__name">{review.name}</h3>
            <p className="review-card__text">“{review.text}”</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
