const each = require('../each.cjs')

each([1,2,3,4,5,7],function cb(element, index, array) {
    console.log(`element ${element} index ${index} in ${array} elements`)
})

each({one:1,two:2,three:3},function cb(val, key){
    console.log(`key - ${key} & value - ${val} in object`)
})

console.log(each(undefined))
console.log(each(null))
console.log(each(12))
console.log(each([1,2,3,4],undefined))
console.log(each({key:1,val:2},undefined))
console.log(each(""))
console.log(each(undefined,function(val,key,ele){console.log(key,val,ele)}))
