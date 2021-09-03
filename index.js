function multiplication(n, m, memo) {
    if (memo === void 0) { memo = {}; }
    if (n === 0 || m === 0) {
        return 0;
    }
    if (m.toString().length < 2)
        return n * m;
    if (m in memo)
        return memo[m];
    var totalCount = 0;
    var arrOfM = m.toString().split("").reverse();
    for (var i = 0; i < arrOfM.length; i++) {
        var num = arrOfM[i];
        memo[num] = Number(multiplication(n, Number(num), memo) + Array(i).fill(0).join(""));
        totalCount += memo[num];
    }
    memo[m] = totalCount;
    return totalCount;
}
console.log(multiplication(2, 2)); // 4
console.log(multiplication(22, 22)); // 484
console.log(multiplication(22, 2253));
console.log(multiplication(214532, 0)); // 0
console.log(multiplication(214532, 145368722));
