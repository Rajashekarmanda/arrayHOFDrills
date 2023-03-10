const each = require('../each.cjs')

const data = each([1,2,3,4,5,5],function cb(num) {
    switch (num) {
        case 1:
            return 'one'
            break;
        case 2:
            return 'two'
            break
        case 3:
            return 'three'
            break
        case 4:
            return 'four'
            break
        case 5:
            return 'five'
            break
    }
})

console.log(data)