import React from 'react';

const Button = ({ onButtonClick, buttonKey }) => {
  let handleClick = () => { onButtonClick(buttonKey) }
  return (
    <button onClick={handleClick}>
      {buttonKey}
    </button>
  );
}

export default Button;