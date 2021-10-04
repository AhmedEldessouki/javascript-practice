// Return the array of movements to execute to get out of the maze

// * 'F' move one step forward
// * 'L' turn left
// * 'R' turn right
// * 'B' turn back
// ? Note: 'L','R', and 'B'
// ? ONLY perform a rotation and will not move your body

type SomeType =
  | {
      maze: Array<Array<string>>;
      direction: "^" | "<" | "v" | ">";
      current: [number, number];
      movements: Array<string>;
    }
  | false;

function checker(maze: Array<Array<string>>, current: [number, number]) {
  if (current[0] === 0) {
    return true;
  } else if (current[1] === 0) {
    return true;
  } else if (current[0] === maze.length - 1) {
    return true;
  } else if (current[1] === maze[0].length - 1) {
    return true;
  }
  return false;
}

function handlingMaze(
  maze: Array<Array<string>>,
  direction: "^" | "<" | "v" | ">" = "<",
  directions: ["^", "<", "v", ">"] = ["^", "<", "v", ">"],
  current: [number, number],
  movements: Array<string> = []
): SomeType {
  let z = 0;
  while (current !== [0, 0]) {
    if (z > 5) {
      // console.log(
      //   `handle`,
      //   maze.map((item) => item.join("")),
      //   current,
      //   direction
      // );
      if (checker(maze, current))
        return { current, movements, direction, maze };
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
          const res: SomeType = handlingMaze(
            maze,
            directions[1],
            directions,
            [current[0], current[1] - 1],
            [...movements, "L", "F"]
          );
          if (res) {
            movements = res.movements;
            maze = res.maze;
            maze[current[0]][current[1]] = direction;

            direction = res.direction;
            current = res.current;
          }
        }
        if (
          current[1] + 1 < maze[0].length &&
          maze[current[0]][current[1] + 1] === " "
        ) {
          const res: SomeType = handlingMaze(
            maze,
            directions[3],
            directions,
            [current[0], current[1] + 1],
            [...movements, "R", "F"]
          );
          if (res) {
            movements = res.movements;
            maze = res.maze;
            maze[current[0]][current[1]] = direction;

            direction = res.direction;
            current = res.current;
          }
        }
      } else if (
        current[1] - 1 >= 0 &&
        maze[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[1];
        movements = [...movements, "L", "F"];
      } else if (
        current[1] + 1 < maze[0].length &&
        maze[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        direction = directions[3];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[0] + 1 < maze.length &&
        maze[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "B", "F"];
        z = 0;
      }
    }
    if (direction === ">") {
      if (maze[current[0]][current[1]] === " ") {
        maze[current[0]][current[1]] = ".";
      }
      if (
        current[1] + 1 < maze[0].length &&
        maze[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        maze[current[0]][current[1]] = direction;
        movements.push("F");
        z = 0;
        if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
          const res: SomeType = handlingMaze(
            maze,
            directions[0],
            directions,
            [current[0] - 1, current[1]],
            [...movements, "L", "F"]
          );
          if (res) {
            movements = res.movements;
            maze = res.maze;
            maze[current[0]][current[1]] = direction;

            direction = res.direction;
            current = res.current;
          }
        }
        if (
          current[0] + 1 < maze[0].length &&
          maze[current[0] + 1][current[1]] === " "
        ) {
          const res: SomeType = handlingMaze(
            maze,
            directions[2],
            directions,
            [current[0] + 1, current[1]],
            [...movements, "R", "F"]
          );
          if (res) {
            movements = res.movements;
            maze = res.maze;
            maze[current[0]][current[1]] = direction;

            direction = res.direction;
            current = res.current;
          }
        }
      } else if (
        current[0] - 1 >= 0 &&
        maze[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "L", "F"];
      } else if (
        current[0] + 1 < maze.length &&
        maze[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[1] - 1 >= 0 &&
        maze[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[1];
        movements = [...movements, "B", "F"];
        z = 0;
      }
    }
    if (direction === "v") {
      // ! ["^", "<", "v", ">"]
      if (maze[current[0]][current[1]] === " ") {
        maze[current[0]][current[1]] = ".";
      }
      if (
        current[0] + 1 < maze.length &&
        maze[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        maze[current[0]][current[1]] = direction;
        movements.push("F");
        z = 0;
        if (
          current[1] + 1 < maze[0].length &&
          maze[current[0]][current[1] + 1] === " "
        ) {
          const res: SomeType = handlingMaze(
            maze,
            directions[3],
            directions,
            [current[0], current[1] + 1],
            [...movements, "L", "F"]
          );
          if (res) {
            movements = res.movements;
            maze = res.maze;
            maze[current[0]][current[1]] = direction;

            direction = res.direction;
            current = res.current;
          }
        }
        if (current[1] - 1 >= 0 && maze[current[0]][current[1] - 1] === " ") {
          const res: SomeType = handlingMaze(
            maze,
            directions[2],
            directions,
            [current[0], current[1] - 1],
            [...movements, "R", "F"]
          );
          if (res) {
            movements = res.movements;
            maze = res.maze;
            maze[current[0]][current[1]] = direction;

            direction = res.direction;
            current = res.current;
          }
        }
      } else if (
        current[1] + 1 < maze[0].length &&
        maze[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        direction = directions[3];
        movements = [...movements, "L", "F"];
      } else if (
        current[1] - 1 >= 0 &&
        maze[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[2];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[0] - 1 >= 0 &&
        maze[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "B", "F"];
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
        if (
          current[0] + 1 < maze.length &&
          maze[current[0] + 1][current[1]] === " "
        ) {
          const res: SomeType = handlingMaze(
            maze,
            directions[2],
            directions,
            [current[0] + 1, current[1]],
            [...movements, "L", "F"]
          );
          if (res) {
            movements = res.movements;
            maze = res.maze;
            maze[current[0]][current[1]] = direction;

            direction = res.direction;
            current = res.current;
          }
        }
        if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
          const res: SomeType = handlingMaze(
            maze,
            directions[0],
            directions,
            [current[0] - 1, current[1]],
            [...movements, "R", "F"]
          );
          if (res) {
            movements = res.movements;
            maze = res.maze;
            maze[current[0]][current[1]] = direction;

            direction = res.direction;
            current = res.current;
          }
        }
      } else if (
        current[0] + 1 < maze.length &&
        maze[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "L", "F"];
      } else if (
        current[0] - 1 >= 0 &&
        maze[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[1] + 1 < maze[0].length &&
        maze[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        direction = directions[3];
        movements = [...movements, "B", "F"];
        z = 0;
      }
    }
    z++;
  }
  return false;
}

function esc(
  maze: Array<string>,
  direction: "^" | "<" | "v" | ">" = "<",
  current: [number, number] = [0, 0],
  movements: Array<string> = []
): string[] {
  // Have a nice sleep ;)
  const directions: ["^", "<", "v", ">"] = ["^", "<", "v", ">"];
  var starters = ["^", "<", "v", ">"];
  let mazee = maze.map((str) => str.split(""));

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
      direction = mazee[x][y] as typeof direction;
      break;
    }
  }
  // console.log(current, direction);
  let z = 0;
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
          const res: SomeType = handlingMaze(
            mazee,
            directions[1],
            directions,
            [current[0], current[1] - 1],
            [...movements, "L", "F"]
          );
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
        if (
          current[1] + 1 < maze[0].length &&
          maze[current[0]][current[1] + 1] === " "
        ) {
          const res: SomeType = handlingMaze(
            mazee,
            directions[3],
            directions,
            [current[0], current[1] + 1],
            [...movements, "R", "F"]
          );
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
      } else if (
        current[1] - 1 >= 0 &&
        maze[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[1];
        movements = [...movements, "L", "F"];
      } else if (
        current[1] + 1 < maze[0].length &&
        maze[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        direction = directions[3];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[0] + 1 < maze.length &&
        maze[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "B", "F"];
        z = 0;
      }
    }
    if (direction === ">") {
      if (maze[current[0]][current[1]] === " ")
        mazee[current[0]][current[1]] = ".";
      if (
        current[1] + 1 < maze[0].length &&
        maze[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        mazee[current[0]][current[1]] = direction;
        movements.push("F");
        z = 0;
        if (current[0] - 1 >= 0 && maze[current[0] - 1][current[1]] === " ") {
          const res: SomeType = handlingMaze(
            mazee,
            directions[0],
            directions,
            [current[0] - 1, current[1]],
            [...movements, "L", "F"]
          );
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
        if (
          current[0] + 1 < maze[0].length &&
          maze[current[0] + 1][current[1]] === " "
        ) {
          const res: SomeType = handlingMaze(
            mazee,
            directions[2],
            directions,
            [current[0] + 1, current[1]],
            [...movements, "R", "F"]
          );
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
      } else if (
        current[0] - 1 >= 0 &&
        maze[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "L", "F"];
      } else if (
        current[0] + 1 < maze.length &&
        maze[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[1] - 1 >= 0 &&
        maze[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[1];
        movements = [...movements, "B", "F"];
        z = 0;
      }
    }
    if (direction === "v") {
      // ! ["^", "<", "v", ">"]
      if (maze[current[0]][current[1]] === " ")
        mazee[current[0]][current[1]] = ".";
      if (
        current[0] + 1 < maze.length &&
        maze[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        mazee[current[0]][current[1]] = direction;
        movements.push("F");
        z = 0;
        if (
          current[1] + 1 < maze[0].length &&
          maze[current[0]][current[1] + 1] === " "
        ) {
          const res: SomeType = handlingMaze(
            mazee,
            directions[3],
            directions,
            [current[0], current[1] + 1],
            [...movements, "L", "F"]
          );
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
          const res: SomeType = handlingMaze(
            mazee,
            directions[2],
            directions,
            [current[0], current[1] - 1],
            [...movements, "R", "F"]
          );
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
      } else if (
        current[1] + 1 < maze[0].length &&
        maze[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        direction = directions[3];
        movements = [...movements, "L", "F"];
      } else if (
        current[1] - 1 >= 0 &&
        maze[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[2];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[0] - 1 >= 0 &&
        maze[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "B", "F"];
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
        if (
          current[0] + 1 < maze.length &&
          maze[current[0] + 1][current[1]] === " "
        ) {
          const res: SomeType = handlingMaze(
            mazee,
            directions[2],
            directions,
            [current[0] + 1, current[1]],
            [...movements, "L", "F"]
          );
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
          const res: SomeType = handlingMaze(
            mazee,
            directions[0],
            directions,
            [current[0] - 1, current[1]],
            [...movements, "R", "F"]
          );
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
      } else if (
        current[0] + 1 < maze.length &&
        maze[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "L", "F"];
      } else if (
        current[0] - 1 >= 0 &&
        maze[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[1] + 1 < maze[0].length &&
        maze[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        direction = directions[3];
        movements = [...movements, "B", "F"];
        z = 0;
      }
    }
    z++;
  }
  return movements;
}
let basicMazes = [];

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
