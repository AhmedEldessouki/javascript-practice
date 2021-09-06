export function anagrams(word: string, words: string[]): string[] {
  // Implement me! :)
  const found = [];
  for (const text of words) {
    let allMatches = true;
    if (text.length === word.length) {
      for (let i = 0; i < word.length; i++) {
        if (word.indexOf(text[i]) < 0 || text.indexOf(word[i]) < 0) {
          allMatches = false;
          break;
        }
      }
      if (allMatches) found.push(text);
    }
  }
  return found;
}
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
console.log(
  anagrams("abba", [
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
  ]),
  []
);
