interface User
{
    name: string;
    age: number;
}

const users: User[] =
[
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 15 },
    { name: 'Charlie', age: 18 },
    { name: 'David', age: 12 },
    { name: 'Eve', age: 30 }
];

const adultUserNames: string[] = users
    .filter(user => user.age >= 18)
    .map(({name}) => name.toUpperCase());

console.log(adultUserNames);

export {};