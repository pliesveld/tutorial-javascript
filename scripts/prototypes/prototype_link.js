var foo = {
  a: 42
};

var bar = Object.create( foo );

bar.b = "Hello";


///////////////////

console.log(foo); // { a: 42 }
console.log(bar); // { b: 'Hello' }

console.log(bar.b); // Hello
console.log(bar.a); // 42 <---- delegatd to 'foo'

console.log(Object.getOwnPropertyNames( bar )); // [ 'b' ]

console.log(Object.getOwnPropertyNames( foo )); // [ 'a' ]

console.log(Object.getPrototypeOf( bar ) === foo); // true

