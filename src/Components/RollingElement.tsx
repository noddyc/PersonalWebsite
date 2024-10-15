/* eslint-disable react/require-default-props */
import { useCallback, useEffect, useRef } from 'react';
import './RollingElement.scss';

interface RollingElementProps {
  firstPart?: string | undefined;
  secondPart?: string | undefined;
  rollingSpeed: 'slow' | 'fast';
  upDownAnimation: 'up' | 'down';
  rollingDirection: 'horizontal' | 'vertical';
}

const RollingElement = ({
  firstPart = undefined,
  secondPart = undefined,
  rollingSpeed,
  upDownAnimation,
  rollingDirection,
}: RollingElementProps) => {
  const rollingElementref = useRef<HTMLDivElement | null>(null);
  const widthref = useRef<HTMLDivElement | null>(null);

  const handleMouseMoveHorizontal = useCallback((event: MouseEvent) => {
    const p = (event.clientX / window.innerWidth - 0.1) * 100;
    if (rollingElementref.current) {
      rollingElementref.current.style.left = `${Math.max(0, Math.min(80, p))}%`;
    }
  }, []);

  const handleMouseMoveVertical = useCallback((event: MouseEvent) => {
    const p = (event.clientY / window.innerHeight - 0.1) * 100;
    if (rollingElementref.current) {
      rollingElementref.current.style.left = `${Math.max(0, Math.min(80, p))}%`;
    }
  }, []);

  useEffect(() => {
    if (rollingDirection === 'horizontal') {
      window.addEventListener('mousemove', handleMouseMoveHorizontal);
    } else {
      window.addEventListener('mousemove', handleMouseMoveVertical);
    }

    return () => {
      if (rollingDirection === 'horizontal') {
        window.removeEventListener('mousemove', handleMouseMoveHorizontal);
      } else {
        window.removeEventListener('mousemove', handleMouseMoveVertical);
      }
    };
  }, [rollingDirection, handleMouseMoveHorizontal, handleMouseMoveVertical]);

  return (
    <h2 className="wrapper">
      <div className={upDownAnimation === 'down' ? 'tta' : 'tta2'}>{firstPart}</div>
      <div className={`rolling ${rollingSpeed === 'fast' ? 'rollinganix' : 'rollinganix2'}`} ref={widthref}>
        <div ref={rollingElementref} className="rolling-element">
          O
        </div>
      </div>
      <div className={upDownAnimation === 'down' ? 'tta' : 'tta2'}> {secondPart}</div>
    </h2>
  );
};

export default RollingElement;
