/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import { PropsWithChildren } from 'react';
import './Circle.scss';

// const mod = 1000000000 + 9;
interface CircleProps extends PropsWithChildren {
  clicked: number;
  // setClicked: (callback: (val: number) => number) => void;
}

const Circle = ({ clicked, children }: CircleProps) => (
  // eslint-disable-next-line
    <div
    className="Circle"
  >
    {clicked === 0 ? (
      <div className="Circle__children Circle__children--NoAnimation">{children}</div>
    ) : clicked % 2 === 1 ? (
      <div className="Circle__children Circle__children--ExpandAnimation">{children}</div>
    ) : (
      <div className="Circle__children Circle__children--ShrinkAnimation">{children}</div>
    )}
  </div>
);
export default Circle;
