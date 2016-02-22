// Write a function that takes a number parameter and returns the 
// smallest palindrome number higher than the parameter

nextPal(11);

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552

function nextPal(x) {
	do {
	    x++;
	    var num = x.toString();
   		var str = x.toString().split("").reverse().join("");
   		if(str === num) {
	    	console.log(x);
	    	return x;
     	}
  	} while (str !== num);
}

