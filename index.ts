export function superStreetFighterSelection(
  fighters: Array<string[]>,
  position: number[],
  moves: string[]
) {
  const hoveredArr = [];
  console.log(fighters, position, moves);
  for (const move of moves) {
    switch (move) {
      case "up":
        if (position[0] !== 0) {
          position[0] -= 1;
        }
        if (fighters[position[0]][position[1]] === "") {
          if (position[0] !== 0) {
            position[0] -= 1;
          } else {
            position[0] += 1;
          }
        }
        hoveredArr.push(fighters[position[0]][position[1]]);
        break;
      case "down":
        if (position[0] !== fighters.length - 1) {
          position[0] += 1;
        }
        if (fighters[position[0]][position[1]] === "") {
          if (position[0] !== fighters.length - 1) {
            position[0] = 0;
          } else {
            position[0] -= 1;
          }
        }
        hoveredArr.push(fighters[position[0]][position[1]]);
        break;
      case "left":
        if (position[1] === 0) {
          position[1] = fighters[0].length - 1;
        } else {
          position[1] -= 1;
        }
        if (fighters[position[0]][position[1]] === "") {
          if (position[1] === 0) {
            position[1] = fighters[0].length - 1;
          } else {
            position[1] -= 1;
          }
          if (fighters[position[0]][position[1]] === "") {
            position[1] -= 1;
          }
        }
        hoveredArr.push(fighters[position[0]][position[1]]);
        break;
      case "right":
        if (position[1] === fighters[0].length - 1) {
          position[1] = 0;
        } else {
          position[1] += 1;
        }
        if (fighters[position[0]][position[1]] === "") {
          if (position[1] === fighters[0].length - 1) {
            position[1] = 0;
          } else {
            position[1] += 1;
          }
          if (fighters[position[0]][position[1]] === "") {
            position[1] += 1;
          }
        }
        hoveredArr.push(fighters[position[0]][position[1]]);
        break;

      default:
        break;
    }
  }

  return hoveredArr;
}
let fighters = [
  ["", "Ryu", "E.Honda", "Blanka", "Guile", ""],
  ["Balrog", "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat"],
  ["Vega", "T.Hawk", "Fei Long", "Deejay", "Cammy", "M.Bison"],
];
let initial_position: [number, number] = [1, 0];
let moves = ["down", "down", "down", "down"];
// console.log(superStreetFighterSelection(fighters, initial_position, moves), [
//   "Vega",
//   "Vega",
//   "Vega",
//   "Vega",
// ]);

// fighters = [
//   ["", "Ryu", "E.Honda", "Blanka", "Guile", ""],
//   ["Balrog", "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat"],
//   ["Vega", "T.Hawk", "Fei Long", "Deejay", "Cammy", "M.Bison"],
// ];
// initial_position = [1, 0];
// moves = ["up"];
// console.log(superStreetFighterSelection(fighters, initial_position, moves), [
//   "Balrog",
// ]);

// fighters = [
//   ["", "Ryu", "E.Honda", "Cammy"],
//   ["Balrog", "Ken", "Chun Li", ""],
//   ["Vega", "", "Fei Long", "Balrog"],
//   ["Blanka", "Guile", "", "Chun Li"],
//   ["M.Bison", "Zangief", "Dhalsim", "Sagat"],
//   ["Deejay", "Cammy", "", "T.Hawk"],
// ];
// initial_position = [0, 3];
// moves = [
//   "left",
//   "left",
//   "down",
//   "right",
//   "right",
//   "right",
//   "right",
//   "down",
//   "left",
//   "left",
//   "left",
//   "left",
//   "down",
//   "right",
//   "right",
//   "down",
//   "right",
//   "right",
//   "right",
//   "down",
//   "left",
//   "left",
//   "left",
//   "down",
//   "left",
//   "left",
//   "left",
// ];
// console.log(superStreetFighterSelection(fighters, initial_position, moves), []);
// fighters = [
//   ["", "Ryu", "E.Honda", "Cammy", "Blanka", "Guile", "", "Chun Li"],
//   ["Balrog", "Ken", "Chun Li", "", "M.Bison", "Zangief", "Dhalsim", "Sagat"],
//   ["Vega", "", "Fei Long", "Balrog", "Deejay", "Cammy", "", "T.Hawk"],
// ];
// initial_position = [0, 3];
// moves = [
//   "down",
//   "right",
//   "right",
//   "right",
//   "down",
//   "left",
//   "left",
//   "down",
//   "right",
//   "right",
//   "right",
//   "up",
// ];
// console.log(superStreetFighterSelection(fighters, initial_position, moves), []);
fighters = [
  ["", "Ryu", "E.Honda", "Cammy"],
  ["Balrog", "Ken", "Chun Li", ""],
  ["Vega", "", "Fei Long", "Balrog"],
  ["Blanka", "Guile", "", "Chun Li"],
  ["M.Bison", "Zangief", "Dhalsim", "Sagat"],
  ["Deejay", "Cammy", "", "T.Hawk"],
];
initial_position = [3, 1];
moves = [
  "up",
  "left",
  "left",
  "down",
  "right",
  "right",
  "up",
  "right",
  "right",
  "left",
  "left",
  "down",
  "up",
  "down",
  "up",
  "up",
  "down",
  "left",
  "left",
  "left",
  "left",
  "up",
  "right",
  "left",
];
console.log(superStreetFighterSelection(fighters, initial_position, moves), []);
fighters = [
  ["", "Ryu", "E.Honda", "Cammy"],
  ["Balrog", "Ken", "Chun Li", ""],
  ["Vega", "", "Fei Long", "Balrog"],
  ["Blanka", "Guile", "", "Chun Li"],
  ["M.Bison", "Zangief", "Dhalsim", "Sagat"],
  ["Deejay", "Cammy", "", "T.Hawk"],
];
initial_position = [3, 1];
moves = [
  "up",
  "up",
  "up",
  "left",
  "down",
  "down",
  "down",
  "right",
  "up",
  "right",
  "left",
  "left",
  "up",
  "up",
  "left",
  "left",
  "down",
  "down",
  "up",
  "left",
  "right",
  "up",
  "right",
  "left",
  "up",
  "up",
  "left",
  "right",
  "down",
  "right",
  "left",
  "up",
  "right",
  "up",
  "right",
  "up",
  "down",
  "up",
  "down",
  "right",
  "up",
  "up",
  "down",
  "left",
  "down",
  "up",
  "left",
  "left",
];
console.log(superStreetFighterSelection(fighters, initial_position, moves), []);
