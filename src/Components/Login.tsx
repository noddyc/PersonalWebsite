import { Ri24HoursFill } from '@remixicon/react';
import './Login.css';
import { ReactNode } from 'react';
import Button from './Button/Button';
import { SampleProps, Sample } from './Sample';
import withTimer from './Utility/withTimer';

interface WithHOCProps {
  newTimer: ReactNode;
}

const SampleWithTimer = withTimer<WithHOCProps, SampleProps>(Sample)({ newTimer: <span>121213</span> });

const Login = () => (
  <div className="sb">
    <div>
      <h2>Log in to your account</h2>
      <form>
        <div>
          <label htmlFor="email-input">
            Email
            <input type="email" id="email-input" />
          </label>
        </div>
        <div>
          <label htmlFor="password-input">
            Password <input type="password" id="password-input" />
          </label>
        </div>
      </form>
      <Button IconLeft={Ri24HoursFill} value="Submit" />
      <SampleWithTimer count={0} startTimer={0} endTimer={0} />
    </div>
  </div>
);

export default Login;
