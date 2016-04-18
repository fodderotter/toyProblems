// Description:

// For a given positive integer convert it into its English representation. All words are lower case and are separated with one space. No trailing spaces are allowed.

// To keep it simple, hyphens and the writing of the word 'and' both aren't enforced. (But if you are looking for some extra challenge, such an output will pass the tests.)

// Large number reference: http://en.wikipedia.org/wiki/Names_of_large_numbers (U.S., Canada and modern British)

// Input range: 1 -> 10**26 (10**16 for JS)

function readable(num){
	var nums = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
	var teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
	var tens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	var big = ["hundred", "thousand", "million", "billion", "trillion", "quadrillion"];
	if (num <= 10){
		return nums[num-1];
	}
	else if(num < 100){
		return tens[num.toString().charAt(0)-2] + " " + nums[num.toString().charAt(1)-1];
	}
	else if(num < 1000){
		return nums[num.toString().charAt(0)-1] + " " + big[0] + " " + tens[num.toString().charAt(0)-2] + " " + nums[num.toString().charAt(1)-1];
	}
}
readable(111);