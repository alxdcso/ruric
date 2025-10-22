import React, { useState } from 'react';
import './Header.css';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].header;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ro' ? 'ru' : 'ro');
  };

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
  };

  return (
    <header>
      <div className="top-bar">
        <div className="top-desktop">
          <div className="top-left">
            <span>{t.top.schedule}</span>
            <span className="separator">|</span>
            <span>{t.top.address}</span>
          </div>
          <div className="top-right">
            <div className="phones">
              <a href="tel:+37369153518">069 153 518</a>
              <a href="tel:+37369133180">069 133 180</a>
              <a href="tel:+37369329273">069 329 273</a>
              <a href="tel:+37369102508">069 102 508</a>
              <a href="tel:027123866">027 123 866</a>
              <a href="tel:027124168">027 124 168</a>
            </div>
            <div className="lang-switch">
              <button onClick={toggleLanguage}>{language === 'ro' ? 'RU' : 'RO'}</button>
            </div>
          </div>
        </div>
        <div className="top-mobile">
          <div className="mobile-info-row">
            <span className="mobile-piece">{t.top.schedule}</span>
            <span>|</span>
            <span className="mobile-piece">{t.top.address}</span>
            <button className="mobile-lang-btn" onClick={toggleLanguage}>
              {language === 'ro' ? 'RU' : 'RO'}
            </button>
          </div>
          <div className="mobile-phones">
            <a href="tel:+37369153518">069 153 518</a>
            <a href="tel:+37369133180">069 133 180</a>
            <a href="tel:+37369329273">069 329 273</a>
            <a href="tel:+37369102508">069 102 508</a>
            <a href="tel:027123866">027 123 866</a>
            <a href="tel:027124168">027 124 168</a>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <h1 className="logo">RURIC SERVICE S.R.L.</h1>
        <button
          className={`burger ${menuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Deschide meniul"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav id="mobile-nav" className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t.about}
          </a>
          <a href="#tips" onClick={() => setMenuOpen(false)}>
            {t.tips}
          </a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>
            {t.reviews}
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            {t.services}
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            {t.gallery}
          </a>
          <a href="#chiptuning" onClick={() => setMenuOpen(false)}>
            {t.chiptuning}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
