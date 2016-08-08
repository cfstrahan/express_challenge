module.exports = {
  convertToCurrency : convertToCurrency
}


function convertToCurrency(number) {
  convertedNumber = number.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  return convertedNumber;
}
