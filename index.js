"use strict";
exports.__esModule = true;
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    var _a;
    _a = G964;
    G964.decompose = function (n, m) {
        if (m === void 0) { m = 0; }
        // your code
        var goal = Math.pow(n, 2);
        var x = n - 1;
        var y = 0;
        var nums = [];
        while (goal !== y && x >= 0) {
            if (goal > y) {
                y += Math.pow(x, 2);
                nums.push(x);
                if (goal < y) {
                    y -= Math.pow(x, 2);
                    nums.pop();
                }
                if (x === 0 && goal > y) {
                    if (m !== 0) {
                        x = nums[0] - 1;
                        nums = [];
                        y = 0;
                    }
                    else {
                        x = nums[1] - 1;
                        nums = nums.splice(0, 1);
                        y = Math.pow(nums[0], 2);
                    }
                }
                else {
                    x--;
                }
            }
        }
        return goal === y
            ? nums.reverse()
            : m === 0
                ? _a.decompose(n, 1)
                : "Nothing";
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.decompose(4), "Nothing");
console.log(G964.decompose(12), [1, 2, 3, 7, 9]);
console.log(G964.decompose(50), [1, 3, 5, 8, 49]);
console.log(G964.decompose(44), [2, 3, 5, 7, 43]);
