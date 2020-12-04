function fibonacci(num) {
  let a = 1,
    b = 0,
    temp,
    result = '';

  while (num >= 0) {
    if (num >= 1) {
      result += b + ' ';
    } else {
      result += b;
    }
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return result;
}

module.exports = fibonacci;
