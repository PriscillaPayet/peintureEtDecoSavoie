import './Wall.scss'
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import { ProductData } from '../../@types/interface';
import ProductCard from '../ProductCard/ProductCard';
import CarouselLogos from '../CarouselLogos/CarouselLogos';
import CategoryList from '../CategoryList/CategoryList';

function Floors(){

  

  const wallCategories: ProductData[] = [
    {
      productName: 'Papier Peint',
      productImage: test2,
      productLink: 'lien_vers_la_page_papier_peint'
    },
    {
      productName: 'Enduits',
      productImage: test3,
      productLink: 'lien_vers_la_page_enduits'
    },
    {
      productName: 'Toile de verre',
      productImage: test4,
      productLink: 'lien_vers_la_page_toiles_de_verre'
    },
 
  ];
return (
  <div className="nos-produits">
      <h1 className='title'>Nos Revêtements Muraux</h1>
      <CategoryList categories={wallCategories} />
      <CarouselLogos/>
       </div>
  );

}

export default Floors;

