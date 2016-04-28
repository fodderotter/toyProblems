// Determine if a string is in alphabetical order

// isOrdered("cab") // false
// isOrdered("bit") // true
// isOrdered("golf") // false

function isOrdered(str){
	var order = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	str = str.toLowerCase();
	for(var i = 0; i < str.length; i++){
		var current;
		current = order.indexOf(str.charAt(i))
		console.log(current)
		if (order.indexOf(str.charAt(i)) < order.indexOf(str.charAt(i-1))){
			return false
		}
	}
	return true
}