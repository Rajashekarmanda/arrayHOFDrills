function filter(elements, cb) {
    if (elements == '' || elements==undefined && typeof elements != 'object' && typeof elements!='string') {
        return []
    } else {
        if (typeof cb != 'function'){
            let filterArr = []
            for (let index in elements) { filterArr.push(elements[index]) } return filterArr
        }let filteredArray = []
        elements = (typeof elements == 'object') ? elements : elements.split('')
        for (let index in elements) { let responseCallBack = cb ( elements[index], index, elements )
            responseCallBack ? filteredArray.push(elements[index]) : ""                     // ternary operator
        }
        return filteredArray
    }
}
module.exports = filter