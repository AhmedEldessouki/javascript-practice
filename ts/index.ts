export class G964 {
  static u: number[] = [0, 1, 1, 2, 3, 3, 4, 5];
  public static lengthSupUK(n: number, k: number): number {
    // your code
    let greaterThanKCount = 0;
    for (let i = 8; i <= n; i++) {
      this.u[i] = this.u[i - this.u[i - 1]] + this.u[i - this.u[i - 2]];
      if (this.u[i] >= k) {
        greaterThanKCount++;
      }
    }
    return greaterThanKCount;
  }

  public static comp(n: number): number {
    // your code
    let lowerThanKCount = 0;
    for (let i = 8; i <= n; i++) {
      this.u[i] = this.u[i - this.u[i - 1]] + this.u[i - this.u[i - 2]];
      if (this.u[i] < this.u[i - 1]) {
        lowerThanKCount++;
      }
    }
    return lowerThanKCount;
  }
}

console.log(G964.lengthSupUK(50, 25), 2);
console.log(G964.lengthSupUK(3332, 973), 1391);
console.log(G964.lengthSupUK(2941, 862), 1246);
console.log(G964.lengthSupUK(3177, 573), 2047);
console.log(G964.lengthSupUK(1745, 645), 474);

console.log(G964.comp(74626), 37128);
console.log(G964.comp(71749), 35692);
console.log(G964.comp(56890), 28281);
console.log(G964.comp(60441), 30054);
console.log(G964.comp(21361), 10581);
