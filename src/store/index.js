import { createStore, combineReducers } from 'redux';
import calculatingReducer from './reducers/calculatingReducer';

const rootReducer = combineReducers({
  calculator: calculatingReducer
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

