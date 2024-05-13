import  './Products.scss';
import React, { useState } from 'react';
import { LogoData, ProductData } from '../../@types/interface';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import CategoryList from '../CategoryList/CategoryList';
import FullViewSlider from '../FullViewSlider/FullViewSlider';
import { logos } from '../../data/data';



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
 

  return (
    <div className="nos-produits">
      <h1 className='title'>Nos Produits</h1>
      <div className='productCategory-list'>
        <CategoryList categories={categories} />
      </div>
      <div className="carousel-logos">
        {/* Utilisation du composant FullViewSlider avec les données des logos */}
        <FullViewSlider images={logos} />
      </div>
    </div>
  );
};

export default Products;