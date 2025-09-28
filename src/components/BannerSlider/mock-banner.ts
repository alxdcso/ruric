import oil from '../../images/banners/oil-change.jpg';
import carElectronics from '../../images/banners/car-electronics.jpg';
import carEngine from '../../images/banners/car-engine.jpg';
import carBrake from '../../images/banners/car-brake.jpg';
import carRepair from '../../images/banners/car-repair.jpg';

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
    url: carBrake,
    alt: 'Change car brakes',
  },
  {
    url: carRepair,
    alt: 'Repair car',
  },
];