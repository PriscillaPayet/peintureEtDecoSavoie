import './Footer.scss';
import { Link} from 'react-router-dom';
import phone_icon from '../../assets/phone_icon.png';
import email_icon from '../../assets/email_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';




function Footer(){
   return(
    <div className='footer-container'>
      
      <h1 className='pinkTitle'>Venez nous rendre visite</h1>
      <div className='address'>
        <address >
          Peinture et Déco Savoie,
          176 Rue des Blâches,
          73250 Saint-Pierre d'Albigny
        </address>
      </div>
      

      <div className='horaire-container'>
        <h2 className='subtitle'>Horaires d'ouverture</h2>
        <p>Nous vous accueillons du lundi au vendredi de 7h30 à 12h00, puis de 14h00 à 18h30, et le samedi, de 8h30 à 12h00, hors jours fériés. </p>
      </div>

      <div className='contact-container'>
        <div className='phone'>
          <img className="icon" src={phone_icon} alt="icone téléphone" />
          <Link to="tel:+330975728473" className='phoneLink'>09 75 72 84 73</Link>
        </div>

        <div className='email'>
          <img className="icon" src={email_icon} alt="icone email" />
          <Link to="mailto:peintureetdecosavoie@outlook.fr" className='emailLink'>peintureetdecosavoie@outlook.fr</Link>

        </div>

        <div className='rs'>
          <Link to='/'> 
            <img className="icon"src={instagram_icon} alt="icone instagram" />
          </Link>
          <Link to='/'>
            <img className="icon"src={facebook_icon} alt="icone facebook" /> 
          </Link>

          <Link to='/'> 
            <img className="icon"src={linkedin_icon} alt="icone linkedin" />
          </Link>
        </div>
      </div>

 
    <div className='footer-bottom'>
      <ul className='footer-bottom-list'>
        <li>
          <Link to='/'> Mentions Légales</Link>
        </li>
        <li>
          <p>-</p>
        </li>
        <li>
          <p>Site réalisé par Priscilla Payet</p>
        </li>
      </ul>
    </div>
  </div>
    

   )
}

export default Footer;