// function forEachIn(object, action) {
// 	for (var property in object) {
// 		if (object.hasOwnProperty(property)) {
// 			action(property, object[property]);
// 		}
// 	}
// }
/*
x 10
y 3
*/

var forEachIn = (object, action) => {
	for (var property in object) {
		if (object.hasOwnProperty(property)) {
			action(property, object[property]);
		}
	}
}


/* Handles the case where object has the property 'hasOwnProperty' */
// var forEachIn = (object, action) => {
// 	for (var property in object) {
// 		if (Object.prototype.hasOwnProperty.call(object, property)) {
// 			action(property, object[property]);
// 		}
// 	}
// }

var test = { 
	x: 10,
	y: 3
};

forEachIn(test, console.log);
