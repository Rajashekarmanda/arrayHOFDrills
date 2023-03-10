const reduce = require('../reduce.cjs')

const data = reduce([10,10,10,10,100,1,2,3,4,5], function cb(accum,rem){return accum + rem}, 0)

console.log(data)