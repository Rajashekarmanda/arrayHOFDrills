function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test

    let arr = elements
    let result
    let sendOutputArr = []

    for (let each of arr){
        result = cb(each.name)
        if (result){
            sendOutputArr.push(each)
        }
    }

    return sendOutputArr
}
module.exports = filter