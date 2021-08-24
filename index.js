function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      // ! Don't Forget Passing Down The MEMO
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
}

console.log(canConstruct(`programming`, ["amming", "p", "rog"])); // false
console.log(canConstruct(`programming`, ["ramming", "p", "rog"])); // true
console.log(canConstruct("interview", ["ew", "vi", "in", "ter"])); // true
console.log(
  canConstruct("ooooooowoooooooooooooooohoooooooooooooo", [
    "o",
    "oo",
    "ooo",
    "oooo",
    "h",
    "w",
  ])
);
console.log(
  canConstruct(
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]
  )
);
