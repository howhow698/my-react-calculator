import * as types from '../types';

let initialState = {
  showCalculator: false,
}

const clickDetectingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLICK_SHOW_CALCULATOR:
      return {
        ...state,
        showCalculator: true,
      }
    case types.CLICK_OUTSIDE_CALCULATOR:
      return {
        ...state,
        showCalculator: false,
      };

    default:
      return state;
  }
}

export default clickDetectingReducer;
