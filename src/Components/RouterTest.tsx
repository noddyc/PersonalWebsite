import { HashLink } from 'react-router-hash-link';

const RouterTest = () => (
  <div>
    <HashLink smooth to="#CoverPage">
      FrontPage
    </HashLink>
    <HashLink smooth to="#About">
      About
    </HashLink>
    <HashLink smooth to="#Project">
      Projects
    </HashLink>
    <HashLink smooth to="#Contact">
      section1
    </HashLink>
  </div>
);

export default RouterTest;
