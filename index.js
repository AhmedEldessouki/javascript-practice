function multiply(value, times) {
  if (value === null) return null;
  if (typeof times !== "number" || isNaN(times)) throw new Error("");

  function checkTimes(n) {
    if (n < 0 || times % 1 !== 0) {
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
    case "function":
      if (times === 0) return;
      checkTimes(times);
      return function () {
        for (var i = 0; i < times; i++) {
          value.apply(this, arguments);
        }
      };
    default:
      return value;
  }
}
console.log(function func() {
  if (valid) {
    console.log("still valid, original called");
    hits++;
    if (this !== context) {
      Test.expect(false, "Incorrect context.");
      valid = false;
    } else if (
      Test.inspect(Array.prototype.slice.call(arguments, 0)) === args
    ) {
      Test.expect(false, "Incorrect arguments.");
      valid = false;
    }
  }
}, 222); // 4
