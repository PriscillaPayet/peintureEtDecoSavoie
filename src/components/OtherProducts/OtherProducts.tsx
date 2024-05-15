import  './OtherProduct.scss';
import React, { useState } from 'react';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';
import Slider from '../Slider/Slider';
import IntroductionText from '../IntroductionSection/IntroductionText';
import { LogoData } from '../../@types/interface';
import FullViewSlider from '../FullViewSlider/FullViewSlider';
import { logos } from '../../data/data';




function OtherProducts() {
  
  const images = [test2,test3,test4];
  const otherLogos: LogoData[] = logos.filter(logo => logo.type === 'other');

  return (
    <>
      <div className="paints-container">
        <div className='text-container'>
        <h1 className='title'>Nos autres produits</h1>
          <IntroductionText
            title=""
            subtitle=" blabla bla"
            paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, nobis debitis! Nam odio et quae neque beatae repudiandae itaque eligendi temporibus voluptatibus sapiente nesciunt molestias culpa maiores, facere illum qui dicta non vitae dignissimos. Esse ipsa atque tempora et adipisci excepturi, in, voluptatibus, commodi similique corrupti qui? Nulla ratione sit nobis molestiae eum, tempora iste neque harum? Animi architecto facere qui omnis aspernatur eaque nostrum consequuntur! Perspiciatis illo atque porro quisquam, tempora aliquam praesentium quidem expedita alias." />
        </div>

        <div className='illustration-slider'>
          <Slider images={images} />
        </div>

      </div>
      <FullViewSlider images={otherLogos} />
    </>
  );
};

export default OtherProducts;