
// Object.prototype.properties = function() {
// 	var result = [];
// 	for (var property in this) {
// 		result.push(property);
// 	}
// 	return result;
// }; /* [ 'x', 'y', 'properties' ] */


// Object.prototype.properties = () => {
// 	var result = [];
// 	for (var property in this) {
// 		result.push(property);
// 	}
// 	return result;
// }; /* [ 'properties' ] */


// Object.prototype.properties = function() {
// 	var result = [];
// 	for (var property in this) {
// 		if (this.hasOwnProperty(property)) {
// 			result.push(property);
// 		}
// 	}
// 	return result;
// }; /* [ 'x', 'y' ] */


Object.prototype.properties = () => {
	var result = [];
	for (var property in this) {
		if (this.hasOwnProperty(property)) {
			result.push(property);
		}
	}
	return result;
}; /* [] */



var test = { 
	x: 10,
	y: 3
};

console.log(test.properties());

