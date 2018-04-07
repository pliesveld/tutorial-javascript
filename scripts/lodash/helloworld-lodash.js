var _ = require('lodash');

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log("array=", array);

// _.forEach
console.log("_.forEach(...)");
_.forEach(array, (elem,idx) => { console.log("array[" + idx + "]=" + elem)});

// _.map
console.log("_.map(...)");
var array2 = _.map(array,_.clone);

array2[0] = '!';
array2[1] = '!';
array2[2] = '!';

console.log("array=", array);
console.log("array2=", array2);

// _.uniq
console.log("_.uniq(...)");
console.log("array=", _.uniq(array));

// _.difference
console.log("_.difference(...)");
console.log(array, " - [a, b] =", _.difference(array, ['a','b']));

// _.intersection
console.log("_.intersection(...)");
console.log(_.intersection([1, 2, 3], [3, 4, 5]));

// _.sortBy
// and _.orderBy modifies collection in-place
console.log("_.sortBy(...)");

var cars = [
  { make: 'ford', year: 2007, price: 4998 },
  { make: 'honda', year: 2013, price: 13995 },
  { make: 'jeep', year: 1994, price: 6250}
]

console.log("_.sortBy(year)");
cars = _.sortBy(cars, 'year');
console.log("cars=", cars);

console.log("_.sortBy(price)");
cars = _.sortBy(cars, 'price');
console.log("cars=", cars);

// _.filter
// and _.remove modifies collection in-place
console.log("_.filter(...)");
array = [1, 2, 3, {}, [], 'a', 'b', 'c', 1, 2, 3];

console.log(_.filter(array,
  (o) => { return typeof o === 'number'; }));


// _.includes
// console.log("_.includes(...)");

// _.some
// console.log("_.some(...)");


