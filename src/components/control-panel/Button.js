import React from 'react';

const Button = ({ onButtonClick }) => {
  let handleClick = () => { onButtonClick() }

  return (
    <button
      className={'btn--show-calculator'}
      onClick={handleClick}
    >
      Show Calculator
    </button>
  );
}

export default Button;