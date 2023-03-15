const each = require('../each.cjs')

const data = each([1,2,3,4,5,7],function cb(element, index) {

    console.log(`element ${element} index ${index}`)
    
})

console.log(each(undefined))
console.log(each(null))
console.log(each(''))
