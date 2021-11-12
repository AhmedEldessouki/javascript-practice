"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
}
exports.G964 = G964;
G964.gap = (g, m, n) => {
    // your code
    let a = 0, b = 0;
    for (let i = m; i <= n; i++) {
        for (let x = 2; x < m; x++) {
            if (i % x == 0) {
                break;
            }
            else if (x === m - 1) {
                if (b - a === g) {
                    return [a, b];
                }
                else if (b - a !== g) {
                    a = b;
                    b = i;
                }
                else {
                    if (a === 0) {
                        a = i;
                    }
                    if (b === 0) {
                        b = i;
                    }
                }
            }
        }
    }
    return null;
};
console.log(G964.gap(2, 100, 110), [101, 103]);
console.log(G964.gap(4, 100, 110), [103, 107]);
console.log(G964.gap(6, 100, 110), null);
console.log(G964.gap(8, 300, 400), [359, 367]);
console.log(G964.gap(10, 300, 400), [337, 347]);
