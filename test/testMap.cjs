const map = require('../map.cjs')

const dataMultiply = map([1,2,3,4,5,5],function cb(num){return num*num})

console.log(dataMultiply)

const typeOfCheck = map([1,2.333,true,undefined,null,'hello world !',null],function cb(data) {
    return `${data} dataType is --> ${typeof data}`
})

console.log(typeOfCheck)