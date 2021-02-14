
function manhattanDistance(nFloors) {
  const arr = []
  if (nFloors < 0) return arr
  for (let i = 0; i < nFloors; i++) {
    let str = '*'
    str = str.padStart(nFloors - i, ' ')
    for (let x = 0; x < i; x++) {
      str += '**'
    }
    str = str.padEnd(nFloors * 2 - 1, ' ')
    arr.push(str)
  }
  return arr
}

console.log(manhattanDistance(1 + 1))
console.log(manhattanDistance(4 + 2))
console.log(manhattanDistance(1 + 3))
