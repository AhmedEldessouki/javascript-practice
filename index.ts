function foldArray(array: number[], runs: number): number[] {
  let result: number[] = array;
  for (let i = 0; i < runs; i++) {
    const foldingPoint = result.length / 2;
    let firstLoop = [];
    for (let x = 0; x < Math.round(foldingPoint); x++) {
      firstLoop.push(
        result.length % 2
          ? result.length - x > Math.round(foldingPoint)
            ? result[x] + result[result.length - x - 1]
            : result[x]
          : result[x] + result[result.length - x - 1]
      );
    }
    result = firstLoop;
  }
  return result;
}

const input = [1, 2, 3, 4, 5];

console.log(foldArray(input, 1), "[ 6, 6, 3 ]");
console.log(foldArray(input, 2), "[ 9, 6 ]");
console.log(foldArray(input, 3), "[ 15 ]");
