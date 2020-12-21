function fibonacci(num) {
  let currentValue = 1,
    previousValue = 0,
    temp,
    result = '';

  while (num >= 0) {
    if (num >= 1) {
      result += previousValue + ' ';
    } else {
      result += previousValue;
    }
    temp = currentValue;
    currentValue = currentValue + previousValue;
    previousValue = temp;
    num--;
  }

  return result;
}
module.exports = fibonacci;
