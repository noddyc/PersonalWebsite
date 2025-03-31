/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
// import { PropsWithChildren, useEffect } from 'react';
import './Circle.scss';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

interface CircleProps extends PropsWithChildren {
  clicked: number;
}

const Circle = ({ clicked, children }: CircleProps) => {
  const fillerRef = useRef<HTMLDivElement | null>(null); // Ref for the filler
  const fillerRef2 = useRef<HTMLDivElement | null>(null);
  const fillerRef3 = useRef<HTMLDivElement | null>(null);
  const [lastY, setLastY] = useState<number | null>(null); // Track the last mouse Y position for comparison
  const [rotation, setRotation] = useState(0); // State to keep track of the current rotation
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRottation3] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check if the window width is >= 601
      // If it's the first mouse position, set the last position
      if (lastY === null) {
        // setLastY(e.clientY);
        return;
      }

      // Calculate the difference between current and previous mouse position
      const deltaY = e.clientY - lastY;

      // Update the rotation state based on mouse movement
      const newRotation = rotation + deltaY * (Math.random() * (0.99 - 0.01) + 0.01); // Adjust multiplier for sensitivity to make rotation speed slower
      const newRotation2 = rotation + deltaY * (Math.random() * (0.99 - 0.01) + 0.01);
      const newRotation3 = rotation + deltaY * (Math.random() * (0.99 - 0.01) + 0.01);

      setRotation(newRotation);
      setRotation2(newRotation2);
      setRottation3(newRotation3);

      if (fillerRef.current && fillerRef2.current && fillerRef3.current) {
        // Apply the rotation directly to the element
        fillerRef.current.style.transform = `rotate(-${newRotation}deg)`;
        fillerRef2.current.style.transform = `rotate(${newRotation2}deg)`;
        fillerRef3.current.style.transform = `rotate(${newRotation3}deg)`;
      }

      // Update the last Y position
      setLastY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastY, rotation, rotation2, rotation3]);

  return (
    <div className="Circle">
      {clicked === 0 ? (
        <div
          className="Circle__children Circle__children--NoAnimation"
          // style={windowWidth < 602 ? borderStyle : undefined}
        >
          <div ref={fillerRef} className="filler" />
          {/* <div ref={fillerRef2} className="filler2" />
          <div ref={fillerRef3} className="filler3" /> */}
          <div>{children}</div>
        </div>
      ) : clicked % 2 === 0 ? (
        <div
          className="Circle__children Circle__children--NoAnimation"
          // style={windowWidth < 601 ? borderStyle : undefined}
        >
          <div ref={fillerRef} className="filler" />
          {/* <div ref={fillerRef2} className="filler2" />
          <div ref={fillerRef3} className="filler3" /> */}
          <div>{children}</div>
        </div>
      ) : (
        <div
          className="Circle__children Circle__children--NoAnimation"
          // style={windowWidth < 602 ? borderStyle : undefined}
        >
          <div ref={fillerRef} className="filler" />
          {/* <div ref={fillerRef2} className="filler2" />
          <div ref={fillerRef3} className="filler3" /> */}
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Circle;
