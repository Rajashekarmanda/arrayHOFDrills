function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
    let arr = elements
    let resultCallBack
    let sendOutputArr = []

    for (let eachElement of arr){
        resultCallBack = cb(eachElement.name)
        if (resultCallBack){
            sendOutputArr.push(eachElement)
        }
    }

    return sendOutputArr
}
module.exports = filter