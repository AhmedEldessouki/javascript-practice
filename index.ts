function foldArray(start: number, end: number): number {
  const arr = [];
  for (let i = start; i <= end; i++) {
    let item = `${i}`;
    if (!item.match(/[5]/)) {
      arr.push(`${i}`);
    }
  }
  return arr.length;
}

console.log(foldArray(4, 17), "12");
console.log(foldArray(-47, 48), "86");
console.log(foldArray(-10, 55), "[ 15 ]");
