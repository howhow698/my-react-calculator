import React, { Component } from 'react';
import CalculatorComponents from '../calculator';

import onClickOutside from "react-onclickoutside";
import Draggable from 'react-draggable';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: 0 };
    this.setWindowWidth = this.setWindowWidth.bind(this);
  }
  // usage of react-onclickoutside
  handleClickOutside = evt => {
    this.props.clickOutsideCalculator();
  };

  componentDidMount() {
    this.setWindowWidth();
    window.addEventListener("detectWindowWidth", this.setWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("detectWindowWidth", this.setWindowWidth);
  }

  setWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    return (
      <Draggable cancel=".btn" onStart={() => this.state.windowWidth > 425 ? true : false}>
        <div className="calculator--container">
          <CalculatorComponents.Screen {...this.props} />
          <CalculatorComponents.Keypad {...this.props} />
        </div >
      </Draggable>
    );
  }
}


export default onClickOutside(Calculator); 