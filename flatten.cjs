function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

    let arr = []

    function nestedFlatten(arr){
        let b = []

        for (let each of arr){
            if (typeof each === 'object'){
                b.push(each[0])
            }
        }
        return b
    }

    function removeFlatten(arrayFlat){
        let newArr = []
        if (arrayFlat.length >= 1){
            for (let each of arrayFlat){
                if (typeof each !== 'object'){
                    newArr.push(each)
                }else{
                    let a = nestedFlatten(each)
                    newArr.push(a[0])

                }
            }
        }

        return newArr
    }

    for (let each of elements){

        if (typeof each == "object"){

            let arrIs = removeFlatten(each)

            for (let eachOf of arrIs){
                arr.push(eachOf)
            }
            
        }else{
            arr.push(each)
        }
        // console.log(each, typeof each)
    }

    return arr
}
module.exports = flatten
