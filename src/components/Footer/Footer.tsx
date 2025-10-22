import React from 'react';
import './Footer.css';
import { translations } from '../../translations';
import { useLanguage } from '../languageContext/laguageContext';
import { phoneIcon, mapIcon, timeIcon, facebookIcon } from 'images/footer/index';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const externalLink =
    'https://www.google.com/maps/place/Ruric-Service+SRL/@48.4105937,27.4956103,17z';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">
            <span className="footer-autoservice">
              <span className="footer-auto">Auto</span>
              <span className="footer-service">Service</span>
            </span>
            <br />
            <span className="footer-company">{t.company}</span>
          </h3>
          <p className="footer-line">
            <img src={mapIcon} alt="" className="footer-icon" aria-hidden="true" />
            <span>
              <strong>{t.addressLabel}</strong>
              <br />
              {t.address}
            </span>
          </p>

          <p className="footer-line">
            <img src={phoneIcon} alt="" className="footer-icon" aria-hidden="true" />
            <span>
              <strong>{t.phoneLabel}</strong>
              <br />
              {t.phones.map((phone, idx) => (
                <React.Fragment key={idx}>
                  {phone}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </p>

          <p className="footer-line">
            <img src={timeIcon} alt="" className="footer-icon" aria-hidden="true" />
            <span>
              <strong>{t.programLabel}</strong>
              <br />
              {t.program}
            </span>
          </p>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/sergej.rurinkevic?mibextid=wwXIfr&rdid=MFQwHAbKRX37gRFE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F176UeD7U7G%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="footer-icon" />
            </a>
          </div>
        </div>

        <div className="footer-map">
          <iframe
            title="Harta Auto Service Ruric-Service"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2211.633569109553!2d27.490928102386714!3d48.41077118051888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47333d10b58ab869%3A0xe9618c08495c17d2!2sRuric-Service%20SRL!5e0!3m2!1sen!2sus!4v1758696860968!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
          />
          <a href={externalLink} target="_blank" rel="noopener noreferrer" className="map-button">
            {t.mapOpen}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {t.company}. {t.rights}
        <br />
      </div>
    </footer>
  );
};

export default Footer;
