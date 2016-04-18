// Write a new nestedFilter method on the Array prototype, it should work the same as filter, 
// but work on all nested arrays within the initial array.

// [false, true, [true, false, false], true].nestedFilter( item => item ); // returns [true, [true], true]
// [2, 4, 8, 7, [9, 12, 13, 99, [87, 64, 3022]]].nestedFilter( item => item % 2); // returns [2, 4, 8, [12, [64, 3022]]]

Array.prototype.nestedFilter(cb){
	
}