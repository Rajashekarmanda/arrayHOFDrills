function reduce(elements, cb, startingValue) {
    if (!Array.isArray(elements) || typeof cb !== 'function') {
        return undefined;
    }
    let index = 0;
    if (startingValue === null) {
        startingValue = elements[0];
        index++;
    }
    for (index; index < elements.length; index++) {
        startingValue = cb(startingValue, elements[index])
    }
    return startingValue;
}
module.exports = reduce
