function isSameCase(str) {
    return str === str.toLowerCase() || str === str.toUpperCase();
}
let str34 = prompt("Enter string to check case:");
console.log(isSameCase(str34));
