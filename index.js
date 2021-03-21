function expandedForm(num = 0) {
  function returnZero(params, i, arr) {
    if (i === arr.length - 1) {
      return params;
    }
    return returnZero(params + "0", (i += 1), arr);
  }
  const arr = num
    .toString()
    .split("")
    .map((item, i, arr) => {
      if (parseInt(item) >= 1) {
        return returnZero(item, i, arr);
      }
      return item;
    });

  return arr.filter((a) => a > 0).join(" + ");
}
console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
console.log(expandedForm(402070022)); // Should return '70000 + 300 + 4'
