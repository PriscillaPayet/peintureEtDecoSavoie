import { LogoData } from "../@types/interface";

import forbo from '../assets/logos-fournisseurs/sol/forbo.svg';
import gerflor from '../assets/logos-fournisseurs/sol/gerflor.jpg';
import lamett from '../assets/logos-fournisseurs/sol/lamett-dark.svg';
import interfac from '../assets/logos-fournisseurs/sol/Interface.png';
import nature from '../assets/logos-fournisseurs/sol/Nature Parque.webp';
import tarkett from '../assets/logos-fournisseurs/sol/tarkett.svg';
import udirev from '../assets/logos-fournisseurs/sol/udirevcom.jpg';
import icoPeint from '../assets/logos-fournisseurs/peinture/Icopeint.png';
import sob from '../assets/logos-fournisseurs/peinture/sob.jpg';


export const logos: LogoData[] = [
  { type:"floor",
    url: forbo, 
    link: 'https://www.forbo.com/flooring/fr-fr/', 
    alt: 'lien vers Forbo' 
  },
  { type:"floor",
    url: gerflor, 
    link: 'https://www.gerflor.fr/', 
    alt: 'lien vers Gerflor' 
  },
  { type:"floor", 
    url: interfac, 
    link: 'https://www.interface.com/EU/fr-FR', 
    alt: 'lien vers Interface' 
  },
  { type:"floor", 
    url: nature, 
    link: 'https://www.natureparquet.fr/', 
    alt: 'lien vers Nature Parquet' 
  },
  { type:"floor", 
    url: lamett, 
    link: 'https://lamett.fr/fr?lsp=fr_FR', 
    alt: 'lien vers Lamett' 
  },
  { type:"floor", 
    url: tarkett, 
    link: ' https://www.tarkett.fr/', 
    alt: 'lien vers Tarkett' 
  },
  { type:"floor", 
    url: udirev, 
    link: 'https://www.udirev.com/',
    alt: 'lien vers Udirev' 
  },
  { type:"paint", 
    url: icoPeint, 
    link: 'https://www.icopeint.fr/',
    alt: 'lien vers icoPeint' 
  },
  { type:"paint", 
    url: sob, 
    link: 'https://www.sob.fr/',
    alt: 'lien vers sob' 
  },
  
];