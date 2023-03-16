function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each

    if (elements == undefined || elements == null || elements == '' || typeof elements =='number') {
        return elements
    }else if (typeof elements == 'object' && !Array.isArray(elements)){
        Object.entries(elements).map((eachElement) => cb(eachElement[0],eachElement[1],elements))
        return ''
    } else {
        let arr = elements
        arr.map((eachElement) => eachElement = cb(eachElement, elements.indexOf(eachElement),elements))
    }
}
module.exports = each