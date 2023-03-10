function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
    let newArr = elements
    
    for (let i=0; i<elements.length-1; i++){
        let accumulator = cb(newArr[0],newArr[1])
        newArr = newArr.slice(2,)
        newArr.unshift(accumulator)
    }
    // console.log(...newArr)
    return newArr[0]
}
module.exports = reduce
