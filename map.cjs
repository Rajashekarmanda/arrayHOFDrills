function map(elements, cb) {
    if (elements == '' || elements == undefined || elements == NaN || elements == null) {
        return []
    } else {
        if (typeof cb !== 'function' && typeof elements == 'object') {
            return Array.isArray(elements) ? elements : Object.values(elements)
        } else if (typeof cb !== 'function' && typeof elements == 'string') {
            return elements.split('')
        } else {
            let mappedArray = []
            for (let index in elements) {
                let responseCallBack = cb(elements[index], index)
                mappedArray.push(responseCallBack)
            } return mappedArray
        }
    }
}
module.exports = map