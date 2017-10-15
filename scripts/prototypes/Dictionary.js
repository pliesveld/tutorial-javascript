function Dictionary(startValues) {
	this.values = startValues || {};
}

var forEachIn = (object, action) => {
	for (var property in object) {
		if (object.hasOwnProperty(property)) {
			action(property, object[property]);
		}
	}
};

Dictionary.prototype.store = function(name, value) {
	this.values[name] = value;
};

Dictionary.prototype.lookup = function(name) {
	return this.values[name];
};

Dictionary.prototype.contains = function(name) {
	return Object.prototype.propertyIsEnumerable.call(this.values, name);
};


Dictionary.prototype.each = function(action) {
	forEachIn(this.values, action);
};





/////////////////////////////////////////////////////////
// Example
/////////////////////////////////////////////////////////

var colors = new Dictionary({Grover: "blue",
							 Elmo: "red",
							 Bert: "yellow"});

console.log(colors.contains("Grover")); // true

console.log(colors.contains("Ernie")); // false

colors.store("Ernie", "orange");

console.log(colors.contains("Ernie")); // true

colors.each((name, color) => console.log(name," is ", color));






