function convertToUpperCase(arr) {
    let result = arr.map(function(word) {
        return word.toUpperCase();
    });
    return result;
}

const names = ["ahmed", "sara"];
console.log(convertToUpperCase(names));