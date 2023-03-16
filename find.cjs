function find(elements, cb) {
    if (elements == '' || elements == undefined || elements == null) {
        return undefined
    } else {
        if (typeof cb != 'function') {
            let firstElementMatch = Array.isArray(elements) ? elements[0] : Object.values(elements)[0]  //ternary operator
            return firstElementMatch
        } for (let index = 0; index < elements.length; index++) {
            let responseCallBack = cb(elements[index], index)
            if (responseCallBack) {
                return elements[index]
            }
        }
    }
}
module.exports = find

