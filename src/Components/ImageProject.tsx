import coffee2 from '../Assets/coffee-min.png';
import './ImageProject.scss';

interface ImageProjectProps {
  direction: 'left' | 'right';
  borderDirection:
    | 'ImageProject__link--BorderOnRight'
    | 'ImageProject__link--BorderOnLeft'
    | 'ImageProject__link--BorderOnTop';
  projectName: string;
  projectDescription: string;
}
const ImageProject = ({ borderDirection, direction, projectName, projectDescription }: ImageProjectProps) => {
  if (direction === 'right') {
    return (
      <div className="ImageProject">
        <a href="#email" className={`ImageProject__link ImageProject__link--Right ${borderDirection}`}>
          <div>
            <div>
              <img className="ImageProject__image" src={coffee2} alt="screenshot" />
            </div>
          </div>
        </a>
        <div className="ImageProject__paragraph ImageProject__paragraph--Right">
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
          <a href="#email">
            <div>&nbsp;&nbsp;LIVE APP&nbsp;&nbsp;</div>
          </a>
          <a href="#email">
            <div>&nbsp;&nbsp;LEARN MORE&nbsp;&nbsp;</div>
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="ImageProject ImageProject--Left">
      <a href="#email" className={`ImageProject__link ImageProject__link--Left ${borderDirection}`}>
        <div>
          <div>
            <img className="ImageProject__image" src={coffee2} alt="screenshot" />
          </div>
        </div>
      </a>
      <div className="ImageProject__paragraph ImageProject__paragraph--Left">
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <a href="#email">
          <div>&nbsp;&nbsp;LIVE APP&nbsp;&nbsp;</div>
        </a>
        <a href="#email">
          <div>&nbsp;&nbsp;LEARN MORE&nbsp;&nbsp;</div>
        </a>
      </div>
    </div>
  );
};

export default ImageProject;
