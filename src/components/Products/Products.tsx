import  './Products.scss';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import AutomaticSlider from '../AutomaticSlider/AutomaticSlider';
import { ProductData } from '../../@types/interface';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import insta from '../../assets/instagram_icon.png';
import logo from '../../assets/logoSansFond.png';
import linkedin from '../../assets/linkedin_icon.png';
import CarouselLogos from '../CarouselLogos/CarouselLogos';
import CategoryList from '../CategoryList/CategoryList';



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
      productLink: '/products/paint'
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
 
  const logos = [insta,linkedin,logo];

  return (
    <div className="nos-produits">
      <h1 className='title'>Nos Produits</h1>
      <CategoryList categories={categories} />
      <CarouselLogos/>
       </div>
  );
};

export default Products;