const users = [
    { name: "Denis", age: 54},
    {name: "Liudmyla", age: 78},
    { name: "Lidiya", age: 17},
];
const newUsers = users.filter((user) => {
    return user.age >= 18;
}) ;
const nameUsers = users.map((user) => {return {name: user.name}});

console.log(newUsers);
console.log(nameUsers);
 