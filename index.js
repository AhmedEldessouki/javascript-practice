function howSum(totalSum, numArr, memo = {}) {
  if (totalSum in memo) return memo[totalSum];
  if (totalSum === 0) return [];
  if (totalSum < 0) return null;

  for (let num of numArr) {
    const remainder = totalSum - num;
    const returnedValue = howSum(remainder, numArr, memo);
    if (returnedValue) {
      memo[totalSum] = [...returnedValue, num];
      return memo[totalSum];
    }
  }

  memo[totalSum] = null;
  return null;
}

console.log(howSum(1, [9, 2]));
console.log(howSum(2, [1, 4, 5, 9, 2]));
console.log(howSum(3, [2, 4, 5, 9, 2]));
console.log(howSum(3, [1, 4, 5, 9, 2]));
console.log(howSum(9, [3, 4, 5, 2]));
console.log(howSum(18, [4, 5, 9, 2]));
console.log(howSum(300, [7, 14]));
