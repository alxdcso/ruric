import React, { useState, useEffect } from 'react';
import './GalleryCarousel.css';

type Item = {
  src: string;
  alt: string;
  caption?: string;
};

interface Props {
  items: Item[];
  intervalMs?: number;
}

const Gallery: React.FC<Props> = ({ items, intervalMs = 4000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        {items.map((item, index) => (
          <div
            key={index}
            className={`gallery__slide ${index === current ? 'active' : 'inactive'}`}
          >
            <img src={item.src} alt={item.alt} className="gallery__img" />
            {item.caption && <div className="gallery__caption">{item.caption}</div>}
          </div>
        ))}
      </div>

      <div className="gallery__dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`gallery__dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};
export default Gallery;
