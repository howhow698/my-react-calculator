import * as types from '../types';

export const clickShowCalculator = () => {
  return {
    type: types.CLICK_SHOW_CALCULATOR,
  }
}

export const clickOutsideCalculator = () => {
  return {
    type: types.CLICK_OUTSIDE_CALCULATOR,
  }
}
