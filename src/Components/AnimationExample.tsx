/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './AnimationExample.scss';

const AnimationExample = () => {
  // const [] = useTransition();
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsVisible((prev) => !prev);
    }
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        style={{
          zIndex: 100,
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          padding: '15px 30px',
          cursor: 'pointer',
        }}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {(isVisible || isAnimating) && (
        <div className={`box ${isVisible ? 'fade-in' : 'fade-out'}`} onAnimationEnd={handleAnimationEnd}>
          {/* Your animated content */}
        </div>
      )}
    </div>
  );
};

export default AnimationExample;
