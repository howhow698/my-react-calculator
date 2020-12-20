const calculate = (calculationStatement) => {

  const valid = (new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*')).exec(calculationStatement)

  if (!valid) {
    return 0;
  }

  if (/^[*+\/]/.test(calculationStatement)) {
    return () => {
      throw new Error('Calculation Statement starts with invalid operators')
    }
  }

  return new Function(`return ${valid[0]}`)()
}

export default calculate;