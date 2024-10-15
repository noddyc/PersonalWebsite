/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useRef, useState, useEffect } from 'react';
import './About.scss';
import Circle from './Circle';

const mod = 1000000000 + 9;
const About = () => {
  // const paraRef = useRef<HTMLDivElement | null>(null);
  const [clicked, setClicked] = useState(0);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (anchorRef.current && clicked % 2 === 1) {
      // const elementPosition = window.scrollY + pref.current.getBoundingClientRect().top + 15000;
      const maxScroll = window.scrollY + anchorRef.current.getBoundingClientRect().top; // Scroll to the bottom of the current viewport
      setTimeout(() => {
        window.scrollTo({
          top: maxScroll, // Scroll to the bottom of the current window
          behavior: 'smooth',
        });
      }, 300);
    }
  }, [clicked]);

  return (
    <div className="About">
      <a
        ref={anchorRef}
        href="#about"
        className="About__link"
        onClick={() => {
          setClicked((prev) => (prev + 1) % mod);
          console.log(clicked);
        }}
        // onClick={() => {
        //   if (paraRef.current) {
        //     const h = paraRef.current.clientHeight;
        //     // eslint-disable-next-line
        //     console.log(String(Number(h)));
        //     // eslint-disable-next-line
        //     console.log(String(Number(h) * 6));
        //     if (!clicked) {
        //       paraRef.current.style.height = `${String(Number(h) * 6)}px`;
        //       setClicked(true);
        //     } else {
        //       paraRef.current.style.height = `${String(Number(h) / 6)}px`;
        //       setClicked(false);
        //     }
        //   }
        // }}
      >
        <h2>AB</h2>
        <Circle clicked={clicked}>
          <p>
            Hello, Im Jian He.
            <br />I graduated from Rochester Institute of Technology with <br />
            <br />
            Let me help you tell your story.
          </p>
        </Circle>
        <h2>UT</h2>
      </a>
      {/* <div ref={anchorRef}>yinfu</div> */}
    </div>
  );
};

export default About;
