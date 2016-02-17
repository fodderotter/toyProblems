/*
Given an array of objects, create a function that will return a new array
containing the same objects, only with their key - value pairs reversed.
 */
var arr = [
    {
          title: 'The Shining'
        , releaseDate: 1977
    }
    , {
          title: 'Misery'
        , releaseDate: 1987
    }
    , {
          title: 'It'
        , releaseDate: 1986
    }
];

//  objReverser( arr );
// returns
//  [
//      {
//            'The Shining': 'title'
//          , '1977': 'releaseDate'
//      }
//      , {
//            'Misery': 'title'
//          , '1987': 'releaseDate'
//      }
//      , {
//            'It': 'title'
//          , '1986': 'releaseDate'
//      }
//  ];

function objReverser(array) {
 for(var i = 0; i < array.length; i++) {
   for(var key in array[i]) {
     var value = array[i][key]; //holds the value
     array[i][value] = key;
     delete array[i][key];
   }
 }
 console.log(array);
 return array;
}
objReverser(arr);


