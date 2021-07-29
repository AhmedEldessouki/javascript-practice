function solve(str = "") {
  const specialRegex = /[-+*\/] ?/g;
  const othersRegex = /[0-9a-z] ?/gi;
  const others = str
    .split(othersRegex)
    .reduce((acc, item) => {
      if (item !== "") return acc.concat(item);
      return acc;
    }, [])
    .reverse();

  return str
    .split(specialRegex)
    .reverse()
    .map((item, i) => (item += others[i] ? others[i] : ""))
    .join("");
}
console.log(solve("100*b/y")); // Should return  "y/b*100"
console.log(solve("a+b-c/d*30")); // Should return "30*d/c-b+a"
