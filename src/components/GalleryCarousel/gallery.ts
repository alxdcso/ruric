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
} from 'images/gallery/index';

export type GalleryItem = {
  src: string;
};

export const gallery: GalleryItem[] = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
  { src: gallery7 },
  { src: gallery8 },
  { src: gallery9 },
  { src: gallery10 },
  { src: gallery11 },
];

export const galleryExtended: GalleryItem[] = Array(5).fill(gallery).flat();
