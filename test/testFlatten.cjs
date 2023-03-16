const flatten = require('../flatten.cjs')

const testCase1 = flatten([1, [2], [3, [[4]]]])

console.log(testCase1)

console.log(flatten(undefined));
console.log(flatten(null));
console.log(flatten([]));
console.log(flatten({}));
console.log(flatten(NaN));
console.log(flatten(""));
console.log(flatten("Hello"));
console.log(flatten({ key: 10, val: 99 }));

console.log(flatten([1,2,[3],[[7,[[8]]]]]))