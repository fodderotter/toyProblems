// [1,2,3,2,4,1,5,1,6].groupBy()
// {
//   1: [1, 1, 1],
//   2: [2, 2],
//   3: [3],
//   4: [4],
//   5: [5],
//   6: [6]
// }

// [1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }

Array.prototype.groupBy = function(fn) {
  if (fn == null) fn = function(x) { return x }
  return this.reduce(function(groups, val) {
    var key = fn(val)
    groups[key] ? groups[key].push(val) : groups[key] = [val]
    return groups
  }, {})
}