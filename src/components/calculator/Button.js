import React from 'react';
import { verticalOperators, horizontalOperators } from '../../utils/constants';

const Button = ({ onButtonClick, buttonKey }) => {
  let handleClick = (e) => { onButtonClick(e.target.textContent) }
  let classNames = [
    'btn',
    verticalOperators.includes(buttonKey) ? 'btn--vertical' : '',
    horizontalOperators.includes(buttonKey) ? 'btn--horizontal' : '',
    buttonKey === '0' ? 'btn--zero' : ''
  ];

  return (
    <button
      name={buttonKey}
      className={classNames.join(' ').trim()}
      onClick={handleClick}
    >
      { buttonKey}
    </button>
  );
}


export default Button;