var _ = require('lodash');

var foo, bar;

foo = { a: "a property" };
bar = { b: 4, c: "an other property" }

_.assign({ a: "an old property" }, foo, bar);
