var collection = [
  { x: 3, y: 3 },
  { x: -4, y: -6 },
  { x: -4, y: 6 }
];


console.log("Collection before reduce:");
console.log(collection);
console.log();

var result = collection.reduce( (accumulator, currentValue, currentIndex, array) => {

  return {
    x: currentValue.x + accumulator.x,
    y: currentValue.y + accumulator.y
  };
});


console.log("Result of reduce operation: ");
console.log(result);
console.log();

// console.log("Collection before reduce:");
// console.log(collection);
// console.log();

