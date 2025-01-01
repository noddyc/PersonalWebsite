// import { RiCopyrightLine, RiGithubFill, RiLinkedinFill, RiArticleFill } from '@remixicon/react';

import { RiGithubFill, RiLinkedinFill, RiArticleFill } from '@remixicon/react';
import './Footer.scss';

const Footer = () => (
  <div className="Footer" id="Contact">
    <div className="Footer_div">
      <a href="https://github.com/noddyc" target="_blank" rel="noreferrer">
        <RiGithubFill className="Footer_icon" />
      </a>
      <a href="https://www.linkedin.com/in/jian-he-a13539229/" target="_blank" rel="noreferrer">
        <RiLinkedinFill className="Footer_icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/jh79/overlay/1726675778682/single-media-viewer/?profileId=ACoAADk1wW8Bp0Svgd6JgS9KD9uqpUiMc5tz2yY"
        target="_blank"
        rel="noreferrer"
      >
        <RiArticleFill className="Footer_icon" />
      </a>
    </div>
    {/* <p className="Footer_paragraph">
      <RiCopyrightLine className="Footer_paragraph_icon" />
      <span>Jian He 2024</span>
    </p> */}
  </div>
);

export default Footer;
