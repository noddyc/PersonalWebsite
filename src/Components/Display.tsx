/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useCallback, useState, useEffect, useRef } from 'react';
import './Display.scss';
import { RiArrowDropLeftFill, RiArrowDropRightFill } from '@remixicon/react';
import _ from 'lodash';
import bear from '../Assets/bear.gif';
import mountain from '../Assets/moutain.jpg';
import reactSvg from '../Assets/react.svg';
import pink from '../Assets/pink.jpg';
import bridge from '../Assets/bridge.jpg';
import tag from '../Assets/tag.jpg';
import wood from '../Assets/wood.jpg';

const projectList = [
  { id: 1, name: 'Raft', color: 'red', url: bear },
  { id: 2, name: 'Auction Website', color: 'blue', url: tag },
  {
    id: 3,
    name: 'Hunting in the Wood',
    color: 'green',
    url: pink,
  },
  { id: 4, name: 'Brotherhood2', color: 'orange', url: mountain },
  { id: 5, name: 'Brotherhood3', color: 'gray', url: wood },
  { id: 6, name: 'Brotherhood3', color: 'gray', url: wood },
];

interface LineBreakerProps {
  str: string;
}

const LineBreaker = ({ str }: LineBreakerProps) => {
  const arr = str.split(' ');
  return (
    <>
      {arr.map((word) => (
        <>
          <span>{_.capitalize(word)}</span>
          <br />
        </>
      ))}
    </>
  );
  return <>{arr.reduce((acc: string, word: string) => `${acc + word}<br/>`, '')}</>;
};

const Display = () => {
  const [list, setList] = useState(projectList);
  const [hoverState, setHoverState] = useState(new Array(14).fill(false));
  const ListRef = useRef<HTMLUListElement | null>(null);
  const allRef = useRef<HTMLLIElement[]>([]);

  return (
    <div className="Display">
      {/* <RiArrowDropLeftFill
        className="Display__icon"
        onClick={() => {
          setList((prev) => {
            if (prev.length === 0) return prev;

            const firstItem = prev[0];
            const restItems = prev.slice(1);

            return [...restItems, firstItem];
          });
        }}
      /> */}
      <ul className="Display__ul" ref={ListRef}>
        {list.map((item, index) => (
          <li
            ref={(element) => {
              if (allRef.current) {
                allRef.current[index] = element as HTMLLIElement;
              }
              return allRef.current[index];
            }}
            style={{ backgroundImage: `url(${item.url})` }}
            // className={`Display__ul__li ${index === 2 ? 'Display__ul__li--Animation' : ''}`}
            className="Display__ul__li"
            key={item.id}
            // eslint-disable-next-line no-console, jsx-a11y/mouse-events-have-key-events, no-alert
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
        ))}
      </ul>
      {/* <RiArrowDropRightFill
        className="Display__icon"
        onClick={() => {
          setList((prev) => {
            console.log('f1');
            if (prev.length <= 0) {
              return prev;
            }
            const newList = [...prev];

            const e = newList.pop();

            if (e) {
              newList.unshift(e);
              return newList;
            }
            return prev;
          });
        }}
      /> */}
    </div>
  );
};

export default Display;
