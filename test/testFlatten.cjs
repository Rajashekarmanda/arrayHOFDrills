const flatten = require('../flatten.cjs')

const testCase1 = flatten([1, [2], [3, [[4]]]])

console.log(testCase1)