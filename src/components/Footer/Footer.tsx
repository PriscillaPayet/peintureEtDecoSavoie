import './Footer.scss';
import { Link} from 'react-router-dom';
import phone_icon from '../../assets/phone_icon.png';
import email_icon from '../../assets/email_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import location_icon from '../../assets/location_icon.png';




function Footer(){
   return(
    <div className='footer-container'>
      
      <h1 className='pinkTitle'>Venez nous rendre visite</h1>
      <div className='address'>
        <img src={location_icon} alt="icone localisation" />
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

        <ul>
          <li className='email'>
            <img className="icon" src={email_icon} alt="icone email" />
            <Link to="mailto:savoie@peintureetdeco.com" className='emailLink'>peintureetdecosavoie@outlook.fr</Link>
          </li>
          <li className='phone'>
            <img className="icon" src={phone_icon} alt="icone téléphone" />
            <Link to="tel:+330975728473" className='phoneLink'>09 75 72 84 73</Link></li>
        </ul>

        <div className='rs'>
          <ul>
            <li>
              <Link to='/'> 
                <img className="icon"src={instagram_icon} alt="icone instagram" />
              </Link>
            </li>
            <li>
              <Link to='/'>
              <img className="icon"src={facebook_icon} alt="icone facebook" /> 
              </Link>
            </li>

            <li>
              <Link to='/'> 
                <img className="icon"src={linkedin_icon} alt="icone linkedin" />
              </Link>
            </li>
          </ul>
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