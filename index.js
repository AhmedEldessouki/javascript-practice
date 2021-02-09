function moveZeros(arr = '') {
  function twistIt(str = '') {
    return str.split('').map((a, i, arr) => arr[arr.length - i - 1]).join('')
  }
  return arr.split(' ').map(item => twistIt(item)).join(' ')
}

console.log(moveZeros("double  spaces"), "double  spaces", '==>', "elbuod  secaps")
console.log(moveZeros("double  spaces"), "double  spaces", '==>', "elbuod  secaps")
console.log(moveZeros("double  spaces"), "double  spaces", '==>', "elbuod  secaps")

function manhattanDistance(arr0, arr1) {
  function fn(params) {

    return Math.abs(params)
  }
  return (fn(arr0[0] - arr1[0]) + fn(arr0[1] - arr1[1]))
}

console.log(manhattanDistance([1, 1], [1, 1]), '=> returns 0')
console.log(manhattanDistance([5, 4], [3, 2]), '=> returns 4')
console.log(manhattanDistance([1, 1], [0, 3]), '=> returns 3')
