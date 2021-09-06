"use strict";
exports.__esModule = true;
exports.anagrams = void 0;
function anagrams(word, words) {
    // Implement me! :)
    var found = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var text = words_1[_i];
        var allMatches = true;
        console.log(text.length, word.length);
        if (text.length === word.length) {
            for (var i = 0; i < word.length; i++) {
                if (word.indexOf(text[i]) < 0 || text.indexOf(word[i]) < 0) {
                    allMatches = false;
                    break;
                }
            }
            if (allMatches)
                found.push(text);
        }
    }
    return found;
}
exports.anagrams = anagrams;
// .reduce((acc: string[], text) => {
//   let res = true;
//   textArr.forEach((letter) => {
//     if (res) {
//       res = !!text.match(letter);
//     }
//   });
//   if (res) {
//     acc.push(word);
//   }
//   return acc;
// }, []);
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]), [
    "aabb",
    "bbaa",
]);
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]), [
    "carer",
    "racer",
]);
console.log(anagrams("laser", ["lazing", "lazy", "lacer"]), []);
console.log(anagrams("abba", [
    "aabb",
    "abab",
    "abbaa",
    "abbab",
    "abbba",
    "abcd",
    "baaab",
    "baab",
    "baba",
    "babaa",
    "bbaa",
]), []);
