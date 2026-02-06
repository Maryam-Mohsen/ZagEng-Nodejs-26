function largerLength(s1, s2) {
    return Math.max(s1.length, s2.length);
}
let st1 = prompt("Enter first string:");
let st2 = prompt("Enter second string:");
console.log(largerLength(st1, st2));
