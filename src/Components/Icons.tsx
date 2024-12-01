/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import './Icons.scss';
import { useEffect, useReducer } from 'react';
import java from '../Assets/java.png';
import ts from '../Assets/ts.png';
import react from '../Assets/react.png';
import node from '../Assets/nodejs.png';
import spring from '../Assets/spring.png';
import html from '../Assets/html.png';
import sass from '../Assets/sass.png';
import sql from '../Assets/sql.png';

interface State {
  prevState: boolean[];
  curState: boolean[];
  randomNum: number;
}
interface Action {
  type: 'change';
  payload: boolean[];
}

const randomArray = () =>
  Array(8)
    .fill(false)
    .map(() => Math.random() < 0.5);

function reducer(state: State, action: Action): State {
  if (action.type === 'change') {
    const prevState = [...state.curState];
    const curState = prevState.map((item, index) => (action.payload[index] ? !item : item));
    const num = Math.random() * 2 - 1;
    return {
      prevState,
      curState,
      randomNum: num,
    };
  }
  return state;
}

const Icons = () => {
  const [state, dispatch] = useReducer(reducer, {
    prevState: [false, false, false, false, false, false, false, false],
    curState: [false, false, false, false, false, false, false, false],
    randomNum: Math.random(),
  });

  useEffect(() => {
    const task = setInterval(() => {
      dispatch({ type: 'change', payload: randomArray() });
    }, 4000);
    return () => clearInterval(task);
  }, []);

  return (
    <div className="Icons">
      <div className="Icons__container0">
        <div
          className={`Icons__item ${!state.prevState[0] && !state.curState[0] ? 'Icons__item--initialColor' : ''}
            ${!state.prevState[0] && state.curState[0] ? 'Icons__item--flipAnimation' : ''}
        ${state.prevState[0] && !state.curState[0] ? 'Icons__item--flipAnimationOpposite' : ''}
        ${state.prevState[0] && state.curState[0] ? 'Icons__item--flipAnimation' : ''}
        `}
        >
          <div className="Icons__item__img">
            <img src={html} alt="HTML" />
          </div>
          <div className="Icons__item__span">
            <span>HTML</span>
          </div>
        </div>
      </div>

      <div className="Icons__container3">
        <div className="Icons__container1">
          <div
            className={`Icons__item ${!state.prevState[1] && !state.curState[1] ? 'Icons__item--initialColor' : ''}
          ${!state.prevState[1] && state.curState[1] ? 'Icons__item--flipAnimation' : ''}
      ${state.prevState[1] && !state.curState[1] ? 'Icons__item--flipAnimationOpposite' : ''}
      ${state.prevState[1] && state.curState[1] ? 'Icons__item--flipAnimation' : ''}
      `}
            id="javablock"
          >
            <div className="Icons__item__img">
              <img src={java} alt="java" />
            </div>
            <div className="Icons__item__span">
              <span>JAVA</span>
            </div>
          </div>
          <div
            className={`Icons__item ${!state.prevState[2] && !state.curState[2] ? 'Icons__item--initialColor' : ''}
            ${!state.prevState[2] && state.curState[2] ? 'Icons__item--flipAnimation' : ''}
        ${state.prevState[2] && !state.curState[2] ? 'Icons__item--flipAnimationOpposite' : ''}
        ${state.prevState[2] && state.curState[2] ? 'Icons__item--flipAnimation' : ''}
        `}
          >
            <div className="Icons__item__img">
              <img src={sql} alt="SQL" />
            </div>
            <div className="Icons__item__span">
              <span>SQL</span>
            </div>
          </div>

          <div
            className={`Icons__item ${!state.prevState[3] && !state.curState[3] ? 'Icons__item--initialColor' : ''}
            ${!state.prevState[3] && state.curState[3] ? 'Icons__item--flipAnimation' : ''}
        ${state.prevState[3] && !state.curState[3] ? 'Icons__item--flipAnimationOpposite' : ''}
        ${state.prevState[3] && state.curState[3] ? 'Icons__item--flipAnimation' : ''}
        `}
            id="springblock"
          >
            <div className="Icons__item__img">
              <img id="spring" src={spring} alt="spring" />
            </div>
            <div className="Icons__item__span">
              <span>SPRING</span>
            </div>
          </div>
        </div>

        <div className="Icons__container2">
          <div
            className={`Icons__item ${!state.prevState[4] && !state.curState[4] ? 'Icons__item--initialColor' : ''}
          ${!state.prevState[4] && state.curState[4] ? 'Icons__item--flipAnimation' : ''}
      ${state.prevState[4] && !state.curState[4] ? 'Icons__item--flipAnimationOpposite' : ''}
      ${state.prevState[4] && state.curState[4] ? 'Icons__item--flipAnimation' : ''}
      `}
          >
            <div className="Icons__item__img">
              <img src={node} alt="node" />
            </div>
            <div className="Icons__item__span">
              <span>NODE.JS</span>
            </div>
          </div>
          <div
            className={`Icons__item ${!state.prevState[5] && !state.curState[5] ? 'Icons__item--initialColor' : ''}
            ${!state.prevState[5] && state.curState[5] ? 'Icons__item--flipAnimation' : ''}
        ${state.prevState[5] && !state.curState[5] ? 'Icons__item--flipAnimationOpposite' : ''}
        ${state.prevState[5] && state.curState[5] ? 'Icons__item--flipAnimation' : ''}
        `}
          >
            <div className="Icons__item__img">
              <img id="typescript" src={ts} alt="typescript" />
            </div>
            <div className="Icons__item__span" id="typescriptBlock">
              <span>TYPESCRIPT</span>
            </div>
          </div>
          <div
            className={`Icons__item ${!state.prevState[6] && !state.curState[6] ? 'Icons__item--initialColor' : ''}
            ${!state.prevState[6] && state.curState[6] ? 'Icons__item--flipAnimation' : ''}
        ${state.prevState[6] && !state.curState[6] ? 'Icons__item--flipAnimationOpposite' : ''}
        ${state.prevState[6] && state.curState[6] ? 'Icons__item--flipAnimation' : ''}
        `}
          >
            <div className="Icons__item__img">
              <img id="react" src={react} alt="react" />
            </div>
            <div className="Icons__item__span">
              <span>REACT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="Icons__container4">
        <div
          className={`Icons__item ${!state.prevState[7] && !state.curState[7] ? 'Icons__item--initialColor' : ''}
            ${!state.prevState[7] && state.curState[7] ? 'Icons__item--flipAnimation' : ''}
        ${state.prevState[7] && !state.curState[7] ? 'Icons__item--flipAnimationOpposite' : ''}
        ${state.prevState[7] && state.curState[7] ? 'Icons__item--flipAnimation' : ''}
        `}
        >
          <div className="Icons__item__img">
            <img src={sass} alt="SASS" />
          </div>
          <div className="Icons__item__span">
            <span>SASS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
