import React from 'react';
import './Introductiontext.scss'
import { IntroductionTextProps } from '../../@types/interface';




function IntroductionText({ title, subtitle, paragraph }: IntroductionTextProps) {
  return (
    
      <div className="introduction-text">
        <h1>{title}</h1>
        <h2 className="whiteSubtitle">{subtitle}</h2>
        <p className="paragraph">{paragraph}</p>
      </div>
  
  );
}

export default IntroductionText;