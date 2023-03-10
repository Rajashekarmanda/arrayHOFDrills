const filter = require('../filter.cjs')

const testCase1 = filter([{name:"Rajashekar" },{name:"saikrishna"},{name:"hariprakash"}], function cb(name){
    if (name == "Ramu"){
        return true
    }else{
        return false
    }
})

console.log(testCase1)

const testCase2 = filter([{name:"Rajashekar" },{name:"saikrishna"},{name:"hariprakash"}], function cb(name){
    if (name == "Rajashekar"){
        return true
    }else{
        return false
    }
})

console.log(testCase2)