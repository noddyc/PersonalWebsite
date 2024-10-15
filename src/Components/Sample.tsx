import { ReactNode } from 'react';
import './Sample.scss';

interface SampleProps {
  count: number;
  startTimer: number;
  endTimer: number;
  // eslint-disable-next-line
  newTimer?: ReactNode ;

}
const Sample = ({ count, startTimer, endTimer, newTimer = <span>1555</span> }: SampleProps) => (
  <div>
    <button type="button" className="__sample--base diss1 ">
      <span>
        {count}|{startTimer}|{endTimer}|{newTimer ?? newTimer}
      </span>
    </button>
    <span className="span_test">fei</span>
  </div>
);

export { Sample };
export type { SampleProps };
