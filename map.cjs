function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.

    if (elements == undefined || elements == null || elements == '') {
        return []
    } else if (typeof elements == 'object' && !Array.isArray(elements)) {
        if (elements.length < 1) {
            return []
        } else {
            return Object.values(elements)
        }
    } else if (typeof elements == 'string') {
        let resultStringArr = []
        for (let i = 0; i < elements.length; i++) { resultStringArr.push(elements[i]) } return resultStringArr
    } else {
        if (cb !== undefined && cb !== null) {
            let mapArray = []
            for (let eachElement of elements) {
                mapArray.push(cb(eachElement))
            }
            return mapArray
        }else{
            return elements
        }
    }
}
module.exports = map