function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

    if (elements === null || elements == '' || elements === undefined) {
        return [];
    } else {
        let flattenArray = []
        for (let k = 0; k < elements.length; k++) {
            if (Array.isArray(elements[k])) {
                let arrElements = flatten(elements[k])
                flattenArray = flattenArray.concat(arrElements)
            } else {
                flattenArray.push(elements[k]);
            }
        }
        return flattenArray;
    }
}
module.exports = flatten;

