/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import './App.scss';
//
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { RiArrowDownSLine } from '@remixicon/react';
// Removed react-router-dom import due to dependency issue
import { BrowserRouter as Router } from 'react-router-dom';
import RollingElement from './Components/RollingElement';
import RotateBanner from './Components/RotateBanner';
// import Contact from './Components/Contact';
// import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import FooterParagraph from './Components/FooterParagraph';
// import AnimationExample from './Components/AnimationExample';
// import Footer from './Components/Footer';
// import FooterParagraph from './Components/FooterParagraph';
import Navbar from './Components/Navbar';
import RouterTest from './Components/RouterTest';
import ContactForm from './Components/ContactForm';

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
    <Router>
      <div className="app anix">
        <div className="div1" id="CoverPage">
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

        <div className="Navbar">
          <Navbar />
        </div>
        <div className="div3" ref={contentRef} id="About">
          {/* <Navbar /> */}
          <div className="dAbout">
            <About />
          </div>
        </div>
        <div className="dPortfolio" id="Project">
          {/* <div className="Navbar">
            <Navbar />
          </div> */}
          <Portfolio />
        </div>
        <div className="div4 dFooter" id="Contact">
          <ContactForm />
          <Footer />
          <FooterParagraph />
        </div>
      </div>
    </Router>
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
