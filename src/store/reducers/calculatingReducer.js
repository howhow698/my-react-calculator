import * as types from '../types';
import calculate from '../../utils/calculate';

let initialState = {
  calculationStatement: '',
  total: 0
}

function setExpression({ calculationStatement, total }, action) {
  switch (action.type) {
    case types.SET_CALCULATION_STATEMENT:
      if (["+", "/", "*", "%"].includes(action.payload) && !calculationStatement) {
        return `${total}${action.payload}`;
      }
      return `${!calculationStatement && total ? total : ""}${calculationStatement +
        action.payload}`;
    default:
      return calculationStatement;
  }
}

const calculatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CALCULATION_STATEMENT:
      let calculationStatement = setExpression(state, action);
      return {
        ...state,
        calculationStatement,
        total: calculate(calculationStatement)
      }
    case types.CLEAR_CALCULATION_STATEMENT:
      return {
        ...state,
        calculationStatement: "",
        total: 0
      };
    case types.EVALUATE_CALCULATION_STATEMENT:
      return {
        ...state,
        calculationStatement: '',
        total: calculate(state.calculationStatement) || state.calculationStatement || state.total
      }
    default:
      return state;
  }
}

export default calculatingReducer;

