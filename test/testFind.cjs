const find = require('../find.cjs')

const testCase1 = find([1,1,3,4,5,6] ,function(num){
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
})
console.log(testCase1)
console.log(find([1, 2, 3, 4, 5],undefined));
console.log(find("Hello world",undefined));
console.log(find({ key: 10, val: 99 },undefined));
console.log(find(undefined));
console.log(find(null));
console.log(find([]));
console.log(find({}));
console.log(find(""));
console.log(find(123))
console.log(find("hello"));
console.log(find('12345'), function(word){      
    if (word=='4'){
        return true
    }else {
        return false
    }
})
