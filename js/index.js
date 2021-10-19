"use strict";
var maxSequence = function (arr) {
    // ...
    if (arr.length <= 0)
        return 0;
    if (Math.max(...arr) < 0)
        return 0;
    function sumUp(ar) {
        return ar.reduce((acc, num) => (acc += num), 0);
    }
    if (Math.min(...arr) >= 0)
        return sumUp(arr);
    const memo = {};
    let x = 1;
    while (x < arr.length) {
        for (let i = 0; i < arr.length; i++) {
            const els = [...arr].splice(i, x);
            const key = els.join(",");
            if (!(key in memo)) {
                memo[key] = sumUp(els);
            }
        }
        x++;
    }
    const key = arr.join(",");
    memo[key] = sumUp(arr);
    // console.log(memo);
    return Math.max(...Object.values(memo));
};
// console.log(maxSequence([]), 0);
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
// console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4]), 23);
// console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]), 0);
console.log(maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
]), 155);
console.log(maxSequence([
    -18, -40, -26, -13, -24, 44, 44, -18, -42, -17, -3, -9, 27, 30, 33, -46, 39,
    -45, 48, 44, 35, -42, 41, 8, 10, 7, -31, -2, 16, 30, 45, 16, -13, 13, 26,
]), 289);
console.log(maxSequence([-43, 19, 15, 7, 23, 31]), 95);
console.log(maxSequence([
    -24, -46, -18, -29, 50, -19, 40, 48, -46, 36, -16, -25, 3, -20, 32, -6, 29,
    30, -22, -6, 5, -38, -31, -16, 0, -37, -14, 43, 12, -39, -3, 47, 4, -43, 37,
    35, 24, 28, -36, -27, 29, 18, 47, -28, 29, 12, -4, -18, 50, -34, -10, 21,
    15, 13,
]), 222);
console.log(maxSequence([-20, 45]), 45);
console.log(maxSequence([
    10, 5, 19, 6, 35, 41, -9, 28, 0, 0, -13, -37, -34, 47, 13, 18, -28, 4, -43,
    -2, 27, -32, 34, -29, 11, 30, 41, -7, 12, -41, 5, -28, 48, 14, -2, 29, -48,
    48, -5, 18, 37, 43, 30, -27, 2, 32, 30,
]), 332);
console.log(maxSequence([-3, 27, 25, -37, 36, 28]), 79);
console.log(maxSequence([
    9, 47, 34, -16, 21, -11, 48, 38, -46, 17, 17, 50, 22, 3, 43, -13, 35, -38,
    50, 6, 1, -44, -6, -39, -26, -42, 45, -5, 20, -37, 43, 30, 7, 17, -43, -22,
    35, 14, 0, -0, 12, -8, -19, -5, 18, -13, -3, 9, -23, 28, -19, 35, 39, -45,
    -36, 39, 12, 3, 36, 40, 6, -13,
]), 370);
