function flatten(elements) {
    if (elements === null || elements == '' || elements === undefined) {
        return [];
    } else {
        let flattenArray = []
        for (let index = 0; index < elements.length; index++) {
            Array.isArray(elements[index]) ? (flattenArray = flattenArray.concat(flatten(elements[index])))
                : (flattenArray.push(elements[index]));         //ternary operator - concating arr & recession 
        } return flattenArray;
    }
}
module.exports = flatten;

