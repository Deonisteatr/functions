function printInfo(name, age) {
    console.log (`Name: ${this.name}, Age: ${this.age}`);
}
const person = {
    name: "Denis",
    age: 54
};
printInfo.call(person);
