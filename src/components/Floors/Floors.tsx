import './Floors.scss'
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import { LogoData, ProductData } from '../../@types/interface';
import ProductCard from '../ProductCard/ProductCard';
import CarouselLogos from '../CarouselLogos/CarouselLogos';
import CategoryList from '../CategoryList/CategoryList';
import FullViewSlider from '../FullViewSlider/FullViewSlider';
import forbo from '../../assets/logos-fournisseurs/sol/forbo.svg';
import gerflor from '../../assets/logos-fournisseurs/sol/gerflor.jpg';
import lamett from '../../assets/logos-fournisseurs/sol/lamett-dark.svg';
import interfac from '../../assets/logos-fournisseurs/sol/Interface.png';
import nature from '../../assets/logos-fournisseurs/sol/Nature Parque.webp';
import tarkett from '../../assets/logos-fournisseurs/sol/tarkett.svg';
import udirev from '../../assets/logos-fournisseurs/sol/udirevcom.jpg';


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

  const logos: LogoData[] = [
    { url: forbo, link: 'https://www.forbo.com/flooring/fr-fr/', alt: 'lien vers Forbo' },
    { url: gerflor, link: 'https://www.gerflor.fr/', alt: 'lien vers Gerflor' },
    { url: interfac, link: 'https://www.interface.com/EU/fr-FR', alt: 'lien vers Interface' },
    { url: nature, link: 'https://www.natureparquet.fr/', alt: 'lien vers Nature Parquet' },
    { url: lamett, link: 'https://lamett.fr/fr?lsp=fr_FR', alt: 'lien vers Lamett' },
    { url: tarkett, link: ' https://www.tarkett.fr/', alt: 'lien vers Tarkett' },
    { url: udirev, link: 'https://www.udirev.com/', alt: 'lien vers Udirev' },
  ];
return (
  <div className="nos-produits">
      <h1 className='title'>Nos Revêtements de sol</h1>
      <CategoryList categories={floorCategories} />
      <FullViewSlider images={logos} />
    
  </div>
  );

}

export default Floors;

