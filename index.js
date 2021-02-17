const chalk = require('chalk');
const arr = [
  ['1536', '1541'],
  ['1542', '1548'],
  ['1549', '1563'],
  ['1564', '1565'],
  ['1566', '1567'],
  ['1568', '1600'],
  ['1601', '1611', '1611'],
  ['126523', '126524'],
  ['126530', '126531'],
  ['126535', '126536'],
];

function flattening(thatArr) {
  if (!Array.isArray(thatArr)) {
    return thatArr;
  }
  const x = thatArr.reduce((a, b) => a.concat(b));
  return flattening(x);
}

console.log(flattening(arr));

function yourOwnLoop(value, testFunction, updateFunction) {
  return (bodyFunction) => {
    let x;
    for (let index = value; testFunction(index); index = updateFunction(index)) {
      x = bodyFunction(index);
      if (!x) {
        return x
      }
    }
    return x
  };
}
const loopsTenTimesAndIncrementBy1 = yourOwnLoop(10, (i) => i < 20, (n) => {
  return n + 1;
});

loopsTenTimesAndIncrementBy1((number) => {
  return number;
})

// ======== Array.Every ========

const arrayEvery = (arrr, predicate) => {
  const arrayLooping = yourOwnLoop(0, (i, max = arrr.length) => i < max, (n) => {
    return n + 1;
  });
  let result = arrayLooping((i, arrX = arr) => {
    let x = predicate(arrX[i])
    return x
  })

  return result

}
console.log(chalk.bgBlue.black('[Array.Every] ', arr.length, arr[0].length))
console.log(chalk.bgRedBright.black('[Array.Every]: Should Fail', arrayEvery(arr, item => item.length < 3)))
console.log(chalk.bgGreenBright.black('[Array.Every]: Should Pass', arrayEvery(arr, item => item.length < 4)))
console.log(chalk.bgRedBright.black('[Array.Every]: Should Fail', arr.every(item => item.length < 3)))
console.log(chalk.bgGreenBright.black('[Array.Every]: Should Pass', arr.every(item => item.length < 4)))
console.log(chalk.bgGreenBright.black('[Array.Some]: Should Pass', arr.some(item => item.length > 2)))