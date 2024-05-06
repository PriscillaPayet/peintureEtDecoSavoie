import  './ProductCard.scss';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { ProductData } from '../../@types/interface';



function ProductCard({ productName, productImage, productLink} : ProductData) {
  
    return (
      <div className="category-container">
        <Link className='card' to={productLink}>
          <img src={productImage} alt={`Illustration de ${productName}`} />
          <h3>{productName}</h3>
        </Link>
      </div>
    );
  }


export default ProductCard;