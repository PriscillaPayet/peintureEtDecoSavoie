import './Floors.scss'
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import { ProductData } from '../../@types/interface';
import ProductCard from '../ProductCard/ProductCard';
import CarouselLogos from '../CarouselLogos/CarouselLogos';
import CategoryList from '../CategoryList/CategoryList';

function Floors(){

  

  const floorCategories: ProductData[] = [
    {
      productName: 'Parquet',
      productImage: test2,
      productLink: 'lien_vers_la_page_parquet'
    },
    {
      productName: 'PVC',
      productImage: test3,
      productLink: 'lien_vers_la_page_pvc'
    },
    {
      productName: 'Moquette',
      productImage: test4,
      productLink: 'lien_vers_la_page_moquette'
    },
    {
      productName: 'Gazon',
      productImage: test2,
      productLink: 'lien_vers_la_page_gazon'
    },
 
  ];
return (
  <div className="nos-produits">
      <h1 className='title'>Nos Revêtements de sol</h1>
      <CategoryList categories={floorCategories} />
      <CarouselLogos/>
       </div>
  );

}

export default Floors;

