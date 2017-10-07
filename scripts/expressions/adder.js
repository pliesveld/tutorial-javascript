

function summation(x) {
  var a = x;
  function add(y) {
    return a += y;
  };

  return add;
}


var test1 = summation(4);

console.log(test1(3));
console.log(test1(3));
console.log(test1(3));



