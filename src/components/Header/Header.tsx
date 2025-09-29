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
            <a href="tel:+37369153518">+373 691 535 18</a>
            <a href="tel:+37369133180">+373 691 331 80</a>
            <a href="tel:+37369329273">+373 693 292 73</a>
            <a href="tel:027124168">027 124 168</a>
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