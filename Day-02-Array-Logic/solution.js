const users =
[
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 15 },
    { name: 'Charlie', age: 18 },
    { name: 'David', age: 12 },
    { name: 'Eve', age: 30 }
]

// Step 1: Filter out users who are 18 or older
const adultUsers = users.filter(user => user.age >= 18);

const adultNames = adultUsers.map(user => user.name.toUpperCase());

console.log(adultNames);


// Step 2: Combine filtering and mapping in one step
const adultUsers2 = users
    .filter(user => user.age >= 18)
    .map(user => user.name.toUpperCase());

console.log(adultUsers2);