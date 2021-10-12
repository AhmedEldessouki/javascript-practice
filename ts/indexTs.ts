
function manhattanDistance(nFloors: number): number {
 return   parseInt(nFloors.toString().split('').sort((a,b)=> parseInt(a)-parseInt(b)).reverse().join(''))

}

console.log(manhattanDistance(42145 ))
console.log(manhattanDistance(145263 ))
console.log(manhattanDistance(123456789 ))
