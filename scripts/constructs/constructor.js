

function Car() {
  this.make = 'Ford';
  this.model = 'Explorer';
}

Car.prototype.wheels = 4;

var ford = new Car();

console.log(ford);

console.log('make:', ford.make);
console.log('model:', ford.model);
console.log('wheels:', ford.wheels);

console.log(Object.getPrototypeOf(ford));
// console.log(Object.getPrototypeOf(ford) === Car);
console.log(Object.getPrototypeOf(ford) === Car.prototype);

