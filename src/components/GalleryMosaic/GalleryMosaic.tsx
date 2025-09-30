import React, { useEffect, useMemo, useRef, useState } from 'react';
import './GalleryMosaic.css';
import { galleryExtended } from './gallery';

type Item = { src: string; alt: string; caption?: string };

const ALL_IMAGES: Item[] = galleryExtended;

const AREAS = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'] as const;
type AreaKey = (typeof AREAS)[number];

const ROTATE_MS = 3500;
const SWAP_COUNT = 3;

export default function GalleryMosaic() {
  const shuffled = useMemo(() => ALL_IMAGES.map((x) => x).sort(() => Math.random() - 0.5), []);
  const poolRef = useRef(shuffled);

  const [tiles, setTiles] = useState<Record<AreaKey, Item>>(() => {
    const seed = poolRef.current.slice(0, AREAS.length);
    const map: Partial<Record<AreaKey, Item>> = {};
    AREAS.forEach((a, i) => (map[a] = seed[i]));
    return map as Record<AreaKey, Item>;
  });

  const hasSrc = (src: string, state: Record<AreaKey, Item>) =>
    Object.values(state).some((it) => it?.src === src);

  useEffect(() => {
    const id = setInterval(() => {
      setTiles((prev) => {
        const next = { ...prev };
        const zones = [...AREAS].sort(() => Math.random() - 0.5).slice(0, SWAP_COUNT);

        zones.forEach((z) => {
          let tries = 0;
          while (tries < poolRef.current.length) {
            const candidate = poolRef.current.shift()!;
            poolRef.current.push(candidate);
            if (!hasSrc(candidate.src, next)) {
              next[z] = candidate;
              break;
            }
            tries++;
          }
        });

        return next;
      });
    }, ROTATE_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="gallery" className="gm">
      <h2 className="gm__title">Galerie lucrări</h2>

      <div className="gm__grid" aria-label="Mosaic galeria lucrărilor">
        {AREAS.map((area) => {
          const item = tiles[area];
          return (
            <figure key={area} className={`gm__tile ${area}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
