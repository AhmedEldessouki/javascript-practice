function bestSum(targetSum, numArr, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortest = null;

  for (let num of numArr) {
    const remainder = targetSum - num;
    const returnedValue = bestSum(remainder, numArr, memo);
    if (returnedValue) {
      memo[targetSum] = [...returnedValue, num];
      if (shortest === null || memo[targetSum].length < shortest.length) {
        shortest = memo[targetSum];
      }
    }
  }
  memo[targetSum] = shortest;
  return shortest;
}

console.log(bestSum(1, [9, 2]));
console.log(bestSum(2, [1, 4, 5, 9, 2]));
console.log(bestSum(3, [2, 4, 5, 9, 1]));
console.log(bestSum(3, [1, 4, 5, 9, 2]));
console.log(bestSum(9, [3, 4, 5, 2]));
console.log(bestSum(18, [4, 5, 9, 2]));
console.log(bestSum(300, [7, 14]));
