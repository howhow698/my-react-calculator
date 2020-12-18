import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculate } from './store/actions/calculate';
import Calculator from './components/calculator';
import * as fromCalculator from './store';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Calculator.Screen {...this.props} />
        <Calculator.Keypad {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculateStatement: fromCalculator.getCalculationStatement(state),
    total: fromCalculator.getTotal(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (buttonKey) => {
      dispatch(calculate(buttonKey))
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);