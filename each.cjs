function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each

    let arr = elements
    let returnArr = arr.map((eachElement) => eachElement=cb(eachElement,elements.indexOf(eachElement)))
    
    return returnArr
}
module.exports = each