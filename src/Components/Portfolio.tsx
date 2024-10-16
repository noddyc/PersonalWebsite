/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import './Portfolio.scss';
// import _ from 'lodash';
import Display from './Display';

const mod = 1000000000 + 9;
const Portfolio = () => {
  const [clicked, setClicked] = useState(0);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (anchorRef.current && clicked) {
      // const elementPosition = window.scrollY + pref.current.getBoundingClientRect().top + 15000;
      const maxScroll = anchorRef.current.getBoundingClientRect().top + window.scrollY; // Scroll to the bottom of the current viewport
      window.scrollTo({
        top: maxScroll, // Scroll to the bottom of the current window
        behavior: 'smooth',
      });
    }
  }, [clicked]);

  return (
    <>
      <div className="Portfolio">
        <a
          ref={anchorRef}
          href="#portfolio"
          className="Portfolio__link"
          onClick={() => {
            setClicked((prev) => (prev + 1) % mod);
          }}
        >
          <h2>PR</h2>
          {clicked % 2 === 0 ? (
            <div className="Portfolio__div__list Portfolio__div" />
          ) : (
            <div className="Portfolio__div__list">
              <div className="Portfolio__div Portfolio__div--Size" />
            </div>
          )}
          <h2>JECTS</h2>
        </a>
      </div>
      {clicked !== 0 && clicked % 2 === 0 && (
        <div className="Portfolio__children--Shrink">
          <Display />
        </div>
      )}

      {clicked !== 0 && clicked % 2 !== 0 && (
        <div className="Portfolio__children--Expand">
          <Display />
        </div>
      )}
    </>
  );
};

export default Portfolio;
