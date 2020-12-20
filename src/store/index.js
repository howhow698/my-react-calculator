import { createStore, combineReducers } from 'redux';
import calculatingReducer from './reducers/calculatingReducer';
import clickDetectingReducer from './reducers/clickDetectingReducer';

const rootReducer = combineReducers({
  calculator: calculatingReducer,
  clickDetector: clickDetectingReducer
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const getCalculationStatement = (state) => {
  return state.calculator.calculationStatement
}

export const getTotal = (state) => {
  return state.calculator.total
}

export const getShowCalculator = (state) => {
  return state.clickDetector.showCalculator
}

