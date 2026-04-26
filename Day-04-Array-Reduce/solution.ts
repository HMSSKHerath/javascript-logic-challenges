interface CartItem
{
    product: string;
    price: number;
    quantity: number;
}

interface CartSummary
{
    totalBill: number;
    totalItems: number;
}

const cartItems: CartItem[] = [
    { product: 'Laptop', price: 1200, quantity: 1 },
    { product: 'Mouse', price: 25, quantity: 2 },
    { product: 'Keyboard', price: 75, quantity: 1 },
    { product: 'Monitor', price: 300, quantity: 2 }
];

const cartSummary = cartItems.reduce((totalAccumulator: CartSummary, currentItem: CartItem): CartSummary => 
{   
    const { price, quantity } = currentItem;

    totalAccumulator.totalBill += price * quantity;
    totalAccumulator.totalItems += quantity;

    return totalAccumulator;
}, { totalBill: 0, totalItems: 0 })

console.log(cartSummary);

export {};