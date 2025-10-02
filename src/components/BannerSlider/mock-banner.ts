import { oil, carElectronics, carEngine, carRepair } from 'images/banners/index';

export type Banner = {
  url: string;
  alt: string;
};

export const banners: Banner[] = [
  {
    url: oil,
    alt: 'Oil change',
  },
  {
    url: carElectronics,
    alt: 'Diagnostic Auto',
  },
  {
    url: carEngine,
    alt: 'Car engine',
  },
  {
    url: carRepair,
    alt: 'Repair car',
  },
];
