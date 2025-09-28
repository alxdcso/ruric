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
export const markAnimationsDone = () => {
  document.body.classList.add('animations-done');
};
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <BannerSlider />
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
