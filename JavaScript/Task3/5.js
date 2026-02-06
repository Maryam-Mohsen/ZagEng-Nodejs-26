function getAdults(people) {
    let adults = people.filter(function(person) {
        return person.age >= 18;
    });
    
    let namesOnly = adults.map(function(person) {
        return person.name;
    });
    
    return namesOnly;
}

let peopleArr = [
    { name: "Ahmed", age: 23 },
    { name: "Sara", age: 16 },
    { name: "Mona", age: 19 }
];
console.log(getAdults(peopleArr));