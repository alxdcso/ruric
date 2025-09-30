import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
} from 'images/gallery/index';

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export const gallery: GalleryItem[] = [
  {
    src: gallery1,
    alt: 'Motor recondiționat, compartiment curat',
    caption: 'Recondiționare motor',
  },
  { src: gallery2, alt: 'Schimb plăcuțe și discuri frână', caption: 'Frâne noi' },
  { src: gallery3, alt: 'Service A/C – încărcare freon', caption: 'Climatizare' },
  { src: gallery4, alt: 'Diagnoză computerizată – OBD', caption: 'Diagnoză OBD' },
  { src: gallery5, alt: 'Lucrări electrice și verificări sistem', caption: 'Electrică' },
  { src: gallery6, alt: 'Suspensie verificată și recondiționată', caption: 'Suspensie' },
  { src: gallery7, alt: 'Reparații și testări frâne ABS', caption: 'ABS & frâne' },
  { src: gallery8, alt: 'Încărcare și reparație climatizare auto', caption: 'Climatizare A/C' },
  { src: gallery9, alt: 'Diagnoză computerizată și resetări erori', caption: 'Diagnoză avansată' },
  { src: gallery10, alt: 'Întreținere sistem motor', caption: 'Întreținere motor' },
  { src: gallery11, alt: 'Înlocuire discuri și plăcuțe frână', caption: 'Frâne noi' },
  { src: gallery12, alt: 'Testare acumulator și alternator', caption: 'Electrică auto' },
  { src: gallery13, alt: 'Recondiționare completă motor', caption: 'Motor complet' },
  { src: gallery14, alt: 'Service complet și verificări finale', caption: 'Service complet' },
];

export const galleryExtended: GalleryItem[] = Array(5).fill(gallery).flat();
