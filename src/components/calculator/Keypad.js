import React, { Component } from 'react';
import { keypadKeys } from '../../utils/constants';
import Calculator from '../calculator';

export default class Keypad extends Component {
  handleClick = (key) => {
    switch (key) {
      case 'AC':
        this.props.clear();
        break
      case '+/-':
        this.props.takeInverse();
        break
      case '=':
        this.props.evaluate();
        break
      default:
        this.props.calculate(key);
        break
    }
  }
  render() {
    return (
      <div className="keypad">
        {
          keypadKeys.map((block, index) => {
            return (
              <div key={index} className="block">
                {
                  block.map(key => (
                    <Calculator.Button
                      key={key}
                      onButtonClick={this.handleClick}
                      buttonKey={key}
                    />
                  ))
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}