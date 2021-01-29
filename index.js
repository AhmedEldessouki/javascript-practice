function solution(number) {
  const results = []
  let start = 1

  do {
    results.push(start * 3 < number ? start * 3 : start * 5 < number ? start * 5 : 0)
    results.push(start * 5 < number ? start * 5 : start * 3 < number ? start * 3 : 0)
    start++
  } while ((start * 3 || start * 5) < number);

  results.sort((a, b) => a - b).forEach((num, x) => results.find((numb, i) => {
    if (i !== x) {
      if (num === numb) {
        results.splice(i, 1)
      }
    }
  }))
  const sum = results.reduce((a, b) => {
    return a + b
  });
  return sum
}

console.log(solution(10));
console.log(solution(24));
console.log(solution(30));
