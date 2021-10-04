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
function checker(maze, current) {
    if (current[0] === 0) {
        return true;
    }
    else if (current[1] === 0) {
        return true;
    }
    else if (current[0] === maze.length - 1) {
        return true;
    }
    else if (current[1] === maze[0].length - 1) {
        return true;
    }
    return false;
}
function handlingMaze(maze, direction, directions, current, movements) {
    if (direction === void 0) { direction = "<"; }
    if (directions === void 0) { directions = ["^", "<", "v", ">"]; }
    if (movements === void 0) { movements = []; }
    var z = 0;
    while (current !== [0, 0]) {
        if (z > 5) {
            // console.log(
            //   `handle`,
            //   maze.map((item) => item.join("")),
            //   current,
            //   direction
            // );
            if (checker(maze, current))
                return { current: current, movements: movements, direction: direction, maze: maze };
            return false;
        }
        if (direction === "^") {
            if (maze[current[0]][current[1]] === " ") {
                maze[current[0]][current[1]] = ".";
            }
            if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                maze[current[0]][current[1]] = direction;
                movements.push("F");
                z = 0;
                if (current[1] - 1 >= 0 && maze[current[0]][current[1] - 1] === " ") {
                    var res = handlingMaze(maze, directions[1], directions, [current[0], current[1] - 1], __spreadArray(__spreadArray([], movements, true), ["L", "F"], false));
                    if (res) {
                        movements = res.movements;
                        maze = res.maze;
                        maze[current[0]][current[1]] = direction;
                        direction = res.direction;
                        current = res.current;
                    }
                }
                if (current[1] + 1 < maze[0].length &&
                    maze[current[0]][current[1] + 1] === " ") {
                    var res = handlingMaze(maze, directions[3], directions, [current[0], current[1] + 1], __spreadArray(__spreadArray([], movements, true), ["R", "F"], false));
                    if (res) {
                        movements = res.movements;
                        maze = res.maze;
                        maze[current[0]][current[1]] = direction;
                        direction = res.direction;
                        current = res.current;
                    }
                }
            }
            else if (current[1] - 1 >= 0 &&
                maze[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[1];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[1] + 1 < maze[0].length &&
                maze[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                direction = directions[3];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[0] + 1 < maze.length &&
                maze[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === ">") {
            if (maze[current[0]][current[1]] === " ") {
                maze[current[0]][current[1]] = ".";
            }
            if (current[1] + 1 < maze[0].length &&
                maze[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                maze[current[0]][current[1]] = direction;
                movements.push("F");
                z = 0;
                if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
                    var res = handlingMaze(maze, directions[0], directions, [current[0] - 1, current[1]], __spreadArray(__spreadArray([], movements, true), ["L", "F"], false));
                    if (res) {
                        movements = res.movements;
                        maze = res.maze;
                        maze[current[0]][current[1]] = direction;
                        direction = res.direction;
                        current = res.current;
                    }
                }
                if (current[0] + 1 < maze[0].length &&
                    maze[current[0] + 1][current[1]] === " ") {
                    var res = handlingMaze(maze, directions[2], directions, [current[0] + 1, current[1]], __spreadArray(__spreadArray([], movements, true), ["R", "F"], false));
                    if (res) {
                        movements = res.movements;
                        maze = res.maze;
                        maze[current[0]][current[1]] = direction;
                        direction = res.direction;
                        current = res.current;
                    }
                }
            }
            else if (current[0] - 1 >= 0 &&
                maze[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[0] + 1 < maze.length &&
                maze[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[1] - 1 >= 0 &&
                maze[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[1];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === "v") {
            // ! ["^", "<", "v", ">"]
            if (maze[current[0]][current[1]] === " ") {
                maze[current[0]][current[1]] = ".";
            }
            if (current[0] + 1 < maze.length &&
                maze[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                maze[current[0]][current[1]] = direction;
                movements.push("F");
                z = 0;
                if (current[1] + 1 < maze[0].length &&
                    maze[current[0]][current[1] + 1] === " ") {
                    var res = handlingMaze(maze, directions[3], directions, [current[0], current[1] + 1], __spreadArray(__spreadArray([], movements, true), ["L", "F"], false));
                    if (res) {
                        movements = res.movements;
                        maze = res.maze;
                        maze[current[0]][current[1]] = direction;
                        direction = res.direction;
                        current = res.current;
                    }
                }
                if (current[1] - 1 >= 0 && maze[current[0]][current[1] - 1] === " ") {
                    var res = handlingMaze(maze, directions[2], directions, [current[0], current[1] - 1], __spreadArray(__spreadArray([], movements, true), ["R", "F"], false));
                    if (res) {
                        movements = res.movements;
                        maze = res.maze;
                        maze[current[0]][current[1]] = direction;
                        direction = res.direction;
                        current = res.current;
                    }
                }
            }
            else if (current[1] + 1 < maze[0].length &&
                maze[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                direction = directions[3];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[1] - 1 >= 0 &&
                maze[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[0] - 1 >= 0 &&
                maze[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === "<") {
            // ! ["^", "<", "v", ">"]
            if (maze[current[0]][current[1]] === " ") {
                maze[current[0]][current[1]] = ".";
            }
            if (current[1] - 1 >= 0 && maze[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                maze[current[0]][current[1]] = direction;
                movements.push("F");
                z = 0;
                if (current[0] + 1 < maze.length &&
                    maze[current[0] + 1][current[1]] === " ") {
                    var res = handlingMaze(maze, directions[2], directions, [current[0] + 1, current[1]], __spreadArray(__spreadArray([], movements, true), ["L", "F"], false));
                    if (res) {
                        movements = res.movements;
                        maze = res.maze;
                        maze[current[0]][current[1]] = direction;
                        direction = res.direction;
                        current = res.current;
                    }
                }
                if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
                    var res = handlingMaze(maze, directions[0], directions, [current[0] - 1, current[1]], __spreadArray(__spreadArray([], movements, true), ["R", "F"], false));
                    if (res) {
                        movements = res.movements;
                        maze = res.maze;
                        maze[current[0]][current[1]] = direction;
                        direction = res.direction;
                        current = res.current;
                    }
                }
            }
            else if (current[0] + 1 < maze.length &&
                maze[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[0] - 1 >= 0 &&
                maze[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[1] + 1 < maze[0].length &&
                maze[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                direction = directions[3];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        z++;
    }
    return false;
}
function esc(maze, direction, current, movements) {
    if (direction === void 0) { direction = "<"; }
    if (current === void 0) { current = [0, 0]; }
    if (movements === void 0) { movements = []; }
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
    // console.log(current, direction);
    var z = 0;
    while (current !== [0, 0]) {
        if (z > 3) {
            if (checker(mazee, current)) {
                return movements;
            }
            // console.log(
            //   `here`,
            //   mazee.map((item) => item.join("")),
            //   current,
            //   direction
            // );
            return [];
        }
        if (direction === "^") {
            if (maze[current[0]][current[1]] === " ")
                mazee[current[0]][current[1]] = ".";
            if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                mazee[current[0]][current[1]] = direction;
                movements.push("F");
                z = 0;
                if (current[1] - 1 >= 0 && maze[current[0]][current[1] - 1] === " ") {
                    var res = handlingMaze(mazee, directions[1], directions, [current[0], current[1] - 1], __spreadArray(__spreadArray([], movements, true), ["L", "F"], false));
                    if (res) {
                        movements = res.movements;
                        mazee = res.maze;
                        direction = res.direction;
                        current = res.current;
                        mazee[current[0]][current[1]] = direction;
                        if (checker(res.maze, res.current)) {
                            return movements;
                        }
                    }
                }
                if (current[1] + 1 < maze[0].length &&
                    maze[current[0]][current[1] + 1] === " ") {
                    var res = handlingMaze(mazee, directions[3], directions, [current[0], current[1] + 1], __spreadArray(__spreadArray([], movements, true), ["R", "F"], false));
                    if (res) {
                        movements = res.movements;
                        mazee = res.maze;
                        direction = res.direction;
                        current = res.current;
                        mazee[current[0]][current[1]] = direction;
                        if (checker(res.maze, res.current)) {
                            return movements;
                        }
                    }
                }
            }
            else if (current[1] - 1 >= 0 &&
                maze[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[1];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[1] + 1 < maze[0].length &&
                maze[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                direction = directions[3];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[0] + 1 < maze.length &&
                maze[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === ">") {
            if (maze[current[0]][current[1]] === " ")
                mazee[current[0]][current[1]] = ".";
            if (current[1] + 1 < maze[0].length &&
                maze[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                mazee[current[0]][current[1]] = direction;
                movements.push("F");
                z = 0;
                if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
                    var res = handlingMaze(mazee, directions[0], directions, [current[0] - 1, current[1]], __spreadArray(__spreadArray([], movements, true), ["L", "F"], false));
                    if (res) {
                        movements = res.movements;
                        mazee = res.maze;
                        direction = res.direction;
                        current = res.current;
                        mazee[current[0]][current[1]] = direction;
                        if (checker(res.maze, res.current)) {
                            return movements;
                        }
                    }
                }
                if (current[0] + 1 < maze[0].length &&
                    maze[current[0] + 1][current[1]] === " ") {
                    var res = handlingMaze(mazee, directions[2], directions, [current[0] + 1, current[1]], __spreadArray(__spreadArray([], movements, true), ["R", "F"], false));
                    if (res) {
                        movements = res.movements;
                        mazee = res.maze;
                        direction = res.direction;
                        current = res.current;
                        mazee[current[0]][current[1]] = direction;
                        if (checker(res.maze, res.current)) {
                            return movements;
                        }
                    }
                }
            }
            else if (current[0] - 1 >= 0 &&
                maze[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[0] + 1 < maze.length &&
                maze[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[1] - 1 >= 0 &&
                maze[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[1];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === "v") {
            // ! ["^", "<", "v", ">"]
            if (maze[current[0]][current[1]] === " ")
                mazee[current[0]][current[1]] = ".";
            if (current[0] + 1 < maze.length &&
                maze[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                mazee[current[0]][current[1]] = direction;
                movements.push("F");
                z = 0;
                if (current[1] + 1 < maze[0].length &&
                    maze[current[0]][current[1] + 1] === " ") {
                    var res = handlingMaze(mazee, directions[3], directions, [current[0], current[1] + 1], __spreadArray(__spreadArray([], movements, true), ["L", "F"], false));
                    if (res) {
                        movements = res.movements;
                        mazee = res.maze;
                        direction = res.direction;
                        current = res.current;
                        mazee[current[0]][current[1]] = direction;
                        if (checker(res.maze, res.current)) {
                            return movements;
                        }
                    }
                }
                if (current[1] - 1 >= 0 && maze[current[0]][current[1] - 1] === " ") {
                    var res = handlingMaze(mazee, directions[2], directions, [current[0], current[1] - 1], __spreadArray(__spreadArray([], movements, true), ["R", "F"], false));
                    if (res) {
                        movements = res.movements;
                        mazee = res.maze;
                        direction = res.direction;
                        current = res.current;
                        mazee[current[0]][current[1]] = direction;
                        if (checker(res.maze, res.current)) {
                            return movements;
                        }
                    }
                }
            }
            else if (current[1] + 1 < maze[0].length &&
                maze[current[0]][current[1] + 1] === " ") {
                current[1] += 1;
                direction = directions[3];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[1] - 1 >= 0 &&
                maze[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[0] - 1 >= 0 &&
                maze[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["B", "F"], false);
                z = 0;
            }
        }
        if (direction === "<") {
            // ! ["^", "<", "v", ">"]
            if (maze[current[0]][current[1]] === " ")
                mazee[current[0]][current[1]] = ".";
            if (current[1] - 1 >= 0 && maze[current[0]][current[1] - 1] === " ") {
                current[1] -= 1;
                mazee[current[0]][current[1]] = direction;
                movements.push("F");
                z = 0;
                if (current[0] + 1 < maze.length &&
                    maze[current[0] + 1][current[1]] === " ") {
                    var res = handlingMaze(mazee, directions[2], directions, [current[0] + 1, current[1]], __spreadArray(__spreadArray([], movements, true), ["L", "F"], false));
                    if (res) {
                        movements = res.movements;
                        mazee = res.maze;
                        direction = res.direction;
                        current = res.current;
                        mazee[current[0]][current[1]] = direction;
                        if (checker(res.maze, res.current)) {
                            return movements;
                        }
                    }
                }
                if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
                    var res = handlingMaze(mazee, directions[0], directions, [current[0] - 1, current[1]], __spreadArray(__spreadArray([], movements, true), ["R", "F"], false));
                    if (res) {
                        movements = res.movements;
                        mazee = res.maze;
                        direction = res.direction;
                        current = res.current;
                        mazee[current[0]][current[1]] = direction;
                        if (checker(res.maze, res.current)) {
                            return movements;
                        }
                    }
                }
            }
            else if (current[0] + 1 < maze.length &&
                maze[current[0] + 1][current[1]] === " ") {
                current[0] += 1;
                direction = directions[2];
                movements = __spreadArray(__spreadArray([], movements, true), ["L", "F"], false);
            }
            else if (current[0] - 1 >= 0 &&
                maze[current[0] - 1][current[1]] === " ") {
                current[0] -= 1;
                direction = directions[0];
                movements = __spreadArray(__spreadArray([], movements, true), ["R", "F"], false);
                z = 0;
            }
            else if (current[1] + 1 < maze[0].length &&
                maze[current[0]][current[1] + 1] === " ") {
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
