import  './Products.scss';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import AutomaticSlider from '../AutomaticSlider/AutomaticSlider';
import { LogoData, ProductData } from '../../@types/interface';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import insta from '../../assets/instagram_icon.png';
import logo from '../../assets/logoSansFond.png';
import linkedin from '../../assets/linkedin_icon.png';
import CarouselLogos from '../CarouselLogos/CarouselLogos';
import CategoryList from '../CategoryList/CategoryList';
import FullViewSlider from '../FullViewSlider/FullViewSlider';



function Products() {
  
  const categories: ProductData[] = [
    {
      productName: 'Revêtement de sol',
      productImage: test2,
      productLink: '/products/floors'
    },
    {
      productName: 'Peinture',
      productImage: test3,
      productLink: '/products/paints'
    },
    {
      productName: 'Revêtement mural',
      productImage: test4,
      productLink: '/products/walls'
    },
    {
      productName: 'Autres produits',
      productImage: test2,
      productLink: '/products/others'
    },
 
  ];
 
  const logos: LogoData[] = [
    { url: logo, link: 'lien_image1', alt: 'nom_alt_image1' },
    { url: insta, link: 'lien_image2', alt: 'nom_alt_image2' },
    { url: linkedin, link: 'lien_image3', alt: 'nom_alt_image3' },
  ];

  return (
    <div className="nos-produits">
      <h1 className='title'>Nos Produits</h1>
      <CategoryList categories={categories} />
      <div className="carousel-logos">
        {/* Utilisation du composant FullViewSlider avec les données des logos */}
        <FullViewSlider images={logos} />
      </div>
    </div>
  );
};

export default Products;