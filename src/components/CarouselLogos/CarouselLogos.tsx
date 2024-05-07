import React, { useState, useEffect } from 'react';
import './CarouselLogos.scss';
import FullViewSlider from '../FullViewSlider/FullViewSlider'
import { LogoData } from '../../@types/interface';
// import { SliderProps } from '../../@types/interface';

function CarouselLogos() {
  
  const logos: LogoDataata[] = [
    { url: 'url_image1', link: 'lien_image1', alt: 'nom_alt_image1' },
    { url: 'url_image2', link: 'lien_image2', alt: 'nom_alt_image2' },
  ];

  return (
    <div> 
      <FullViewSlider />
    </div>
  );
}

export default CarouselLogos;