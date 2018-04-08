var _ = require('lodash');

// _.sortBy
// and _.orderBy modifies collection in-place
console.log("_.sortBy(...)");

var cars; cars = [
    { make: 'ford', year: 2007, price: 4998 },
    { make: 'honda', year: 2013, price: 13995 },
    { make: 'jeep', year: 1994, price: 6250}
];

_.sortBy(cars, 'price');
_.sortBy(cars, 'year');
cars[0];
