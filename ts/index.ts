export class G964 {
  public static going(n: number): number {
    const factorialsSum: number[] = [0];
    // your code
    let str = "";
    const x = n > 200 ? 200 : n;
    for (let i = 0; i < x; i++) {
      str += "0";
    }
    let fac = Number("0." + str + "1");
    let y = 1;
    for (let i = 1; i <= n; i++) {
      fac *= i;
      // if (i === 201) {
      //   fac = Number("0." + str + "1");
      // }
      // if (i === 351) {
      //   fac = Number("0." + str + "1");
      // }
      if (y === 201) {
        console.log(`-----------------------`);
        fac = Number("0." + str + "1");
      }
      if (y === 351) {
        console.log(`-----------------------`);
        y = 1;
        fac = Number("0." + str + "1");
      }
      // console.log(i, fac);
      factorialsSum[i] = fac;
      y++;
    }
    const b: number = factorialsSum.reduce((acc, num, i) => {
      if (y === 201 && n > 200) {
        acc = Number("0." + str + "1");
      }
      if (y === 351 && n > 200) {
        y = 1;
        acc = Number("0." + str + "1");
      }
      y++;
      return (acc += num);
    }, 0);

    return Number(
      ((1 / factorialsSum[n]) * b)
        .toString()
        .split(".")
        .map((item, i) => {
          if (i === 0) return item;
          return item.slice(0, 6);
        })
        .join(".")
    );
  }
}

console.log(G964.going(5), 1.275);
console.log(G964.going(6), 1.2125);
console.log(G964.going(7), 1.173214);
console.log(G964.going(200), 1.005025);
console.log(G964.going(172), 1.005848);
console.log(G964.going(175), 1.005747);
console.log(G964.going(523), 1.001915);
//Test : 123 n: 102 --> 1.009901
console.log(G964.going(1011), 1.00099);
