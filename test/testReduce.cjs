const reduce = require('../reduce.cjs')

const dataAdding = reduce([10,10,10,10,100,1,2,3,4,5], function cb(accum,rem){return accum + rem}, 0)

console.log(dataAdding)

console.log(reduce(null));
console.log(reduce([]));
console.log(reduce({}));
console.log(reduce(NaN));
console.log(reduce(""));
console.log(reduce(undefined))
// console.log(reduce("Hello world"));
// console.log(reduce({ key: 10, val: 99 }));
