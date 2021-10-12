export class G964 {
  public static part = (n: number) => {
    // your code
    const en = (n: number) => {
      const solution = [[n]];
      for (let x = n - 1; x > 0; x--) {
        //? this to prevent repeating
        // for (let y = n - x > 0 ? n - x : x; y > 0; y--) {
        for (let y = x; y > 0; y--) {
          //? and this is to prevent y from going higher than x
          // if (y <= x) {
          let arr = [x];
          let sum = x;
          let z = y;
          while (z > 0) {
            if (sum + z <= n) {
              sum += z;
              arr.push(z);
            } else {
              z--;
            }
          }
          solution.push(arr);
          // }
        }
      }
      return solution;
    };

    const m = en(n);
    console.log(m);
    // const productSet = new Set(
    //   m
    //     .map((arr) => arr.reduce((acc, num) => (acc *= num), 1))
    //     .sort((a, b) => a - b)
    // );
    // const product = [...productSet.keys()];
    // console.log(m, productSet, product);
    // const range = Math.max(...product) - Math.min(...product);
    // const average =
    //   product.reduce((acc, num) => (acc += num), 0) / product.length;
    // const prodLen = product.length;
    // const median =
    //   prodLen % 2 !== 0
    //     ? product[Math.floor(prodLen / 2)]
    //     : (product[prodLen / 2 - 1] + product[prodLen / 2]) / 2;
    // // console.log(range, average, `'''`, product, prodLen, prodLen / 2, median);
    // return `Range: ${range} Average: ${average.toFixed(
    //   2
    // )} Median: ${median.toFixed(2)}`;
  };
}

console.log(G964.part(5), "Range: 5 Average: 3.50 Median: 3.50");
console.log(G964.part(8), "Range: 17 Average: 8.29 Median: 7.50");
console.log(G964.part(9), "Range: 26 Average: 11.17 Median: 9.50");
console.log(G964.part(10), "Range: 35 Average: 15.00 Median: 14.00");
// console.log(G964.part(40), "Range: 35 Average: 15.00 Median: 14.00");
