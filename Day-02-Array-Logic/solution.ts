interface User
{
    name: string;
    age: number;
}

const user: User[] =
[
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 15 },
    { name: 'Charlie', age: 18 },
    { name: 'David', age: 12 },
    { name: 'Eve', age: 30 }
];

const result: string[] = user
    .filter(u => u.age >= 18)
    .map(u => u.name.toUpperCase());

console.log(result);