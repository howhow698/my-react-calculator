import React from 'react';

// use Textfit to make calculation statement fit into screen element when keep growing
import { Textfit } from 'react-textfit';

const Screen = (props) => {
  return (
    <div className="screen--container">
      <Textfit
        max={30}
        throttle={60}
        mode="single"
        className="screen-top"
      >
        {props.calculateStatement}
      </Textfit>
      <Textfit
        max={50}
        mode="single"
        className="screen-bottom">
        {props.total}
      </Textfit>
    </div>
  )
}

export default Screen;
