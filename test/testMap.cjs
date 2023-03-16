const map = require('../map.cjs')
// testCases
const dataMultiply = map([1,2,3,4,5,5],function cb(num){return num*num})

console.log(dataMultiply)

console.log(map(undefined));
console.log(map(null));
console.log(map([]));
console.log(map({}));
console.log(map(""));

console.log(map("Hell",undefined));

console.log(
    map("Hello", function (char) {
      return ["a", "e", "i", "o", "u"].includes(char) ? "sucess" : "failure";
    })
  );

console.log(map({ key: 10, val: 99 },undefined));
console.log(map([2,4,6,8],null))
console.log(map([2,4,6,8],undefined))
console.log(map({ one: 1, two: 2, three: 3 }, undefined));

console.log(
  map({ one: 1, two: 2, three: 3 }, function (val, index) {
    return val % 2 ==0 ? "even" : "odd";
  })
);