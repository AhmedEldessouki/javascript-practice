function fet(a, d) {
  for (let index = 0; index < d; index++) {
    a.push(a.shift());
  }
  return a;
}
var input = [1, 2, 3, 4, 5];
console.log(fet(input, 5), "5 1 2 3 4");
