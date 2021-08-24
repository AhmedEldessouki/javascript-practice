function canSum(totalSum, numArr, memo = {}) {
  if (totalSum in memo) return memo[totalSum];
  if (totalSum === 0) return true;
  if (totalSum < 0) return false;

  for (let num of numArr) {
    const remainder = totalSum - num;
    if (canSum(remainder, numArr, memo)) {
      memo[totalSum] = true;
      return true;
    }
  }

  memo[totalSum] = false;
  return false;
}

console.log(canSum(1, [9, 2]));
console.log(canSum(2, [1, 4, 5, 9, 2]));
console.log(canSum(3, [2, 4, 5, 9, 2]));
console.log(canSum(3, [1, 4, 5, 9, 2]));
console.log(canSum(9, [3, 4, 5, 2]));
console.log(canSum(18, [4, 5, 9, 2]));
console.log(canSum(300, [7, 14]));
