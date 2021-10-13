export class G964 {
  public static part = (n: number) => {
    // your code
    const en = (n: number) => {
      const solution = [[n]];
      var temp = [];
      for (var i = 0; i < n; ++i) temp.push(1);
      while (temp[0] != n) {
        solution.push([...temp]);
        var min = temp[0];
        var minIndex = 0;
        var sum = temp[0];
        var tempSum = temp[0];
        for (var j = 1; j < temp.length - 1; ++j) {
          tempSum += temp[j];
          if (min > temp[j]) {
            min = temp[j];
            minIndex = j;
            sum = tempSum;
          }
        }
        temp[minIndex] += 1;
        sum += 1;
        temp.splice(minIndex + 1);
        for (var k = 0; k < n - sum; ++k) temp.push(1);
      }

      return solution;
    };

    const m = en(n);
    const productSet = new Set(
      m
        .map((arr) => arr.reduce((acc, num) => (acc *= num), 1))
        .sort((a, b) => a - b)
    );
    const product = [...productSet.keys()];
    console.log(m, product);
    const range = Math.max(...product) - Math.min(...product);
    const average =
      product.reduce((acc, num) => (acc += num), 0) / product.length;
    const prodLen = product.length;
    const median =
      prodLen % 2 !== 0
        ? product[Math.floor(prodLen / 2)]
        : (product[prodLen / 2 - 1] + product[prodLen / 2]) / 2;
    return `Range: ${range} Average: ${average.toFixed(
      2
    )} Median: ${median.toFixed(2)}`;
  };
}

console.log(G964.part(5), "Range: 5 Average: 3.50 Median: 3.50");
console.log(G964.part(8), "Range: 17 Average: 8.29 Median: 7.50");
console.log(G964.part(9), "Range: 26 Average: 11.17 Median: 9.50");
console.log(G964.part(10), "Range: 35 Average: 15.00 Median: 14.00");
console.log(G964.part(50), "Range: 204226 Average: 15.00 Median: 14.00");
