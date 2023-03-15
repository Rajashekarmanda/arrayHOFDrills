const each = require('../each.cjs')

each([1,2,3,4,5,7],function cb(element, index,array) {

    console.log(`element ${element} index ${index}`)
})

each({one:1,two:2,three:3},function cb(key,val,object){
    console.log(`key - ${key} & value - ${val}`)
})

console.log(each(undefined))
console.log(each(null))
console.log(each(''))


// console.log(Object.entries({one:1,two:2,three:3}))