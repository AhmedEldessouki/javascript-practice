function miniMaxSum(arr = []) {
  // Write your code here
  const res = arr.map((num, index, array) => {
    console.log(
      array.reduce((acc, numb, i) => (index !== i ? (acc += numb) : acc), 0)
    );
    return array.reduce((acc, numb) => (acc += numb), 0);
  });
  console.log(res);
  console.log(Math.min(...res));
  console.log(Math.max(...res));
}
console.log(miniMaxSum([1, 2, 3, 4, 5]));
