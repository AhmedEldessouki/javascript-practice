"use strict";
exports.__esModule = true;
exports.longestRepetition = void 0;
function longestRepetition(text) {
    // Implement me! :)
    var letter = "";
    var total = 0;
    var max = [letter, total];
    for (var _i = 0, _a = text.split(""); _i < _a.length; _i++) {
        var ltr = _a[_i];
        if (letter === ltr.toLowerCase()) {
            total += 1;
        }
        if (max[1] < total) {
            max = [letter, total];
        }
        if (ltr.toLowerCase() !== letter) {
            letter = ltr.toLowerCase();
            total = 1;
        }
    }
    return max;
}
exports.longestRepetition = longestRepetition;
console.log(longestRepetition("aaaabb"), ["a", 4]);
console.log(longestRepetition("bbbaaabaaaa"), ["a", 4]);
console.log(longestRepetition("cbdeuuu900"), ["u", 3]);
console.log(longestRepetition("abbbbb"), ["b", 5]);
console.log(longestRepetition("aabb"), ["a", 2]);
console.log(longestRepetition("ba"), ["b", 1]);
console.log(longestRepetition(""), ["", 0]);
