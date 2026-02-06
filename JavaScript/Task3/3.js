function filterStrings(arr) {
    let filteredArr = arr.filter(function(word) {
        return word.length > 4;
    });
    return filteredArr;
}

let words = ["hi", "hello", "welcome"];
console.log(filterStrings(words));