import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculate, clear, takeInverse, evaluate } from './store/actions/calculate';
import { clickShowCalculator, clickOutsideCalculator } from './store/actions/clickDetect';
import CalculatorComponents from './components/calculator';
import Panel from './components/control-panel/Panel';

import * as fromCalculator from './store';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div style={{ display: 'contents' }}>
        { !this.props.showCalculator &&
          <Panel {...this.props} />
        }
        { this.props.showCalculator &&
          <CalculatorComponents.Calculator {...this.props} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculateStatement: fromCalculator.getCalculationStatement(state),
    total: fromCalculator.getTotal(state),
    showCalculator: fromCalculator.getShowCalculator(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (buttonKey) => {
      dispatch(calculate(buttonKey))
    },
    clear: () => {
      dispatch(clear())
    },
    takeInverse: () => {
      dispatch(takeInverse())
    },
    evaluate: () => {
      dispatch(evaluate())
    },
    clickShowCalculator: () => {
      dispatch(clickShowCalculator())
    },
    clickOutsideCalculator: () => {
      dispatch(clickOutsideCalculator())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);