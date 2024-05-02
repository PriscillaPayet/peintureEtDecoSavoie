import './QualitiesIcons.scss';
import { IconData } from '../../@types/interface';

interface Props {
  qualities: IconData[];
}

function QualitiesIcons({ qualities }: Props) {


  return(
    <div className='qualities-container'>
      {qualities.map((quality, index) => (
        <div key={index} className="quality">
          <img src={quality.icon} alt={quality.name} />
          <p>{quality.description}</p>
        </div>
      ))}
      
    </div>
    

  )

}
export default QualitiesIcons;
