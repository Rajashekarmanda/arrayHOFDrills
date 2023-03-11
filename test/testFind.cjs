const find = require('../find.cjs')

const testCase1 = find([{name:"Rajashekar" },{name:"saikrishna"},{name:"hariprakash"}], function cb(name){
    if (name == "Ramu"){
        return true
    }else{
        return false
    }
})
console.log(testCase1)

const testCase2 = find([{name:"Rajashekar" },{name:"saikrishna"},{name:"hariprakash"}], function cb(name){
    if (name == "Rajashekar"){
        return true
    }else{
        return false
    }
})
console.log(testCase2)