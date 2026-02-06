function getAverage(nums) {
    let totalSum = nums.reduce(function(acc, current) {
        return acc + current;
    }, 0);
    
    let average = totalSum / nums.length;
    return average;
}

console.log(getAverage([10, 20, 30]));