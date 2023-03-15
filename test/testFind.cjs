const find = require('../find.cjs')

const testCase1 = find([1,1,3,4,5,6] ,function(num){
    if (num % 2 ==0){
        return true
    }else{
        return false
    }
})
console.log(testCase1)
console.log(find(undefined))
console.log(find(null))
console.log(find(''))
console.log(find([]))

