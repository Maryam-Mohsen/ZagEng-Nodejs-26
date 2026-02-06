function getUnique(arr) {
    let uniqueArr = arr.filter(function(num) {
        return arr.indexOf(num) === arr.lastIndexOf(num);
    });
    return uniqueArr;
}

console.log(getUnique([1, 1, 1, 2, 1, 1]));
console.log(getUnique([2, 4, -2])); 