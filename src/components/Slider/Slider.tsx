import React, { useState } from 'react';
import { SliderProps } from '../../@types/interface';

function Slider({ images } :SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

export default Slider;