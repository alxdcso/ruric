import React from 'react';
import './Header.css';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].header;

  const toggleLanguage = () => {
    setLanguage(language === 'ro' ? 'ru' : 'ro');
  };

  return (
    <header>
      <div className="top-bar">
        <div className="top-left">
          <span>{t.top.schedule}</span>
          <span className="separator">|</span>
          <span>{t.top.address}</span>
        </div>

        <div className="top-right">
          <div className="phones">
            <a href="tel:+37360011111">+373 600 111 11</a>
            <a href="tel:+37360022222">+373 600 222 22</a>
            <a href="tel:+37360033333">+373 600 333 33</a>
            <a href="tel:+37360044444">+373 600 444 44</a>
          </div>
          <div className="lang-switch">
            <button onClick={toggleLanguage}>
              {language === 'ro' ? 'RU' : 'RO'}
            </button>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <h1 className="logo">RURIC SERVICE S.R.L.</h1>
        <nav className="nav">
          <a href="#services">{t.services}</a>
          <a href="#tips">{t.tips}</a>
          <a href="#about">{t.about}</a>
          <a href="#reviews">{t.reviews}</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;