function fet(arr) {
  function cal(r, c, memo) {
    if (r >= arr.length) return Math.max(...Object.values(memo));
    if (c >= arr.length) return cal(r + 1, 2, memo);
    if (!memo) {
      memo = {};
    }
    memo[r + "," + c] =
      arr[r - 2][c - 2] +
      arr[r - 2][c - 1] +
      arr[r - 2][c] +
      arr[r - 1][c - 1] +
      arr[r][c - 2] +
      arr[r][c - 1] +
      arr[r][c];

    return cal(r, c + 1, memo);
  }
  return cal(2, 2);
}
var input = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
const inp2 = [
  [7, 6, 8, 2, 4, 3],
  [7, 3, 3, 0, 6, 1],
  [3, 8, 7, 7, 2, 2],
  [0, 8, 6, 8, 6, 1],
  [7, 1, 6, 0, 2, 4],
  [2, 7, 8, 1, 7, 4],
];
console.log(fet(input));
console.log(fet(inp2));
