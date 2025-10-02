import React, { useEffect, useRef, useState } from 'react';
import './ChiptuningBlock.css';
import { useLanguage } from '../languageContext/laguageContext';
import { translations } from '../../translations';

import {
  powerImg,
  dynamicsImg,
  fuelImg,
  smoothImg,
  errorImg,
  safetyImg,
  stage1,
  stage2,
  stage3,
} from 'images/chiptuning';

const iconMap: Record<string, string> = {
  power: powerImg,
  dynamics: dynamicsImg,
  fuel: fuelImg,
  smooth: smoothImg,
  error: errorImg,
  safety: safetyImg,
};
const stageMap: Record<string, string> = {
  stage1,
  stage2,
  stage3,
};

export default function Chiptuning() {
  const { language } = useLanguage();
  const t = translations[language].chiptuning;

  const [open, setOpen] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => setOpen(open === idx ? null : idx);

  // Refs pentru animarea la scroll
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const stageRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const targets = [...cardRefs.current, ...stageRefs.current].filter(Boolean) as HTMLElement[];
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [language]);

  return (
    <section id="chiptuning" className="chip">
      <h2 className="chip__title">{t.title}</h2>

      {/* CARDS */}
      <div className="chip__grid">
        {t.features.map((f, i) => (
          <article
            key={i}
            className="chip__card anim-fade-up"
            aria-label={f.title}
            ref={(el) => {
              // IMPORTANT: funcție cu acolade => returnează void
              cardRefs.current[i] = el;
            }}
          >
            <div className="chip__content">
              <h3 className="chip__card-title">{f.title}</h3>
              <ul className="chip__list">
                {f.text.map((line: string, idx: number) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="chip__media">
              <img src={iconMap[f.icon]} alt="" aria-hidden="true" loading="lazy" />
            </div>
          </article>
        ))}
      </div>

      {/* STAGES */}
      <div className="chip__stages">
        {t.stages.map((s, i) => (
          <div
            key={i}
            className="chip__stage anim-fade-up"
            ref={(el) => {
              stageRefs.current[i] = el;
            }}
          >
            <img src={stageMap[s.stageKey]} alt="" className="chip__stage-img" />
            <span className="chip__stage-title">{s.title}</span>
            <p className="chip__stage-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* ACCORDIONS */}
      <div className="chip__accordions">
        {t.accordions.map((a, i) => (
          <div key={i} className={`chip__accordion ${open === i ? 'chip__accordion--open' : ''}`}>
            <button className="chip__accordion-header" onClick={() => toggleAccordion(i)}>
              {a.title}
              <span className={`chip__accordion-icon ${open === i ? 'open' : ''}`} />
            </button>
            {open === i && (
              <div className="chip__accordion-content">
                {a.content
                  .split('\n')
                  .map((p: string, idx: number) => (p.trim() ? <p key={idx}>{p}</p> : null))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
