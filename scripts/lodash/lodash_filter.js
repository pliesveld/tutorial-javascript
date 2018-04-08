var _ = require('lodash');

var array; array = [1, 2, 3, {}, [], 'a', 'b', 'c', 1, 2, 3];

_.filter(array, (o) => { return typeof o === 'number'; });
