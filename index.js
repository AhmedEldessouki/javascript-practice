"use strict";
exports.__esModule = true;
exports.superStreetFighterSelection = void 0;
function superStreetFighterSelection(fighters, position, moves) {
    var hoveredArr = [];
    console.log(fighters, position, moves);
    for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
        var move = moves_1[_i];
        switch (move) {
            case "up":
                if (position[0] !== 0) {
                    position[0] -= 1;
                }
                if (fighters[position[0]][position[1]] === "") {
                    if (position[0] !== 0) {
                        position[0] = 0;
                    }
                    else {
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
                    }
                    else {
                        position[0] += 1;
                    }
                }
                hoveredArr.push(fighters[position[0]][position[1]]);
                break;
            case "left":
                if (position[1] === 0) {
                    position[1] = fighters[0].length - 1;
                }
                else {
                    position[1] -= 1;
                }
                if (fighters[position[0]][position[1]] === "") {
                    if (position[1] === 0) {
                        position[1] = fighters[0].length - 1;
                    }
                    else {
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
                }
                else {
                    position[1] += 1;
                }
                if (fighters[position[0]][position[1]] === "") {
                    if (position[1] === fighters[0].length - 1) {
                        position[1] = 0;
                    }
                    else {
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
exports.superStreetFighterSelection = superStreetFighterSelection;
var fighters = [
    ["", "Ryu", "E.Honda", "Blanka", "Guile", ""],
    ["Balrog", "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat"],
    ["Vega", "T.Hawk", "Fei Long", "Deejay", "Cammy", "M.Bison"],
];
var initial_position = [1, 0];
var moves = ["down", "down", "down", "down"];
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
