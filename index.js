function passphrase(s, n) {
    // your code
    console.log(s, n);
    var alphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    return s
        .split("")
        .map(function (item, i) {
        var place = alphabets.indexOf(item.toLowerCase());
        if ((place < 0 && isNaN(Number(item))) || item === " ") {
            return item;
        }
        if (place >= 0) {
            var newElement = place + n;
            var newPlace = newElement >= alphabets.length
                ? newElement - alphabets.length
                : newElement;
            return i % 2 === 0
                ? alphabets[newPlace].toUpperCase()
                : alphabets[newPlace].toLowerCase();
        }
        if (item.search(/[0-9]/)) {
            console.log(Number(item), 9 - Number(item));
            return 9 - Number(item);
        }
    })
        .reverse()
        .join("");
}
console.log(passphrase("I love u !!!", 1));
