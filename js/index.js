"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumPairs = void 0;
function sumPairs(ints, s) {
    const memo = {};
    for (let i = 0; i < ints.length; i++) {
        if (!(ints[i] in memo)) {
            memo[ints[i]] = true;
            for (let x = i + 1; x < ints.length; x++) {
                const sum = ints[i] + ints[x];
                const sum2 = ints[x] + ints[x + 1];
                if (sum2 === s) {
                    return [ints[x], ints[x + 1]];
                }
                if (sum === s) {
                    return [ints[i], ints[x]];
                }
            }
        }
    }
    return; // your code here...
}
exports.sumPairs = sumPairs;
const l1 = [1, 4, 8, 7, 3, 15], l2 = [1, -2, 3, 0, -6, 1], l3 = [20, -13, 40], l4 = [1, 2, 3, 4, 1, 0], l5 = [10, 5, 2, 3, 7, 5], l6 = [4, -2, 3, 3, 4], l7 = [0, 2, 0], l8 = [5, 9, 13, -3], l9 = [10, 5, 2, 3, 7, 5];
console.log(sumPairs(l1, 8), [1, 7], "Basic: [" + l1 + "] should return [1, 7] for sum = 8");
console.log(sumPairs(l2, -6), [0, -6], "Negatives: [" + l2 + "] should return [0, -6] for sum = -6");
console.log(sumPairs(l3, -7), undefined, "No Match: [" + l3 + "] should return undefined for sum = -7");
console.log(sumPairs(l4, 2), [1, 1], "First Match From Left: [" + l4 + "] should return [1, 1] for sum = 2 ");
console.log(sumPairs(l5, 10), [3, 7], "First Match From Left REDUX!: [" +
    l5 +
    "] should return [3, 7] for sum = 10 ");
console.log(sumPairs(l6, 8), [4, 4], "Duplicates: [" + l6 + "] should return [4, 4] for sum = 8");
console.log(sumPairs(l7, 0), [0, 0], "Zeroes: [" + l7 + "] should return [0, 0] for sum = 0");
console.log(sumPairs(l8, 10), [13, -3], "Subtraction: [" + l8 + "] should return [13, -3] for sum = 10");
console.log(sumPairs(l9, 10), [3, 7], "Subtraction: [" + l9 + "] should return [ 3, 7 ] for sum = 10");
