function *foo() {
  console.log("foo() called");
  return 'test';
}

var it = foo();

console.log(it.next());

