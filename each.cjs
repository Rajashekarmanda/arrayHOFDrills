function each(elements, cb) {
    if (elements == undefined || elements == null || elements == '' || typeof elements == 'number') {
        return elements
    } else {
        if (cb == undefined) {
            return `TypeError: iterate is not a function`
        } else {
            Array.isArray(elements) ? elements.map((eachItem) => cb(eachItem, elements.indexOf(eachItem), elements)) : //ternary operator
                Object.entries(elements).map(([key, val]) => cb(val, key))
        }
    }
}
module.exports = each