let flattenArray =[]
function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

    for(let eachElement in elements){
        if(Array.isArray(elements[eachElement])){
            flatten(elements[eachElement]);
        }
        else{
            flattenArray.push(elements[eachElement]);
        }
    }
    return flattenArray
}
module.exports = flatten
