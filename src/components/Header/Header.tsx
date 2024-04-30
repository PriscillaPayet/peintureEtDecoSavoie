import './Header.scss';
import logoSansFond from '../../assets/logoSansFond.png'
import {useState, useEffect} from "react";
import { Link, NavLink } from 'react-router-dom';

function Header() {
  // state pour gérer l'affichage de l'auraire d'ouverture en fonction du jour
  const [openingHours, setOpeningHours] = useState('');
  useEffect(() => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // Récupère le jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
    const currentMonth = currentDate.getMonth(); // Récupère le mois (0 pour janvier, 1 pour février, ..., 11 pour décembre)
    const currentYear = currentDate.getFullYear(); // Récupère l'année

     // Liste des jours fériés (mois est 0-indexé)
     const publicHolidays = [
      new Date(currentYear, 0, 1), // Jour de l'an
      new Date(currentYear, 4, 1), // Fête du travail
      new Date(currentYear, 4, 8), // Victoire 1945 
      new Date(currentYear, 6, 14), // Fête nationale
      new Date(currentYear, 10, 1), // Toussaint
      new Date(currentYear, 10, 11), // Armistice 1918
      new Date(currentYear, 11, 25) // Noël
      
    ];

    let hours;

    if (publicHolidays.some(holiday => holiday.getMonth() === currentMonth && holiday.getDate() === currentDate.getDate()) ) {
      // C'est un jour férié
      hours = "le magasin est fermé";
    } else if (currentDay >= 1 && currentDay <= 5) {
      // Du lundi au vendredi
      hours = "nous vous accueillons de 7h30 à 12h30 et de 14h00 à 18h30";
    } else if (currentDay === 6) {
      // Samedi
      hours = "nous vous accueillons de 8h30 à 12h00";
    } else {
      // Dimanche
      hours = "le magasin est fermé";
    }

    setOpeningHours(hours);
  }, []); // Le tableau vide en tant que deuxième argument assure que cet effet ne se déclenche qu'une seule fois après le montage initial


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

  //state pour détecter le défilement de l'écran
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) { // la position à laquelle le menu devient sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
 
    <header className={isSticky ? 'sticky' : ''}>
      <div className='header-container'>
      <NavLink className="header-logo" to="/">
        
        <span className="sr-only">Accueil</span>
        <img className="logo" src={logoSansFond} alt="logo Pinture et Déco" />
    
      </NavLink>

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

      <time>{`Aujourd'hui, ${openingHours}`}.</time>

      { windowWidth > 900 && ( 

        <nav className='header-bigScreenNav'>
          <ul>
            <li><NavLink to="#">Nos produits</NavLink></li>
            <li className='pink'>|</li>
            <li><NavLink to="#"> A propos</NavLink></li>
            <li className='pink'>|</li>
            <li><NavLink to="#"> Contact</NavLink></li>
            <li className='pink'>|</li>
            <li><NavLink to="#"> Avis clients</NavLink></li>
          </ul>
        </nav>

        )}
        

    </div>

        
    </header>
    
  );
}


export default Header;