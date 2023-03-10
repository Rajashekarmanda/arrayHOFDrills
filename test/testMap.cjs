const map = require('../map.cjs')

const data = map([1,2,3,4,5,5],function cb(num){return num*num})

console.log(data)