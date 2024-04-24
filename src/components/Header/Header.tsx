import './Header.scss';
import logoSansFond from '../../assets/logoSansFond.png'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
 
    <header>

    <button className="header-burger" >
      <span className="barres" id="barreUn"></span>
      <span className="barres barre-millieu" id="barreDeux"></span>
      <span className="barres" id="barreTrois"></span>
    </button>

    <nav className='header-nav'>
        <NavLink to="#"> Nos produits
        </NavLink>
        <NavLink to="#"> A propos
        </NavLink>
        <NavLink to="#"> Contact
        </NavLink>
        <NavLink to="#"> Avis clients
        </NavLink>

      </nav>

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