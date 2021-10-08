export class G964 {
  public static decompose = (n: number, m: number = 0): number[] | string => {
    // your code
    const goal = Math.pow(n, 2);
    let x = n - 1;
    let y = 0;
    let nums: number[] = [];
    while (goal !== y && x >= 0) {
      if (goal > y) {
        y += Math.pow(x, 2);
        nums.push(x);
        if (goal < y) {
          y -= Math.pow(x, 2);
          nums.pop();
        }
        if (x === 0 && goal > y) {
          if (m !== 0) {
            x = nums[0] - 1;
            nums = [];
            y = 0;
          } else {
            x = nums[1] - 1;
            nums = nums.splice(0, 1);
            y = Math.pow(nums[0], 2);
          }
        } else {
          x--;
        }
      }
    }
    return goal === y
      ? nums.reverse()
      : m === 0
      ? this.decompose(n, 1)
      : "Nothing";
  };
}

console.log(G964.decompose(4), "Nothing");
console.log(G964.decompose(12), [1, 2, 3, 7, 9]);
console.log(G964.decompose(50), [1, 3, 5, 8, 49]);
console.log(G964.decompose(44), [2, 3, 5, 7, 43]);
