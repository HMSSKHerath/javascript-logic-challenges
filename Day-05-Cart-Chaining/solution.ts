interface MyCart
{
    id: number;
    name: string;
    price: number;
    isAdded: boolean; 
}

const myCart: MyCart[] = [
    { id: 1, name: 'Laptop', price: 1200, isAdded: true },
    { id: 2, name: 'Mouse', price: 25, isAdded: false },
    { id: 3, name: 'Keyboard', price: 50, isAdded: true },
    { id: 4, name: 'Monitor', price: 300, isAdded: true },
    { id: 5, name: 'USB Cable', price: 10, isAdded: false }
];

const totalBill = myCart 
    .filter(({isAdded}) => isAdded)
    .map(({price}) => price)
    .reduce((total:number, price:number) => total + price , 0);

console.log(totalBill);

export {};