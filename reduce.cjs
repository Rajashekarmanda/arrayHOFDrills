function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
    let reducedArray = elements
    
    for (let i=startingValue; i<elements.length-1; i++){
        let accumulator = cb(reducedArray[0],reducedArray[1])
        reducedArray = reducedArray.slice(2,)
        reducedArray.unshift(accumulator)
    }
    return reducedArray[0]
}
module.exports = reduce
