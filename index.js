"use strict";
exports.__esModule = true;
exports.dirReduce = void 0;
function dirReduce(arr) {
    var x = true;
    var i = 0;
    while (x) {
        if (i + 1 < arr.length &&
            ((arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
                (arr[i + 1] === "SOUTH" && arr[i] === "NORTH") ||
                (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
                (arr[i + 1] === "WEST" && arr[i] === "EAST"))) {
            arr.splice(i, 2);
            console.log(arr);
            i = 0;
        }
        else if (i === arr.length - 1 || i === arr.length) {
            x = false;
        }
        else {
            i++;
        }
    }
    return arr;
}
exports.dirReduce = dirReduce;
console.log(dirReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
console.log(dirReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]), []);
