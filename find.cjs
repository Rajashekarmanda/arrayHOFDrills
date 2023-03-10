function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.

    let arr = elements
    let result
    let sendOutput = false

    for (let each of arr){
        result = cb(each.name)
        if (result){
            sendOutput = true
        }
    }
    return sendOutput
}

module.exports = find
find([{name:"Rajashekar" },{name:"saikrishna"},{name:"hariprakash"}], function cb(name){
    if (name == "hariprakash"){
        return true
    }else{
        return false
    }
})