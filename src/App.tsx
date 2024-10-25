/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import './App.scss';
//
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { RiArrowDownSLine } from '@remixicon/react';
import RollingElement from './Components/RollingElement';
import RotateBanner from './Components/RotateBanner';
// import Contact from './Components/Contact';
// import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import FooterParagraph from './Components/FooterParagraph';
import AnimationExample from './Components/AnimationExample';
import CurvedLinesCanvas from './Components/ CurvedLinesCanvas';
// import Footer from './Components/Footer';
// import FooterParagraph from './Components/FooterParagraph';

const App = () => {
  const [downArrow, setDownArrow] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMediaChange = () => {
      window.location.reload();
    };
    const mediaQueries = [
      window.matchMedia('(max-width: 480px)'),
      window.matchMedia('(max-width: 768px)'),
      window.matchMedia('(max-width: 1200px)'),
    ];

    mediaQueries.forEach((item) => {
      item.onchange = handleMediaChange;
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 0 && scrollPosition <= 50) {
        setDownArrow(true);
      } else {
        setDownArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app anix">
      <div className="div1">
        <div className="divRolling">
          <RollingElement
            firstPart="J"
            secondPart="IAN"
            rollingSpeed="fast"
            upDownAnimation="down"
            rollingDirection="vertical"
          />
          <div className="ds">
            <RotateBanner />
          </div>
          <RollingElement
            firstPart="H"
            secondPart="E"
            rollingSpeed="slow"
            upDownAnimation="up"
            rollingDirection="horizontal"
          />
        </div>

        <div className={`downArrow ${!downArrow ? 'downArrow--Hidden' : ''}`}>
          <RiArrowDownSLine
            className="downArrow__Icon "
            onClick={() => {
              if (contentRef.current) {
                contentRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </div>
      </div>
      <div className="div3" ref={contentRef}>
        <div className="dAbout">
          <About />
        </div>
        <div className="dParagraph">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="dPortfolio">
        <Portfolio />
      </div>
      <div className="div4 dFooter">
        <Footer />
        <FooterParagraph />
      </div>
      <CurvedLinesCanvas />
    </div>
  );
};

/* <div className="dPortfolio">
          <Portfolio />
        </div>
        <div className="dContact">
          <Contact />
        </div>
      </div>
      <div className="div4 dFooter">
        <Footer />
        <FooterParagraph /> */

export default App;
