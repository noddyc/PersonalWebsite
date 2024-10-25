/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useTransition } from 'react';
import './AnimationExample.scss';

const AnimationExample = () => {
  const [, startTransition] = useTransition();
  const [isVisible, setIsVisible] = useState(true);
  const [dd, setDd] = useState(false);

  const handleToggle = () => {
    // Change `isVisible` to trigger the animation
    setIsVisible((prev) => !prev);
  };

  const handleAnimationEnd = () => {
    // Animation completed, change the `dd` state
    if (!isVisible) {
      startTransition(() => {
        setDd(true);
      });
    } else {
      setDd(false);
    }
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
      <div
        style={{
          display: dd ? 'none' : 'block',
        }}
        className={`box ${isVisible ? 'fade-in' : 'fade-out'}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {/* Your animated content */}
      </div>
    </div>
  );
};

export default AnimationExample;
