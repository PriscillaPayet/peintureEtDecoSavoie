import './CategoryList.scss'
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductData } from '../../@types/interface';

interface CategoryListProps {
  categories: ProductData[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <ul className="category-list">
      {categories.map((category, index) => (
        <li key={index}>
          <ProductCard 
            productName={category.productName}
            productImage={category.productImage}
            productLink={category.productLink}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;