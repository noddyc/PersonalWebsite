/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { NavHashLink } from 'react-router-hash-link';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [currentHash, setCurrentHash] = useState(location.hash);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll here");
      const hashLinks = ['#CoverPage', '#About', '#Project', '#Contact'];
      const scrollPosition = window.scrollY;

      hashLinks.forEach((hash) => {
        const section = document.querySelector(hash);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollPosition >= (sectionTop-400) && scrollPosition < sectionBottom) {
            setCurrentHash(hash);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <NavHashLink smooth to="#CoverPage" style={{ color: currentHash === '#CoverPage' ? 'black' : '' }}>Home</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#About" style={{ color: currentHash === '#About' ? 'black' : '' }}>About</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#Project" style={{ color: currentHash === '#Project' ? 'black' : '' }}>Project</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#Contact" style={{ color: currentHash === '#Contact' ? 'black' : '' }}>Contact</NavHashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
