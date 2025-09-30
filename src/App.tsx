import React from 'react';
import { LanguageProvider } from './components/languageContext/laguageContext';
import './App.css';
import BannerSlider from './components/BannerSlider/Banners';
import Header from './components/Header/Header';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Tips from './components/Tips/Tips';
import Footer from './components/Footer/Footer';
import Reviews from './components/Review/Review';
import GalleryMosaic from './components/GalleryMosaic/GalleryMosaic';
import GallerySection from './components/GalleryCarousel/GallerySection';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <BannerSlider />
        <GalleryMosaic />
        <GallerySection />
        <Hero />
        <Services />
        <Tips />
        <About />
        <Reviews />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
