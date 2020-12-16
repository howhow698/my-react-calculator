import calculate from '../utils/calculate.js'
describe('Calculate', () => {
  let calculationStatement;
  it('evaluates the calculation statement correctly', () => {
    calculationStatement = '1+5+2-3*7'
    expect(calculate(calculationStatement)).toBe(-13);

    calculationStatement = '0+6+8'
    expect(calculate(calculationStatement)).toBe(14);

    calculationStatement = '0-7'
    expect(calculate(calculationStatement)).toBe(-7);

    calculationStatement = '0.4+1.8'
    expect(calculate(calculationStatement)).toBe(2.2);
  })

  it('evaluates calculation statements starting with "-"', () => {
    calculationStatement = '-28'
    expect(calculate(calculationStatement)).toBe(-28);
  })

  it('evaluates long calculation statements starting with "-"', () => {
    calculationStatement = '-66-2'
    expect(calculate(calculationStatement)).toBe(-68);

    calculationStatement = '-0.5+5.3'
    expect(calculate(calculationStatement)).toBe(4.8)
  })

  it('should throw an error for calculation statements starting with any other operator besides "-"', () => {

    calculationStatement = '*20-18'
    expect(calculate(calculationStatement)).toThrow();

    calculationStatement = '*8'
    expect(calculate(calculationStatement)).toThrow();

    calculationStatement = '+6-12'
    expect(calculate(calculationStatement)).toThrow();

    calculationStatement = '/2-3'
    expect(calculate(calculationStatement)).toThrow();
  })

  it('ignores trailing operators while evaluating the calculation statement correctly', () => {
    calculationStatement = '1+5+2-3*7-'
    expect(calculate(calculationStatement)).toBe(-13);
  })

})