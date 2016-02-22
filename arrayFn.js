// var arr = [1,2,3,4];
// arr.sum();  //returns 10

// var arr = [10, 28, 14, 33];
// arr.sum(); //returns 85

Array.prototype.sum = function() {
	// var total = 0;
	// for (var i = 0; i < this.length; i++) {
	// 	total += this[i];
	// }
	// return total;
	// also can use .reduce
	arr.reduce(function(initial, current) {
		return initial + current;
	})
}

