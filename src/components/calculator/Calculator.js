import React, { Component } from 'react';
import CalculatorComponents from '../calculator';

import onClickOutside from "react-onclickoutside";

export class Calculator extends Component {
  handleClickOutside = evt => {
    this.props.clickOutsideCalculator();
  };


  render() {
    return (
      <div className="calculator--container">
        <CalculatorComponents.Screen {...this.props} />
        <CalculatorComponents.Keypad {...this.props} />
      </div>
    );
  }
}

export default onClickOutside(Calculator); 