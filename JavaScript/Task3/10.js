function modifyNumbers(nums) {
    return nums.map(function(num) {
        if (num % 2 === 0) {
            return num + 1;
        } else {
            return num - 1;
        }
    });
}

console.log(modifyNumbers([73, 221, 52, 214]));