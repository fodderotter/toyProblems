	var obj = {
	  site: "Codewars",
	  description: "Lorem ipsum dolor sit...",
	  obj2: {
	    str: "Yeah, Codewars!",
	    num: 123,
	    obj3: {
	      something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
	    }
	  }
	};

function search(obj, key){
	var results = [];
	for(var prop in obj){
		if(obj[prop] === key){
			results.push(prop)
		}
		if(typeof obj[prop] === "object"){
			search(obj[prop], key);
		}
	}
	return results
}

	var results = search(obj, "Codewars"); //results = ["something", "str", "site"]
