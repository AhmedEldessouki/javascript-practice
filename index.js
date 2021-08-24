function gridTraveler(row, column, memo = {}) {
  if (row === 1 && column === 1) return 1;
  if (row === 0 || column === 0) return 0;
  const key = row + "," + column;
  if (key in memo) return memo[key];
  memo[key] =
    gridTraveler(row - 1, column, memo) + gridTraveler(row, column - 1, memo);
  return memo[key];
}

console.log(gridTraveler(1, 0));
console.log(gridTraveler(2, 1));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(9, 3));
console.log(gridTraveler(18, 18));
console.log(gridTraveler(39, 14));
