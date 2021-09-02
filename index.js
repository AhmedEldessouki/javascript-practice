function getPicks(fighters, position, moves) {
    // your code
    var hoveredArr = [];
    for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
        var move = moves_1[_i];
        switch (move) {
            case "up":
                if (position[0] !== 0) {
                    position[0] -= 1;
                }
                hoveredArr.push(fighters[position[0]][position[1]]);
                break;
            case "down":
                if (position[0] !== 1) {
                    position[0] += 1;
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
                hoveredArr.push(fighters[position[0]][position[1]]);
                break;
            case "right":
                if (position[1] === fighters[0].length - 1) {
                    position[1] = 0;
                }
                else {
                    position[1] += 1;
                }
                hoveredArr.push(fighters[position[0]][position[1]]);
                break;
            default:
                break;
        }
    }
    return hoveredArr;
}
var fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];
var initial_position = [0, 0];
var moves = ["up", "left", "right", "left", "left"];
console.log(getPicks(fighters, initial_position, moves), [
    "Ryu",
    "Vega",
    "Ryu",
    "Vega",
    "Balrog",
]);
fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];
initial_position = [0, 0];
moves = ["right", "down", "left", "left", "left", "left", "right"];
console.log(getPicks(fighters, initial_position, moves), [
    "E.Honda",
    "Chun Li",
    "Ken",
    "M.Bison",
    "Sagat",
    "Dhalsim",
    "Sagat",
]);
