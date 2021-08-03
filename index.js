// ? An array of numbers is given : [1,2,31,24, -67,5,3,555,79, -4,21,33,89, -90].
// ? Find the maximum and minimum value of the array. Write all positive and even numbers into another array.
// ? Output the results on the screen.

function magic(param = []) {
  const maxNumber = Math.max(...param)
  const minNumber = Math.min(...param)

  const positiveEven = []
  param.forEach(num => {
    if (num > 0 && num % 2) {
      positiveEven.push(num)
    }
  }, [])

  return {maxNumber, minNumber, positiveEven}
}

console.log(magic([1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90]))
