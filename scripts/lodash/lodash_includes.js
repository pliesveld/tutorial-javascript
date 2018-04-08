var _ = require('lodash');

// _.includes
console.log("_.includes(...)");

console.log(_.includes([1, 2, 3], 3));
console.log(_.includes([{'a': 1},{'b': 2},{'b': 3}], {'a': 1}));

console.log('Works on objects:');


var cars, cars2, car_ford, car_ford2;


cars = [
    { make: 'ford', year: 2007, price: 4998 },
    { make: 'honda', year: 2013, price: 13995 },
    { make: 'jeep', year: 1994, price: 6250}
]

// Make a copy of cars array
cars2 = _.map(cars,_.clone);

car_ford = cars[0];
car_ford2 = cars2[0];

_.includes(cars, car_ford);
_.includes(cars, car_ford2);

_.some(cars, car_ford);
_.some(cars, car_ford2);


