function check(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] && arr[i].length > 3) {
            for (var x = 0; x < arr[i].length - 3; x++) {
                if (arr[i][x] !== "" &&
                    arr[i][x] === arr[i][x + 1] &&
                    arr[i][x + 1] === arr[i][x + 2] &&
                    arr[i][x + 2] === arr[i][x + 3]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function Connect4() {
    this.isWinner = true;
    // ? (1*7)*6
    this.vertical = [];
    // ? (1*6)*7
    this.horizontal = [];
    // ? (1*!)*12
    this.diagonal = [];
    this.player = 2;
    this.movementMemo = {};
    this.turn = 0;
    if (this.isWinner) {
        this.vertical = [];
        for (var i = 0; i < 7; i++) {
            this.vertical.push(["", "", "", "", "", ""]);
            if (i < 6) {
                this.horizontal.push(["", "", "", "", "", "", ""]);
                this.diagonal.push([]);
                this.diagonal.push([]);
            }
        }
        this.isWinner = false;
    }
    this.verify = function () {
        this.isWinner = check(this.horizontal);
        if (this.isWinner)
            return;
        this.isWinner = check(this.vertical);
        if (this.isWinner)
            return;
        if (this.turn < 8)
            return;
        console.log("check", this.diagonal, this.vertical, this.horizontal);
        this.isWinner = check(this.diagonal);
        if (this.isWinner)
            return;
    };
}
Connect4.prototype.play = function (col) {
    // Code Here
    if (this.isWinner)
        return "Game has finished!";
    if (this.movementMemo[col] === 6)
        return "Column full!";
    this.player = this.player === 1 ? 2 : 1;
    if (!(col in Object(this.movementMemo))) {
        this.movementMemo[col] = 0;
    }
    var difference = col - this.movementMemo[col];
    if (-3 < difference && difference < 4) {
        if (difference < 0) {
            difference = this.diagonal.length - 1 + difference;
        }
        this.diagonal[difference].push("" + this.player);
    }
    difference = col + this.movementMemo[col];
    if (2 < difference && difference < 9) {
        this.diagonal[4 + difference].push(this.player);
    }
    this.vertical[col][this.movementMemo[col]] += this.player;
    this.horizontal[this.movementMemo[col]][col] += this.player;
    this.movementMemo[col] += 1;
    this.turn += 1;
    if (!this.isWinner && this.turn > 6) {
        this.verify();
    }
    if (this.isWinner)
        return "Player " + this.player + " wins!";
    return "Player " + this.player + " has a turn";
};
var game = new Connect4();
console.log(game.play(3), "Player 1 has a turn");
console.log(game.play(3), "Player 2 has a turn");
console.log(game.play(2), "Player 1 has a turn");
console.log(game.play(0), "Player 2 has a turn");
console.log(game.play(2), "Player 1 has a turn");
console.log(game.play(2), "Player 2 has a turn");
console.log(game.play(0), "Player 1 has a turn");
console.log(game.play(1), "Player 2 has a turn");
console.log(game.play(1), "Player 1 has a turn");
console.log(game.play(1), "Player 2 has a turn");
console.log(game.play(0), "Player 1 has a turn");
console.log(game.play(1), "Player 2 has a turn");
console.log(game.play(0), "Player 1 has a turn");
console.log(game.play(0), "Player 2 wins!");
// game = new Connect4();
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(1), "Player 2 has a turn");
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(1), "Player 2 has a turn");
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(1), "Player 2 has a turn");
// console.log(game.play(0), "Player 1 wins!");
// game = new Connect4();
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(0), "Player 1 has a turn");
// console.log(game.play(1), "Player 1 has a turn");
// console.log(game.play(1), "Player 1 has a turn");
// console.log(game.play(1), "Player 1 has a turn");
// console.log(game.play(1), "Player 1 has a turn");
// console.log(game.play(1), "Player 1 has a turn");
// console.log(game.play(2), "Player 2 has a turn");
// console.log(game.play(2), "Player 2 has a turn");
// console.log(game.play(2), "Player 2 has a turn");
// console.log(game.play(2), "Player 1 has a turn");
// console.log(game.play(2), "Player 1 has a turn");
// console.log(game.play(3), "Player 2 has a turn");
// console.log(game.play(3), "Player 1 has a turn");
// console.log(game.play(3), "Player 2 has a turn");
// console.log(game.play(3), "Player 2 has a turn");
// console.log(game.play(4), "Player 1 has a turn");
// console.log(game.play(4), "Player 1 has a turn");
// console.log(game.play(4), "Player 2 has a turn");
// console.log(game.play(4), "Player 1 has a turn");
// console.log(game.play(4), "Player 2 has a turn");
// console.log(game.play(5), "Player 1 has a turn");
// console.log(game.play(5), "Player 2 has a turn");
// console.log(game.play(5), "Player 1 has a turn");
// console.log(game.play(5), "Player 2 has a turn");
// console.log(game.play(5), "Player 1 has a turn");
// console.log(game.play(5), "Player 1 has a turn");
// console.log(game.play(6), "Player 2 has a turn");
// console.log(game.play(6), "Player 1 has a turn");
// console.log(game.play(6), "Player 2 has a turn");
// console.log(game.play(6), "Column full!");
// console.log(game.play(6), "Column full!");
// console.log(game.play(6), "Column full!");
// game = new Connect4();
// console.log(game.play(1), "Player 1 has a turn");
// console.log(game.play(1), "Player 2 has a turn");
// console.log(game.play(2), "Player 1 has a turn");
// console.log(game.play(2), "Player 2 has a turn");
// console.log(game.play(3), "Player 1 has a turn");
// console.log(game.play(3), "Player 2 has a turn");
// console.log(game.play(4), "Player 1 wins!");
// console.log(game.play(4), "Game has finished!");
