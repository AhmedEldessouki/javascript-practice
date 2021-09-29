// Let's make a Cat constructor!
var Cat = (function () {
  // ... your code here.

  Cat.arr = [];
  function Cat(name, weight) {
    if (!name || !weight) throw new Error("");
    this.name = name;
    this._weight = weight;
    Object.defineProperty(this, "weight", {
      enumerable: true,
      configurable: false,
      get: function () {
        return this._weight;
      },
      set: function (v) {
        this._weight = v;
      },
    });
    Cat.arr.push(this);
  }
  Cat.averageWeight = function () {
    return (
      Cat.arr.reduce(
        (acc, instance) => (instance.weight ? (acc += instance.weight) : acc),
        0
      ) / Cat.arr.length
    );
  };

  return Cat;
})();

const fluffy = new Cat("fluffy", 15);
const garfield = new Cat("garfield", 25);

console.log(fluffy.weight, 15);
console.log(fluffy instanceof Cat, true);
// @ts-ignore
console.log(fluffy.averageWeight, undefined);
console.log(typeof Cat.averageWeight, "function");
fluffy.weight = 200;
console.log(fluffy.weight, 20);
console.log(garfield.weight);
console.log(Cat.averageWeight(), 20);
