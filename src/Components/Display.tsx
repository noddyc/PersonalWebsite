/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
import { useState, useRef } from 'react';
import './Display.scss';
// import _ from 'lodash';
import _ from 'lodash';
import desk1 from '../Assets/desk1-min.png';
import desk2 from '../Assets/desk2-min.png';
import wallpaper from '../Assets/wallpaper-min.png';
import coffee1 from '../Assets/coffee1-min.png';
import coffee2 from '../Assets/coffee-min.png';

const projectList = [
  {
    id: 1,
    name: 'React Components Library',
    color: 'red',
    url: desk1,
    url_link: 'https://github.com/noddyc/React-UI-Components-Library',
    language: 'React',
  },
  {
    id: 2,
    name: 'Bidding Site',
    color: 'blue',
    url: wallpaper,
    url_link: 'https://github.com/noddyc/Raft',
    language: 'C#',
  },
  {
    id: 3,
    name: 'Modified UDP RIPV2 Algorithm',
    color: 'green',
    url: coffee1,
    url_link: 'https://github.com/noddyc/UDP-RIPV2',
    language: 'Java',
  },
  {
    id: 4,
    name: 'LightWeight Cloud Storage',
    color: 'orange',
    url: wallpaper,
    url_link: 'https://github.com/noddyc/CloudStorage',
    language: 'SpringBoot',
  },
  {
    id: 5,
    name: 'Design of Microservices',
    color: 'gray',
    url: desk2,
    url_link: 'https://github.com/noddyc/System-Design-of-Microservices',
    language: 'JS, Docker',
  },
  {
    id: 6,
    name: 'Raft Algorithm',
    color: 'gray',
    url: coffee2,
    url_link: 'https://github.com/noddyc/Raft',
    language: 'Go',
  },
];

interface LineBreakerProps {
  str: string;
  // language: string;
}

const LineBreaker = ({ str }: LineBreakerProps) => {
  const arr = str.split(' ');
  return (
    <>
      {arr.map((word) => (
        <>
          <span>{`${_.upperCase(word)}`}</span>
          <br />
        </>
      ))}
      {/* <span>({language})</span> */}
    </>
  );
};

interface DisplayProps {
  clicked: number;
  setEyeHoverState: (hoverState: number) => void;
}

const Display = ({ clicked, setEyeHoverState }: DisplayProps) => {
  const [list] = useState(projectList);
  const [hoverState, setHoverState] = useState(new Array(14).fill(false));
  const ListRef = useRef<HTMLUListElement | null>(null);
  const allRef = useRef<HTMLLIElement[]>([]);

  return (
    <div
      className={`Display ${clicked === 0 ? '' : clicked % 2 !== 0 ? 'Portfolio__children--Shrink' : 'Portfolio__children--Expand'}`}
    >
      <ul className="Display__ul" ref={ListRef}>
        {list.map((item, index) => (
          <a
            href={item.url_link}
            target="_blank"
            rel="noreferrer"
            onMouseOver={() => {
              setEyeHoverState(index);
            }}
            onFocus={() => {
              setEyeHoverState(index);
            }}
          >
            <li
              ref={(element) => {
                if (allRef.current) {
                  allRef.current[index] = element as HTMLLIElement;
                }
                return allRef.current[index];
              }}
              style={{ backgroundImage: `url(${item.url})` }}
              className="Display__ul__li"
              key={item.id}
              onMouseEnter={() => setHoverState((prev) => prev.map((i, ind) => (ind === index ? !i : i)))}
              onMouseLeave={() => setHoverState((prev) => prev.map((i, ind) => (ind === index ? !i : i)))}
            >
              {hoverState[index] ? (
                <p>
                  <LineBreaker str={item.name} />
                </p>
              ) : (
                <p>
                  <LineBreaker str={item.name} />
                </p>
              )}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
  // return (
  // <div className="Display">
  //   <ul className="Display__ul" ref={ListRef}>
  //     {list.map((item, index) => (
  //       <a href={item.url_link} target="_blank" rel="noreferrer">
  //         <li
  //           ref={(element) => {
  //             if (allRef.current) {
  //               allRef.current[index] = element as HTMLLIElement;
  //             }
  //             return allRef.current[index];
  //           }}
  //           style={{ backgroundImage: `url(${item.url})` }}
  //           className="Display__ul__li"
  //           key={item.id}
  //           onMouseEnter={() => setHoverState((prev) => prev.map((i, ind) => (ind === index ? !i : i)))}
  //           onMouseLeave={() => setHoverState((prev) => prev.map((i, ind) => (ind === index ? !i : i)))}
  //         >
  //           {hoverState[index] ? (
  //             <p>
  //               <LineBreaker str={item.name} language={item.language} />
  //             </p>
  //           ) : (
  //             <p>
  //               <LineBreaker str={item.name} language={item.language} />
  //             </p>
  //           )}
  //         </li>
  //       </a>
  //     ))}
  //   </ul>
  // </div>
  // );
};

export default Display;
