function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
    let arr = elements
    let resultFRomCB
    let sendOutput = false
    let countOfFindings = 0

    for (let eachElement of arr){
        resultFRomCB = cb(eachElement.name)
        if (resultFRomCB){
            sendOutput = eachElement
        }else{
            countOfFindings++
        }
    }
    if (countOfFindings !== elements.length){
        return sendOutput
    }else{
        return undefined
    }

}

module.exports = find
