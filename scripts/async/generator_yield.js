function *foo() {
  yield 'one'
  yield 'two'
  yield 'three'
  yield 'four'
}


var it = foo();
var result = it.next();
while (!result.done) {
  console.log(result);
  result = it.next();
}

