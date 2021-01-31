function getDecimal(n) {
  let num = n < 0 ? -n : n
  let num2 = Math.floor(num)
  return num - num2; // fix me 
}

console.log(getDecimal(10), 0);

console.log(getDecimal(-1.2), 0.2);

console.log(getDecimal(4.5), 0.5);