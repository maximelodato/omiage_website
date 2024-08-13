import React, { useState, useEffect } from 'react';
import '../About/about.scss';
import { useTranslation } from 'react-i18next';

const About = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCvEnClick = () => {
    window.open('/pdf/CV-EN.pdf', '_blank');
  };

  const handleCvFrClick = () => {
    window.open('/pdf/CV-FR.pdf', '_blank');
  };

  return (
    <section id="about">
      <div className="about-content">
        {/* Background Layer */}
        <div 
          className="Otherbackground-layer layer1" 
          style={{ transform: `translate(${mousePos.x * 0.009}px, ${mousePos.y * 0.015}px)` }}
        ></div>

        <div 
          className="Otherbackground-layer layer2" 
          style={{ transform: `translate(${mousePos.x * 0.012}px, ${mousePos.y * 0.018}px)` }}
        ></div>
        <div 
          className="Otherbackground-layer layer3" 
          style={{ transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.021}px)` }}
        ></div>
        <div 
          className="Otherbackground-layer layer4" 
          style={{ transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.018}px)` }}
        ></div>
        <div 
          className="Otherbackground-layer layer5" 
          style={{ transform: `translate(${mousePos.x * 0.020}px, ${mousePos.y * 0.018}px)` }}
        ></div>
        <div 
          className="Otherbackground-layer layer6" 
          style={{ transform: `translate(${mousePos.x * 0.012}px, ${mousePos.y * 0.018}px)` }}
        ></div>
        <div 
          className="Otherbackground-layer layer7" 
          style={{ transform: `translate(${mousePos.x * 0.012}px, ${mousePos.y * 0.018}px)` }}
        ></div>

        <div className="about-avatar">
          <img src="/images/avatar.svg" alt="avatar" className="avatar" />
        </div>

        <div className="about-text">
          <p>{t('about1')}<span className="colored-text">{t('about2')}</span> {t('about3')}</p>
          <p>{t('about4')}</p>
          <p>{t('about5')}</p>
          <p>{t('about6')}</p>
          <p>{t('about7')}</p>

          <div className="btn-about">
            <div className="btn-container">
              <button className="btn-cv" onClick={handleCvEnClick}>
                <img src="/images/usa-flag.svg" alt="Drapeau USA" className="flag-icon" />
                {t('cvEn')}
              </button>
            </div>
            <div className="btn-container">
              <button className="btn-cv" onClick={handleCvFrClick}>
                <img src="/images/france-flag.svg" alt="Drapeau FRANCE" className="flag-icon" />
                {t('cvFr')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
