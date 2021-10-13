"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
    static going(n) {
        const factorialsSum = [0];
        // your code
        let sum = 1;
        for (let i = 1; i <= n; i++) {
            sum *= i;
            factorialsSum[i] = sum;
        }
        const b = factorialsSum.reduce((acc, num) => (acc += num), 0);
        return Number(((1 / factorialsSum[n]) * b)
            .toString()
            .split(".")
            .map((item, i) => {
            if (i === 0)
                return item;
            return item.slice(0, 6);
        })
            .join("."));
    }
}
exports.G964 = G964;
console.log(G964.going(5), 1.275);
console.log(G964.going(6), 1.2125);
console.log(G964.going(7), 1.173214);
// ! Infinity Returns NaN
console.log(G964.going(178), 1.005649);
