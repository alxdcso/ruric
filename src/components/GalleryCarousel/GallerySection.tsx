import React from 'react';
import Gallery from './GalleryCarousel';
import { gallery } from '../GalleryMosaic/gallery';

const GallerySection: React.FC = () => (
  <section id="gallery" style={{ padding: '40px 20px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Galerie lucrări</h2>
    <Gallery items={gallery} intervalMs={4500} />
  </section>
);

export default GallerySection;
