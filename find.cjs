function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.

    if (elements == '' || elements == undefined || elements == null || elements == NaN) {
        return undefined
    } else if (!Array.isArray(elements) || typeof elements == 'string') {
        if (cb == undefined) {
            if (typeof elements == 'object') {
                return Object.values(elements)[0]
            } else {
                return elements[0]
            }
        }
    } else {
        if (elements.length < 1) {
            return []
        } else if (cb == undefined) {
            return elements[0]
        } else {
            let sendOutput = ''
            for (let eachElement of elements) {
                let resultFRomCB = cb(eachElement)
                if (resultFRomCB) {
                    sendOutput = eachElement
                    break
                }
            }
            return sendOutput
        }
    }
}
module.exports = find

