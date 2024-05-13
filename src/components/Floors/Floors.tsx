import './Floors.scss'
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import { LogoData, ProductData } from '../../@types/interface';
import CategoryList from '../CategoryList/CategoryList';
import FullViewSlider from '../FullViewSlider/FullViewSlider';

import { logos } from '../../data/data';


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
      productName: 'Sol Stratifié',
      productImage: test2,
      productLink: 'lien_vers_la_page_gazon'
    },
    {
      productName: 'Sol extérieur',
      productImage: test2,
      productLink: 'lien_vers_la_page_gazon'
    },

 
  ];

  const floorLogos: LogoData[] = logos.filter(logo => logo.type === 'floor');


return (
  <div className="nos-produits">
      <h1 className='title'>Nos Revêtements de sol</h1>
      <CategoryList categories={floorCategories} />
      <FullViewSlider images={floorLogos} />
    
  </div>
  );

}

export default Floors;

