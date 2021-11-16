"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixbonacci = void 0;
function mixbonacci(pattern, length) {
    // Implement me! :)
    if (pattern.length === 0 || length === 0) {
        return [];
    }
    const store = {
        fib: {
            bank: [0, 1, 1, 2, 3],
            index: 0,
        },
        pad: {
            bank: [1, 0, 0, 1, 0],
            index: 0,
        },
        jac: {
            bank: [0, 1, 1, 3, 5],
            index: 0,
        },
        pel: {
            bank: [0, 1, 2, 5, 12],
            index: 0,
        },
        tri: {
            bank: [0, 0, 1, 1, 2],
            index: 0,
        },
        tet: {
            bank: [0, 0, 0, 1, 1],
            index: 0,
        },
    };
    for (let i = 4; i < length; i++) {
        store.fib.bank[i] = store.fib.bank[i - 1] + store.fib.bank[i - 2];
        store.pad.bank[i] = store.pad.bank[i - 2] + store.pad.bank[i - 3];
        store.jac.bank[i] = store.jac.bank[i - 1] + 2 * store.jac.bank[i - 2];
        store.pel.bank[i] = 2 * store.pel.bank[i - 1] + store.pel.bank[i - 2];
        store.tet.bank[i] =
            store.tet.bank[i - 1] +
                store.tet.bank[i - 2] +
                store.tet.bank[i - 3] +
                store.tet.bank[i - 4];
        store.tri.bank[i] =
            store.tri.bank[i - 1] + store.tri.bank[i - 2] + store.tri.bank[i - 3];
    }
    if (pattern.length === 1) {
        return store[pattern[0]].bank;
    }
    const toBeReturned = [];
    for (let a = 0; a < length;) {
        for (let b = 0; b < pattern.length && a < length; a++, b++) {
            const pat = pattern[b];
            const val = store[pat].bank[store[pat].index];
            store[pat].index += 1;
            toBeReturned.push(val);
        }
    }
    return toBeReturned;
}
exports.mixbonacci = mixbonacci;
// console.log(mixbonacci([], 10), []);
// console.log(mixbonacci(["fib"], 0), []);
// console.log(mixbonacci(["fib"], 10), "fib:", [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
// console.log(mixbonacci(["pad"], 10), "pad:", [1, 0, 0, 1, 0, 1, 1, 1, 2, 2]);
// console.log(mixbonacci(["jac"], 10), "jac:", [
//   0,
//   1,
//   1,
//   3,
//   5,
//   11,
//   21,
//   43,
//   85,
//   171,
// ]);
// console.log(mixbonacci(["pel"], 10), "pel:", [
//   0,
//   1,
//   2,
//   5,
//   12,
//   29,
//   70,
//   169,
//   408,
//   985,
// ]);
// console.log(mixbonacci(["tri"], 10), "tri:", [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
// console.log(mixbonacci(["tet"], 10), "tet:", [0, 0, 0, 1, 1, 2, 4, 8, 15, 29]);
// console.log(mixbonacci(["fib", "tet"], 10), [0, 0, 1, 0, 1, 0, 2, 1, 3, 1]);
console.log(mixbonacci(["jac", "jac", "pel"], 10), [
    0,
    1,
    0,
    1,
    3,
    1,
    5,
    11,
    2,
    21,
]);
console.log(mixbonacci(["jac", "fib", "pel"], 10), [
    0,
    1,
    0,
    1,
    3,
    1,
    5,
    11,
    2,
    21,
]);
// ! to be checked
[
    0,
    1,
    2,
    5,
    12,
    29,
    70,
    169,
    408,
    985,
    2378,
    5741,
    13860,
    33461,
    80782,
    195025,
    470832,
    1136689,
    2744210,
    6625109,
    15994428,
    38613965,
    93222358,
    225058681,
    543339720,
    1311738121,
    3166815962,
    7645370045,
    18457556052,
    44560482149,
    107578520350,
    259717522849,
    627013566048,
    1513744654945,
    3654502875938,
    8822750406821,
    21300003689580,
    51422757785981,
    124145519261542,
    299713796309065,
    723573111879672,
    1746860020068409,
    4217293152016490,
    10181446324101388,
    24580185800219264,
    59341817924539920,
    143263821649299100,
    345869461223138100,
    835002744095575300,
    2015874949414288600,
    4866752642924153000,
    11749380235262595000,
    28365513113449340000,
    68480406462161270000,
];
[
    0,
    1,
    2,
    5,
    12,
    29,
    70,
    169,
    408,
    985,
    2378,
    5741,
    13860,
    33461,
    80782,
    195025,
    470832,
    1136689,
    2744210,
    6625109,
    15994428,
    38613965,
    93222358,
    225058681,
    543339720,
    1311738121,
    3166815962,
    7645370045,
    18457556052,
    44560482149,
    107578520350,
    259717522849,
    627013566048,
    1513744654945,
    3654502875938,
    8822750406821,
    21300003689580,
    51422757785981,
    124145519261542,
    299713796309065,
    723573111879672,
    1746860020068409,
    4217293152016490,
    10181446324101388,
    24580185800219264,
    59341817924539920,
    143263821649299100,
    345869461223138200,
    835002744095575400,
    2015874949414289000,
    4866752642924153000,
    11749380235262595000,
    28365513113449340000,
    68480406462161280000,
];
