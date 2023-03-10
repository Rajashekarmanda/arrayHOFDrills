const flatten = require('../flatten.cjs')

const testCase1 = flatten([1, [2], [3, [[4]]]])

console.log(testCase1)

const testCase2 = flatten([1,[2],[3,[[4]]],[5],6,[7,8]])

console.log(testCase2)