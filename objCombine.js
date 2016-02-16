// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// example:

// var objA = { a: 10, b: 20, c: 30 };

// var objB = { a: 3, c: 6, d: 3 };

// combine(objA, objB); // Returns { a: 13, b: 20, c: 36, d: 3 }

function combine(objA, objB) {
	var combined = {};
	for (var keyA in objA) {
		combined[keyA] = objA[keyA];
	}
	for (var keyB in objB) {
		if(combined.hasOwnProperty(keyB)) {
			combined[keyB] += objB[keyB];
		}
		else {
			combined[keyB] = objB[keyB];
		}
	}
	console.log(combined);
	return combined;
}
  combine(objA, objB);