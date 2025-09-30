import React, { useState, useEffect } from 'react';
import './Banners.css';
import { banners, Banner } from './mock-banner';

const BannerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="banner-slider">
      {banners.map((banner: Banner, index: number) => (
        <img
          key={index}
          src={banner.url}
          alt={banner.alt}
          className={`banner-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}

      <button className="arrow left" onClick={handlePrev}>
        ❮
      </button>
      <button className="arrow right" onClick={handleNext}>
        ❯
      </button>

      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;
