import React, { useEffect, useRef, useState, useCallback } from 'react';
import './GalleryCarousel.css';

type Item = { src: string;};

interface Props {
  items: Item[];
  intervalMs?: number;
}

const Gallery: React.FC<Props> = ({ items, intervalMs = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const startAuto = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, intervalMs);
  }, [next, intervalMs]);

  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  const userNext = () => {
    stopAuto();
    next();
    startAuto();
  };
  const userPrev = () => {
    stopAuto();
    prev();
    startAuto();
  };
  const userGo = (i: number) => {
    stopAuto();
    setCurrent(i);
    startAuto();
  };

  return (
    <div className="gallery">
      <div className="gallery__viewport">
        {items.map((item, index) => (
          <div
            key={index}
            className={`gallery__slide ${index === current ? 'active' : 'inactive'}`}
          >
            <img src={item.src} className="gallery__img" />
          </div>
        ))}

        <button
          className="gallery__arrow gallery__arrow--left"
          aria-label="Imaginea precedentă"
          onClick={userPrev}
        >
          ❮
        </button>
        <button
          className="gallery__arrow gallery__arrow--right"
          aria-label="Imaginea următoare"
          onClick={userNext}
        >
          ❯
        </button>
      </div>

      <div className="gallery__dots" role="tablist" aria-label="Navigator galerie">
        {items.map((_, index) => (
          <button
            key={index}
            className={`gallery__dot ${index === current ? 'active' : ''}`}
            aria-label={`Mergi la imaginea ${index + 1}`}
            aria-selected={index === current}
            role="tab"
            onClick={() => userGo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
