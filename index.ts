export function longestRepetition(text: string): [string, number] {
  // Implement me! :)
  let letter = "";
  let total = 0;
  let max: [string, number] = [letter, total];
  for (const ltr of text.split("")) {
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

console.log(longestRepetition("aaaabb"), ["a", 4]);
console.log(longestRepetition("bbbaaabaaaa"), ["a", 4]);
console.log(longestRepetition("cbdeuuu900"), ["u", 3]);
console.log(longestRepetition("abbbbb"), ["b", 5]);
console.log(longestRepetition("aabb"), ["a", 2]);
console.log(longestRepetition("ba"), ["b", 1]);
console.log(longestRepetition(""), ["", 0]);
