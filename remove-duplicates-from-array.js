function removeDuplicatesFromArray(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}

console.log(removeDuplicatesFromArray(array_with_duplicates));