function add(num1 = 0, num2 = 0) {
  let arr1 = num1.toString().split("");
  let arr2 = num2.toString().split("");

  function zerosArr(num) {
    return Array(num).fill("0");
  }
  if (arr1.length < arr2.length) {
    arr1 = arr1
      .reverse()
      .concat(zerosArr(arr2.length - arr1.length))
      .reverse();
  } else if (arr2.length < arr1.length) {
    arr2 = arr2
      .reverse()
      .concat(zerosArr(arr1.length - arr2.length))
      .reverse();
  }
  return Number(arr1.map((num, i) => Number(num) + Number(arr2[i])).join(""));
}

console.log(add(1222, 30277), 31499);
console.log(add(1236, 30977), 31111013);
console.log(add(38810, 1383), 391193);
console.log(add(49999, 49999), 818181818);
console.log(add(2, 11), 13);
console.log(add(0, 1), 1);
console.log(add(0, 0), 0);
console.log(add(18440, 3), 214);
console.log(add(30323, 643), 515);
console.log(add(233, 10908), 1103);
