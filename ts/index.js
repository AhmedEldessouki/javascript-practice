var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function findOdd(n) {
    //happy coding!
    var ns = Object.values(n.reduce(function (acc, a) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[a] = a, _a)));
    }, {}));
    var _loop_1 = function (index) {
        var element = ns[index];
        if (n.filter(function (a) { return a === element; }).length % 0 === 0)
            return { value: element };
    };
    for (var index = 0; index < ns.length; index++) {
        var state_1 = _loop_1(index);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
console.log(findOdd([7]), 7);
console.log(findOdd([0]), 0);
console.log(findOdd([1, 1, 2]), 2);
console.log(findOdd([0, 1, 0, 1, 0]), 0);
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
