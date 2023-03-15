function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.

    if (!Array.isArray(elements) || elements == '' || elements == undefined || elements == null || elements == NaN ) {
        return undefined
    } else {
        let sendOutput
        for (let eachElement of elements) {
            resultFRomCB = cb(eachElement)
            if (resultFRomCB) {
                sendOutput = eachElement
                break
            }
        }
        return sendOutput

    }

}

module.exports = find
