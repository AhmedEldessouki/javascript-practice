function fet(q = []) {
  const found = {};
  let total = 0;
  let callback = 0;
  const sorted = q.sort((a, b) => a - b);
  for (let i = 0; i < q.length; i++) {
    const a = q[i];
    const b = q[i + 1];
    if (b < a) {
      if (a in found) {
        if (found[a].find((item) => item === b)) {
        } else {
          found[a].push(b);
        }
      } else {
        found[a] = [b];
      }
      q.splice(i, 2, ...[b, a]);
      i = 0;
    }
    if (q[i] !== i + 1 && callback !== i && q[i - 1] !== i) {
      callback = i;
    }
  }
  if (
    Object.values(found).reduce((acc, arr) => {
      total += arr.length;
      if (arr.length > 2) {
        acc = true;
      }
      return acc;
    }, false)
  ) {
    console.log(`Too chaotic`);
    return;
  }
  console.log(total);
}

var input = [2, 1, 5, 3, 4];
var input6 = [2, 5, 1, 3, 4];
var input2 = [1, 2, 3, 4, 5];
var input3 = [1, 2, 5, 3, 4];
var input4 = [1, 2, 5, 3, 4, 7, 8, 6];
var input5 = [1, 2, 5, 3, 7, 8, 6, 4];
console.log("input", fet(input));
console.log("input6", fet(input6));
console.log("input2", fet(input2));
console.log("input3", fet(input3));
console.log("input4", fet(input4));
console.log("input5", fet(input5));
[1, 2, 3, 4, 5, 6, 7, 8];
