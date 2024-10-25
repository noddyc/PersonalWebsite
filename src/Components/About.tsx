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

  // useEffect(() => {
  //   if (anchorRef.current && clicked % 2 === 1) {
  //     // const elementPosition = window.scrollY + pref.current.getBoundingClientRect().top + 15000;
  //     const maxScroll = window.scrollY + anchorRef.current.getBoundingClientRect().bottom; // Scroll to the bottom of the current viewport
  //     setTimeout(() => {
  //       window.scrollTo({
  //         top: maxScroll, // Scroll to the bottom of the current window
  //         behavior: 'smooth',
  //       });
  //     }, 300);
  //   }
  // }, [clicked]);

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
            Hello, I&apos;m Jian He.
            <br />
            I am a passionate and innovative Computer Science graduate with a master&apos;s degree from Rochester
            Institute of Technology, seeking full-time opportunities in Software Development Engineering. I am a
            full-stack developer with a main focus on TypeScript, React, C#, ASP.NET, Java, Spring Boot, and all things
            web development. In my free time, I enjoy gaming, cooking, and baking.
            <br />
          </p>
        </Circle>
        <h2>UT</h2>
      </a>
      {/* <div ref={anchorRef}>yinfu</div> */}
    </div>
  );
};

export default About;
