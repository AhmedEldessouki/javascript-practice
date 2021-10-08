var numberToPrice = function (number: number) {
  if (isNaN(number)) return "NaN";
  let dec = "";
  if (number % 1 === 0) {
    if (number <= 999) return number.toFixed(2);
    dec = ".00";
  }
  const sign = number < 0 ? "-" : "";
  return (
    sign +
    Math.abs(number)
      .toString()
      .split(".")
      .map((str, x) =>
        x === 0
          ? str
              .split("")
              .reverse()
              .map((st, i) => {
                return (i + 1) % 3 === 0 && i < str.length - 1 ? `,${st}` : st;
              })
              .reverse()
              .join("")
          : str.length < 2
          ? str.padEnd(2, "0")
          : str.slice(0, 2)
      )
      .join(".") +
    dec
  );
};
console.log(numberToPrice(1500.129), "1,500.12");
console.log(numberToPrice(-5), "-5.00");
console.log(numberToPrice(1000000.5), "1,000,000.50");
console.log(numberToPrice(-100000.5), "-100,000.50");
console.log(numberToPrice(100.5), "100.50");
console.log(numberToPrice(245123215.0), "245,123,215.00");
//@ts-expect-error
console.log(numberToPrice("@"), "NaN");
