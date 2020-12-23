import React from 'react';

const Button = ({ onButtonClick }) => {
  const handleClick = () => { onButtonClick() }

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