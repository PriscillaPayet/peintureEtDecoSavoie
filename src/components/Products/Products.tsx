import  './Products.scss';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductData } from '../../@types/interface';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';



function Products() {
  
  const categories: ProductData[] = [
    {
      productName: 'Revêtement de sol',
      productImage: test2,
      productLink: 'lien_vers_la_page_revêtement_de_sol'
    },
    {
      productName: 'Revêtement mural',
      productImage: test3,
      productLink: 'lien_vers_la_page_revêtement_mural'
    },
    {
      productName: 'Revêtement mural',
      productImage: test3,
      productLink: 'lien_vers_la_page_revêtement_mural'
    },
    {
      productName: 'Revêtement mural',
      productImage: test3,
      productLink: 'lien_vers_la_page_revêtement_mural'
    },
 
  ];
 

  return (
    <div className="nos-produits">
      <h1 className='title'>Nos Produits</h1>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li>
            <ProductCard 
              key={index} 
              productName={category.productName}
              productImage={category.productImage}
              productLink={category.productLink}
            />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;