import React, { useState, useEffect } from 'react';
import { SliderProps } from '../../@types/interface';
import './AutomaticSlider.scss';

function AutomaticSlider({ images } :SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <img className='slider-image' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
    
  );
}

export default AutomaticSlider;