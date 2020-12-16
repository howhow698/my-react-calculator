import * as types from '../types';
import calculate from '../../utils/calculate';

let initialState = {
  calculationStatement: '',
  total: 0
}

const calculatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CALCULATION_STATEMENT:
      let calculationStatement = state.calculationStatement + action.payload;
      return {
        ...state,
        calculationStatement,
        total: calculate(calculationStatement)
      }
    default:
      return state;
  }
}

export default calculatingReducer;

