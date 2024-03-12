function calculate (a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    }
}
const obj = {
    a: 2,
    b: 3,
    operator: "+"
};
const arr = [2, 3, "+"];
const result = calculate.apply (obj, arr);
console.log(result);