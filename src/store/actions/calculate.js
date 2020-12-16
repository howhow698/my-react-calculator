export const calculate = (calculationStatement) => {
  return {
    type: 'SET_CALCULATION_STATEMENT',
    payload: calculationStatement
  }
}