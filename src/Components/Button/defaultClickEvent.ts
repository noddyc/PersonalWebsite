import { MouseEvent } from 'react';

const defaultClickEvent = (e: MouseEvent<HTMLButtonElement>): void => {
  // eslint-disable-next-line
  console.log("hello");
  e.preventDefault();
};

export default defaultClickEvent;
