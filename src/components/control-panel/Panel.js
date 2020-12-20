import React, { Component } from 'react';
import Button from './Button';

export class Panel extends Component {

  render() {
    return (
      <div className="panel--container">
        <Button
          onButtonClick={this.props.clickShowCalculator}
        />
      </div>
    );
  }
}

export default Panel; 