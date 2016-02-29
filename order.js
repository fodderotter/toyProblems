/*
Write a function that takes in an array of numbers and determines whether those numbers are in order
ordered( [1, 2, 3, 7, 12] ); // true
ordered( [4, 9, 42, 22, 56] ); // false
*/

function ordered(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]){
      return false;
    }
  }
  return true;
}