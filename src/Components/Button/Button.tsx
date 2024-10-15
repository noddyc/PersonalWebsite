import './Button.css';
import { RemixiconComponentType } from '@remixicon/react';
import { debounce } from 'lodash';
// import { ComponentType, ReactElement } from 'react';
import defaultClickEvent from './defaultClickEvent';
import { debounceDuration } from '../Utility/utility';

const Button = ({
  IconLeft = undefined,
  IconRight = undefined,
  disable = undefined,
  value = undefined,
  onClick = defaultClickEvent,
}: ButtonProps) => (
  <button type="button" disabled={disable} onClick={onClick ?? debounce(defaultClickEvent, debounceDuration)}>
    {IconLeft && <IconLeft />}
    {value}
    {IconRight && <IconRight className="Icon" />}
  </button>
);

interface ButtonProps {
  // eslint-disable-next-line
  IconLeft?:  RemixiconComponentType  | undefined;
  // eslint-disable-next-line
  IconRight?: RemixiconComponentType | undefined;
  // eslint-disable-next-line
  value?: string | undefined;
  // eslint-disable-next-line
  disable?: boolean | undefined;
  // eslint-disable-next-line
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;
  // loading: boolean;
  // tooltip:;
  // hover:;
}

// const Button = () => {
//   const handleClick = useCallback(() => {}, []);

//   handleClick();
//   return <div>1</div>;
// };
export default Button;

// 0. Type Attribute
// Different button types for form behavior:
// Submit: For submitting forms.
// Reset: For resetting forms.
// Button: General button with no form functionality.
// link
// tooltip
