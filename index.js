"use strict";
exports.__esModule = true;
exports.fibonacciSequence = void 0;
function fibonacciSequence() {
    // To be implemented: Proper implementation.
    var feb = [1, 1, 2, 3, 5, 8, 13];
    for (var i = feb.length - 1; feb[i] < Infinity; i++) {
        feb.push(feb[i] + feb[i - 1]);
    }
    console.log(feb);
    return feb[Symbol.iterator]();
}
exports.fibonacciSequence = fibonacciSequence;
console.log(fibonacciSequence());
