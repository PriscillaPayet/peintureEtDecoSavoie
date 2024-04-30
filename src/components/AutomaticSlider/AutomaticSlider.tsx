import React, { useState, useEffect } from 'react';
import { SliderProps } from '../../@types/interface';

function AutomaticSlider({ images } :SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <img className='slider-image' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
}

export default AutomaticSlider;