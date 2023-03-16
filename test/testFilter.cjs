const filter = require('../filter.cjs')

const testCase1 = filter([1,2,3,4,5,6,7,8], function cb(num){
    if (num % 2 ==0){
        return true
    }else{
        return false
    }
})
console.log(testCase1)

console.log(filter([1,2,3,4,5],undefined))
console.log(filter(undefined));
console.log(filter(null));
console.log(filter([]));
console.log(filter({}))
console.log(filter(NaN));
console.log(filter(""));
console.log(filter("ggg",undefined));
console.log(filter({ key: 0, val: 99 },undefined));

