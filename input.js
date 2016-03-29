// Write a function that takes in two object parameters, 'input' and 'changed'. 
// 'changed' will be an object that roughly matches the structure of the 'input'. 
// Your function should update 'input' with the matching properties of 'changed'. 
// Any properties on only one object should be ignored. Arrays should be concatenated. 
// Your function should support any level of nesting.

function nestSetter(obj, changed) {
  for (var prop in obj) {
    if (changed.hasOwnProperty(prop) && typeof obj[prop] !== 'object') {
      obj[prop] = changed[prop];
    } else if (changed.hasOwnProperty(prop) && typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      nestSetter(obj[prop], changed[prop]);
    } else if (changed.hasOwnProperty(prop) && Array.isArray(obj[prop])) {
      obj[prop] = obj[prop].concat(changed[prop]);
    }
  }
  return obj;
}