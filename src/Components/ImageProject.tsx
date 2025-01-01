import './ImageProject.scss';

interface ImageProjectProps {
  direction: 'left' | 'right';
  borderDirection:
    | 'ImageProject__link--BorderOnRight'
    | 'ImageProject__link--BorderOnLeft'
    | 'ImageProject__link--BorderOnTop';
  projectName: string;
  projectDescription: string;
  srcString: string;
  link: string;
}
const ImageProject = ({
  borderDirection,
  direction,
  projectName,
  projectDescription,
  srcString,
  link,
}: ImageProjectProps) => {
  if (direction === 'right') {
    return (
      <div className="ImageProject">
        <a
          href={link}
          target="_blank"
          className={`ImageProject__link ImageProject__link--Right ${borderDirection}`}
          rel="noreferrer"
        >
          <div>
            <div>
              <img className="ImageProject__image" src={srcString} alt="screenshot" />
            </div>
          </div>
        </a>
        <div className="ImageProject__paragraph ImageProject__paragraph--Right">
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
          <a href={link} target="_blank" rel="noreferrer">
            <div>&nbsp;&nbsp;LIVE APP&nbsp;&nbsp;</div>
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <div>&nbsp;&nbsp;LEARN MORE&nbsp;&nbsp;</div>
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="ImageProject ImageProject--Left">
      <a
        href={link}
        target="_blank"
        className={`ImageProject__link ImageProject__link--Left ${borderDirection}`}
        rel="noreferrer"
      >
        <div>
          <div>
            <img className="ImageProject__image" src={srcString} alt="screenshot" />
          </div>
        </div>
      </a>
      <div className="ImageProject__paragraph ImageProject__paragraph--Left">
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <div>&nbsp;&nbsp;LIVE APP&nbsp;&nbsp;</div>
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <div>&nbsp;&nbsp;LEARN MORE&nbsp;&nbsp;</div>
        </a>
      </div>
    </div>
  );
};

export default ImageProject;
