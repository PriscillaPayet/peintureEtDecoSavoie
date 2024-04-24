import './Footer.scss';
import {useState, useEffect} from "react";
import { Link, NavLink } from 'react-router-dom';
import phone_icon from '../../assets/phone_icon.png';
import email_icon from '../../assets/email_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';



function Footer(){
   return(
    <>
    <h1 className="accentedTitle">Venez nous rendre visite</h1>
    <address>
      Peinture et Déco Savoie,
      176 Rue des Blâches,
      73250 Saint-Pierre d'Albigny
    </address>
    <>
      <h2 className='accentedSubtitle'>Horaires d'ouverture</h2>
      <p>Nous vous accueillons du lundi au vendredi de 7h30 à 12h00, puis de 14h00 à 18h30, et le samedi, de 8h30 à 12h00. </p>
    </>
    
    <>
      <img className="icon" src={phone_icon} alt="icone téléphone" />
      <Link to="tel:+330975728473">09 75 72 84 73</Link>
    </>

    <>
      <img className="icon" src={email_icon} alt="icone email" />
      <Link to="mailto:peintureetdecosavoie@outlook.fr">peintureetdecosavoie@outlook.fr</Link>

    </>

    <>
    <Link to='/'> 
      <img className="icon"src={instagram_icon} alt="icone instagram" />
    </Link>
    <Link to='/'>
      <img className="icon"src={facebook_icon} alt="icone facebook" /> 
    </Link>

    <Link to='/'> 
      <img className="icon"src={linkedin_icon} alt="icone linkedin" />
    </Link>

    </>
    <>
      <Link to='/'> 
      Mentions Légales
      </Link>
      <p>Site réalisé par Priscilla Payet</p>

    </> 
    </>

   )
}

export default Footer;