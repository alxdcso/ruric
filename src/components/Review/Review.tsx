import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Review.css';
import type { CreateReviewPayload, Review } from '@/types/review';
import { translations } from '../../translations';
import { useLanguage } from '../languageContext/laguageContext';
import { ReviewsService } from '../../services/reviews/ReviewsService';

const MAX_REVIEW_LEN = 255;

const getInitialsFromNames = (firstName: string, lastName: string) => {
  const f = (firstName?.trim()?.[0] || '').toUpperCase();
  const l = (lastName?.trim()?.[0] || '').toUpperCase();
  return `${f}${l}` || '•';
};

const clampStars = (n: number) => Math.min(5, Math.max(0, n));
const Stars: React.FC<{ value: number; label?: string }> = ({ value, label }) => {
  const v = Math.min(5, Math.max(0, value));

  return (
    <div className="review-stars" aria-label={label || `Rating: ${v} din 5`}>
      <span className="review-stars__stars" aria-hidden="true">
        <span className="review-stars__track">★★★★★</span>
        <span className="review-stars__fill" style={{ width: `${(v / 5) * 100}%` }}>
          ★★★★★
        </span>
      </span>

      <span className="review-stars__value">{v}/5</span>
    </div>
  );
};

const StarPicker: React.FC<{
  value: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (v: number) => void;
  name?: string;
  required?: boolean;
}> = ({ value, onChange, name = 'review-stars', required = true }) => {
  const v = clampStars(value);

  return (
    <div className="star-picker" role="group" aria-label="Selectează ratingul">
      <div className="star-picker__wrap">
        <div className="star-picker__stars" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <label
              key={n}
              className={`star-picker__label ${v >= n ? 'is-active' : ''}`}
              aria-label={`${n} din 5`}
            >
              <input
                className="star-picker__input"
                type="radio"
                name={name}
                value={n}
                checked={v === n}
                onChange={() => onChange(n)}
                required={required}
              />
              <span className="star-picker__star" aria-hidden="true">
                ★
              </span>
              <span className="sr-only">{n} din 5</span>
            </label>
          ))}
        </div>

        <span className="star-picker__count" aria-live="polite">
          {v}/5
        </span>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].reviews;
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitOk, setSubmitOk] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggleExpanded = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(max-width: 670px)')?.matches ?? false;
  });

  useEffect(() => {
    const mq = window.matchMedia?.('(max-width: 670px)');
    if (!mq) return;
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    if (typeof mq.addEventListener === 'function') mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (typeof mq.removeEventListener === 'function') mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const visibleItems = useMemo(() => {
    if (!isMobile) return items;
    return showAllMobile ? items : items.slice(0, 3);
  }, [items, isMobile, showAllMobile]);

  const [form, setForm] = useState<CreateReviewPayload>({
    firstName: '',
    lastName: '',
    stars: 0 as unknown as number,
    text: '',
  });

  const reduceMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false,
    []
  );

  useEffect(() => {
    let alive = true;

    (async () => {
      setIsLoading(true);
      setLoadError(null);

      try {
        const data = await ReviewsService.getAll();
        if (alive) {
          setItems(data);
        }
      } catch (e: any) {
        if (alive) {
          setLoadError(e?.message || (t.error ?? 'Nu am putut încărca recenziile.'));
        }
      } finally {
        if (alive) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, [t.error]);

  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>('.review-card'));

    if (reduceMotion) {
      cards.forEach((c) => c.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [visibleItems, reduceMotion]);

  const onChangeText =
    (key: 'firstName' | 'lastName' | 'text') =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const raw = e.target.value ?? '';
      const value = key === 'text' ? raw.slice(0, MAX_REVIEW_LEN) : raw;
      setForm((prev) => ({ ...prev, [key]: value as any }));
      setSubmitError(null);
      setSubmitOk(null);
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitOk(null);

    const payload: CreateReviewPayload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      stars: clampStars(Number(form.stars)),
      text: form.text.trim().slice(0, MAX_REVIEW_LEN),
    };

    if (!payload.firstName || !payload.lastName || !payload.text || payload.stars === 0) {
      setSubmitError(t.validationError ?? 'Completează toate câmpurile obligatorii.');
      return;
    }

    try {
      setIsSubmitting(true);
      const created = await ReviewsService.create(payload);

      setItems((prev) => [created, ...prev]);
      setForm({ firstName: '', lastName: '', stars: 0 as any, text: '' });
      setSubmitOk(t.success ?? 'Mulțumim! Recenzia ta a fost trimisă.');
    } catch (e: any) {
      setSubmitError(e?.message || (t.error ?? 'Nu am putut trimite recenzia. Încearcă din nou.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const textLen = form.text?.length ?? 0;

  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <h2 id="reviews-title" className="reviews__title">
        {t.title}
      </h2>

      <div className="reviews__create">
        <form className="review-form" onSubmit={onSubmit} aria-label="Adaugă o recenzie">
          <div className="review-form__header">
            <h3 className="review-form__title">{t.createTitle ?? 'Lasă o recenzie'}</h3>
            <p className="review-form__subtitle">
              {t.createSubtitle ?? 'Spune-ne cum a fost experiența ta.'}
            </p>

            <p className="review-form__requiredNote">
              <span className="req-star">*</span>{' '}
              {t.requiredNote ?? 'Toate câmpurile sunt obligatorii.'}
            </p>
          </div>

          <div className="review-form__grid">
            <label className="review-form__field">
              <span className="review-form__label">
                {t.firstName ?? 'Prenume'} <span className="req-star">*</span>
              </span>
              <input
                className="review-form__input"
                type="text"
                value={form.firstName}
                onChange={onChangeText('firstName')}
                required
                placeholder={t.firstNamePlaceholder ?? 'Ex: Ion'}
                autoComplete="given-name"
              />
            </label>

            <label className="review-form__field">
              <span className="review-form__label">
                {t.lastName ?? 'Nume'} <span className="req-star">*</span>
              </span>
              <input
                className="review-form__input"
                type="text"
                value={form.lastName}
                onChange={onChangeText('lastName')}
                required
                placeholder={t.lastNamePlaceholder ?? 'Ex: Popescu'}
                autoComplete="family-name"
              />
            </label>

            <div className="review-form__field review-form__field--stars">
              <span className="review-form__label review-form__label--center">
                {t.stars ?? 'Rating'} <span className="req-star">*</span>
              </span>

              <StarPicker
                value={Number(form.stars) || 0}
                onChange={(v) => {
                  setForm((prev) => ({ ...prev, stars: v as any }));
                  setSubmitError(null);
                  setSubmitOk(null);
                }}
              />
            </div>

            <label className="review-form__field review-form__field--text">
              <span className="review-form__label">
                {t.text ?? 'Recenzie'} <span className="req-star">*</span>
              </span>

              <textarea
                className="review-form__input review-form__textarea"
                value={form.text}
                onChange={onChangeText('text')}
                required
                maxLength={MAX_REVIEW_LEN}
                placeholder={t.textPlaceholder ?? 'Scrie aici experiența ta…'}
                rows={4}
              />

              <div className={`review-form__counter ${textLen >= MAX_REVIEW_LEN ? 'is-max' : ''}`}>
                {t.maxChars ?? 'Maxim'} {MAX_REVIEW_LEN} • {textLen}/{MAX_REVIEW_LEN}
              </div>
            </label>
          </div>

          <div className="review-form__footer">
            <button className="review-form__button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (t.sending ?? 'Se trimite…') : (t.send ?? 'Trimite recenzia')}
            </button>

            {submitError && <p className="review-form__message is-error">{submitError}</p>}
            {submitOk && <p className="review-form__message is-ok">{submitOk}</p>}
          </div>
        </form>
      </div>

      <div className="reviews__grid" ref={gridRef} role="list">
        {isLoading && (
          <div className="reviews__state" role="status" aria-live="polite">
            {t.loading ?? 'Se încarcă recenziile…'}
          </div>
        )}

        {!isLoading && loadError && (
          <div className="reviews__state is-error" role="alert">
            {loadError}
          </div>
        )}

        {!isLoading &&
          !loadError &&
          visibleItems.map((r) => {
            const isLong = (r.text?.length ?? 0) > 180;
            const isExpanded = !!expanded[r.id];

            return (
              <article
                key={r.id}
                className="review-card"
                role="listitem"
                aria-label={`${r.firstName} ${r.lastName}`}
              >
                <div className="review-card__top">
                  <div className="review-card__avatar" aria-hidden="true">
                    {getInitialsFromNames(r.firstName, r.lastName)}
                  </div>

                  <div className="review-card__meta">
                    <h3 className="review-card__name">
                      {r.firstName} {r.lastName}
                    </h3>
                    <Stars value={r.stars} />
                  </div>
                </div>

                <p className={`review-card__text ${isExpanded ? 'is-expanded' : ''}`}>“{r.text}”</p>

                {isLong && (
                  <button
                    type="button"
                    className="review-card__toggle"
                    onClick={() => toggleExpanded(r.id)}
                  >
                    {isExpanded ? (t.readLess ?? 'Mai puțin') : (t.readMore ?? 'Citește mai mult')}
                  </button>
                )}
              </article>
            );
          })}
      </div>

      {isMobile && items.length > 3 && (
        <div className="reviews__more">
          <button
            type="button"
            className="reviews__moreBtn"
            onClick={() => setShowAllMobile((v) => !v)}
          >
            {showAllMobile ? (t.showLess ?? 'Vezi mai puțin') : (t.showAll ?? 'Vezi toate')}
          </button>
        </div>
      )}
    </section>
  );
};

export default Reviews;
