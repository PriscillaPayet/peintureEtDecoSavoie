import './Header.scss';
import logotest from '../../assets/logotest.jpg'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
 
    <header>

    <button className="header-burger" >
      <span className="barres" id="barreUn"></span>
      <span className="barres barre-millieu" id="barreDeux"></span>
      <span className="barres" id="barreTrois"></span>
    </button>

      <NavLink className="header-logo" to="/">
        
        <span className="sr-only">Accueil</span>
        <img src={logotest} alt="logo Pinture et Déco" />
    
      </NavLink>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      </p>
    
    
    </header>
    
  );
}


export default Header;