import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FullViewSlider.scss';
import { LogoData } from '../../@types/interface'
// import { SliderProps } from '../../@types/interface';

function FullViewSlider({ images }: { images: LogoData[] }) {
  
  //state pour l'image affichée
  const [currentIndex, setCurrentIndex] = useState(0);



     //gérer le défilement: image centrale qui change toutes les 3 secondes
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex =>
          //si on arrive à al fin du tableau, on repart au début
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); 
  
      // Nettoyage de l'intervalle lorsque le composant est démonté
      return () => clearInterval(interval);
    }, [images.length]);

    // calcul des index précedent et suivant
    const prevIndex = (currentIndex === 0) ? images.length -1 : currentIndex -1;
    const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex +1;


    // Calcul des index pour les images supplémentaires à gauche et à droite
    const secondPrevIndex = (prevIndex === 0) ? images.length - 1 : prevIndex - 1;
    const fourthNextIndex = (nextIndex === images.length - 1) ? 0 : nextIndex + 1;

    return (
      <div className="slider-container">
        {/* Image précédente */}
        <Link to={images[secondPrevIndex].link} className="slider-image second-previous">
          <img src={images[secondPrevIndex].url} alt={images[secondPrevIndex].alt} />
        </Link>

        {/* Image précédente */}
        <Link to={images[prevIndex].link} className="slider-image previous">
          <img src={images[prevIndex].url} alt={images[prevIndex].alt} />
        </Link>

        {/* Image actuelle au centre */}
        <Link to={images[currentIndex].link} className="slider-image current">
          <img src={images[currentIndex].url} alt={images[currentIndex].alt} />
        </Link>

        {/* Image suivante */}
        <Link to={images[nextIndex].link} className="slider-image next">
          <img src={images[nextIndex].url} alt={images[nextIndex].alt} />
        </Link>

        {/* Image suivante */}
        <Link to={images[fourthNextIndex].link} className="slider-image fourth-next">
          <img src={images[fourthNextIndex].url} alt={images[fourthNextIndex].alt} />
        </Link>
    </div>
  );
}

 
  
 


export default FullViewSlider;