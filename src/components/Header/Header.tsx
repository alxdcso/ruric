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
            <blockquote
              className="imgur-embed-pub"
              lang="en"
              data-id="a/BuxdkHR"
              data-context="false"
            >
            </blockquote>
            <a href="tel:+37369153518">069 153 518</a>
            <a href="tel:+37369133180">069 133 180</a>
            <a href="tel:+37369329273">069 329 273</a>
            <a href="tel:+3737369102508">069 102 508</a>
            <a href="tel:027123866">027 123 866</a>
            <a href="tel:027124168">027 124 168</a>
          </div>
          <div className="lang-switch">
            <button onClick={toggleLanguage}>{language === 'ro' ? 'RU' : 'RO'}</button>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <h1 className="logo">RURIC SERVICE S.R.L.</h1>
        <nav className="nav">
          <a href="#services">{t.services}</a>
          <a href="#tips">{t.tips}</a>
          <a href="#chiptuning">{t.chiptuning}</a>
          <a href="#gallery">{t.gallery}</a>
          <a href="#about">{t.about}</a>
          <a href="#reviews">{t.reviews}</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
