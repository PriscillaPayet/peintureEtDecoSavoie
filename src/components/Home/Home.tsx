import './Home.scss';
import Slider from '../../components/Slider/Slider';
import AutomaticSlider from '../AutomaticSlider/AutomaticSlider';
import QualitiesIcons from '../QualitiesIcons/QualitiesIcons';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import cotton from '../../assets/pexels-cottonbro-9222200.jpg';
import experience from '../../assets/experience_icon.png';
import truck from '../../assets/truck_icon.png';
import quality from '../../assets/quality_icon.png';
import advise from '../../assets/advise_icon.png';




function Home() {
  const images = [test4,test3];
  const images2 = [test2, cotton]

  const qualitiesData = [
    {
      icon: experience,
      name: 'grande expérience professionnelle',
      description: '10 ans d\'experience ',
    },
    {
      icon: truck,
      name: 'livraison sur chantier',
      description: 'Livraison sur chantier',
    },
    {
      icon: quality,
      name: 'produit de qualité',
      description: 'Produits de grande qualité',
    },
    {
      icon: advise,
      name: 'conseil professionnel',
      description: 'Conseils avisés',
    },

  ];


  return(
    <div className='home-container'>

      <section className='home-illustration'>

        <blockquote className='accroche'>
          Bienvenue dans l'univers de Peinture et Déco Savoie, la solution déco particulier et professionnel. 
        </blockquote> 
        
        <div className='illustration-slider'>
          <Slider images={images} />
        </div>

      </section>

      

      <section className='home-introduction'>

          <div className='introduction-text'>
            <h1 >Qui sommes-nous?</h1>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, nobis debitis! Nam odio et quae neque beatae repudiandae itaque eligendi temporibus voluptatibus sapiente nesciunt molestias culpa maiores, facere illum qui dicta non vitae dignissimos. Esse ipsa atque tempora et adipisci excepturi, in, voluptatibus, commodi similique corrupti qui? Nulla ratione sit nobis molestiae eum, tempora iste neque harum? Animi architecto facere qui omnis aspernatur eaque nostrum consequuntur! Perspiciatis illo atque porro quisquam, tempora aliquam praesentium quidem expedita alias.</p>
          </div>

          <div className='automaticSlider-container'>
            <AutomaticSlider images={images2} />
          </div>

      </section>

      <section>
        
        <div className='qualities-container'>
          <QualitiesIcons qualities={qualitiesData} />
        </div>

      </section>

    
    </div>
    

  )

}
export default Home;
