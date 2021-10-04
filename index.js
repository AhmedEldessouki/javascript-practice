// Return the array of movements to execute to get out of the maze
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// * 'F' move one step forward
// * 'L' turn left
// * 'R' turn right
// * 'B' turn back
// ? Note: 'L','R', and 'B'
// ? ONLY perform a rotation and will not move your body
function esc(maze, direction, current) {
    if (direction === void 0) { direction = "<"; }
    if (current === void 0) { current = [0, 0]; }
    // Have a nice sleep ;)
    var directions = ["^", "<", "v", ">"];
    var starters = ["^", "<", "v", ">"];
    var mazee = maze.map(function (str) { return str.split(""); });
    for (var x = 0; x < maze.length; x++) {
        var y = -1;
        for (var i = 0; i < starters.length; i++) {
            y = mazee[x].indexOf(starters[i]);
            if (y > -1) {
                current[0] = x;
                current[1] = y;
                break;
            }
        }
        if (y > -1) {
            current = [x, y];
            direction = mazee[x][y];
            break;
        }
    }
    console.log(current, direction);
    var movements = [];
    var z = 0;
    while (current !== [0, 0]) {
        if (z > 2) {
            console.log("here", mazee.map(function (item) { return item.join(""); }), current, direction);
            return movements;
        }
        if (direction === "^") {
            mazee[current[0]][current[1]] = ".";
            if (current[0] - 1 >= 0 && mazee[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                movements.push("F");
                z = 0;
            }
            else if (current[1] - 1 >= 0 &&
                mazee[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[1];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[1] + 1 < maze[0].length &&
                mazee[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                direction = directions[3];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[0] + 1 < maze.length &&
                mazee[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === ">") {
            mazee[current[0]][current[1]] = ".";
            if (current[1] + 1 < maze[0].length &&
                mazee[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                movements.push("F");
                z = 0;
            }
            else if (current[0] - 1 >= 0 &&
                mazee[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[0] + 1 < maze.length &&
                mazee[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[1] - 1 >= 0 &&
                mazee[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[1];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === "v") {
            // ! ["^", "<", "v", ">"]
            mazee[current[0]][current[1]] = ".";
            if (current[0] + 1 < maze.length &&
                mazee[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                movements.push("F");
                z = 0;
            }
            else if (current[1] + 1 < maze[0].length &&
                mazee[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                direction = directions[3];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[1] - 1 >= 0 &&
                mazee[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[0] - 1 >= 0 &&
                mazee[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === "<") {
            // ! ["^", "<", "v", ">"]
            mazee[current[0]][current[1]] = ".";
            if (current[1] - 1 >= 0 && mazee[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                movements.push("F");
                z = 0;
            }
            else if (current[0] + 1 < maze.length &&
                mazee[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[0] - 1 >= 0 &&
                mazee[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[1] + 1 < maze[0].length &&
                mazee[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                direction = directions[3];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        z++;
    }
    return movements;
}
var basicMazes = [];
basicMazes = ["# #", " > ", "# #"];
console.log(esc(basicMazes));
basicMazes = ["##########", "#>       #", "######## #"];
console.log(esc(basicMazes));
basicMazes = ["# ########", "#       >#", "##########"];
console.log(esc(basicMazes));
basicMazes = ["####### #", "#>#   # #", "#   #   #", "#########"];
console.log(esc(basicMazes));
basicMazes = [
    "##########",
    "#        #",
    "#  ##### #",
    "#  #   # #",
    "#  #^# # #",
    "#  ### # #",
    "#      # #",
    "######## #",
];
console.log(esc(basicMazes));
basicMazes = [
    "#########################################",
    "#<    #       #     #         # #   #   #",
    "##### # ##### # ### # # ##### # # # ### #",
    "# #   #   #   #   #   # #     #   #   # #",
    "# # # ### # ########### # ####### # # # #",
    "#   #   # # #       #   # #   #   # #   #",
    "####### # # # ##### # ### # # # #########",
    "#   #     # #     # #   #   # # #       #",
    "# # ####### ### ### ##### ### # ####### #",
    "# #             #   #     #   #   #   # #",
    "# ############### ### ##### ##### # # # #",
    "#               #     #   #   #   # #   #",
    "##### ####### # ######### # # # ### #####",
    "#   # #   #   # #         # # # #       #",
    "# # # # # # ### # # ####### # # ### ### #",
    "# # #   # # #     #   #     # #     #   #",
    "# # ##### # # ####### # ##### ####### # #",
    "# #     # # # #   # # #     # #       # #",
    "# ##### ### # ### # # ##### # # ### ### #",
    "#     #     #     #   #     #   #   #    ",
    "#########################################",
];
console.log(esc(basicMazes));
