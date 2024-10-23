/* eslint-disable no-nested-ternary */
import './Contact.scss';
import { useEffect, useRef, useState } from 'react';

const mod = 1000000000 + 9;
const Contact = () => {
  const [clicked, setClicked] = useState(0);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    if (anchorRef.current && clicked) {
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
    <div className="Contact">
      <a
        ref={anchorRef}
        href="#contact"
        className="Contact__link"
        onClick={() => {
          setClicked((prev) => (prev + 1) % mod);
        }}
      >
        <h2>C</h2>
        {clicked === 0 ? (
          <div className="Contact__circle" />
        ) : clicked % 2 === 0 ? (
          <div className="Contact__circle Contact--Shrink" />
        ) : (
          <div className="Contact__circle Contact__capsule Contact--Expand">
            <span>HOW CAN I HELP ?</span>
          </div>
        )}
        <h2>NTACT</h2>
      </a>
      {clicked % 2 !== 0 && (
        <div className="Contact__info Contact__info--Display">
          <span>
            Contact me at <a href="#email">hej02184@gmail.com</a>, or contact me on{' '}
            <a href="https://www.linkedin.com/in/jian-he-a13539229//" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </span>
        </div>
      )}

      {clicked % 2 === 0 && (
        <div className="Contact__info Contact__info--NonDisplay">
          <span>
            Contact me at <a href="#email">hej02184@gmail.com</a>, or contact me on{' '}
            <a href="https://www.linkedin.com/in/jian-he-a13539229//" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </span>
        </div>
      )}
    </div>
  );
};

export default Contact;
