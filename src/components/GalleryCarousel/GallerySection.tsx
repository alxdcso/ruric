import React from 'react';
import Gallery from './GalleryCarousel';
import './GalleryCarousel.css';
import { gallery } from './gallery';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';

const GallerySection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="gallery" className="gsec">
      <h2 className="gsec__title">{t.gallery?.title ?? 'Galerie lucrări'}</h2>
      <Gallery items={gallery} intervalMs={4500} />
    </section>
  );
};

export default GallerySection;
