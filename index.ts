function multiply(value: any, times: number): any {
  function checkTimes(n: number) {
    if (n < 0) {
      throw new Error("");
    }
  }

  switch (typeof value) {
    case "number":
      if (times > Number.MAX_VALUE) {
        throw new Error("");
      }
      return value * times;
    case "string":
      checkTimes(times);
      return times > 0 ? value.repeat(times) : ``;
    case "object":
      checkTimes(times);
      return times > 0 ? Array(times).fill(value) : [];
    default:
      return value;
  }

  if (times === 0) {
    return "";
  }
  return value.repeat(times);
}

console.log(multiply("asd-", 2)); // 4
console.log(multiply("asd-", 22)); // 484
console.log(multiply("asd-", 2253)); // 49566
console.log(multiply("asd-", 0)); // 0
console.log(multiply("asd-", 145368722)); // 31186242668104
