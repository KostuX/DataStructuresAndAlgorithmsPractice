function getFactorial(value) {
  if (value === 2) return value;
  return value * getFactorial(--value);
}

let res = getFactorial(5);
console.log(res);
