function countConstruct(target, wordBank, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === "") {
        return 1;
    }
    var totalCount = 0;
    for (var _i = 0, wordBank_1 = wordBank; _i < wordBank_1.length; _i++) {
        var word = wordBank_1[_i];
        if (target.indexOf(word) === 0) {
            var suffix = target.slice(word.length);
            // ! Don't Forget Passing Down The MEMO
            if (!(target in memo))
                memo[target] = 0;
            totalCount += countConstruct(suffix, wordBank, memo);
        }
    }
    memo[target] = totalCount;
    return totalCount;
}
console.log(countConstruct("programming", ["amming", "p", "rog"])); // 0
console.log(countConstruct("programming", ["ramming", "ram", "ming", "p", "rog"])); // 2
console.log(countConstruct("interview", ["ew", "vi", "in", "ter"])); // 1
console.log(countConstruct("ooooooowoooooooooooooooohoooooooooooooo", [
    "o",
    "oo",
    "ooo",
    "oooo",
    "h",
    "w",
])); // 6376719104
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])); // 0
