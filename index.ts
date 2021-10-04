// Return the array of movements to execute to get out of the maze

// * 'F' move one step forward
// * 'L' turn left
// * 'R' turn right
// * 'B' turn back
// ? Note: 'L','R', and 'B'
// ? ONLY perform a rotation and will not move your body

function esc(
  maze: Array<string>,
  direction: "^" | "<" | "v" | ">" = "<",
  current: [number, number] = [0, 0]
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
  console.log(current, direction);
  let movements: string[] = [];

  let z = 0;
  while (current !== [0, 0]) {
    if (z > 2) {
      console.log(
        `here`,
        mazee.map((item) => item.join("")),
        current,
        direction
      );
      return movements;
    }
    if (direction === "^") {
      mazee[current[0]][current[1]] = ".";
      if (current[0] - 1 >= 0 && mazee[current[0] - 1][current[1]] === " ") {
        current[0] -= 1;
        movements.push("F");
        z = 0;
      } else if (
        current[1] - 1 >= 0 &&
        mazee[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[1];
        movements = [...movements, "L", "F"];
      } else if (
        current[1] + 1 < maze[0].length &&
        mazee[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        direction = directions[3];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[0] + 1 < maze.length &&
        mazee[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "B", "F"];
        z = 0;
      }
    }
    if (direction === ">") {
      mazee[current[0]][current[1]] = ".";
      if (
        current[1] + 1 < maze[0].length &&
        mazee[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        movements.push("F");
        z = 0;
      } else if (
        current[0] - 1 >= 0 &&
        mazee[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "L", "F"];
      } else if (
        current[0] + 1 < maze.length &&
        mazee[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[1] - 1 >= 0 &&
        mazee[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[1];
        movements = [...movements, "B", "F"];
        z = 0;
      }
    }
    if (direction === "v") {
      // ! ["^", "<", "v", ">"]
      mazee[current[0]][current[1]] = ".";
      if (
        current[0] + 1 < maze.length &&
        mazee[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        movements.push("F");
        z = 0;
      } else if (
        current[1] + 1 < maze[0].length &&
        mazee[current[0]][current[1] + 1] === " "
      ) {
        current[1] += 1;
        direction = directions[3];
        movements = [...movements, "L", "F"];
      } else if (
        current[1] - 1 >= 0 &&
        mazee[current[0]][current[1] - 1] === " "
      ) {
        current[1] -= 1;
        direction = directions[2];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[0] - 1 >= 0 &&
        mazee[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "B", "F"];
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
      } else if (
        current[0] + 1 < maze.length &&
        mazee[current[0] + 1][current[1]] === " "
      ) {
        current[0] += 1;
        direction = directions[2];
        movements = [...movements, "L", "F"];
      } else if (
        current[0] - 1 >= 0 &&
        mazee[current[0] - 1][current[1]] === " "
      ) {
        current[0] -= 1;
        direction = directions[0];
        movements = [...movements, "R", "F"];
        z = 0;
      } else if (
        current[1] + 1 < maze[0].length &&
        mazee[current[0]][current[1] + 1] === " "
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
