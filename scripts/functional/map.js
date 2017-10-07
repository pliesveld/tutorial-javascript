var numbers = [1, 5, 10, 15];

var doubles = numbers.map(x => {
   return x * 2;
});

console.log(doubles);   // doubles is now [2, 10, 20, 30]
console.log(numbers);   // numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

console.log(roots);   // roots is now [1, 2, 3]
console.log(numbers);   // numbers is still [1, 4, 9]

