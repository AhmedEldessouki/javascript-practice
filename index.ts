function solve(n: number, k: number): number[] {
  // Write your code here
  if (n === 1 && k !== 1) return [-1];
  if (n === 1 && k === 1) return [1];
  let max = 0;
  const ar: number[] = [];
  let arr: number[][] = [];
  for (let i = 1; i <= n; i++) {
    ar.push(i);
  }

  const memo: { [key: string]: number } = {};

  for (let x = 0; x < ar.length; x++) {
    const el = Math.round(ar.length / 2);
    for (let y = 0; y < ar.length; y++) {
      const key = ar.join(",");
      if (!(key in memo)) {
        memo[key] = Math.min(
          ...ar.reduce((acc: number[], num, z) => {
            if (z + 1 < ar.length) acc.push(Math.abs(num - ar[z + 1]));
            return acc;
          }, [])
        );
        if (memo[key] > max) {
          arr = [];
          max = memo[key];
          arr.push([...ar]);
        } else if (memo[key] === max) {
          max = memo[key];
          arr.push([...ar]);
        }
      }
      y === ar.length - 2
        ? ar.push(ar.splice(ar.length - 2, 1)[0])
        : ar.unshift(ar.splice(ar.length - 1, 1)[0]);
    }
  }
  return arr[Math.abs(k - arr.length)] || arr.pop();
}

console.log(solve(3, 5), `3 1 2`);
console.log(solve(4, 2), `3 1 4 2`);

console.log(solve(1, 1));
console.log(solve(1, 3));
console.log(solve(1, 5));
console.log(solve(1, 7));
console.log(solve(1, 6));
console.log(solve(1, 2));
console.log(solve(1, 9));
console.log(solve(1, 8));
console.log(solve(1, 10));
console.log(solve(1, 4));
