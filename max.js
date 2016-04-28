// Write a function that returns the maximum element (or element-based computation) in an array.

// max([1, 10, 99]) // 99
// max([1, 10, 99], item => item > 1 && item < 50 ? 1 : 0) // 10

function max(arr, fn){
	if (fn){
		arr.forEach(fn());
		return Math.max(arr)
	}
	return Math.max(arr)
}