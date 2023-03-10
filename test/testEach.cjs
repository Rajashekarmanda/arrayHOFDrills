const each = require('../each.cjs')

const data = each([1,2,3,4,5,7],function cb(ele, index) {

    console.log(`${ele} index is ${index}`)
    
})
