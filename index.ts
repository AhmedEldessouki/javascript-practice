export function fibonacciSequence(): Iterator<number> {
  // To be implemented: Proper implementation.
  const feb = [1, 1, 2, 3, 5, 8, 13];
  for (let i = feb.length - 1; feb[i] < Infinity; i++) {
    feb.push(feb[i] + feb[i - 1]);
  }
  console.log(feb);
  return feb[Symbol.iterator]();
}
console.log(fibonacciSequence());
