"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
    static lengthSupUK(n, k) {
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
    static comp(n) {
        // your code
        let lowerThanPreprocessor = 0;
        for (let i = 8; i <= n; i++) {
            this.u[i] = this.u[i - this.u[i - 1]] + this.u[i - this.u[i - 2]];
            if (this.u[i] < this.u[i - 1]) {
                lowerThanPreprocessor++;
            }
        }
        return lowerThanPreprocessor;
    }
}
exports.G964 = G964;
G964.u = [0, 1, 1, 2, 3, 3, 4, 5];
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
