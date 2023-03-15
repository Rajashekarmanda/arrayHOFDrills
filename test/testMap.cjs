const map = require('../map.cjs')

const dataMultiply = map([1,2,3,4,5,5],function cb(num){return num*num})

console.log(dataMultiply)

console.log(map(undefined))
console.log(map(null))
console.log(map(''))
console.log(map([]))