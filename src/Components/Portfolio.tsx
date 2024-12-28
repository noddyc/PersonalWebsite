/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react';
import './Portfolio.scss';
// import ImageProject from './ImageProject';
import Display from './Display';
import ImageProject from './ImageProject';

const mod = 1000000000 + 9;
const Portfolio = () => {
  // const [dd, setDD] = useState('');
  const [clicked, setClicked] = useState(0);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  // useEffect(() => {
  //   if (anchorRef.current && clicked) {
  //     // const elementPosition = window.scrollY + pref.current.getBoundingClientRect().top + 15000;
  //     const maxScroll = anchorRef.current.getBoundingClientRect().top + window.scrollY; // Scroll to the bottom of the current viewport
  //     window.scrollTo({
  //       top: maxScroll, // Scroll to the bottom of the current window
  //       behavior: 'smooth',
  //     });
  //   }
  //   // setTimeout(() => {
  //   //   if (dd === 'none') {
  //   //     setDD('flex');
  //   //   } else {
  //   //     setDD('none');
  //   //   }
  //   // }, 600);
  // }, [clicked]);

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

      <Display clicked={clicked} />
      <div
        className={`Portfolio__imageProjects ${window.innerWidth > 600 ? '' : 'Portfolio__imageProjects--noDisplay'} `}
      >
        <ImageProject
          projectName="lifeinvader
Social Media App"
          projectDescription="Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3."
          direction="left"
          borderDirection="ImageProject__link--BorderOnLeft"
        />
        <ImageProject
          projectName="Chakra Chat Messaging App"
          projectDescription="Instant messaging application built with Next.JS, Firebase and Chakra UI."
          direction="right"
          borderDirection="ImageProject__link--BorderOnRight"
        />
        <ImageProject
          projectName="Retro-Sketch
Pixel Sketch App"
          projectDescription="Create pixel art with a variety of drawing tools."
          direction="left"
          borderDirection="ImageProject__link--BorderOnTop"
        />
      </div>
      {/* {clicked === 0 && (
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
      )} */}
    </div>
  );
};

export default Portfolio;
