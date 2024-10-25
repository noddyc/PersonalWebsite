import coffee2 from '../Assets/coffee.jpeg';
import './ImageProject.scss';

interface ImageProjectProps {
  direction: 'left' | 'right';
  borderDirection:
    | 'ImageProject__link--BorderOnRight'
    | 'ImageProject__link--BorderOnLeft'
    | 'ImageProject__link--BorderOnTop';
}
const ImageProject = ({ borderDirection, direction }: ImageProjectProps) => {
  if (direction === 'right') {
    return (
      <div className="ImageProject">
        <a href="#email" className={`ImageProject__link ImageProject__link--Right ${borderDirection}`}>
          <div>
            <div>
              <img src={coffee2} alt="screenshot" />
            </div>
          </div>
        </a>
        <div className="ImageProject__paragraph ImageProject__paragraph--Right">
          <h3>Coffee</h3>
          <p>
            Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3.
          </p>
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
            <img src={coffee2} alt="screenshot" />
          </div>
        </div>
      </a>
      <div className="ImageProject__paragraph ImageProject__paragraph--Left">
        <h3>Coffee</h3>
        <p>Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3.</p>
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
