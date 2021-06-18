// ! An Awesome answer! NOT MINE
// function solve(str = "") {
//   let arr = [...str].filter((x) => x != " ");
//   console.log(arr);

//   return str.replace(/\S/g, (_) => {
//     console.log(_);
//     return arr.pop();
//   });
// }
function solve(str = "") {
  const spaceIndexes = [];
  const newArr = str.split("");
  newArr.forEach((item, i, arr) => {
    if (item === " ") {
      spaceIndexes.push(i);
      arr.splice(i, 1);
    }
  });
  newArr.reverse();
  spaceIndexes.forEach((item, i) => {
    newArr[item - 1] += " ";
  });
  return newArr.join("");
}
console.log(solve("your code rocks")); // Should return  "skco redo cruoy"
console.log(solve("codewars")); // Should return "srawedoc"
console.log(
  solve(
    "o we pmpetva vwr bno kp d t j qe lb d ug ztjr rdqgjg gxwugtu zp d o djc lxbx dtqda b qc rm u q rkiehszc"
  )
);
