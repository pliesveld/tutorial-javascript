/*
 * Object.assign(target, ...sources).
 *
 * Copies the values (of all enumerable own properties) from
 * one or more source objects to a target object.
 *
 */

var x = {
  a: 1,
  b: 2,
  c: 3
};

var y = {
  b: 20
};

var dest = {};

//Object.assign(dest, x, y); console.log(dest);
Object.assign(dest, y, x); console.log(dest);

