/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import './Portfolio.scss';
// import ImageProject from './ImageProject';
import Display from './Display';

const mod = 1000000000 + 9;
const Portfolio = () => {
  // const [dd, setDD] = useState('');
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
    // setTimeout(() => {
    //   if (dd === 'none') {
    //     setDD('flex');
    //   } else {
    //     setDD('none');
    //   }
    // }, 600);
  }, [clicked]);

  return (
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
          <div className="Portfolio__div__list">
            <div className="Portfolio__div Portfolio__div--Size" />
          </div>
        ) : (
          <div className="Portfolio__div__list Portfolio__div" />
        )}
        <h2>JECTS</h2>
      </a>

      {/* <div className="Portfolio__imageProjects">
        <ImageProject direction="left" borderDirection="ImageProject__link--BorderOnLeft" />
        <ImageProject direction="right" borderDirection="ImageProject__link--BorderOnRight" />
        <ImageProject direction="left" borderDirection="ImageProject__link--BorderOnTop" />
      </div> */}
      {clicked === 0 && (
        <div>
          <Display />
        </div>
      )}
      {clicked !== 0 && clicked % 2 !== 0 && (
        <div className="Portfolio__children--Shrink">
          <Display />
        </div>
      )}

      {clicked !== 0 && clicked % 2 === 0 && (
        <div className="Portfolio__children--Expand">
          <Display />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
