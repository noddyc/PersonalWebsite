import { useState, useTransition } from 'react';
import './AnimationExample.scss';

const AnimationExample = () => {
  const [isPending, startTransition] = useTransition();
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    // Toggle the visibility state
    setIsVisible((prev) => !prev);

    // Use `startTransition` to defer the next state change
    startTransition(() => {
      // This state change will be delayed until React has finished rendering any urgent updates
      // Optionally, you can wait until the animation is done before updating state
      setTimeout(() => {
        // Perform additional state updates after animation finishes if necessary
      }, 1000); // Match this to the CSS animation duration
    });
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
        className={`box ${isVisible ? 'fade-in' : 'fade-out'}`}
        onAnimationEnd={() => {
          // Animation completed, handle any clean-up here if necessary
        }}
      >
        {/* Your animated content */}
      </div>

      {/* Optional loading indicator while state is transitioning */}
      {isPending && <div>Transitioning...</div>}
    </div>
  );
};

export default AnimationExample;
