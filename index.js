function feb(num, memo) {
    if (memo === void 0) { memo = {}; }
    if (num <= 2)
        return 1;
    if (num in memo)
        return memo[num];
    memo[num] = feb(num - 1, memo) + feb(num - 2, memo);
    return memo[num];
}
function feb2(n) {
    var arr = [0, 1, 1];
    for (var i = 2; i < n + 1; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr.reduce(function (acc, num) { return (acc += num * 4); }, 0);
}
console.log(feb(1), feb2(1));
console.log(feb(2), feb2(2));
console.log(feb(5), feb2(5));
console.log(feb(6), feb2(6));
console.log(feb(8), feb2(8));
console.log(feb(39), feb2(39));
console.log(feb2(20), 114624);
console.log(feb2(30), 14098308);
