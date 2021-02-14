"use strict";
function manhattanDistance(nFloors) {
    return parseInt(nFloors.toString().split('').sort(function (a, b) { return parseInt(a) - parseInt(b); }).reverse().join(''));
}
console.log(manhattanDistance(42145));
console.log(manhattanDistance(145263));
console.log(manhattanDistance(123456789));
