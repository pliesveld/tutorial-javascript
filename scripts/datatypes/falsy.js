/* When an expression is evaluated in a conditional, and that
 * expression is a non-boolean value, then the result of the expression
 * is coerced to a boolean.
 *
 * The following values in JavaScript will evaluate to false:
 *
 *    ""
 *    0
 *    -0
 *    NaN
 *    null
 *    undefined
 *    false
 */

function isTruthy() {
  console.log("Is truthy!");
}

function isFalsy() {
  console.log("Is falsy!");
}

"" ? isTruthy() : isFalsy();

0 ? isTruthy() : isFalsy();

-0 ? isTruthy() : isFalsy();

NaN ? isTruthy() : isFalsy();

null ? isTruthy() : isFalsy();

undefined ? isTruthy() : isFalsy();

false ? isTruthy() : isFalsy();

true ? isTruthy() : isFalsy();

42 ? isTruthy() : isFalsy();

[] ? isTruthy() : isFalsy();

({}) ? isTruthy() : isFalsy();

"hello" ? isTruthy() : isFalsy();

