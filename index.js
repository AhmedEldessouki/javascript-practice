var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function solve(n, k) {
    // Write your code here
    if (n === 1 && k !== 1)
        return [-1];
    if (n === 1 && k === 1)
        return [1];
    var max = 0;
    var ar = [];
    var arr = [];
    for (var i = 1; i <= n; i++) {
        ar.push(i);
    }
    var memo = {};
    for (var x = 0; x < ar.length; x++) {
        var el = Math.round(ar.length / 2);
        for (var y = 0; y < ar.length; y++) {
            var key = ar.join(",");
            if (!(key in memo)) {
                memo[key] = Math.min.apply(Math, ar.reduce(function (acc, num, z) {
                    if (z + 1 < ar.length)
                        acc.push(Math.abs(num - ar[z + 1]));
                    return acc;
                }, []));
                console.log(ar, memo[key]);
                if (memo[key] > max) {
                    arr = [];
                    console.log(" < minimum");
                    max = memo[key];
                    arr.push(__spreadArray([], ar, true));
                }
                else if (memo[key] === max) {
                    max = memo[key];
                    console.log("mo[key");
                    arr.push(__spreadArray([], ar, true));
                }
            }
            y === ar.length - 2
                ? ar.push(ar.splice(ar.length - 2, 1)[0])
                : ar.unshift(ar.splice(ar.length - 1, 1)[0]);
        }
    }
    console.log(arr);
    return arr[Math.abs(k - arr.length)] || arr.pop();
}
console.log(solve(3, 5), "3 1 2");
console.log(solve(4, 2), "3 1 4 2");
console.log(solve(1, 1));
console.log(solve(1, 3));
console.log(solve(1, 5));
console.log(solve(1, 7));
console.log(solve(1, 6));
console.log(solve(1, 2));
console.log(solve(1, 9));
console.log(solve(1, 8));
console.log(solve(1, 10));
console.log(solve(1, 4));
