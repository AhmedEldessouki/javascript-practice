function beggars(values, n) {
  //your code here
  const newArray = Array(n).fill(0);
  if (n === 0) return [];
  let i = 0;
  do {
    for (let index = 0; index < n; index++) {
      newArray[index] += values[i] ? values[i] : 0;
      i++;
    }
  } while (i < values.length);

  return newArray;
}

console.log(beggars([1, 2, 3, 4, 5], 1), [15]);
console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6]);
console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3]);
console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0]);
console.log(beggars([1, 2, 3, 4, 5], 0), []);
