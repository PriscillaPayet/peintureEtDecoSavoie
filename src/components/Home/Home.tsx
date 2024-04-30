import './Home.scss';
import Slider from '../../components/Slider/Slider';
import test from '../../assets/test.png';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import anouk from '../../assets/pexels-anoukdoe-1566994.jpg'




function Home() {
  const images = [test, test2,test3];

 

  return(
    <div className='home-container'>

      <section className='home-illustration'>

        <blockquote className='accroche'>
          Bienvenue dans l'univers de Peinture et Déco Savoie, la solution déco particulier et professionnel. 
        </blockquote> 

        <Slider images={images} />

      </section>

      <section className='home-introduction'>
        <h1 className='whiteTitle'>Qui sommes nous?</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, nobis debitis! Nam odio et quae neque beatae repudiandae itaque eligendi temporibus voluptatibus sapiente nesciunt molestias culpa maiores, facere illum qui dicta non vitae dignissimos. Esse ipsa atque tempora et adipisci excepturi, in, voluptatibus, commodi similique corrupti qui? Nulla ratione sit nobis molestiae eum, tempora iste neque harum? Animi architecto facere qui omnis aspernatur eaque nostrum consequuntur! Perspiciatis illo atque porro quisquam, tempora aliquam praesentium quidem expedita alias.</p>
        <img className="team"src={anouk} alt="photo de l'équipe" />
      </section>
    </div>
    

  )

}
export default Home;
