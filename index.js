function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") {
    return 1;
  }
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      // ! Don't Forget Passing Down The MEMO
      if (!(target in memo)) memo[target] = 0;
      memo[target] += countConstruct(suffix, wordBank, memo);
    }
  }

  return memo[target] || 0;
}

console.log(countConstruct(`programming`, ["amming", "p", "rog"])); // 0
console.log(
  countConstruct(`programming`, ["ramming", "ram", "ming", "p", "rog"])
); // 2
console.log(countConstruct("interview", ["ew", "vi", "in", "ter"])); // 1
console.log(
  countConstruct("ooooooowoooooooooooooooohoooooooooooooo", [
    "o",
    "oo",
    "ooo",
    "oooo",
    "h",
    "w",
  ])
);
console.log(
  countConstruct(
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]
  )
);
