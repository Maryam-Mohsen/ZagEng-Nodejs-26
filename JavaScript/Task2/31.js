function fibonacci(n) {
    let res = [0, 1];
    for (let i = 2; i < n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res.slice(0, n);
}
let n31 = Number(prompt("Enter Fibonacci terms:"));
console.log(fibonacci(n31));
