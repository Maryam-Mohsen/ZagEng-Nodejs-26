function removeSpecial(str) {
    return str.replace(/[^\w\s-]/gi, '');
}

console.log(removeSpecial("Hi How are you!"));
console.log(removeSpecial("Are-u_coming?"));