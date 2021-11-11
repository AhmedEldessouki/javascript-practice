"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBigger = void 0;
function nextBigger(n) {
    // your code here
    let shallContinue = true;
    let last = 0;
    function numCount() {
        const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        n.toString()
            .split("")
            .forEach((num, i, arr) => {
            const m = Number(num);
            if (i === 0) {
                last = m;
            }
            if (last < m) {
                shallContinue = false;
            }
            else {
                last = m;
            }
            counts[m] += 1;
            if (arr.length - 1 === i) {
                last = m;
            }
        });
        return counts;
    }
    const memo = numCount();
    if (shallContinue)
        return -1;
    let historyMemo = [...memo];
    last = Number(n.toString().split("").pop());
    while (!shallContinue) {
        if (last === 9) {
            last = 0;
        }
        else {
            last += 1;
        }
        n += 1;
        if (last === 0) {
            historyMemo = numCount();
        }
        else if (last === 1) {
            historyMemo[0] = historyMemo[0] - 1;
            historyMemo[1] = historyMemo[1] + 1;
        }
        else if (last === 2) {
            historyMemo[1] = historyMemo[1] - 1;
            historyMemo[2] = historyMemo[2] + 1;
        }
        else if (last === 3) {
            historyMemo[2] = historyMemo[2] - 1;
            historyMemo[3] = historyMemo[3] + 1;
        }
        else if (last === 4) {
            historyMemo[3] = historyMemo[3] - 1;
            historyMemo[4] = historyMemo[4] + 1;
        }
        else if (last === 5) {
            historyMemo[4] = historyMemo[4] - 1;
            historyMemo[5] = historyMemo[5] + 1;
        }
        else if (last === 6) {
            historyMemo[5] = historyMemo[5] - 1;
            historyMemo[6] = historyMemo[6] + 1;
        }
        else if (last === 7) {
            historyMemo[6] = historyMemo[6] - 1;
            historyMemo[7] = historyMemo[7] + 1;
        }
        else if (last === 8) {
            historyMemo[7] = historyMemo[7] - 1;
            historyMemo[8] = historyMemo[8] + 1;
        }
        else if (last === 9) {
            historyMemo[8] = historyMemo[8] - 1;
            historyMemo[9] = historyMemo[9] + 1;
        }
        if (memo[0] === historyMemo[0] &&
            memo[1] === historyMemo[1] &&
            memo[2] === historyMemo[2] &&
            memo[3] === historyMemo[3] &&
            memo[4] === historyMemo[4] &&
            memo[5] === historyMemo[5] &&
            memo[6] === historyMemo[6] &&
            memo[7] === historyMemo[7] &&
            memo[8] === historyMemo[8] &&
            memo[9] === historyMemo[9]) {
            return n;
        }
    }
    return n;
}
exports.nextBigger = nextBigger;
console.log(nextBigger(12), 21);
console.log(nextBigger(513), 531);
console.log(nextBigger(2017), 2071);
console.log(nextBigger(414), 441);
console.log(nextBigger(144), 414);
console.log(nextBigger(123456789), 123456798);
console.log(nextBigger(1234567890), 1234567908);
console.log(nextBigger(9876543210), -1);
console.log(nextBigger(9999999999), -1);
console.log(nextBigger(59884848459853), 59884848483559);
59884848459862;
