function feb(num, memo = {}) {
  if (num <= 2) return 1;
  if (num in memo) return memo[num];
  memo[num] = feb(num - 1, memo) + feb(num - 2, memo);
  return memo[num];
}

console.log(feb(1));
console.log(feb(2));
console.log(feb(3));
console.log(feb(9));
console.log(feb(39));
