import './Header.scss';
import logoSansFond from '../../assets/logoSansFond.png'
import {useState, useEffect} from "react";
import { Link, NavLink } from 'react-router-dom';

function Header() {
  //state pour gérer ouvertur et fermetur du menu
  const [openMenu, setOpenMenu] = useState(false);

  //gérer la modification des classe pour transformer les barres en croix
  const topBarClassName = openMenu ? "bars cross-one" : "bars" ;
  const centerBarClassName = openMenu ? "bars middle-bar cross-two" : "bars middle-bar"
  const bottomBarClassName= openMenu ? "bars cross-three" : "bars";
  
  const handleClick = () => {
    setOpenMenu(!openMenu); 
  };

  //state pour la définition de la taille de l'écran
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  
  useEffect(()=> {
    //fonction appelée chaque fois que la taille de l'écran change
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    //Ajoute un écouteur d'évenement 
    window.addEventListener('resize', handleResize);

     // Nettoyage de l'écouteur d'événements lorsque le composant est démonté
     return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Le tableau vide en tant que deuxième argument assure que cet effet ne se déclenche qu'une seule fois après le montage initial

  return (
 
    <header>

    <button className="header-burger" onClick={handleClick} >
      <span className={topBarClassName} id="topBar"></span>
      <span className={centerBarClassName} id="centerBar"></span>
      <span className={bottomBarClassName} id="bottomBar"></span>
    </button>

    {openMenu && windowWidth < 900 && ( 
    <nav className='header-nav'>
      <ul>
        <li><NavLink to="#"> Nos produits </NavLink></li>
        <li><NavLink to="#"> A propos </NavLink></li>
        <li><NavLink to="#"> Contact </NavLink></li>
        <li><NavLink to="#"> Avis clients </NavLink></li>
      </ul>
    </nav>
    )}

      <NavLink className="header-logo" to="/">
        
        <span className="sr-only">Accueil</span>
        <img src={logoSansFond} alt="logo Pinture et Déco" />
    
      </NavLink>
      
      
      <p>
      Bienvenue dans l'univers de Peinture et Déco Savoie, où la créativité rencontre la qualité. 
      </p>
    
    
    </header>
    
  );
}


export default Header;