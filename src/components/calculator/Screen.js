import React from 'react';
import { Textfit } from 'react-textfit';

const Screen = (props) => {
  return (
    <div>
      <Textfit>
        {props.expression}
      </Textfit>
      <Textfit>
        {props.total}
      </Textfit>
    </div>
  )
}

export default Screen;
