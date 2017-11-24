
const toCurrencyString = (number) => {

  return Number(number).toLocaleString('ja-JP', { style: 'currency', currency: 'USD' })
}

module.exports = {
  toCurrencyString
}
