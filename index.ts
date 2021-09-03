function multiplication(
  n: number,
  m: number,
  memo: { [key: string]: number } = {}
): number {
  if (n === 0 || m === 0) {
    return 0;
  }
  if (m.toString().length < 2) return n * m;
  if (m in memo) return memo[m];

  let totalCount = 0;
  const arrOfM = m.toString().split("").reverse();

  for (let i = 0; i < arrOfM.length; i++) {
    let num = arrOfM[i];
    memo[num] = Number(
      multiplication(n, Number(num), memo) + Array(i).fill(0).join("")
    );
    totalCount += memo[num];
  }

  memo[m] = totalCount;
  return totalCount;
}

console.log(multiplication(2, 2)); // 4
console.log(multiplication(22, 22)); // 484
console.log(multiplication(22, 2253)); // 49566
console.log(multiplication(214532, 0)); // 0
console.log(multiplication(214532, 145368722)); // 31186242668104
