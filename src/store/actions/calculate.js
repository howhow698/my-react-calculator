import * as types from '../types';

export const calculate = (key) => {
  return {
    type: types.SET_CALCULATION_STATEMENT,
    payload: key
  }
}

export const clear = () => {
  return {
    type: types.CLEAR_CALCULATION_STATEMENT
  }
}

export const takeInverse = () => {
  return {
    type: types.TAKE_INVERSE
  }
}

export const evaluate = () => {
  return {
    type: types.EVALUATE_CALCULATION_STATEMENT
  }
}