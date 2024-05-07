import React, { useState, useEffect } from 'react';
import './CarouselLogos.scss';
import FullViewSlider from '../FullViewSlider/FullViewSlider'
import { LogoData } from '../../@types/interface';
import logoPeiture from '../../assets/logoSansFond.png';
import insta from '../../assets/instagram_icon.png';
import linkedin from '../../assets/linkedin_icon.png';
// import { SliderProps } from '../../@types/interface';

function CarouselLogos() {
  
  const logos: LogoData[] = [
    { url: logoPeiture, link: 'lien_image1', alt: 'nom_alt_image1' },
    { url: insta, link: 'lien_image2', alt: 'nom_alt_image2' },
    { url: linkedin, link: 'lien_image3', alt: 'nom_alt_image3' },
  ];

  return (
    <div className="carousel-logos">
      {/* Utilisation du composant FullViewSlider avec les données des logos */}
      <FullViewSlider images={logos} />
    </div>
  );
}

export default CarouselLogos;