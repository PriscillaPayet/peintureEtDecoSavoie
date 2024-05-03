import  './About.scss';
import React, { useState } from 'react';
import team from '../../assets/team.jpg'


function About() {
  
 

  return (
    <div className="about-container">
      <h1 className='title'> Notre chemin en couleur</h1>
      <div className='about-main'>
        <div className='about-subtitle'>
          <h2 className='whiteSubtitle'>L'équipe derrière chaque nuance</h2>
          <img src={team} alt="photo de l'équipe" />
        </div>
        <div className='about-paragraph'>
          <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta amet, expedita perspiciatis minus, placeat maxime molestiae debitis animi, facilis quas? Tenetur laboriosam adipisci qui eveniet, corporis quaerat enim hic a doloremque, laudantium itaque voluptates esse quas! Id aliquam vel cumque commodi similique, officiis ratione accusamus iure necessitatibus vitae asperiores totam, provident voluptas quo! Distinctio nesciunt voluptatem odio ea cupiditate nihil animi libero expedita repudiandae. Id, maiores velit cumque omnis repudiandae iusto voluptatem? Sed accusantium blanditiis temporibus, soluta dicta sunt inventore maxime, quod iste reprehenderit dolor consectetur quae a facilis impedit ad minima .</p>
        </div>
      </div>
    </div>
  );

 };
export default About;