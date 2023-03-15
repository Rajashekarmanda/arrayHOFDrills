function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
    
    if (elements == '' || elements == undefined || elements == null || elements == NaN) {
        return []
    } else if (Array.isArray(elements) && cb == undefined) {
        return elements
    } else if (typeof elements == 'string' && elements.length > 0) {
        return elements.split('')
    } else if (typeof elements == 'object' && !Array.isArray(elements)) {
        return Object.values(elements)
    } else {
        let performedArray = []
        for (let i = 0; i < elements.length; i++) {
            let filterData = cb(elements[i], elements.indexOf(elements[i]))
            if (filterData) {
                performedArray.push(elements[i])
            }
        }
        return performedArray
    }
}
module.exports = filter