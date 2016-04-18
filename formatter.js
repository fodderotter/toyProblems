// Write a function that takes in an array of objects, each with a name property, and creates a new array
// of objects based on their structure. The strings will be seperated by '/''s.

// Example:

// var data = [
//   {
//     name: 'App/AFCU/sanity'
//   },
//   {
//     name: 'App/AFCU/product/'
//   },
//   {
//     name: 'Mobile/somethingElse/'
//   }
// ];

// formatter( data )
// //returns 
// [
//   {
//       name: 'App'
//     , children: [
//         {
//             name: 'AFCU'
//           , children: [
//               {
//                 name: 'sanity'
//               }
//               , {
//                 name: 'product'
//               }
//             ]
//         }
//       ]
//   }
//   , {
//     name: 'Mobile'
//     , children: [{ name: 'somethingElse' }]
//   }
// ]

function formatter(arr){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		var str = arr[i].name.split("/");
		if (i === 0){
			newArr.push({
				name: str[0]
				, children: 
			})
		}
	}
	return newArr;
}