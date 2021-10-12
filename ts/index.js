"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.part = function (n) {
        // your code
        var en = function (n) {
            var solution = [[n]];
            for (var x = n - 1; x > 0; x--) {
                for (var y = n - x > 0 ? n - x : x; y > 0; y--) {
                    // for (let y = x; y > 0; y--) {
                    if (y <= x) {
                        var arr = [x];
                        var sum = x;
                        var z = y;
                        while (z > 0) {
                            if (sum + z <= n) {
                                sum += z;
                                arr.push(z);
                            }
                            else {
                                z--;
                            }
                        }
                        solution.push(arr);
                    }
                }
            }
            return solution;
        };
        var m = en(n);
        var productSet = new Set(m
            .map(function (arr) { return arr.reduce(function (acc, num) { return (acc *= num); }, 1); })
            .sort(function (a, b) { return a - b; }));
        var productArr = productSet.keys();
        console.log(__spreadArray([], productArr, true));
        // const range = Math.max(...product) - Math.min(...product);
        // const average =
        //   product.reduce((acc, num) => (acc += num), 0) / product.length;
        // const prodLen = product.length / 2;
        // const median =
        //   product.length % 2 === 1
        //     ? product[prodLen]
        //     : product[Math.floor(prodLen)] + product[Math.round(prodLen)] / 2;
        // console.log(range, average, median);
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.part(5), "Range: 5 Average: 3.50 Median: 3.50");
console.log(G964.part(8), "Range: 17 Average: 8.29 Median: 7.50");
console.log(G964.part(9), "Range: 26 Average: 11.17 Median: 9.50");
console.log(G964.part(10), "Range: 35 Average: 15.00 Median: 14.00");
// console.log(G964.part(40), "Range: 35 Average: 15.00 Median: 14.00");
