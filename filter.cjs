function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
    if (!Array.isArray(elements) || elements == '' || elements == undefined || elements == null) {
        return []
    } else {
        let returnArray = []
        for (let each of elements) {
            let ouput = cb(each)
            if (ouput) {
                returnArray.push(each)
            } else {

            }
        }
        return returnArray
    }
}
module.exports = filter