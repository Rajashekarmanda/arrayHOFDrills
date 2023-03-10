function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.

    let arr = elements
    let result
    let sendOutput = false
    let count = 0

    for (let each of arr){
        result = cb(each.name)
        if (result){
            sendOutput = each
        }else{
            count++
        }
    }

    if (count !== elements.length){
        return sendOutput
    }else{
        return "not find any matches with array"
    }

}

module.exports = find
