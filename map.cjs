function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.

    let newArr = []
    for (let eachEl of elements ) {
        newArr.push(cb(eachEl))
    }
    return newArr
}
module.exports = map