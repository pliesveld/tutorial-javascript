var _ = require('lodash');

var array; array = ['a', 'b', 'c', 'a', 'b', 'c'];

// _.forEach
console.log("_.forEach(...)");
_.forEach(array, (elem,idx) => { console.log("array[" + idx + "]=" + elem)});

