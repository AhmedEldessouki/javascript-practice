// ? Write the function bigToSmall, which will take one argument arr (two-dimensional array).
// ? Bring the two-dimensional array to one-dimensional. Sort the array in descending order.
// ? Use the '>' character as a separator when converting an array to a string. For example:
// ? bigToSmall([[1,2],[3,4],[5,6]]) "6>5>4>3>2>1"
// ? bigToSmall([[1,3,5],[2,4,6]]) "6>5>4>3>2>1"
// ? bigToSmall([[1,1],[1],[1,1]]) "1>1>1>1>1"

function bigToSmall(arr) {
  var arr2 = []
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = arr[i].length - 1; j >= 0; j--) {
      arr2.push(arr[i][j])
    }
  }
  return arr2.join('>')
}

console.log(
  bigToSmall([
    [1, 3, 5],
    [2, 4, 6],
  ]),
  '6>5>4>3>2>1',
)
console.log(bigToSmall([[1, 1], [1], [1, 1]]), '1>1>1>1>1')
console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  '6>5>4>3>2>1',
)
